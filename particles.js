// ══════════════════════════════════════════
//  particles.js — Animated canvas background
// ══════════════════════════════════════════

(function () {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W,
    H,
    particles = [],
    mouse = { x: -999, y: -999 };

  const COLORS = [
    "rgba(74,222,128,",
    "rgba(56,189,248,",
    "rgba(74,222,128,",
    "rgba(255,255,255,",
  ];
  const SHAPES = ["circle", "circle", "circle", "triangle", "cross", "ring"];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 20;
      this.size = Math.random() * 3.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = -(Math.random() * 0.5 + 0.15);
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = Math.random() * 0.5 + 0.05;
      this.alphaDir = (Math.random() - 0.5) * 0.003;
      this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      this.angle = Math.random() * Math.PI * 2;
      this.angleSpeed = (Math.random() - 0.5) * 0.015;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.03 + 0.01;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.angle += this.angleSpeed;
      this.pulse += this.pulseSpeed;
      this.alpha += this.alphaDir;
      if (this.alpha > 0.55 || this.alpha < 0.03) this.alphaDir *= -1;
      const dx = this.x - mouse.x,
        dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120;
        this.x += (dx / dist) * force * 1.5;
        this.y += (dy / dist) * force * 1.5;
      }
      if (this.y < -30 || this.x < -30 || this.x > W + 30) this.reset(false);
    }
    draw() {
      const s = this.size + Math.sin(this.pulse) * 0.6;
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.strokeStyle = this.color + "1)";
      ctx.fillStyle = this.color + "0.4)";
      ctx.lineWidth = 0.8;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      switch (this.shape) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, s, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          break;
        case "ring":
          ctx.beginPath();
          ctx.arc(0, 0, s + 1, 0, Math.PI * 2);
          ctx.stroke();
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -s * 1.2);
          ctx.lineTo(s * 1.0, s * 0.8);
          ctx.lineTo(-s * 1.0, s * 0.8);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          break;
        case "cross":
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(-s, 0);
          ctx.lineTo(s, 0);
          ctx.moveTo(0, -s);
          ctx.lineTo(0, s);
          ctx.stroke();
          break;
      }
      ctx.restore();
    }
  }

  // Floating geometric shapes (larger, background)
  class GeoShape {
    constructor() {
      this.init();
    }
    init() {
      this.x = Math.random() * (W || 1200);
      this.y = Math.random() * (H || 800);
      this.size = Math.random() * 60 + 20;
      this.type = ["hexagon", "diamond", "square"][
        Math.floor(Math.random() * 3)
      ];
      this.color =
        Math.random() > 0.5 ? "rgba(74,222,128," : "rgba(56,189,248,";
      this.alpha = Math.random() * 0.06 + 0.01;
      this.alphaDir = (Math.random() - 0.5) * 0.0005;
      this.angle = Math.random() * Math.PI * 2;
      this.angleSpeed = (Math.random() - 0.5) * 0.003;
      this.floatX = (Math.random() - 0.5) * 0.3;
      this.floatY = (Math.random() - 0.5) * 0.2;
    }
    update() {
      this.x += this.floatX;
      this.y += this.floatY;
      this.angle += this.angleSpeed;
      this.alpha += this.alphaDir;
      if (this.alpha > 0.08 || this.alpha < 0.005) this.alphaDir *= -1;
      if (
        this.x < -100 ||
        this.x > W + 100 ||
        this.y < -100 ||
        this.y > H + 100
      )
        this.init();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.strokeStyle = this.color + "1)";
      ctx.lineWidth = 1;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      const s = this.size;
      ctx.beginPath();
      if (this.type === "hexagon") {
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i;
          i === 0
            ? ctx.moveTo(s * Math.cos(a), s * Math.sin(a))
            : ctx.lineTo(s * Math.cos(a), s * Math.sin(a));
        }
        ctx.closePath();
      } else if (this.type === "diamond") {
        ctx.moveTo(0, -s);
        ctx.lineTo(s * 0.6, 0);
        ctx.lineTo(0, s);
        ctx.lineTo(-s * 0.6, 0);
        ctx.closePath();
      } else {
        ctx.rect(-s / 2, -s / 2, s, s);
      }
      ctx.stroke();
      ctx.restore();
    }
  }

  // Connection lines between near particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 110) * 0.12;
          ctx.strokeStyle = "rgba(74,222,128,1)";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  let geoShapes = [];

  function init() {
    resize();
    const count = Math.min(Math.floor((W * H) / 14000), 90);
    particles = Array.from({ length: count }, () => new Particle());
    geoShapes = Array.from({ length: 8 }, () => new GeoShape());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    geoShapes.forEach((g) => {
      g.update();
      g.draw();
    });
    drawConnections();
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }

  window.addEventListener("resize", () => {
    resize();
  });
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseleave", () => {
    mouse.x = -999;
    mouse.y = -999;
  });

  init();
  loop();
})();

// ══════════════════════════════════════════
//  Scroll reveal — IntersectionObserver
// ══════════════════════════════════════════
(function () {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  function initReveal() {
    // جميع أنواع الـ reveal classes
    document
      .querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale, .fade-up",
      )
      .forEach((el) => obs.observe(el));
  }

  // إذا كان DOM جاهزاً بالفعل (loaded script)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveal);
  } else {
    initReveal();
  }
})();

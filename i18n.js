// ══════════════════════════════════════════
//  i18n.js — Bilingual EN / AR
// ══════════════════════════════════════════

const TRANSLATIONS = {
  en: {
    // NAV
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_blog: "Blog",
    nav_hire: "Hire Me",

    // FOOTER
    footer_role: "Web Developer",
    footer_rights: "© 2025 Mohamed Khalifa. All rights reserved.",

    // INDEX
    hero_badge: "Available for new projects",
    hero_h1_1: "Mohamed",
    hero_role: "Web Developer",
    hero_role_1: "Web Developer",
    hero_role_2: "Front-End Developer",
    hero_role_3: "WordPress Developer",
    hero_role_4: "E-Commerce Developer",
    hero_role_5: "UI/UX Designer",
    hero_desc:
      "I design and develop responsive websites and web applications with a strong focus on usability, performance, and business impact.",
    hero_btn1: "View My Work →",
    hero_btn2: "Let's Talk",
    hero_stat1_n: "50+",
    hero_stat1_l: "Projects Delivered",
    hero_stat2_n: "5+",
    hero_stat2_l: "Years Experience",
    hero_stat3_n: "100%",
    hero_stat3_l: "Client Satisfaction",
    services_label: "What I Do",
    services_title: "Services I Offer",
    services_sub:
      "From sleek landing pages to complex web apps — I build digital experiences that make an impact.",
    svc1_title: "Website Development",
    svc1_desc:
      "Responsive, pixel-perfect websites built with semantic HTML, modern CSS, and clean JavaScript for maximum performance.",
    svc2_title: "Web Applications",
    svc2_desc:
      "Full-stack web applications with robust back-end logic, databases, and seamless user experiences.",
    svc3_title: "UI/UX Design",
    svc3_desc:
      "Intuitive interfaces designed with purpose — wireframes, prototypes, and polished final designs that convert.",
    svc4_title: "Performance Optimization",
    svc4_desc:
      "Speed audits, code optimization, and deployment strategies to ensure your site runs at peak performance.",
    featured_label: "Featured Work",
    featured_title: "Recent Projects",
    featured_sub:
      "A selection of projects that showcase my range — from elegant frontends to full-stack solutions.",
    proj1_title: "E-Commerce Platform",
    proj1_desc:
      "A full-featured online store with product management, cart, and secure checkout integration.",
    proj2_title: "Corporate Dashboard",
    proj2_desc:
      "Real-time analytics dashboard with role-based access, dynamic charts, and export functionality.",
    proj3_title: "Landing Page Suite",
    proj3_desc:
      "High-converting landing pages with A/B-tested layouts and smooth animations for SaaS clients.",
    view_proj: "View Project →",
    see_all: "See All Projects →",
    cta_h: "Have a project in mind?",
    cta_p:
      "Let's build something exceptional together. I'm available for freelance work and collaboration.",
    cta_btn1: "Start a Project",
    cta_btn2: "💬 WhatsApp Me",

    // ABOUT
    about_label: "About Me",
    about_h1_1: "The person behind",
    about_h1_2: "the code.",
    about_sub:
      "Front-End specialist with practical industry and freelance experience.",
    bio_h2: "Hi, I'm Mohamed Khalifa",
    bio_p1:
      "I am a Web Developer with solid front-end experience in building websites and web applications that translate design mockups into reliable, production-ready interfaces.",
    bio_p2:
      "My work focuses on writing clean, scalable front-end code, styling reusable UI components, and delivering user-centered solutions that meet both business goals and technical requirements.",
    bio_p3:
      "Alongside development, I collaborate effectively with design and content teams, review implementation quality, and support deployment readiness to ensure smooth delivery.",
    bio_loc_l: "Location",
    bio_loc_v: "Cairo, Egypt 🇪🇬",
    bio_phone_l: "Phone",
    bio_email_l: "Email",
    bio_avail_l: "Availability",
    bio_avail_v: "✓ Open to Projects",
    btn_hire: "Hire Me",
    btn_cv: "Download CV ↓",
    skills_label: "Technical Skills",
    skills_title: "My Toolkit",
    skills_prof: "Proficiency Level",
    skills_tools: "Technologies & Tools",
    exp_label: "Experience",
    exp_title: "Experience & Career Path",
    job1_y: "2021 — Present",
    job1_t: "Web Developer",
    job1_c: "Manarat Co",
    job1_d:
      "Contributed to the company's digital presence by designing, developing, and maintaining responsive, user-friendly websites in close collaboration with design and content teams.",
    job2_y: "2018 — 2021",
    job2_t: "Freelancer Web Developer",
    job2_c: "Hsoub",
    job2_d:
      "Designed and developed tailored websites aligned with client goals, managed communication and requirements, and delivered projects within agreed timelines.",
    job3_y: "2016 — 2018",
    job3_t: "GIS Specialist",
    job3_c: "Orascom Construction Co",
    job3_d:
      "Collected, analyzed, and visualized spatial data, built maps and geospatial outputs, and worked with cross-functional teams to support project delivery.",
    job4_y: "2011 — 2014",
    job4_t: "Bachelor's Degree in GIS",
    job4_c: "Assiut University",
    job4_d:
      "Earned a Bachelor's degree in Geographic Information Systems, building strong analytical and technical foundations later applied in web development.",
    cred_label: "Credentials",
    cred_title: "Education & Languages",
    edu_title: "Education",
    edu1_t: "Bachelor's Degree in Geographic Information Systems",
    edu1_s: "Assiut University",
    edu2_t: "Egfwd Web Development Scholarship",
    edu2_s: "Udacity Platform",
    edu3_t: "Advanced Web Development Learning Path",
    edu3_s: "Lynda Platform",
    lang_title: "Languages",
    lang1: "Arabic",
    lang2: "English",
    lang3: "French",

    // SERVICES
    svcs_label: "What I Offer",
    svcs_h1_1: "Services built for",
    svcs_h1_2: "real results.",
    svcs_sub:
      "From a single landing page to a full web platform — I deliver quality solutions tailored to your goals.",
    svcx1_t: "Website Design & Development",
    svcx1_d:
      "Professional, responsive websites tailored to your business goals and brand identity.",
    svcx1_f1: "Fully responsive across all devices",
    svcx1_f2: "HTML5 / CSS3 / JavaScript development",
    svcx1_f3: "React / Tailwind / Bootstrap solutions",
    svcx1_f4: "Corporate websites and high-converting landing pages",
    svcx2_t: "WordPress Development",
    svcx2_d:
      "Scalable WordPress solutions with modern page builders, localization, and performance best practices.",
    svcx2_f1: "Elementor / WPBakery / Gutenberg",
    svcx2_f2: "Professional theme customization",
    svcx2_f3: "Multilingual websites with RTL support",
    svcx2_f4: "Speed, security, and hardening optimization",
    svcx3_t: "E-Commerce Development",
    svcx3_d:
      "Build online stores designed to increase conversion rates and simplify operations.",
    svcx3_f1: "WooCommerce, Shopify, Salla, Zid",
    svcx3_f2: "Payment gateways: PayPal, Stripe, Mada",
    svcx3_f3: "Checkout UX optimized for higher sales",
    svcx3_f4: "Shipping and tax setup",
    svcx4_t: "Automation & Programming Solutions",
    svcx4_d:
      "Custom automation scripts and integrations that reduce manual work and improve workflow efficiency.",
    svcx4_f1: "Python & JavaScript custom scripts",
    svcx4_f2: "Automating repetitive tasks",
    svcx4_f3: "API integrations between systems",
    svcx4_f4: "Workflow optimization for operations",
    svcx5_t: "UI/UX Design",
    svcx5_d:
      "Elegant, conversion-focused interfaces that translate seamlessly from design to production code.",
    svcx5_f1: "Figma and Adobe XD design workflows",
    svcx5_f2: "Pixel-perfect implementation",
    svcx5_f3: "User journey and interaction optimization",
    svcx5_f4: "Visual consistency across all pages",
    svcx6_t: "Performance & SEO Optimization",
    svcx6_d:
      "Technical optimization to boost speed, search visibility, and overall user experience.",
    svcx6_f1: "Core Web Vitals optimization",
    svcx6_f2: "On-page SEO implementation",
    svcx6_f3: "Site architecture and UX enhancement",
    svcx6_f4: "Google Analytics & Search Console setup",
    svcx7_t: "Technical Support & Maintenance",
    svcx7_d:
      "Reliable post-launch support to keep your website secure, updated, and running smoothly.",
    svcx7_f1: "Scheduled website maintenance",
    svcx7_f2: "Fast issue troubleshooting and fixes",
    svcx7_f3: "Continuous updates and improvements",
    svcx7_f4: "Ongoing technical support",
    svcx8_t: "Deployment & Hosting Setup",
    svcx8_d:
      "Complete deployment and hosting configuration to launch your project securely and reliably.",
    svcx8_f1: "Domain and hosting setup",
    svcx8_f2: "SSL, backups, and server hardening",
    svcx8_f3: "Migration and go-live support",
    req_service_btn: "Request Service",
    all_services_btn: "All Services →",
    wa_req_prefix: "Hi, I would like to request this service:",
    wa_req_suffix: "Please share the details and next steps.",
    why_label: "Why Choose Me?",
    why_title: "Why Clients Work With Me",
    why_sub:
      "Execution quality, clear communication, and measurable business value in every project.",
    why1: "Strong market experience in Saudi Arabia and the Gulf region",
    why2: "Professional delivery and commitment to deadlines",
    why3: "Tailored solutions for each client's unique needs",
    why4: "Continuous support after project delivery",
    why5: "Attention to detail and user experience quality",
    why6: "Transparent communication throughout all project stages",
    process_label: "Process",
    process_title: "How I Work",
    process_sub:
      "A clear, collaborative process from first conversation to final launch.",
    step1_t: "Discovery",
    step1_d:
      "We discuss your goals, audience, and requirements in detail to align on vision.",
    step2_t: "Planning",
    step2_d:
      "Sitemap, wireframes, and a clear project roadmap with milestones and deadlines.",
    step3_t: "Design & Build",
    step3_d:
      "Iterative design and development with regular check-ins and your feedback integrated.",
    step4_t: "Launch & Support",
    step4_d:
      "Thorough testing, deployment, and post-launch support to ensure everything runs perfectly.",
    pricing_label: "Pricing",
    pricing_title: "Simple, Transparent Plans",
    pricing_sub:
      "Starting points for common project types. Every project is unique — contact me for a custom quote.",
    plan1_tier: "Starter",
    plan2_tier: "Professional",
    plan3_tier: "Enterprise",
    plan_popular: "Most Popular",
    plan1_desc:
      "Perfect for small businesses needing a clean, professional online presence.",
    plan2_desc:
      "For growing businesses that need a powerful, feature-rich web solution.",
    plan3_desc:
      "For complex platforms, web apps, and long-term development partnerships.",
    btn_quote: "Get a Quote",
    btn_talk: "Let's Talk",

    // PORTFOLIO
    port_label: "My Work",
    port_h1_1: "Projects that speak",
    port_h1_2: "for themselves.",
    port_sub:
      "A curated selection of real-world projects — each one built to solve a specific problem beautifully.",
    filter_all: "All Projects",
    filter_fe: "Frontend",
    filter_be: "Backend",
    filter_fs: "Full-Stack",
    filter_ec: "E-Commerce",
    live_demo: "Live Demo ↗",
    github: "GitHub",
    port_cta_label: "Ready to build?",
    port_cta_title: "Let's create your next project",
    port_cta_sub:
      "Have a project idea? I'd love to hear about it and discuss how we can bring it to life.",
    btn_convo: "Start a Conversation →",

    // BLOG
    blog_label: "Insights & Tutorials",
    blog_h1_1: "Thoughts on",
    blog_h1_2: "web development.",
    blog_sub:
      "Articles, tutorials, and insights on building modern web experiences.",
    blog_read: "Read Article →",
    blog_min: "min read",
    blog_search: "Search articles...",
    blog_all: "All",

    // CONTACT
    contact_label: "Get In Touch",
    contact_h1_1: "Let's build something",
    contact_h1_2: "amazing together.",
    contact_sub:
      "Have a project in mind or just want to chat? I'm always open to new opportunities.",
    contact_details: "Contact Details",
    contact_p:
      "Reach out through any of these channels — I typically respond within a few hours.",
    ci_phone_l: "Phone / Call",
    ci_email_l: "Email",
    ci_loc_l: "Location",
    ci_loc_v: "Cairo, Egypt 🇪🇬",
    ci_time_l: "Response Time",
    ci_time_v: "Usually within 2–4 hours",
    wa_btn: "Chat on WhatsApp",
    form_title: "Send Me a Message",
    form_sub:
      "Fill in the details below and I'll get back to you as soon as possible.",
    lbl_fname: "First Name *",
    lbl_lname: "Last Name *",
    lbl_email: "Email Address *",
    lbl_phone: "Phone Number",
    lbl_service: "Service Interested In",
    lbl_budget: "Project Budget",
    lbl_message: "Your Message *",
    ph_fname: "John",
    ph_lname: "Doe",
    ph_email: "john@example.com",
    ph_phone: "+966 5XX XXX XXX",
    ph_message: "Tell me about your project, goals, timeline...",
    sel_service: "— Select a service —",
    sel_budget: "— Select a budget range —",
    btn_send: "Send Message →",
    success_h: "Message Sent!",
    success_p:
      "Thank you for reaching out. I'll get back to you within 2–4 hours.",
    faq_label: "FAQ",
    faq_title: "Common Questions",
    faq1_q: "How long does a typical website project take?",
    faq1_a:
      "It depends on the scope. A simple website takes 1–2 weeks, while a full web application can take 4–8 weeks. I'll give you a precise timeline after our initial discussion.",
    faq2_q: "Do you work with clients outside Saudi Arabia?",
    faq2_a:
      "Absolutely! I work with clients from across the MENA region and internationally. All communication and project management is done remotely and efficiently.",
    faq3_q: "What is your payment structure?",
    faq3_a:
      "I typically work with a 50% upfront deposit to begin the project, with the remaining 50% due upon completion. For larger projects, we can arrange milestone-based payments.",
    faq4_q: "Will I own the website after completion?",
    faq4_a:
      "Yes, 100%. Upon final payment, you receive full ownership of all source code, assets, and intellectual property.",
    faq5_q: "Do you provide hosting and domain services?",
    faq5_a:
      "I can recommend and help set up hosting and domain services. I'll guide you through options that best fit your budget and technical requirements.",
  },

  ar: {
    // NAV
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_services: "خدماتي",
    nav_portfolio: "أعمالي",
    nav_blog: "المدونة",
    nav_hire: "تواصل معي",

    // FOOTER
    footer_role: "مطور ويب",
    footer_rights: "© 2025 محمد خليفة. جميع الحقوق محفوظة.",

    // INDEX
    hero_badge: "متاح لمشاريع جديدة",
    hero_h1_1: "محمد",
    hero_role: "مطور ويب",
    hero_role_1: "مطور ويب",
    hero_role_2: "مطور واجهات أمامية",
    hero_role_3: "مطور WordPress",
    hero_role_4: "مطور متاجر إلكترونية",
    hero_role_5: "مصمم UI/UX",
    hero_desc:
      "أصمم وأطور مواقع وتطبيقات ويب متجاوبة مع تركيز قوي على سهولة الاستخدام والأداء وتحقيق نتائج عملية للأعمال.",
    hero_btn1: "← شاهد أعمالي",
    hero_btn2: "تواصل معي",
    hero_stat1_n: "+50",
    hero_stat1_l: "مشروع منجز",
    hero_stat2_n: "+5",
    hero_stat2_l: "سنوات خبرة",
    hero_stat3_n: "100%",
    hero_stat3_l: "رضا العملاء",
    services_label: "ما أقدمه",
    services_title: "خدماتي",
    services_sub:
      "من الصفحات التسويقية إلى تطبيقات الويب المعقدة — أبني تجارب رقمية تحدث فرقاً حقيقياً.",
    svc1_title: "تطوير المواقع",
    svc1_desc:
      "مواقع متجاوبة ومتقنة مبنية بـ HTML دلالي و CSS حديث وجافاسكريبت نظيف لأقصى أداء.",
    svc2_title: "تطبيقات الويب",
    svc2_desc:
      "تطبيقات ويب متكاملة بمنطق خادم متين وقواعد بيانات وتجارب مستخدم سلسة.",
    svc3_title: "تصميم UI/UX",
    svc3_desc:
      "واجهات حدسية مصممة بهدف — إطارات سلكية ونماذج أولية وتصاميم نهائية مصقولة تحوّل الزوار.",
    svc4_title: "تحسين الأداء",
    svc4_desc:
      "تدقيق السرعة وتحسين الكود واستراتيجيات النشر لضمان عمل موقعك بأعلى كفاءة.",
    featured_label: "أبرز الأعمال",
    featured_title: "أحدث المشاريع",
    featured_sub:
      "مجموعة مختارة من المشاريع تعكس تنوعي — من الواجهات الأمامية الأنيقة إلى الحلول المتكاملة.",
    proj1_title: "منصة التجارة الإلكترونية",
    proj1_desc:
      "متجر إلكتروني متكامل بإدارة المنتجات والسلة وتكامل الدفع الآمن.",
    proj2_title: "لوحة تحكم مؤسسية",
    proj2_desc:
      "لوحة تحليلات في الوقت الفعلي مع صلاحيات متعددة ورسوم بيانية وتصدير التقارير.",
    proj3_title: "مجموعة صفحات هبوط",
    proj3_desc:
      "صفحات هبوط عالية التحويل بتخطيطات مختبرة ورسوم متحركة سلسة لعملاء SaaS.",
    view_proj: "← عرض المشروع",
    see_all: "← مشاهدة كل الأعمال",
    cta_h: "لديك مشروع في ذهنك؟",
    cta_p: "لنبني شيئاً استثنائياً معاً. أنا متاح للعمل الحر والتعاون.",
    cta_btn1: "ابدأ مشروعك",
    cta_btn2: "💬 واتساب",

    // ABOUT
    about_label: "من أنا",
    about_h1_1: "الشخص خلف",
    about_h1_2: "الكود.",
    about_sub: "متخصص واجهات أمامية بخبرة عملية في الشركات والعمل الحر.",
    bio_h2: "مرحباً، أنا محمد خليفة",
    bio_p1:
      "أنا مطور ويب بخبرة قوية في تطوير الواجهات الأمامية وبناء المواقع وتطبيقات الويب بما يحول التصاميم إلى واجهات عملية جاهزة للإنتاج.",
    bio_p2:
      "أركز على كتابة كود نظيف وقابل للتوسع، وبناء مكونات واجهات منظمة، وتقديم حلول توازن بين متطلبات المستخدم وأهداف العمل.",
    bio_p3:
      "أعمل بتعاون مباشر مع فرق التصميم والمحتوى، وأهتم بجودة التنفيذ ودعم جاهزية الإطلاق لضمان تسليم احترافي ومستقر.",
    bio_loc_l: "الموقع",
    bio_loc_v: "القاهرة، مصر 🇪🇬",
    bio_phone_l: "الهاتف",
    bio_email_l: "البريد الإلكتروني",
    bio_avail_l: "التوفر",
    bio_avail_v: "✓ متاح لمشاريع جديدة",
    btn_hire: "تواصل معي",
    btn_cv: "تحميل السيرة الذاتية ↓",
    skills_label: "المهارات التقنية",
    skills_title: "أدواتي",
    skills_prof: "مستوى الإتقان",
    skills_tools: "التقنيات والأدوات",
    exp_label: "الخبرة",
    exp_title: "الخبرة والمسار المهني",
    job1_y: "2021 — الآن",
    job1_t: "مطور ويب",
    job1_c: "شركة منارات",
    job1_d:
      "ساهمت في تعزيز الحضور الرقمي للشركة عبر تصميم وتطوير وصيانة مواقع متجاوبة وسهلة الاستخدام بالتعاون مع فرق التصميم والمحتوى.",
    job2_y: "2018 — 2021",
    job2_t: "مطور ويب مستقل",
    job2_c: "حسوب",
    job2_d:
      "قمت بتصميم وتطوير مواقع مخصصة وفق أهداف العملاء، وإدارة التواصل وجمع المتطلبات وتسليم المشاريع ضمن الجداول الزمنية المتفق عليها.",
    job3_y: "2016 — 2018",
    job3_t: "أخصائي نظم معلومات جغرافية",
    job3_c: "أوراسكوم للإنشاءات",
    job3_d:
      "توليت جمع وتحليل وعرض البيانات المكانية، وإعداد الخرائط والمخرجات الجغرافية لدعم فرق العمل المختلفة وتحقيق أهداف المشاريع.",
    job4_y: "2011 — 2014",
    job4_t: "بكالوريوس نظم معلومات جغرافية",
    job4_c: "جامعة أسيوط",
    job4_d:
      "حصلت على درجة البكالوريوس في نظم المعلومات الجغرافية، مما كوّن أساساً تحليلياً وتقنياً قوياً دعمني في مساري بتطوير الويب.",
    cred_label: "المؤهلات",
    cred_title: "التعليم واللغات",
    edu_title: "التعليم",
    edu1_t: "بكالوريوس نظم المعلومات الجغرافية",
    edu1_s: "جامعة أسيوط",
    edu2_t: "منحة Egfwd لتعلم تطوير الويب",
    edu2_s: "منصة Udacity",
    edu3_t: "مسار متقدم لتعلم تطوير الويب",
    edu3_s: "منصة Lynda",
    lang_title: "اللغات",
    lang1: "العربية",
    lang2: "الإنجليزية",
    lang3: "الفرنسية",

    // SERVICES
    svcs_label: "ما أقدمه",
    svcs_h1_1: "خدمات مبنية لتحقيق",
    svcs_h1_2: "نتائج حقيقية.",
    svcs_sub:
      "من صفحة هبوط واحدة إلى منصة ويب متكاملة — أقدم حلولاً عالية الجودة مصممة لأهدافك.",
    svcx1_t: "تصميم وتطوير المواقع",
    svcx1_d:
      "تصميم وتطوير مواقع احترافية متجاوبة مع جميع الأجهزة وبما يتوافق مع هوية وأهداف نشاطك.",
    svcx1_f1: "تصميم متجاوب لجميع الشاشات",
    svcx1_f2: "تطوير باستخدام HTML5 / CSS3 / JavaScript",
    svcx1_f3: "حلول React / Tailwind / Bootstrap",
    svcx1_f4: "مواقع الشركات وصفحات هبوط عالية التحويل",
    svcx2_t: "تطوير مواقع WordPress",
    svcx2_d:
      "تنفيذ مواقع ووردبريس باحترافية باستخدام أدوات بناء حديثة مع دعم الترجمة والأداء.",
    svcx2_f1: "Elementor / WPBakery / Gutenberg",
    svcx2_f2: "تخصيص القوالب الجاهزة بشكل احترافي",
    svcx2_f3: "إنشاء مواقع متعددة اللغات مع دعم RTL",
    svcx2_f4: "تحسين السرعة والأمان والحماية",
    svcx3_t: "إنشاء المتاجر الإلكترونية",
    svcx3_d:
      "تطوير متاجر إلكترونية تركز على رفع المبيعات وتقديم تجربة شراء سلسة.",
    svcx3_f1: "WooCommerce و Shopify و سلة و زد",
    svcx3_f2: "ربط بوابات الدفع: PayPal و Stripe و مدى",
    svcx3_f3: "تحسين تجربة الشراء لزيادة التحويل",
    svcx3_f4: "إعداد الشحن والضرائب",
    svcx4_t: "حلول الأتمتة والبرمجة",
    svcx4_d:
      "تطوير سكربتات مخصصة وأتمتة المهام المتكررة وربط الأنظمة لتحسين الكفاءة.",
    svcx4_f1: "سكربتات مخصصة بـ Python و JavaScript",
    svcx4_f2: "أتمتة الأعمال المتكررة لتوفير الوقت",
    svcx4_f3: "ربط الأنظمة والخدمات عبر APIs",
    svcx4_f4: "تحسين سير العمل والعمليات",
    svcx5_t: "تصميم واجهات المستخدم UI/UX",
    svcx5_d: "تصميم واجهات جذابة وعملية ثم تحويلها إلى موقع حقيقي بدقة عالية.",
    svcx5_f1: "تصميم احترافي عبر Figma و Adobe XD",
    svcx5_f2: "تحويل التصميم إلى تنفيذ Pixel Perfect",
    svcx5_f3: "تحسين تجربة المستخدم لزيادة التفاعل",
    svcx5_f4: "اتساق بصري كامل عبر صفحات الموقع",
    svcx6_t: "تحسين الأداء و SEO",
    svcx6_d:
      "تحسين تقني شامل لسرعة الموقع وظهوره في نتائج البحث وتجربة المستخدم.",
    svcx6_f1: "تحسين Core Web Vitals",
    svcx6_f2: "تهيئة On-Page SEO",
    svcx6_f3: "تحسين بنية الموقع وتجربة المستخدم",
    svcx6_f4: "إعداد Google Analytics و Search Console",
    svcx7_t: "الدعم الفني والصيانة",
    svcx7_d: "دعم مستمر بعد الإطلاق للحفاظ على استقرار الموقع وتحديثه وحمايته.",
    svcx7_f1: "صيانة دورية للموقع",
    svcx7_f2: "إصلاح سريع للمشاكل التقنية",
    svcx7_f3: "تحديثات وتحسينات مستمرة",
    svcx7_f4: "دعم فني متواصل",
    svcx8_t: "إعداد الاستضافة والنشر",
    svcx8_d:
      "إعداد كامل للاستضافة والنشر لضمان إطلاق موقعك بشكل آمن ومستقر واحترافي.",
    svcx8_f1: "إعداد الدومين والاستضافة",
    svcx8_f2: "تهيئة SSL والنسخ الاحتياطي وحماية الخادم",
    svcx8_f3: "ترحيل الموقع ودعم الإطلاق",
    req_service_btn: "اطلب الخدمة",
    all_services_btn: "كل الخدمات ←",
    wa_req_prefix: "مرحباً، أرغب في طلب هذه الخدمة:",
    wa_req_suffix: "أرجو تزويدي بالتفاصيل والخطوات التالية.",
    why_label: "لماذا تختارني؟",
    why_title: "أسباب ثقة العملاء في عملي",
    why_sub: "تنفيذ احترافي، تواصل واضح، ونتائج قابلة للقياس في كل مشروع.",
    why1: "خبرة قوية في السوق السعودي والخليجي",
    why2: "تنفيذ احترافي والتزام بموعد التسليم",
    why3: "حلول مخصصة حسب احتياج كل عميل",
    why4: "دعم مستمر بعد تسليم المشروع",
    why5: "اهتمام كبير بالتفاصيل وتجربة المستخدم",
    why6: "تواصل شفاف خلال جميع مراحل المشروع",
    process_label: "منهجية العمل",
    process_title: "كيف أعمل",
    process_sub: "عملية واضحة وتعاونية من أول محادثة حتى الإطلاق النهائي.",
    step1_t: "الاكتشاف",
    step1_d: "نناقش أهدافك وجمهورك ومتطلباتك بالتفصيل للتوافق على الرؤية.",
    step2_t: "التخطيط",
    step2_d:
      "خريطة الموقع والإطارات السلكية وخارطة طريق واضحة مع معالم ومواعيد.",
    step3_t: "التصميم والبناء",
    step3_d: "تصميم وتطوير تكراري مع نقاط تفتيش منتظمة ودمج ملاحظاتك.",
    step4_t: "الإطلاق والدعم",
    step4_d:
      "اختبار شامل ونشر ودعم ما بعد الإطلاق لضمان سير كل شيء بشكل مثالي.",
    pricing_label: "الأسعار",
    pricing_title: "خطط واضحة وشفافة",
    pricing_sub:
      "نقاط بداية لأنواع المشاريع الشائعة. كل مشروع فريد — تواصل معي للحصول على عرض مخصص.",
    plan1_tier: "المبتدئ",
    plan2_tier: "الاحترافي",
    plan3_tier: "المؤسسي",
    plan_popular: "الأكثر طلباً",
    plan1_desc: "مثالي للشركات الصغيرة التي تحتاج إلى حضور رقمي نظيف واحترافي.",
    plan2_desc: "للشركات النامية التي تحتاج إلى حل ويب قوي وغني بالميزات.",
    plan3_desc: "للمنصات المعقدة وتطبيقات الويب وشراكات التطوير طويلة الأمد.",
    btn_quote: "احصل على عرض",
    btn_talk: "تحدث معي",

    // PORTFOLIO
    port_label: "أعمالي",
    port_h1_1: "مشاريع تتحدث",
    port_h1_2: "عن نفسها.",
    port_sub:
      "مجموعة مختارة من المشاريع الحقيقية — كل واحدة مبنية لحل مشكلة محددة بشكل جميل.",
    filter_all: "كل المشاريع",
    filter_fe: "واجهة أمامية",
    filter_be: "خادم",
    filter_fs: "متكامل",
    filter_ec: "تجارة إلكترونية",
    live_demo: "عرض حي ↗",
    github: "GitHub",
    port_cta_label: "هل أنت مستعد للبناء؟",
    port_cta_title: "لننشئ مشروعك القادم",
    port_cta_sub: "لديك فكرة مشروع؟ يسعدني سماعها ومناقشة كيفية تحقيقها.",
    btn_convo: "← ابدأ محادثة",

    // BLOG
    blog_label: "مقالات وشروحات",
    blog_h1_1: "أفكار حول",
    blog_h1_2: "تطوير الويب.",
    blog_sub: "مقالات وشروحات ورؤى حول بناء تجارب ويب حديثة.",
    blog_read: "← قراءة المقال",
    blog_min: "دقيقة قراءة",
    blog_search: "ابحث في المقالات...",
    blog_all: "الكل",

    // CONTACT
    contact_label: "تواصل معي",
    contact_h1_1: "لنبني شيئاً",
    contact_h1_2: "رائعاً معاً.",
    contact_sub:
      "لديك مشروع في ذهنك أو تريد فقط الدردشة؟ أنا دائماً منفتح على الفرص الجديدة.",
    contact_details: "بيانات التواصل",
    contact_p: "تواصل عبر أي من هذه القنوات — أرد عادةً في غضون ساعات قليلة.",
    ci_phone_l: "الهاتف / اتصال",
    ci_email_l: "البريد الإلكتروني",
    ci_loc_l: "الموقع",
    ci_loc_v: "القاهرة، مصر 🇪🇬",
    ci_time_l: "وقت الرد",
    ci_time_v: "عادةً خلال 2–4 ساعات",
    wa_btn: "تواصل عبر واتساب",
    form_title: "أرسل لي رسالة",
    form_sub: "أكمل التفاصيل أدناه وسأرد عليك في أقرب وقت ممكن.",
    lbl_fname: "الاسم الأول *",
    lbl_lname: "اسم العائلة *",
    lbl_email: "البريد الإلكتروني *",
    lbl_phone: "رقم الهاتف",
    lbl_service: "الخدمة المطلوبة",
    lbl_budget: "ميزانية المشروع",
    lbl_message: "رسالتك *",
    ph_fname: "محمد",
    ph_lname: "أحمد",
    ph_email: "example@gmail.com",
    ph_phone: "966 5XX XXX XXX+",
    ph_message: "أخبرني عن مشروعك وأهدافك والجدول الزمني...",
    sel_service: "— اختر خدمة —",
    sel_budget: "— اختر نطاق الميزانية —",
    btn_send: "← إرسال الرسالة",
    success_h: "تم إرسال رسالتك!",
    success_p: "شكراً لتواصلك. سأرد عليك خلال 2–4 ساعات.",
    faq_label: "الأسئلة الشائعة",
    faq_title: "أسئلة متكررة",
    faq1_q: "كم يستغرق تنفيذ مشروع موقع ويب عادي؟",
    faq1_a:
      "يعتمد على النطاق. موقع بسيط يستغرق 1–2 أسابيع، بينما تطبيق ويب متكامل قد يستغرق 4–8 أسابيع. سأعطيك جدولاً زمنياً دقيقاً بعد نقاشنا الأولي.",
    faq2_q: "هل تعمل مع عملاء خارج المملكة العربية السعودية؟",
    faq2_a:
      "بالتأكيد! أعمل مع عملاء من جميع أنحاء منطقة الشرق الأوسط ودولياً. جميع التواصل وإدارة المشاريع تتم عن بُعد بكفاءة.",
    faq3_q: "ما هو هيكل الدفع لديك؟",
    faq3_a:
      "أعمل عادةً بدفعة مقدمة 50% لبدء المشروع، والـ 50% المتبقية عند الاكتمال. للمشاريع الكبيرة، يمكننا ترتيب مدفوعات بناءً على المراحل.",
    faq4_q: "هل سأمتلك الموقع بعد الاكتمال؟",
    faq4_a:
      "نعم، 100%. عند الدفع النهائي، تحصل على الملكية الكاملة لجميع الأكواد والأصول والملكية الفكرية.",
    faq5_q: "هل تقدم خدمات الاستضافة والدومين؟",
    faq5_a:
      "أستطيع التوصية والمساعدة في إعداد خدمات الاستضافة والدومين. سأرشدك عبر خيارات تناسب ميزانيتك ومتطلباتك التقنية.",
  },
};

// ─── Apply translations ───────────────────────────────
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // update lang toggle button
  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = lang === "en" ? "العربية" : "English";

  localStorage.setItem("mk_lang", lang);
}

function toggleLang() {
  const current = localStorage.getItem("mk_lang") || "en";
  applyLang(current === "en" ? "ar" : "en");
}

// ─── Init on page load ────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("mk_lang") || "en";
  applyLang(saved);
});

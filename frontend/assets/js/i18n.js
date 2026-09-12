/* ============================================================================
 * i18n.js — bilingual support (ES / EN) for every page of fredyrn.com
 *
 * How it works
 * ------------
 * 1. Each page declares its namespace:   <html lang="es" data-page="index">
 *    Supported pages: index | about | notFound
 * 2. Text nodes are translated with:     <span data-i18n="heroTitle">…</span>
 *    Key resolution order:  page dictionary → common dictionary
 *    (dotted keys like "common.navAbout" always resolve explicitly)
 * 3. Attributes can be translated too:   <img data-i18n-attr="alt:heroImgAlt">
 * 4. WhatsApp buttons are built from a single number:
 *    <a data-wa>…</a>  (optional per-element message: data-wa-msg="otherKey")
 * 5. Language switcher: <button data-lang-toggle>…</button> (on every page)
 * 6. The chosen language is stored in localStorage and auto-detected from the
 *    browser on first visit. A `languagechange` event is dispatched on <document>.
 * ========================================================================== */

(function () {
  "use strict";

  // Single source of truth for the contact number.
  var WHATSAPP_NUMBER = "573173136585";

  var translations = {
    /* ================================ ESPAÑOL ============================== */
    es: {
      common: {
        navServices: "Servicios",
        navStack: "Stack",
        navProjects: "Proyectos",
        navAI: "IA & Automatización",
        navAbout: "Sobre mí",
        navContact: "Contacto",
        navHire: "Hire me",
        waText: "Hola Fredy, quiero automatizar mi negocio",
        langSwitchLabel: "Switch to English",
        footerCopy: "© 2026 Fredy Rodriguez. Backend & Automation Engineer."
      },

      index: {
        pageTitle: "Fredy Rodriguez — Backend & Automation Engineer",
        pageDesc: "Fredy Rodriguez — Backend & Automation Engineer (+8 años). Transformo procesos manuales en backend robusto, agentes de IA y automatizaciones escalables. Python, Go, Rust, n8n, Docker.",
        heroEyebrow: "Fredy Rodriguez — Backend & Automation Engineer (+8 años)",
        heroTitle: "Hola, soy <span class=\"grad\">Fredy Rodriguez</span>.",
        heroDesc: "Transformo procesos manuales y sistemas lentos en <strong>backend robusto, agentes de IA y automatizaciones escalables</strong>. Especialista en arquitecturas de alto rendimiento.",
        heroBtnUpwork: "💼 Contratar en Upwork",
        heroBtnWhatsapp: "💬 Hablar por WhatsApp",
        heroBtnGithub: "📄 Ver GitHub",
        heroChip1: "+8 años experiencia",
        heroChip2: "Backend & Agentes IA",
        heroChip3: "Español / English",
        termComment: "// procesos 10x más rápidos",
        cardF2: "✓ Producción end-to-end",
        servicesEyebrow: "Soluciones Rápidas",
        servicesTitle: "Servicios en <span class=\"grad\">48–72 horas</span>",
        servicesDesc: "Resultados inmediatos para cuellos de botella operativos en tu negocio o startup.",
        srv1Title: "🤖 Web Scraping & Extracción de Datos",
        srv1Desc: "Bots resilientes en Python / Playwright para scraping complejo, bypassing de captchas y estructuración de datos en tiempo real.",
        srv2Title: "⚡ Integraciones de APIs & Webhooks",
        srv2Desc: "Conexión segura de plataformas (n8n / Go / Python) con firmas HMAC, OAuth2 y gestión de reintentos automatizados.",
        srv3Title: "🐳 Dockerización & Despliegue VPS",
        srv3Desc: "Empaquetado de microservicios, optimización de Dockerfiles multi-stage y despliegue en Linux (VPS, Podman, Traefik/Nginx).",
        srv4Title: "💬 Bots para WhatsApp / Telegram / Discord",
        srv4Desc: "Flujos conversacionales interactivos integrados con sistemas de cobro, CRM, catálogos y modelos de IA.",
        stackEyebrow: "Stack",
        stackTitle: "Con lo que <span class=\"grad\">trabajo a diario</span>",
        projectsEyebrow: "Projects",
        projectsTitle: "Casos de estudio <span class=\"grad\">& Proyectos</span>",
        prj1Title: "🗂️ Plataforma ERP/CRM para Pymes",
        prj1Desc: "Sistema centralizado en Django + PostgreSQL para gestión de clientes, inventarios, autenticación segura y reportes automatizados a escala.",
        prj1Cta: "Ver código →",
        prj2Title: "⚡ Engine / Microservicio en Go de Alto Rendimiento",
        prj2Desc: "Motor de procesamiento asíncrono y API REST optimizada para pipelines de integración continua y cargas de trabajo en tiempo real con Docker.",
        prj2Cta: "Ver código →",
        prj3Title: "🤖 Motor de Agentes IA & Servidor MCP",
        prj3Desc: "Infraestructura en Python / Go que conecta modelos de lenguaje (Gemini / DeepSeek / GPT) con bases de datos y herramientas mediante protocolo MCP.",
        prj3Cta: "Ver repositorio →",
        aiEyebrow: "AI & Automation",
        aiTitle: "Impacto medible en <span class=\"grad\">producción</span>",
        aiDesc: "Soluciones orientadas a resultados de negocio concretos.",
        ai1Title: "Bot WhatsApp → Cotización → Factura",
        ai1Impact: "<strong>Impacto:</strong> Reduce el tiempo de atención al cliente de 15 minutos a 3 segundos. Responde precios con catálogo e IVA al instante y genera la factura en PDF automáticamente.",
        ai1Cta: "→ Quiero uno igual",
        ai2Title: "Automatización n8n & Pipelines ETL",
        ai2Impact: "<strong>Impacto:</strong> Pipelines capaces de procesar +50,000 eventos diarios con observabilidad completa (OpenTelemetry), webhooks seguros y failover automático.",
        ai2Cta: "→ Automatiza tu proceso",
        ai3Title: "Agentes de IA + Servidores MCP",
        ai3Impact: "<strong>Impacto:</strong> Agentes autónomos que consultan inventarios y bases de datos con failover entre modelos (DeepSeek, Gemini, GPT), reduciendo tiempos operativos en un 70%.",
        ai3Cta: "→ Construye tu agente",
        contactTitle: "¿Tienes algo que <span class=\"grad\">automatizar</span>?",
        contactDesc: "Te dejo una primera versión funcionando en días. Hablo español e inglés, respondo rápido.",
        contactUpwork: "💼 Upwork",
        contactWhatsapp: "💬 WhatsApp",
        contactEmail: "✉️ Email",
        contactLinkedin: "🔗 LinkedIn"
      },

      about: {
        pageTitle: "Sobre mí — Fredy Rodriguez | Backend & Automation Engineer",
        pageDesc: "Sobre Fredy Rodriguez: ingeniero backend (Go, Python) y especialista en automatización e IA. Tecnólogo en Análisis y Desarrollo de Sistemas (SENA 2017) y estudiante de Ingeniería de Telecomunicaciones (UNAD).",
        breadcrumbHome: "Inicio",
        breadcrumbCurrent: "Sobre mí",
        heroTitle: "Sobre <span class=\"grad\">mí</span>",
        heroP1: "Soy <strong>Fredy Rodriguez</strong>, ingeniero backend y especialista en automatización con IA. Construyo APIs y servicios en <strong>Go</strong> y <strong>Python</strong>, y automatizo procesos de negocio con <strong>n8n</strong>, bots de WhatsApp y agentes de IA. Trabajo remoto desde Neiva, Colombia, en español e inglés.",
        heroP2: "Me gusta resolver problemas concretos: quitar trabajo repetitivo, conectar sistemas que no se hablan entre sí y dejar todo probado, documentado y corriendo en producción.",
        chip1: "Backend (Go · Python)",
        chip2: "Automatización n8n",
        chip3: "IA & Agentes",
        chip4: "Remoto",
        ctaPrimary: "Hablemos de tu proyecto",
        ctaWhatsapp: "💬 WhatsApp",
        srvEyebrow: "Servicios",
        srvTitle: "Qué <span class=\"grad\">construyo</span>",
        a1Title: "⚙️ APIs y servicios backend",
        a1Desc: "APIs REST en Go y Python con PostgreSQL, autenticación, validaciones, tests y despliegue en Docker.",
        a2Title: "🔗 Automatización con n8n",
        a2Desc: "Flujos ETL/ELT, aprobaciones multi-paso, webhooks seguros (HMAC, OAuth2, mTLS) y observabilidad.",
        a3Title: "💬 Bots de WhatsApp",
        a3Desc: "Cotizaciones, agendamiento y facturación automática: el cliente recibe respuesta al instante.",
        a4Title: "🤖 Agentes de IA y MCP",
        a4Desc: "Integraciones con LLMs (DeepSeek, Gemini, GPT) y servidores MCP que conectan tu catálogo a la IA.",
        tagAutomation: "Automatización",
        eduEyebrow: "Formación",
        eduTitle: "Educación y <span class=\"grad\">certificaciones</span>",
        edu1Title: "🎓 Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
        edu1Desc: "SENA, Neiva · <strong>2017</strong>",
        edu2Title: "📡 Ingeniería de Telecomunicaciones",
        edu2Desc: "Universidad Nacional Abierta y a Distancia (UNAD) · <em>en curso</em>",
        edu3Title: "📘 Fundamentos de Metodologías Ágiles",
        edu3Desc: "SENA · 2015 · 80 horas",
        edu4Title: "🌐 CCNA: Switching, Routing and Wireless Essentials",
        edu4Desc: "Cisco · <em>en curso</em>",
        ctaTitle: "¿Trabajamos <span class=\"grad\">juntos</span>?",
        ctaDesc: "Cuéntame qué quieres automatizar o construir y te propongo un plan con precio y plazo.",
        ctaEmail: "✉️ Email",
        ctaMore: "Más formas de contacto"
      },

      notFound: {
        pageTitle: "404 — Página no encontrada | Fredy Rodriguez",
        pageDesc: "La página que buscas no existe. Vuelve al inicio para ver el portafolio de Fredy Rodriguez: backend en Go, automatización con n8n y agentes de IA.",
        heading: "Esta página no existe",
        text: "Puede que el enlace esté roto o que la página se haya movido. Vuelve al inicio para ver mis proyectos y servicios de automatización.",
        btnHome: "← Volver al inicio",
        btnWhatsapp: "💬 WhatsApp",
        btnBlog: "Blog"
      }
    },

    /* ================================ ENGLISH ============================== */
    en: {
      common: {
        navServices: "Services",
        navStack: "Stack",
        navProjects: "Projects",
        navAI: "AI & Automation",
        navAbout: "About",
        navContact: "Contact",
        navHire: "Hire me",
        waText: "Hi Fredy, I'd like to automate my business",
        langSwitchLabel: "Cambiar a Español",
        footerCopy: "© 2026 Fredy Rodriguez. Backend & Automation Engineer."
      },

      index: {
        pageTitle: "Fredy Rodriguez — Backend & Automation Engineer",
        pageDesc: "Fredy Rodriguez — Backend & Automation Engineer (+8 yrs). I transform manual processes into robust backend, AI agents, and scalable automations. Python, Go, Rust, n8n, Docker.",
        heroEyebrow: "Fredy Rodriguez — Backend & Automation Engineer (+8 yrs)",
        heroTitle: "Hi, I'm <span class=\"grad\">Fredy Rodriguez</span>.",
        heroDesc: "I transform manual processes and slow systems into <strong>robust backend, AI agents, and scalable automation</strong>. Specialist in high-performance architectures.",
        heroBtnUpwork: "💼 Hire on Upwork",
        heroBtnWhatsapp: "💬 Chat on WhatsApp",
        heroBtnGithub: "📄 View GitHub",
        heroChip1: "+8 years experience",
        heroChip2: "Backend & AI Agents",
        heroChip3: "Spanish / English",
        termComment: "// 10x faster processes",
        cardF2: "✓ End-to-end Production",
        servicesEyebrow: "Quick Solutions",
        servicesTitle: "Services in <span class=\"grad\">48–72 hours</span>",
        servicesDesc: "Immediate results for operational bottlenecks in your business or startup.",
        srv1Title: "🤖 Web Scraping & Data Extraction",
        srv1Desc: "Resilient Python / Playwright bots for complex scraping, captcha bypassing, and real-time data structuring.",
        srv2Title: "⚡ API & Webhook Integrations",
        srv2Desc: "Secure platform connections (n8n / Go / Python) with HMAC signatures, OAuth2, and automated retry management.",
        srv3Title: "🐳 Dockerization & VPS Deployment",
        srv3Desc: "Microservice containerization, multi-stage Dockerfile optimization, and Linux deployment (VPS, Podman, Traefik/Nginx).",
        srv4Title: "💬 WhatsApp / Telegram / Discord Bots",
        srv4Desc: "Interactive conversational flows integrated with billing systems, CRMs, catalogs, and AI models.",
        stackEyebrow: "Stack",
        stackTitle: "Technologies I <span class=\"grad\">use daily</span>",
        projectsEyebrow: "Projects",
        projectsTitle: "Case Studies <span class=\"grad\">& Projects</span>",
        prj1Title: "🗂️ SMB ERP/CRM Platform",
        prj1Desc: "Centralized Django + PostgreSQL system for client management, inventory, secure auth, and automated reports at scale.",
        prj1Cta: "View code →",
        prj2Title: "⚡ High-Performance Go Engine / Microservice",
        prj2Desc: "Async processing engine and REST API optimized for CI/CD pipelines and real-time workloads with Docker.",
        prj2Cta: "View code →",
        prj3Title: "🤖 AI Agent Engine & MCP Server",
        prj3Desc: "Python / Go infrastructure connecting LLMs (Gemini / DeepSeek / GPT) to databases and tools using MCP protocol.",
        prj3Cta: "View repository →",
        aiEyebrow: "AI & Automation",
        aiTitle: "Measurable production <span class=\"grad\">impact</span>",
        aiDesc: "Solutions focused on concrete business results.",
        ai1Title: "WhatsApp Bot → Quoting → Invoicing",
        ai1Impact: "<strong>Impact:</strong> Reduces response time from 15 minutes to 3 seconds. Instantly replies with catalog & VAT pricing and auto-generates PDF invoices.",
        ai1Cta: "→ Get a similar bot",
        ai2Title: "n8n Automation & ETL Pipelines",
        ai2Impact: "<strong>Impact:</strong> Pipelines capable of processing +50,000 daily events with full observability (OpenTelemetry), secure webhooks, and automatic failover.",
        ai2Cta: "→ Automate your workflow",
        ai3Title: "AI Agents + MCP Servers",
        ai3Impact: "<strong>Impact:</strong> Autonomous agents querying inventory and databases with LLM failover (DeepSeek, Gemini, GPT), reducing operational time by 70%.",
        ai3Cta: "→ Build your AI agent",
        contactTitle: "Got something to <span class=\"grad\">automate</span>?",
        contactDesc: "I can deliver a working first version in days. I speak English & Spanish and reply fast.",
        contactUpwork: "💼 Upwork",
        contactWhatsapp: "💬 WhatsApp",
        contactEmail: "✉️ Email",
        contactLinkedin: "🔗 LinkedIn"
      },

      about: {
        pageTitle: "About — Fredy Rodriguez | Backend & Automation Engineer",
        pageDesc: "About Fredy Rodriguez: backend engineer (Go, Python) and automation & AI specialist. Technologist in Systems Analysis and Development (SENA 2017), currently studying Telecommunications Engineering (UNAD).",
        breadcrumbHome: "Home",
        breadcrumbCurrent: "About",
        heroTitle: "About <span class=\"grad\">me</span>",
        heroP1: "I'm <strong>Fredy Rodriguez</strong>, a backend engineer and AI automation specialist. I build APIs and services in <strong>Go</strong> and <strong>Python</strong>, and I automate business processes with <strong>n8n</strong>, WhatsApp bots and AI agents. I work remotely from Neiva, Colombia, in Spanish and English.",
        heroP2: "I like solving concrete problems: removing repetitive work, connecting systems that don't talk to each other, and leaving everything tested, documented and running in production.",
        chip1: "Backend (Go · Python)",
        chip2: "n8n automation",
        chip3: "AI & Agents",
        chip4: "Remote",
        ctaPrimary: "Let's talk about your project",
        ctaWhatsapp: "💬 WhatsApp",
        srvEyebrow: "Services",
        srvTitle: "What I <span class=\"grad\">build</span>",
        a1Title: "⚙️ Backend APIs and services",
        a1Desc: "REST APIs in Go and Python with PostgreSQL, authentication, validation, tests and Docker deployment.",
        a2Title: "🔗 Automation with n8n",
        a2Desc: "ETL/ELT flows, multi-step approvals, secured webhooks (HMAC, OAuth2, mTLS) and observability.",
        a3Title: "💬 WhatsApp bots",
        a3Desc: "Quotes, scheduling and automatic invoicing: customers get an instant reply.",
        a4Title: "🤖 AI agents and MCP",
        a4Desc: "LLM integrations (DeepSeek, Gemini, GPT) and MCP servers that connect your catalog to AI.",
        tagAutomation: "Automation",
        eduEyebrow: "Education",
        eduTitle: "Education & <span class=\"grad\">certifications</span>",
        edu1Title: "🎓 Technologist in Systems Analysis and Development",
        edu1Desc: "SENA, Neiva · <strong>2017</strong>",
        edu2Title: "📡 Telecommunications Engineering",
        edu2Desc: "Universidad Nacional Abierta y a Distancia (UNAD) · <em>in progress</em>",
        edu3Title: "📘 Fundamentals of Agile Methodologies",
        edu3Desc: "SENA · 2015 · 80 hours",
        edu4Title: "🌐 CCNA: Switching, Routing and Wireless Essentials",
        edu4Desc: "Cisco · <em>in progress</em>",
        ctaTitle: "Shall we work <span class=\"grad\">together</span>?",
        ctaDesc: "Tell me what you want to automate or build and I'll propose a plan with price and timeline.",
        ctaEmail: "✉️ Email",
        ctaMore: "More contact options"
      },

      notFound: {
        pageTitle: "404 — Page not found | Fredy Rodriguez",
        pageDesc: "The page you are looking for does not exist. Go back home to see Fredy Rodriguez's portfolio: Go backend, n8n automation and AI agents.",
        heading: "This page does not exist",
        text: "The link may be broken or the page may have moved. Go back home to see my projects and automation services.",
        btnHome: "← Back home",
        btnWhatsapp: "💬 WhatsApp",
        btnBlog: "Blog"
      }
    }
  };

  /* ----------------------------- helpers -------------------------------- */

  function resolvePath(obj, path) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  // Key resolution: dotted key → exact path; plain key → page dict, then common.
  function lookup(lang, page, key) {
    var dict = translations[lang];
    if (!dict) return undefined;

    if (key.indexOf(".") !== -1) {
      return resolvePath(dict, key);
    }
    if (dict[page] && dict[page][key] !== undefined) {
      return dict[page][key];
    }
    if (dict.common && dict.common[key] !== undefined) {
      return dict.common[key];
    }
    return undefined;
  }

  function getPageId() {
    var explicit = document.documentElement.getAttribute("data-page");
    if (explicit && translations.es[explicit]) return explicit;
    // Fallback: derive from the file name (index.html → index, 404.html → notFound).
    var file = (window.location.pathname.split("/").pop() || "index.html").replace(".html", "");
    if (file === "404") return "notFound";
    if (translations.es[file]) return file;
    return "index";
  }

  function applyMeta(lang, page) {
    var title = lookup(lang, page, "pageTitle");
    var desc = lookup(lang, page, "pageDesc");

    if (title) document.title = title;

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && desc) metaDesc.setAttribute("content", desc);

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && desc) ogDesc.setAttribute("content", desc);

    var twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc && desc) twDesc.setAttribute("content", desc);

    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", lang === "es" ? "es_CO" : "en_US");
  }

  function applyTextNodes(lang, page) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = lookup(lang, page, el.getAttribute("data-i18n"));
      if (value !== undefined) el.innerHTML = value;
    });

    // data-i18n-attr="attr:key" or "attr1:key1;attr2:key2"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var bits = pair.split(":");
        if (bits.length !== 2) return;
        var attr = bits[0].trim();
        var value = lookup(lang, page, bits[1].trim());
        if (attr && value !== undefined) el.setAttribute(attr, value);
      });
    });
  }

  function applyWhatsApp(lang, page) {
    var defaultText = lookup(lang, page, "waText") || "";
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      var key = el.getAttribute("data-wa-msg");
      var text = key ? (lookup(lang, page, key) || defaultText) : defaultText;
      el.setAttribute("href", "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text));
    });
  }

  function applySwitchers(lang) {
    // data-lang-toggle is the new convention; #lang-toggle stays supported.
    document.querySelectorAll("[data-lang-toggle], #lang-toggle").forEach(function (btn) {
      btn.textContent = lang === "es" ? "🌐 EN" : "🌐 ES";
      btn.setAttribute("aria-label", lookup(lang, getPageId(), "langSwitchLabel") || "Switch language");
      btn.setAttribute("data-lang", lang === "es" ? "en" : "es");
    });
  }

  /* ------------------------------ public API ---------------------------- */

  function getPreferredLanguage() {
    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) { /* private mode */ }
    if (saved === "es" || saved === "en") return saved;

    var navLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
    return navLang.indexOf("es") === 0 ? "es" : "en";
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }

    document.documentElement.lang = lang;
    var page = getPageId();

    applyMeta(lang, page);
    applyTextNodes(lang, page);
    applyWhatsApp(lang, page);
    applySwitchers(lang);

    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: lang, page: page } }));
  }

  function toggleLanguage() {
    var current = document.documentElement.lang === "en" ? "en" : "es";
    setLanguage(current === "es" ? "en" : "es");
  }

  function init() {
    setLanguage(getPreferredLanguage());

    document.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-lang-toggle], #lang-toggle");
      if (btn) {
        event.preventDefault();
        toggleLanguage();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Exposed for other scripts / console use.
  window.i18n = {
    setLanguage: setLanguage,
    toggleLanguage: toggleLanguage,
    getLanguage: function () { return document.documentElement.lang; },
    whatsappNumber: WHATSAPP_NUMBER
  };
})();

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
        navAutomation: "Automatización",
        navBackend: "Backend",
        navProjects: "Proyectos",
        navAbout: "Sobre mí",
        navContact: "Contacto",
        navHire: "Agendar Llamada",
        waText: "Hola Fredy, quiero automatizar mi negocio",
        langSwitchLabel: "Switch to English",
        footerCopy: "© 2026 Fredy Rodriguez. Backend & Automation Engineer."
      },

      index: {
        pageTitle: "Fredy Rodriguez — Backend & Automation Engineer",
        pageDesc: "Fredy Rodriguez — Backend & Automation Engineer (+8 años). Transformo procesos manuales en backend robusto, agentes de IA y automatizaciones escalables. Python, Go, Rust, n8n, Docker.",
        heroEyebrow: "Fredy Rodriguez — Backend & Automation Engineer (+8 años)",
        heroTitle: "Ingeniería Backend & <span class=\"grad\">Automatización con IA</span> para Escalar tu Negocio.",
        heroDesc: "Elimina tareas repetitivas, acelera tus tiempos de respuesta y optimiza tu operación con <strong>arquitecturas de backend de alto rendimiento, agentes de IA y flujos automáticos</strong>.",
        heroBtnCal: "📅 Agendar Consultoría Gratuita",
        heroBtnWhatsapp: "💬 Hablar por WhatsApp",
        heroBtnGithub: "📄 Ver GitHub",
        heroChip1: "+8 años experiencia",
        heroChip2: "Backend & Agentes IA",
        heroChip3: "Español / English",
        termComment: "// procesos 10x más rápidos",
        cardF2: "✓ Producción end-to-end",
        servicesEyebrow: "Servicios de Automatización & Backend",
        servicesTitle: "Soluciones rápidas para <span class=\"grad\">cuellos de botella</span>",
        servicesDesc: "Implementación de soluciones listas para producción orientadas a retorno de inversión directo.",
        srvAutoTitle: "🤖 Automatización con IA & n8n",
        srvAutoDesc: "Bots de WhatsApp, flujos n8n, agentes de IA y servidores MCP. Elimina tareas repetitivas y reduce tiempos operativos en un 70%.",
        srvAutoCta: "Ver servicios de automatización →",
        srvBackTitle: "⚡ Ingeniería Backend",
        srvBackDesc: "APIs de alto rendimiento en Go y Python, microservicios Docker, web scraping, despliegue VPS y CI/CD con GitHub Actions.",
        srvBackCta: "Ver servicios de backend →",
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
        contactTitle: "¿Listo para <span class=\"grad\">automatizar tu operación</span>?",
        contactDesc: "Agenda una llamada corta de 15 minutos para revisar tus cuellos de botella y diseñarte una solución a medida.",
        contactCal: "📅 Agendar en Cal.com",
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
        ctaPrimary: "📅 Hablemos de tu proyecto",
        ctaWhatsapp: "💬 WhatsApp",
        ctaCal: "📅 Agendar Llamada",
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

      automation: {
        pageTitle: "Automatización con IA & n8n — Fredy Rodriguez",
        pageDesc: "Automatizo tu negocio con n8n, bots de WhatsApp y agentes de IA. Reduce tiempos operativos en un 70%. Consultoría gratuita.",
        breadcrumbHome: "Inicio",
        breadcrumbCurrent: "Automatización",
        autoHeroTitle: "Automatización con <span class=\"grad\">IA & n8n</span> para tu Negocio",
        autoHeroDesc: "Elimina procesos manuales, conecta sistemas que no se hablan entre sí y reduce tus tiempos operativos en un <strong>70% o más</strong> con bots inteligentes, flujos n8n y agentes de IA.",
        autoHeroCta: "📅 Agendar Consultoría Gratuita",
        autoHeroWa: "💬 WhatsApp",
        autoChip1: "n8n",
        autoChip2: "WhatsApp Bots",
        autoChip3: "AI Agents",
        autoChip4: "MCP Servers",
        autoPainEyebrow: "El Problema",
        autoPainTitle: "¿Tu equipo <span class=\"grad\">pierde tiempo</span> en esto?",
        autoPain1: "😩 Responder las mismas preguntas por WhatsApp una y otra vez",
        autoPain2: "📋 Copiar datos entre hojas de cálculo, CRMs y sistemas que no se hablan",
        autoPain3: "🧾 Generar cotizaciones y facturas a mano, con errores y demoras",
        autoSolEyebrow: "Soluciones",
        autoSolTitle: "Cómo lo <span class=\"grad\">resuelvo</span>",
        autoSol1Title: "Bot WhatsApp → Cotización → Factura",
        autoSol1Impact: "<strong>Impacto:</strong> Reduce el tiempo de atención al cliente de 15 minutos a 3 segundos. Responde precios con catálogo e IVA al instante y genera la factura en PDF automáticamente.",
        autoSol1Cta: "→ Quiero uno igual",
        autoSol2Title: "Automatización n8n & Pipelines ETL",
        autoSol2Impact: "<strong>Impacto:</strong> Pipelines capaces de procesar +50,000 eventos diarios con observabilidad completa (OpenTelemetry), webhooks seguros y failover automático.",
        autoSol2Cta: "→ Automatiza tu proceso",
        autoSol3Title: "Agentes de IA + Servidores MCP",
        autoSol3Impact: "<strong>Impacto:</strong> Agentes autónomos que consultan inventarios y bases de datos con failover entre modelos (DeepSeek, Gemini, GPT), reduciendo tiempos operativos en un 70%.",
        autoSol3Cta: "→ Construye tu agente",
        autoProcessEyebrow: "Proceso",
        autoProcessTitle: "Proceso de <span class=\"grad\">trabajo</span>",
        autoStep1Title: "📞 Llamada de diagnóstico",
        autoStep1Desc: "15 minutos para entender tu operación y detectar cuellos de botella.",
        autoStep2Title: "📋 Propuesta técnica",
        autoStep2Desc: "Arquitectura, plazo y precio cerrado. Sin sorpresas.",
        autoStep3Title: "⚙️ Implementación",
        autoStep3Desc: "Desarrollo iterativo con demos semanales.",
        autoStep4Title: "🚀 Entrega + Soporte",
        autoStep4Desc: "Documentación, capacitación y soporte post-lanzamiento.",
        autoStackEyebrow: "Stack",
        autoStackTitle: "Tecnologías de <span class=\"grad\">automatización</span>",
        autoCtaTitle: "¿Listo para <span class=\"grad\">automatizar tu operación</span>?",
        autoCtaDesc: "Agenda una llamada de 15 minutos y diseñamos tu solución a medida.",
        autoCtaCal: "📅 Agendar en Cal.com",
        autoCtaWa: "💬 WhatsApp",
        autoCtaEmail: "✉️ Email"
      },

      backend: {
        pageTitle: "Ingeniería Backend — Go, Python, Docker — Fredy Rodriguez",
        pageDesc: "APIs de alto rendimiento en Go y Python, microservicios Docker, CI/CD y despliegue VPS. +8 años de experiencia. Consultoría gratuita.",
        breadcrumbHome: "Inicio",
        breadcrumbCurrent: "Backend",
        beHeroTitle: "Ingeniería Backend de <span class=\"grad\">Alto Rendimiento</span>",
        beHeroDesc: "APIs robustas, microservicios escalables y despliegues Docker listos para producción. <strong>Go, Python, PostgreSQL</strong>.",
        beHeroCta: "📅 Agendar Consultoría Gratuita",
        beHeroWa: "💬 WhatsApp",
        beChip1: "Go",
        beChip2: "Python",
        beChip3: "PostgreSQL",
        beChip4: "Docker",
        beChip5: "CI/CD",
        bePainEyebrow: "El Problema",
        bePainTitle: "¿Tu backend te <span class=\"grad\">frena</span>?",
        bePain1: "🐌 APIs lentas que no escalan con la demanda",
        bePain2: "🔧 Deploys manuales, sin CI/CD, con downtime en cada release",
        bePain3: "📦 Código legacy sin tests, sin documentación, difícil de mantener",
        beSolEyebrow: "Soluciones",
        beSolTitle: "Lo que <span class=\"grad\">construyo</span>",
        beSol1Title: "⚙️ APIs REST & Microservicios",
        beSol1Desc: "Endpoints seguros en Go y Python con autenticación, rate limiting, validaciones, tests y despliegue en Docker.",
        beSol1Cta: "Cotizar API →",
        beSol2Title: "🤖 Web Scraping & Extracción de Datos",
        beSol2Desc: "Bots resilientes en Python / Playwright para scraping complejo, bypassing de captchas y pipelines ETL automatizados.",
        beSol2Cta: "Cotizar scraping →",
        beSol3Title: "🐳 Dockerización & Despliegue VPS",
        beSol3Desc: "Multi-stage builds, Traefik/Nginx, CI/CD con GitHub Actions y monitoreo con OpenTelemetry.",
        beSol3Cta: "Cotizar despliegue →",
        beProcessEyebrow: "Proceso",
        beProcessTitle: "Proceso de <span class=\"grad\">trabajo</span>",
        beStep1Title: "📞 Llamada de diagnóstico",
        beStep1Desc: "Entender la arquitectura actual y objetivos.",
        beStep2Title: "📋 Diseño técnico",
        beStep2Desc: "Diagramas, stack, estimación de esfuerzo.",
        beStep3Title: "⚙️ Desarrollo iterativo",
        beStep3Desc: "Sprints con entregables funcionales.",
        beStep4Title: "🚀 Deploy + Monitoreo",
        beStep4Desc: "Infraestructura, CI/CD, observabilidad.",
        beStackEyebrow: "Stack",
        beStackTitle: "Tecnologías de <span class=\"grad\">backend</span>",
        beCtaTitle: "¿Necesitas un backend que <span class=\"grad\">escale</span>?",
        beCtaDesc: "Agenda una llamada de 15 minutos y diseñamos la arquitectura ideal para tu proyecto.",
        beCtaCal: "📅 Agendar en Cal.com",
        beCtaWa: "💬 WhatsApp",
        beCtaEmail: "✉️ Email"
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
        navAutomation: "Automation",
        navBackend: "Backend",
        navProjects: "Projects",
        navAbout: "About",
        navContact: "Contact",
        navHire: "Book a Call",
        waText: "Hi Fredy, I'd like to automate my business",
        langSwitchLabel: "Cambiar a Español",
        footerCopy: "© 2026 Fredy Rodriguez. Backend & Automation Engineer."
      },

      index: {
        pageTitle: "Fredy Rodriguez — Backend & Automation Engineer",
        pageDesc: "Fredy Rodriguez — Backend & Automation Engineer (+8 yrs). I transform manual processes into robust backend, AI agents, and scalable automations. Python, Go, Rust, n8n, Docker.",
        heroEyebrow: "Fredy Rodriguez — Backend & Automation Engineer (+8 yrs)",
        heroTitle: "Backend Engineering & <span class=\"grad\">AI Automation</span> to Scale Your Business.",
        heroDesc: "Eliminate repetitive tasks, accelerate response times, and optimize operations with <strong>high-performance backend architectures, AI agents, and automated workflows</strong>.",
        heroBtnCal: "📅 Book Free Consultation",
        heroBtnWhatsapp: "💬 Chat on WhatsApp",
        heroBtnGithub: "📄 View GitHub",
        heroChip1: "+8 years experience",
        heroChip2: "Backend & AI Agents",
        heroChip3: "Spanish / English",
        termComment: "// 10x faster processes",
        cardF2: "✓ End-to-end Production",
        servicesEyebrow: "Automation & Backend Services",
        servicesTitle: "Quick solutions for <span class=\"grad\">operational bottlenecks</span>",
        servicesDesc: "Implementation of production-ready solutions aimed at direct ROI.",
        srvAutoTitle: "🤖 AI Automation & n8n",
        srvAutoDesc: "WhatsApp bots, n8n workflows, AI agents and MCP servers. Eliminate repetitive tasks and reduce operational time by 70%.",
        srvAutoCta: "View automation services →",
        srvBackTitle: "⚡ Backend Engineering",
        srvBackDesc: "High-performance APIs in Go and Python, Docker microservices, web scraping, VPS deployment and CI/CD with GitHub Actions.",
        srvBackCta: "View backend services →",
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
        contactTitle: "Ready to <span class=\"grad\">automate your operation</span>?",
        contactDesc: "Book a brief 15-minute call to review your bottlenecks and design a tailored solution.",
        contactCal: "📅 Book on Cal.com",
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
        ctaPrimary: "📅 Let's talk about your project",
        ctaWhatsapp: "💬 WhatsApp",
        ctaCal: "📅 Book a Call",
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

      automation: {
        pageTitle: "AI & n8n Automation — Fredy Rodriguez",
        pageDesc: "I automate your business with n8n, WhatsApp bots and AI agents. Reduce operational time by 70%. Free consultation.",
        breadcrumbHome: "Home",
        breadcrumbCurrent: "Automation",
        autoHeroTitle: "Automation with <span class=\"grad\">AI & n8n</span> for Your Business",
        autoHeroDesc: "Eliminate manual processes, connect systems that don't talk to each other, and reduce your operational time by <strong>70% or more</strong> with smart bots, n8n workflows and AI agents.",
        autoHeroCta: "📅 Book Free Consultation",
        autoHeroWa: "💬 WhatsApp",
        autoChip1: "n8n",
        autoChip2: "WhatsApp Bots",
        autoChip3: "AI Agents",
        autoChip4: "MCP Servers",
        autoPainEyebrow: "The Problem",
        autoPainTitle: "Is your team <span class=\"grad\">wasting time</span> on this?",
        autoPain1: "😩 Answering the same questions on WhatsApp over and over",
        autoPain2: "📋 Copying data between spreadsheets, CRMs and disconnected systems",
        autoPain3: "🧾 Generating quotes and invoices by hand, with errors and delays",
        autoSolEyebrow: "Solutions",
        autoSolTitle: "How I <span class=\"grad\">solve it</span>",
        autoSol1Title: "WhatsApp Bot → Quoting → Invoicing",
        autoSol1Impact: "<strong>Impact:</strong> Reduces response time from 15 minutes to 3 seconds. Instantly replies with catalog & VAT pricing and auto-generates PDF invoices.",
        autoSol1Cta: "→ Get a similar bot",
        autoSol2Title: "n8n Automation & ETL Pipelines",
        autoSol2Impact: "<strong>Impact:</strong> Pipelines capable of processing +50,000 daily events with full observability (OpenTelemetry), secure webhooks, and automatic failover.",
        autoSol2Cta: "→ Automate your workflow",
        autoSol3Title: "AI Agents + MCP Servers",
        autoSol3Impact: "<strong>Impact:</strong> Autonomous agents querying inventory and databases with LLM failover (DeepSeek, Gemini, GPT), reducing operational time by 70%.",
        autoSol3Cta: "→ Build your AI agent",
        autoProcessEyebrow: "Process",
        autoProcessTitle: "Work <span class=\"grad\">process</span>",
        autoStep1Title: "📞 Discovery call",
        autoStep1Desc: "15 minutes to understand your operation and detect bottlenecks.",
        autoStep2Title: "📋 Technical proposal",
        autoStep2Desc: "Architecture, timeline and fixed price. No surprises.",
        autoStep3Title: "⚙️ Implementation",
        autoStep3Desc: "Iterative development with weekly demos.",
        autoStep4Title: "🚀 Delivery + Support",
        autoStep4Desc: "Documentation, training and post-launch support.",
        autoStackEyebrow: "Stack",
        autoStackTitle: "Automation <span class=\"grad\">technologies</span>",
        autoCtaTitle: "Ready to <span class=\"grad\">automate your operation</span>?",
        autoCtaDesc: "Book a 15-minute call and we'll design your tailored solution.",
        autoCtaCal: "📅 Book on Cal.com",
        autoCtaWa: "💬 WhatsApp",
        autoCtaEmail: "✉️ Email"
      },

      backend: {
        pageTitle: "Backend Engineering — Go, Python, Docker — Fredy Rodriguez",
        pageDesc: "High-performance APIs in Go and Python, Docker microservices, CI/CD and VPS deployment. +8 years experience. Free consultation.",
        breadcrumbHome: "Home",
        breadcrumbCurrent: "Backend",
        beHeroTitle: "High-Performance <span class=\"grad\">Backend Engineering</span>",
        beHeroDesc: "Robust APIs, scalable microservices and production-ready Docker deployments. <strong>Go, Python, PostgreSQL</strong>.",
        beHeroCta: "📅 Book Free Consultation",
        beHeroWa: "💬 WhatsApp",
        beChip1: "Go",
        beChip2: "Python",
        beChip3: "PostgreSQL",
        beChip4: "Docker",
        beChip5: "CI/CD",
        bePainEyebrow: "The Problem",
        bePainTitle: "Is your backend <span class=\"grad\">holding you back</span>?",
        bePain1: "🐌 Slow APIs that don't scale with demand",
        bePain2: "🔧 Manual deploys, no CI/CD, downtime on every release",
        bePain3: "📦 Legacy code with no tests, no docs, hard to maintain",
        beSolEyebrow: "Solutions",
        beSolTitle: "What I <span class=\"grad\">build</span>",
        beSol1Title: "⚙️ REST APIs & Microservices",
        beSol1Desc: "Secure endpoints in Go and Python with auth, rate limiting, validation, tests and Docker deployment.",
        beSol1Cta: "Quote API →",
        beSol2Title: "🤖 Web Scraping & Data Extraction",
        beSol2Desc: "Resilient Python / Playwright bots for complex scraping, captcha bypassing and automated ETL pipelines.",
        beSol2Cta: "Quote scraping →",
        beSol3Title: "🐳 Dockerization & VPS Deployment",
        beSol3Desc: "Multi-stage builds, Traefik/Nginx, CI/CD with GitHub Actions and OpenTelemetry monitoring.",
        beSol3Cta: "Quote deployment →",
        beProcessEyebrow: "Process",
        beProcessTitle: "Work <span class=\"grad\">process</span>",
        beStep1Title: "📞 Discovery call",
        beStep1Desc: "Understand current architecture and goals.",
        beStep2Title: "📋 Technical design",
        beStep2Desc: "Diagrams, stack, effort estimation.",
        beStep3Title: "⚙️ Iterative development",
        beStep3Desc: "Sprints with functional deliverables.",
        beStep4Title: "🚀 Deploy + Monitoring",
        beStep4Desc: "Infrastructure, CI/CD, observability.",
        beStackEyebrow: "Stack",
        beStackTitle: "Backend <span class=\"grad\">technologies</span>",
        beCtaTitle: "Need a backend that <span class=\"grad\">scales</span>?",
        beCtaDesc: "Book a 15-minute call and we'll design the ideal architecture for your project.",
        beCtaCal: "📅 Book on Cal.com",
        beCtaWa: "💬 WhatsApp",
        beCtaEmail: "✉️ Email"
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

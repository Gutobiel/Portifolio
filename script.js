// =============================================
// I18N DICTIONARY & LANG SWITCHER
// =============================================
const dict = {
  pt: {
    nav_exp: "Experiencia", nav_proj: "Projetos", nav_tech: "Tecnologias", nav_mcp: "MCP", nav_contact: "Contato",
    hero_desc: "Sou desenvolvedor full-stack com foco em aplicacoes web escalaveis, atuando tanto no front-end quanto no back-end. Trabalho com APIs RESTful, automacao de processos, bots de atendimento e integracoes com servicos externos, incluindo fluxos de vendas e atendimento via WhatsApp. Atualmente estudo e desenvolvo Agentes de IA.",
    hero_status: "Disponivel para projetos &middot; Contratações",
    carreira: "Carreira", exp_title: "Experiencia profissional",
    atual: "Atual", emprego: "Emprego",
    q_desc: "Desenvolvimento, manutencao e evolucao de aplicacoes fullstack para sistemas internos do DNIT.",
    q_l1: "Implementacao de sistemas e modulos internos com Python / Django e JavaScript",
    q_l2: "Criacao de interfaces responsivas com boas praticas de UX/UI e componentizacao",
    q_l3: "Integracao frontend-backend com foco em escalabilidade e estabilidade",
    q_l4: "Controle de versao com Git / GitHub: branches, merges e revisao de codigo",
    q_l5: "Auxiliou na implementacao da IA interna do DNIT para automacao de processos",
    moni_title: "Monitor de Linguagem de Programacao", moni: "Monitoria",
    moni_desc: "Orientacao e apoio a alunos no aprendizado de linguagens de programacao, com explicacoes praticas e acompanhamento proximo.",
    form_title: "Analise e Desenvolvimento de Sistemas", formacao: "Formacao",
    form_desc: "Graduacao em Analise e Desenvolvimento de Sistemas. Projeto final: <strong>Semaforos Inteligentes</strong> — sistema para melhorar o trafego urbano utilizando IA, Big Data e aprendizado de maquina.",
    free_title: "Projetos Freelancer",
    free_desc: "Atuacao como freelancer desenvolvendo projetos para clientes: plataforma de quadras esportivas (Marca-AI), sistema de gestao condominial (CondoFLOW) e implementacao de novas funcionalidades em CRM.",
    rep_kicker: "Repositorios", rep_title: "Projetos que representam meu estilo", rep_btn: "Ver todos os repositorios no GitHub &rarr;",
    curso_kicker: "Certificados & Cursos", curso_title: "Evolucao continua",
    tech_kicker: "Tecnologias", tech_title: "Stack principal", tech_f: "Frontend", tech_b: "Backend", tech_i: "IA & Automacao", tech_t: "Ferramentas",
    mcp_kicker: "08 / Pronto para Agentes &middot; MCP", mcp_title: "Este site fala MCP.",
    mcp_desc: "Pronto para agentes, bem-vindo a humanos. Adicione este portfólio como conector e seu agente poderá avaliar meu trabalho, checar disponibilidade e agendar uma introdução de projeto. Sem conta, autenticação ou cadastro.",
    cont_kicker: "Contato", cont_title: "Vamos conversar?",
    wpp: "Vamos marcar um meet?",
    dev_title: "Desenvolvedor Fullstack"
  },
  en: {
    nav_exp: "Experience", nav_proj: "Projects", nav_tech: "Technologies", nav_mcp: "MCP", nav_contact: "Contact",
    hero_desc: "I am a full-stack developer focusing on scalable web applications, working on both front-end and back-end. Experience with RESTful APIs, process automation, customer service bots, and external service integrations, including sales flows via WhatsApp. Currently studying and developing AI Agents.",
    hero_status: "Available for projects &middot; Hiring",
    carreira: "Career", exp_title: "Professional Experience",
    atual: "Present", emprego: "Job",
    q_desc: "Development, maintenance, and evolution of fullstack applications for internal DNIT systems.",
    q_l1: "Implementation of internal systems and modules using Python / Django and JavaScript",
    q_l2: "Creation of responsive interfaces with UX/UI best practices and componentization",
    q_l3: "Frontend-backend integration with a focus on scalability and stability",
    q_l4: "Version control with Git / GitHub: branches, merges, and code review",
    q_l5: "Assisted in the implementation of internal AI at DNIT for process automation",
    moni_title: "Programming Language Monitor", moni: "Mentoring",
    moni_desc: "Guidance and support for students learning programming languages, with practical explanations and close monitoring.",
    form_title: "Systems Analysis and Development", formacao: "Education",
    form_desc: "Degree in Systems Analysis and Development. Final project: <strong>Smart Traffic Lights</strong> — system to improve urban traffic using AI, Big Data, and machine learning.",
    free_title: "Freelance Projects",
    free_desc: "Freelancer developing projects for clients: sports court platform (Marca-AI), condominium management system (CondoFLOW), and implementing new features in a CRM.",
    rep_kicker: "Repositories", rep_title: "Projects representing my style", rep_btn: "View all repositories on GitHub &rarr;",
    curso_kicker: "Certificates & Courses", curso_title: "Continuous evolution",
    tech_kicker: "Technologies", tech_title: "Main Stack", tech_f: "Frontend", tech_b: "Backend", tech_i: "AI & Automation", tech_t: "Tools",
    mcp_kicker: "08 / Agent-ready &middot; MCP", mcp_title: "This site speaks MCP.",
    mcp_desc: "Agent-ready, humans welcome. Add this portfolio as a connector and your agent can evaluate my work, check availability, and book a project intro. No account, auth, or signup.",
    cont_kicker: "Contact", cont_title: "Let's talk?",
    wpp: "Shall we schedule a meet?",
    dev_title: "Fullstack Developer"
  },
  es: {
    nav_exp: "Experiencia", nav_proj: "Proyectos", nav_tech: "Tecnologías", nav_mcp: "MCP", nav_contact: "Contacto",
    hero_desc: "Soy desarrollador full-stack con enfoque en aplicaciones web escalables, actuando tanto en el front-end como en el back-end. Trabajo con APIs RESTful, automatización de procesos, bots de atención e integraciones con servicios externos (ventas por WhatsApp). Actualmente estudio y desarrollo Agentes de IA.",
    hero_status: "Disponible para proyectos &middot; Contrataciones",
    carreira: "Carrera", exp_title: "Experiencia profesional",
    atual: "Actual", emprego: "Empleo",
    q_desc: "Desarrollo, mantenimiento y evolución de aplicaciones fullstack para sistemas internos del DNIT.",
    q_l1: "Implementación de sistemas y módulos internos con Python / Django y JavaScript",
    q_l2: "Creación de interfaces responsivas con buenas prácticas de UX/UI y componentización",
    q_l3: "Integración frontend-backend con enfoque en escalabilidad y estabilidad",
    q_l4: "Control de versiones con Git / GitHub: branches, merges y revisión de código",
    q_l5: "Asistió en la implementación de IA interna del DNIT para automatización de procesos",
    moni_title: "Monitor de Lenguaje de Programación", moni: "Tutoría",
    moni_desc: "Orientación y apoyo a estudiantes en el aprendizaje de lenguajes de programación, con explicaciones prácticas.",
    form_title: "Análisis y Desarrollo de Sistemas", formacao: "Educación",
    form_desc: "Grado en Análisis y Desarrollo de Sistemas. Proyecto final: <strong>Semáforos Inteligentes</strong> — sistema para mejorar el tráfico urbano utilizando IA y Big Data.",
    free_title: "Proyectos Freelance",
    free_desc: "Actuación como freelancer en proyectos: plataforma de canchas (Marca-AI), sistema de gestión de condominios (CondoFLOW) e implementando nuevas funcionalidades en un CRM.",
    rep_kicker: "Repositorios", rep_title: "Proyectos que representan mi estilo", rep_btn: "Ver todos los repositorios en GitHub &rarr;",
    curso_kicker: "Certificados y Cursos", curso_title: "Evolución continua",
    tech_kicker: "Tecnologías", tech_title: "Stack principal", tech_f: "Frontend", tech_b: "Backend", tech_i: "IA y Automatización", tech_t: "Herramientas",
    mcp_kicker: "08 / Agent-ready &middot; MCP", mcp_title: "Este sitio habla MCP.",
    mcp_desc: "Agent-ready, humans welcome. Agregue este portafolio como conector y su agente podrá evaluar mi trabajo, consultar disponibilidad y agendar una introducción de proyecto. Sin cuenta, autenticación ni registro.",
    cont_kicker: "Contacto", cont_title: "¿Hablamos?",
    wpp: "¿Agendamos una reunión?",
    dev_title: "Desarrollador Fullstack"
  }
};

let currentLang = localStorage.getItem("lang") || "pt";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("onclick").includes(`'${lang}'`));
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[lang] && dict[lang][key]) {
      el.innerHTML = dict[lang][key];
    }
  });

  // Re-render particle text to update translation
  if (typeof sampleText === "function") {
    sampleText();
  }
}

function initApp() {
  setLang(currentLang);
  initTheme();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// =============================================
// THEME SWITCHER (Light / Dark)
// =============================================
function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  if (theme === "dark") {
    // Sun icon
    toggleBtn.innerHTML = `<svg stroke="#2563eb" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="theme-icon" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="pointer-events: none;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    // Moon icon
    toggleBtn.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="theme-icon" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="pointer-events: none;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

function initTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);
}

window.toggleTheme = function () {
  let theme = document.documentElement.getAttribute("data-theme");
  let newTheme = theme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
};

// =============================================
// PARTICLE CONFIG
// =============================================
let THICKNESS = Math.pow(80, 2);
const SPACING = 4;
const DRAG = 0.95;
const EASE = 0.25;

let canvas, ctx, coords;
let hero; // reference to the full <header class="hero"> element
let list = [];
let man = false;
let mx = 0, my = 0, w = 0, h = 0;

// Particle colors for light neumorphic background
// Resting: dark blue-gray on white
// Disturbed: vivid blue accent (#2563eb → 37,99,235)
const REST_R = 37, REST_G = 99, REST_B = 235; // accent blue at rest
const REST_ALPHA = 0.35;

// =============================================
// INIT HERO PARTICLES
// =============================================
async function initParticles() {
  if (document.fonts) await document.fonts.ready;

  const container = document.getElementById("container");
  coords = document.getElementById("coords");
  hero = document.getElementById("inicio");

  if (!container || !hero) return;

  canvas = document.createElement("canvas");
  container.appendChild(canvas);
  ctx = canvas.getContext("2d");

  resize();
  window.addEventListener("resize", resize);

  // *** KEY FIX: listen on the ENTIRE hero element ***
  // This captures mouse events even when hovering over hero-content / hero-overlay
  // because those elements have pointer-events: none in CSS.
  hero.addEventListener("mousemove", onHeroMouseMove, { passive: true });
  hero.addEventListener("mouseleave", () => { man = false; }, { passive: true });

  step();
}

function onHeroMouseMove(e) {
  const b = hero.getBoundingClientRect();
  mx = e.clientX - b.left;
  my = e.clientY - b.top;
  man = true;
}

function resize() {
  if (!hero || !canvas) return;
  const b = hero.getBoundingClientRect();
  w = Math.floor(b.width) || window.innerWidth;
  h = Math.floor(b.height) || window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  sampleText();
}

function sampleText() {
  const off = document.createElement("canvas");
  const octx = off.getContext("2d");
  off.width = w;
  off.height = h;

  const fontSize = Math.min(w / 5, h / 2.2);
  const subSize = fontSize * 0.22;

  octx.clearRect(0, 0, w, h);
  octx.fillStyle = "#000";
  octx.textAlign = "center";
  octx.textBaseline = "middle";

  // Main name
  octx.font = `bold ${fontSize}px Manrope, sans-serif`;
  octx.fillText("GUTOBIEL", w / 2, h / 2 - subSize * 1.2);

  // Sub text
  octx.font = `600 ${subSize}px Manrope, sans-serif`;
  octx.fillText("Desenvolvedor Fullstack", w / 2, h / 2 + fontSize * 0.65);

  const data = octx.getImageData(0, 0, w, h).data;
  list = [];

  for (let y = 0; y < h; y += SPACING) {
    for (let x = 0; x < w; x += SPACING) {
      if (data[(y * w + x) * 4 + 3] > 128) {
        list.push({
          x, y, ox: x, oy: y,
          vx: 0, vy: 0,
          size: 1.8,
          r: REST_R, g: REST_G, b: REST_B,
          alpha: REST_ALPHA
        });
      }
    }
  }
}

function step() {
  ctx.clearRect(0, 0, w, h);

  // Gentle idle orbit when no mouse
  if (!man) {
    const t = +new Date() * 0.0009;
    mx = w * 0.5 + Math.cos(t) * w * 0.25;
    my = h * 0.55 + Math.sin(t) * h * 0.30;
  }

  for (let i = 0; i < list.length; i++) {
    const p = list[i];
    const dx = mx - p.x;
    const dy = my - p.y;
    const d = dx * dx + dy * dy || 0.001;
    const f = -THICKNESS / d;

    if (d < THICKNESS) {
      const angle = Math.atan2(dy, dx);
      p.vx += f * Math.cos(angle);
      p.vy += f * Math.sin(angle);
      // Bright blue when disturbed
      p.r += (37 - p.r) * 0.08;
      p.g += (99 - p.g) * 0.08;
      p.b += (235 - p.b) * 0.08;
      p.alpha += (1 - p.alpha) * 0.1;
    } else {
      // Fade back to resting shade
      p.r += (REST_R - p.r) * 0.04;
      p.g += (REST_G - p.g) * 0.04;
      p.b += (REST_B - p.b) * 0.04;
      p.alpha += (REST_ALPHA - p.alpha) * 0.04;
    }

    p.vx *= DRAG;
    p.vy *= DRAG;
    p.x += p.vx + (p.ox - p.x) * EASE;
    p.y += p.vy + (p.oy - p.y) * EASE;

    ctx.fillStyle = `rgba(${Math.floor(p.r)},${Math.floor(p.g)},${Math.floor(p.b)},${p.alpha.toFixed(2)})`;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  }

  if (coords) coords.textContent = `X=${Math.round(mx)} Y=${Math.round(my)}`;
  requestAnimationFrame(step);
}

// =============================================
// REVEAL ANIMATIONS
// =============================================
function initReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

// =============================================
// TIMELINE PROGRESS
// =============================================
function initTimeline() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;
  const items = timeline.querySelectorAll(".timeline-item");

  const update = () => {
    const rect = timeline.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height + vh;
    const passed = vh - rect.top;
    let p = Math.min(Math.max((passed / total) * 100, 0), 100);
    timeline.style.setProperty("--timeline-progress", `${p}%`);

    // linha de progresso real em pixels relativa à tela
    const progressLineBottom = rect.top + (rect.height * (p / 100));

    items.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      // O dot fica a cerca de 1.5rem (24px) do topo do card + metade da altura do dot (6px)
      const dotPosition = itemRect.top + 30;

      if (progressLineBottom >= dotPosition) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

// =============================================
// PROJECT CARDS — GitHub API + static fallback
// =============================================
const FEATURED = [
  "particle-cursor-animation",
  "Tesla-Imagem",
  "Vania-Coiffeur",
  "Nexora-frontend",
  "ags-crm",
  "Prompt-manager",
  "Workshop-Arcane-projeto-web-IA",
  "CondoFloww",
  "crmX",
];

const STATIC = [
  { name: "particle-cursor-animation", description: "Animacao de particulas interativa com canvas 2D puro. As particulas formam texto e reagem ao cursor com fisica simulada.", html_url: "https://github.com/Gutobiel/particle-cursor-animation", homepage: "https://particle-cursor-animation-nine.vercel.app", language: "JavaScript" },
  { name: "Tesla-Imagem", description: "Site institucional inspirado na Tesla. Design dark e visualmente marcante construido com HTML e CSS puro.", html_url: "https://github.com/Gutobiel/Tesla-Imagem", homepage: "https://tesla-imagem.vercel.app", language: "HTML" },
  { name: "Vania-Coiffeur", description: "Pagina profissional para cabeleireira com formulario de agendamento e apresentacao de servicos.", html_url: "https://github.com/Gutobiel/Vania-Coiffeur", homepage: "https://vania-coiffeur.vercel.app", language: "HTML" },
  { name: "Nexora-frontend", description: "Frontend completo para a plataforma Nexora, construido com Vue.js e integracao com API RESTful.", html_url: "https://github.com/Gutobiel/Nexora-frontend", homepage: "https://nexora-frontend-two.vercel.app", language: "Vue" },
  { name: "ags-crm", description: "O CRM White-Label é uma plataforma completa de gestão comercial projetada para empresas que desejam organizar toda a sua operação de vendas em um único ambiente. Desde a captação do primeiro lead até a assinatura do contrato, cada etapa do funil comercial é controlada de forma visual e intuitiva.", extended_description: "<br><br><b>MÓDULOS DE IA (EM IMPLEMENTAÇÃO):</b><br>- <b>Chatbot Interno:</b> Responde sobre a empresa, informa produtos mais/menos vendidos, performance de vendedores, faturamento. Faz análise de sentimento de leads, roleplay de objeções e alertas preditivos.<br>- <b>Agente de Vendas no WhatsApp</b><br>- <b>IA de Análise Documental</b><br><br><b>DADOS DE TESTE:</b><br>Login: teste@gmail.com<br>Senha: 12345678901", html_url: "https://github.com/Gutobiel/ags-crm", homepage: "https://ags-crm-client.onrender.com/login", language: "TypeScript" },
  { name: "Prompt-manager", description: "Central de prompts de IA: organize, pesquise e copie prompts para otimizar seu fluxo com LLMs.", html_url: "https://github.com/Gutobiel/Prompt-manager", homepage: "https://prompt-manager-eight-phi.vercel.app", language: "JavaScript" },
  { name: "Workshop-Arcane-projeto-web-IA", description: "PsiQue — aplicacao web com agentes de IA para auxiliar psicologos em consultas terapeuticas.", html_url: "https://github.com/Gutobiel/Workshop-Arcane-projeto-web-IA", homepage: null, language: "HTML" },
  { name: "CondoFloww", description: "Sistema completo de gestao condominial com autenticacao, painel administrativo e CRUD.", html_url: "https://github.com/Gutobiel/CondoFloww", homepage: "https://condo-floww.vercel.app", language: "JavaScript" },
  { name: "crmX", description: "Sistema CRM para gerenciamento de clientes, tarefas e pipeline de vendas.", html_url: "https://github.com/Gutobiel/crmX", homepage: null, language: "HTML" },
];

const LANG_COLORS = {
  "JavaScript": "#d97706",
  "TypeScript": "#2563eb",
  "HTML": "#dc2626",
  "Vue": "#16a34a",
  "Python": "#2563eb",
  "CSS": "#7c3aed",
  "Kotlin": "#7c3aed",
};

function buildCard(repo) {
  const demo = repo.homepage
    ? `<a href="${repo.homepage}" target="_blank" rel="noreferrer" class="card-btn card-btn-demo">Demo &rarr;</a>`
    : "";

  const lang = repo.language || "Code";
  const langColor = LANG_COLORS[lang] || "#374151";
  const dot = `<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${langColor};margin-right:5px;"></span>`;

  let descContent = repo.description || "Repositorio publico no GitHub.";
  if (repo.extended_description) {
    const extId = 'ext_' + repo.name.replace(/[^a-zA-Z0-9]/g, '');
    descContent += `<span id="${extId}" style="display:none;">${repo.extended_description}</span>`;
    descContent += `<br><button onclick="const el = document.getElementById('${extId}'); if(el.style.display==='none'){el.style.display='inline';this.innerText='Ver menos';}else{el.style.display='none';this.innerText='Ver mais';}" style="background:none;border:none;color:var(--accent);cursor:pointer;font-weight:bold;padding:0;margin-top:5px;font-size:0.85rem;font-family:inherit;">Ver mais</button>`;
  }

  return `
    <article class="card reveal" style="padding:0;display:flex;flex-direction:column;">
      <div style="padding:1.4rem 1.4rem 0;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.6rem;">
          <h3 style="margin:0;font-size:0.97rem;">${repo.name.replace(/-/g, " ")}</h3>
        </div>
        <p style="margin:0 0 1rem;font-size:0.87rem;">${descContent}</p>
      </div>
      <div style="margin-top:auto;padding:0.8rem 1.4rem 1.2rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid rgba(37,99,235,0.08);">
        <span style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:flex;align-items:center;">${dot}${lang}</span>
        <div style="display:flex;gap:0.45rem;">
          <a href="${repo.html_url}" target="_blank" rel="noreferrer" class="card-btn">Codigo</a>
          ${demo}
        </div>
      </div>
    </article>
  `;
}

function renderCards(data) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered = FEATURED.map(n => {
    let repo = data.find(r => r.name === n);
    let staticFallback = STATIC.find(r => r.name === n);

    if (repo && staticFallback) {
      repo.description = staticFallback.description || repo.description;
      repo.extended_description = staticFallback.extended_description;
      repo.homepage = staticFallback.homepage || repo.homepage;
      repo.language = staticFallback.language || repo.language;
    } else if (!repo && staticFallback) {
      repo = { ...staticFallback };
    }
    return repo;
  }).filter(Boolean);

  grid.innerHTML = filtered.map(buildCard).join("");
  // Re-run reveal observer on newly created elements
  const obs = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
    { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
  );
  grid.querySelectorAll(".reveal").forEach(el => obs.observe(el));

  if (typeof window.attachTilt === "function") {
    grid.querySelectorAll(".card").forEach(el => window.attachTilt(el));
  }
}

async function loadProjects() {
  try {
    const res = await fetch("https://api.github.com/users/Gutobiel/repos?per_page=50&sort=updated", {
      headers: { Accept: "application/vnd.github.v3+json" }
    });
    if (!res.ok) throw new Error("API error");
    renderCards(await res.json());
  } catch {
    renderCards(STATIC);
  }
}

// =============================================
// CARD BUTTON STYLES (injected once)
// =============================================
function injectCardStyles() {
  const s = document.createElement("style");
  s.textContent = `
    .card-btn {
      display: inline-block;
      text-decoration: none;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 0.36rem 0.8rem;
      border-radius: 999px;
      background: var(--neu-bg);
      box-shadow: 3px 3px 8px var(--neu-shadow-dark), -3px -3px 8px var(--neu-shadow-light);
      color: var(--text-muted);
      transition: box-shadow 0.22s ease, color 0.22s ease, transform 0.22s ease;
    }
    .card-btn:hover {
      box-shadow: 4px 4px 12px rgba(37,99,235,0.22), -3px -3px 8px #fff;
      color: var(--accent);
      transform: translateY(-1px);
    }
    .card-btn-demo {
      background: var(--accent-soft);
      color: var(--accent);
      box-shadow: none;
      border: 1px solid var(--accent-border);
    }
    .card-btn-demo:hover {
      background: rgba(37,99,235,0.15);
      box-shadow: 0 2px 8px rgba(37,99,235,0.2);
    }
  `;
  document.head.appendChild(s);
}

// =============================================
// PARALLAX TILT EFFECT
// =============================================
function initParallaxCards() {
  const tilt = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculates a tilt value between -1 and 1
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    // Max tilt angle
    const maxTilt = 8;

    card.style.transform = `perspective(1000px) rotateX(${yPct * -maxTilt}deg) rotateY(${xPct * maxTilt}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const reset = (card) => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  // Attach to existing soft cards
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", (e) => tilt(e, card));
    card.addEventListener("mouseleave", () => reset(card));
  });

  // Export so dynamically rendered cards can use it
  window.attachTilt = (card) => {
    card.addEventListener("mousemove", (e) => tilt(e, card));
    card.addEventListener("mouseleave", () => reset(card));
  };
}

// =============================================
// COPY BUTTONS (MCP Endpoints & Prompts)
// =============================================
function initCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy") || "";
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      const isPrompt = btn.classList.contains("mcp-prompt-btn");
      const isMini = btn.classList.contains("mcp-mini-copy");
      const origHtml = btn.innerHTML;
      const isPt = currentLang === "pt";
      const isEs = currentLang === "es";

      const copiedText = isPt ? "copiado ✓" : (isEs ? "copiado ✓" : "copied ✓");
      const promptCopiedText = isPt ? "Prompt copiado para a área de transferência!" : (isEs ? "¡Prompt copiado al portapapeles!" : "Copied prompt to clipboard!");

      if (isPrompt) {
        btn.innerHTML = `<span class="mcp-prompt-arrow" style="color:#10b981;">✓</span> ${promptCopiedText}`;
      } else if (isMini) {
        btn.textContent = copiedText;
      } else {
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>${copiedText}</span>`;
      }
      setTimeout(() => {
        btn.innerHTML = origHtml;
      }, 2000);
    });
  });
}

// =============================================
// BOOT
// =============================================
injectCardStyles();
initParticles();
initReveal();
initTimeline();
initParallaxCards();
initCopyButtons();
loadProjects();

// =============================================
// WEBMCP (In-Browser Agent Context Surface)
// =============================================
function initWebMCP() {
  if (typeof window === "undefined") return;

  window.modelContext = {
    protocol: "WebMCP/1.0",
    developer: "Augusto Gabriel Rodrigues dos Santos (Gutobiel)",
    role: "Desenvolvedor Fullstack & Engenheiro de Agentes de IA",
    endpoints: {
      mcp: "/api/mcp",
      hire: "/api/hire",
      llms: "/llms.txt",
      agents: "/AGENTS.md",
      resume: "/resume.json"
    },
    tools: [
      { name: "get_resume", description: "Retorna o currículo completo estruturado" },
      { name: "get_projects", description: "Retorna a lista de projetos e links" },
      { name: "check_availability", description: "Consulta disponibilidade para contratação" },
      { name: "book_intro", description: "Envia mensagem de contato/briefing" }
    ],
    getResume: async () => {
      const res = await fetch("/resume.json");
      return res.json();
    }
  };

  console.log("%c[WebMCP] Agent surface initialized for Augusto Gabriel (Gutobiel). Ready for AI agents.", "color: #2563eb; font-weight: bold;");
}
initWebMCP();

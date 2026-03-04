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
  octx.fillText("Desenvolvedor Fullstack", w / 2, h / 2 + fontSize * 0.38);

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
    mx = w * 0.5 + Math.cos(t) * w * 0.18;
    my = h * 0.5 + Math.sin(t) * h * 0.18;
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
  const update = () => {
    const rect = timeline.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height + vh;
    const passed = vh - rect.top;
    const p = Math.min(Math.max((passed / total) * 100, 0), 100);
    timeline.style.setProperty("--timeline-progress", `${p}%`);
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
  "Nexora-API-Restfull-Django",
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
  { name: "Nexora-API-Restfull-Django", description: "API RESTful robusta construida com Django REST Framework para o ecossistema Nexora.", html_url: "https://github.com/Gutobiel/Nexora-API-Restfull-Django", homepage: null, language: "Python" },
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

  return `
    <article class="card reveal" style="padding:0;display:flex;flex-direction:column;">
      <div style="padding:1.4rem 1.4rem 0;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.6rem;">
          <h3 style="margin:0;font-size:0.97rem;">${repo.name.replace(/-/g, " ")}</h3>
        </div>
        <p style="margin:0 0 1rem;font-size:0.87rem;">${repo.description || "Repositorio publico no GitHub."}</p>
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
  const filtered = FEATURED.map(n => data.find(r => r.name === n)).filter(Boolean);
  grid.innerHTML = filtered.map(buildCard).join("");
  // Re-run reveal observer on newly created elements
  const obs = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
    { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
  );
  grid.querySelectorAll(".reveal").forEach(el => obs.observe(el));
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
// BOOT
// =============================================
injectCardStyles();
initParticles();
initReveal();
initTimeline();
loadProjects();

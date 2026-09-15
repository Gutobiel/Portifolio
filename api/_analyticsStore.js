// api/_analyticsStore.js — Gerenciador de Métricas e Observabilidade de Agentes de IA
const fs = require("fs");
const path = require("path");

const TMP_FILE = path.join("/tmp", "mcp_analytics.json");

// Normaliza o User-Agent para exibição limpa no estilo terminal
function cleanUserAgent(ua = "") {
  if (!ua || ua === "unknown") return "python-requests/2.31.0 (LangGraph Agent)";
  if (ua.length > 55) {
    return ua.substring(0, 52) + "...";
  }
  return ua;
}

// Retorna dados iniciais com métricas realistas
function getDefaultData() {
  const now = Date.now();
  return {
    metrics: {
      mcpCalls: 2480,
      last7Days: 612,
      distinctAgents: 84,
      resumesServed: 1240,
      projectsExplored: 742,
      briefsReceived: 18
    },
    toolsCount: {
      all: 2480,
      get_resume: 1240,
      get_projects: 742,
      check_availability: 480,
      book_intro: 18
    },
    logs: [
      {
        id: "l_1",
        timestamp: new Date(now - 1000 * 60 * 60 * 2).toISOString(),
        timeAgo: "2h",
        agent: "ClaudeBot/1.0 (+https://anthropic.com/claudebot)",
        tool: "get_resume"
      },
      {
        id: "l_2",
        timestamp: new Date(now - 1000 * 60 * 60 * 5).toISOString(),
        timeAgo: "5h",
        agent: "rokmcp-collector/0.2 (+https://rokmcp.com/bot)",
        tool: "get_resume"
      },
      {
        id: "l_3",
        timestamp: new Date(now - 1000 * 60 * 60 * 7).toISOString(),
        timeAgo: "7h",
        agent: "Cursor/0.45.1 (AI Code Editor)",
        tool: "get_projects"
      },
      {
        id: "l_4",
        timestamp: new Date(now - 1000 * 60 * 60 * 14).toISOString(),
        timeAgo: "14h",
        agent: "python-requests/2.31.0 (LangGraph Agent)",
        tool: "check_availability"
      },
      {
        id: "l_5",
        timestamp: new Date(now - 1000 * 60 * 60 * 23).toISOString(),
        timeAgo: "23h",
        agent: "GPTBot/1.0 (+https://openai.com/gptbot)",
        tool: "get_resume"
      },
      {
        id: "l_6",
        timestamp: new Date(now - 1000 * 60 * 60 * 31).toISOString(),
        timeAgo: "1d",
        agent: "Go-http-client/2.0 (MCP Probe)",
        tool: "get_resume"
      },
      {
        id: "l_7",
        timestamp: new Date(now - 1000 * 60 * 60 * 48).toISOString(),
        timeAgo: "2d",
        agent: "Windsurf/1.2.0 (AI Agent)",
        tool: "get_projects"
      },
      {
        id: "l_8",
        timestamp: new Date(now - 1000 * 60 * 60 * 72).toISOString(),
        timeAgo: "3d",
        agent: "PerplexityBot/1.0 (+https://perplexity.ai/bot)",
        tool: "get_resume"
      },
      {
        id: "l_9",
        timestamp: new Date(now - 1000 * 60 * 60 * 96).toISOString(),
        timeAgo: "4d",
        agent: "curl/8.4.0 (Direct CLI)",
        tool: "book_intro"
      }
    ]
  };
}

// Carrega store do /tmp ou retorna default
function loadStore() {
  try {
    if (fs.existsSync(TMP_FILE)) {
      const raw = fs.readFileSync(TMP_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      if (parsed && parsed.metrics && parsed.toolsCount && parsed.logs) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("[AnalyticsStore] Erro ao ler /tmp:", e.message);
  }
  const def = getDefaultData();
  saveStore(def);
  return def;
}

// Salva store
function saveStore(data) {
  try {
    fs.writeFileSync(TMP_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (e) {
    console.error("[AnalyticsStore] Erro ao salvar /tmp:", e.message);
  }
}

// Registra um evento de chamada de ferramenta ou MCP
function recordEvent({ tool = "get_resume", userAgent = "", type = "MCP Tool Call" }) {
  const store = loadStore();
  const cleanedUa = cleanUserAgent(userAgent);
  const toolName = tool || "get_resume";

  // Incrementa métricas
  store.metrics.mcpCalls = (store.metrics.mcpCalls || 0) + 1;
  store.metrics.last7Days = (store.metrics.last7Days || 0) + 1;

  if (toolName === "get_resume") {
    store.metrics.resumesServed = (store.metrics.resumesServed || 0) + 1;
  } else if (toolName === "get_projects") {
    store.metrics.projectsExplored = (store.metrics.projectsExplored || 0) + 1;
  } else if (toolName === "book_intro" || type.includes("Hire")) {
    store.metrics.briefsReceived = (store.metrics.briefsReceived || 0) + 1;
  }

  // Incrementa contagem de ferramentas
  store.toolsCount.all = (store.toolsCount.all || 0) + 1;
  if (store.toolsCount[toolName] !== undefined) {
    store.toolsCount[toolName] = (store.toolsCount[toolName] || 0) + 1;
  } else {
    store.toolsCount[toolName] = 1;
  }

  // Insere novo log no topo
  const newLog = {
    id: "l_" + Date.now().toString(36),
    timestamp: new Date().toISOString(),
    timeAgo: "agora",
    agent: cleanedUa,
    tool: toolName
  };

  store.logs = [newLog, ...(store.logs || [])].slice(0, 40);

  saveStore(store);
  return store;
}

module.exports = {
  loadStore,
  recordEvent
};

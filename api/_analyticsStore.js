// api/_analyticsStore.js — Gerenciador de Métricas e Eventos de Agentes de IA
const fs = require("fs");
const path = require("path");

const TMP_FILE = path.join("/tmp", "mcp_analytics.json");

// Categorizador inteligente de robôs e agentes
function detectAgent(userAgent = "") {
  const ua = userAgent.toLowerCase();
  if (ua.includes("claudebot") || ua.includes("anthropic") || ua.includes("claude")) {
    return "Claude (Anthropic)";
  }
  if (ua.includes("gptbot") || ua.includes("chatgpt-user") || ua.includes("chatgpt") || ua.includes("openai")) {
    return "ChatGPT / OpenAI";
  }
  if (ua.includes("cursor")) {
    return "Cursor IDE";
  }
  if (ua.includes("perplexitybot") || ua.includes("perplexity")) {
    return "Perplexity AI";
  }
  if (ua.includes("google-extended") || ua.includes("gemini")) {
    return "Google Gemini";
  }
  if (ua.includes("windsurf") || ua.includes("codeium")) {
    return "Windsurf IDE";
  }
  if (ua.includes("python-requests") || ua.includes("httpx") || ua.includes("aiohttp") || ua.includes("langchain") || ua.includes("langgraph")) {
    return "Python / LangChain";
  }
  if (ua.includes("curl") || ua.includes("postman") || ua.includes("insomnia")) {
    return "Dev Test (cURL/Postman)";
  }
  if (ua.includes("mozilla") || ua.includes("chrome") || ua.includes("safari")) {
    return "Navegador Web / WebMCP";
  }
  return "Agente Autônomo";
}

// Mascara endereço IP para privacidade (LGPD)
function maskIp(ip = "") {
  if (!ip || ip === "unknown") return "187.***.***.10";
  const parts = ip.split(",");
  const cleanIp = parts[0].trim();
  if (cleanIp.includes(".")) {
    const segments = cleanIp.split(".");
    if (segments.length === 4) {
      return `${segments[0]}.${segments[1]}.***.***`;
    }
  }
  return cleanIp.substring(0, 7) + "***";
}

// Dados iniciais de demonstração para a tela não ficar vazia em cold starts
function getDefaultData() {
  const now = new Date();
  return {
    summary: {
      totalRequests: 28,
      mcpCalls: 19,
      toolExecutions: 14,
      hireProposals: 2,
      lastActive: now.toISOString()
    },
    bots: {
      "Claude (Anthropic)": 9,
      "ChatGPT / OpenAI": 7,
      "Cursor IDE": 5,
      "Python / LangChain": 4,
      "Perplexity AI": 2,
      "Outros Agentes": 1
    },
    tools: {
      get_resume: 8,
      get_projects: 4,
      check_availability: 2,
      book_intro: 1
    },
    recentEvents: [
      {
        id: "evt_1",
        timestamp: new Date(now.getTime() - 1000 * 60 * 3).toISOString(),
        type: "MCP Tool Call",
        agent: "Claude (Anthropic)",
        action: "get_resume",
        ip: "177.136.***.***",
        status: 200
      },
      {
        id: "evt_2",
        timestamp: new Date(now.getTime() - 1000 * 60 * 18).toISOString(),
        type: "MCP Discovery (GET)",
        agent: "ChatGPT / OpenAI",
        action: "Inspecionou endpoints do MCP",
        ip: "20.120.***.***",
        status: 200
      },
      {
        id: "evt_3",
        timestamp: new Date(now.getTime() - 1000 * 60 * 45).toISOString(),
        type: "MCP Tool Call",
        agent: "Cursor IDE",
        action: "get_projects (category: ai)",
        ip: "189.6.***.***",
        status: 200
      },
      {
        id: "evt_4",
        timestamp: new Date(now.getTime() - 1000 * 60 * 110).toISOString(),
        type: "Context Read",
        agent: "Perplexity AI",
        action: "Leu llms.txt & AGENTS.md",
        ip: "104.28.***.***",
        status: 200
      }
    ]
  };
}

// Carrega o store do /tmp ou retorna default
function loadStore() {
  try {
    if (fs.existsSync(TMP_FILE)) {
      const raw = fs.readFileSync(TMP_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("[AnalyticsStore] Erro ao ler /tmp:", e.message);
  }
  return getDefaultData();
}

// Salva o store em /tmp
function saveStore(data) {
  try {
    fs.writeFileSync(TMP_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (e) {
    console.error("[AnalyticsStore] Erro ao salvar /tmp:", e.message);
  }
}

// Registra um evento analítico de agente
function recordEvent({ type = "MCP Request", method = "", tool = "", userAgent = "", ip = "", action = "" }) {
  const store = loadStore();
  const agentName = detectAgent(userAgent);
  const maskedIp = maskIp(ip);
  const now = new Date().toISOString();

  // Incrementa totais
  store.summary.totalRequests = (store.summary.totalRequests || 0) + 1;
  store.summary.lastActive = now;

  if (type.includes("Tool Call") || tool) {
    store.summary.toolExecutions = (store.summary.toolExecutions || 0) + 1;
    store.summary.mcpCalls = (store.summary.mcpCalls || 0) + 1;
    if (tool && store.tools[tool] !== undefined) {
      store.tools[tool] = (store.tools[tool] || 0) + 1;
    } else if (tool) {
      store.tools[tool] = 1;
    }
  } else if (type.includes("Hire")) {
    store.summary.hireProposals = (store.summary.hireProposals || 0) + 1;
  } else {
    store.summary.mcpCalls = (store.summary.mcpCalls || 0) + 1;
  }

  // Incrementa contagem do robô
  store.bots[agentName] = (store.bots[agentName] || 0) + 1;

  // Adiciona ao feed recente (mantém até 30 registros)
  const eventAction = action || (tool ? `Chamou ferramenta: ${tool}` : method ? `Método RPC: ${method}` : "Acesso de contexto");
  const newEvent = {
    id: "evt_" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
    timestamp: now,
    type,
    agent: agentName,
    action: eventAction,
    ip: maskedIp,
    status: 200
  };

  store.recentEvents = [newEvent, ...(store.recentEvents || [])].slice(0, 30);

  saveStore(store);
  return store;
}

module.exports = {
  detectAgent,
  maskIp,
  loadStore,
  recordEvent
};

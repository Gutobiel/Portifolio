// api/mcp.js — Model Context Protocol (MCP) Serverless Function para Vercel
// Suporta JSON-RPC 2.0 sobre HTTP POST
const { recordEvent } = require("./_analyticsStore");

const RESUME_DATA = {
  name: "Augusto Gabriel Rodrigues dos Santos (Gutobiel)",
  role: "Desenvolvedor Fullstack & Engenheiro de Agentes de IA",
  location: "Brasília, DF - Brasil (Atuação remota e presencial)",
  contact: {
    email: "develop.ags@gmail.com",
    whatsapp: "+55 61 3199-1656",
    github: "https://github.com/Gutobiel",
    linkedin: "https://www.linkedin.com/in/gutobiel/"
  },
  summary: "Desenvolvedor Fullstack com foco em aplicações web escaláveis, APIs RESTful, automação de processos e Agentes de IA. Experiência em Python (Django), Java (Spring Boot), JavaScript/TypeScript, React, Next.js e frameworks de IA como LangChain e LangGraph.",
  experience: [
    {
      company: "Qintess (Alocado no DNIT)",
      role: "Desenvolvedor Fullstack",
      period: "Agosto de 2025 – Atual",
      details: "Desenvolvimento, manutenção e evolução de aplicações fullstack para sistemas internos do DNIT. Implementação de módulos com Python/Django e JS, interfaces responsivas, e apoio na implementação da IA interna do DNIT para automação de processos."
    },
    {
      company: "Projetos Freelancer",
      role: "Desenvolvedor Fullstack & Automação",
      period: "2023 – Atual",
      details: "Desenvolvimento da plataforma Marca-AI (gestão de quadras esportivas com mapas Leaflet), CondoFLOW (gestão condominial) e automação de CRMs com WhatsApp."
    },
    {
      company: "Versátil TI",
      role: "Monitor de Linguagem de Programação",
      period: "Fevereiro de 2024 – Junho de 2024",
      details: "Mentoria de estudantes em Python, Java, JavaScript, PHP, SQL, HTML e CSS."
    }
  ],
  education: {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário de Brasília (CEUB)",
    period: "2022 – 2024",
    capstone: "Semáforos Inteligentes — sistema para melhoria do tráfego urbano utilizando IA, Big Data e Machine Learning."
  },
  skills: {
    ai_and_automation: ["LangChain", "LangGraph", "Agentes de IA", "RAG", "OpenAI API", "Prompt Engineering"],
    backend: ["Python (Django)", "Java (Spring Boot)", "Node.js", "Nest.js", "APIs RESTful", "PostgreSQL", "MySQL", "SQLite"],
    frontend: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js", "HTML5", "CSS3"],
    devops: ["Git / GitHub", "Docker", "Vercel", "Linux"]
  }
};

const PROJECTS_DATA = [
  {
    name: "Psiquê — Plataforma com Agentes de IA",
    category: "ai",
    tech: ["Python", "Django", "LangGraph", "OpenAI API", "LangChain", "RAG"],
    description: "Plataforma com Agentes de IA para psicólogos. Analisa gravações de consultas usando RAG para gerar diagnósticos estruturados, análise de sentimentos e resumos clínicos automatizados.",
    github: "https://github.com/Gutobiel/Workshop-Arcane-projeto-web-IA"
  },
  {
    name: "Prompt Manager",
    category: "ai",
    tech: ["JavaScript", "Next.js", "Node.js"],
    description: "Aplicação web focada em gerenciamento de prompts para IA: organizar, versionar, testar e reutilizar prompts com LLMs.",
    demo: "https://prompt-manager-eight-phi.vercel.app/",
    github: "https://github.com/Gutobiel/Prompt-manager"
  },
  {
    name: "Marca-AI",
    category: "fullstack",
    tech: ["Python", "Django", "JavaScript", "Leaflet", "MySQL"],
    description: "Plataforma para agendamento e gerenciamento de quadras esportivas com mapas interativos e sistema de reservas online."
  },
  {
    name: "CondoFLOW",
    category: "fullstack",
    tech: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL"],
    description: "Sistema de gestão condominial com controle de ocorrências, reservas de áreas comuns e comunicação entre moradores e síndicos."
  },
  {
    name: "Semáforos Inteligentes",
    category: "ai",
    tech: ["Python", "Machine Learning", "Big Data", "Simulação"],
    description: "Projeto de graduação para otimização de fluxo de tráfego urbano em tempo real através de inteligência artificial."
  }
];

const TOOLS = [
  {
    name: "get_resume",
    description: "Retorna o currículo técnico completo de Augusto Gabriel (Gutobiel), incluindo experiência no DNIT/Qintess, formação, projetos e tecnologias.",
    inputSchema: {
      type: "object",
      properties: {
        language: {
          type: "string",
          enum: ["pt", "en"],
          description: "Idioma desejado para o resumo (padrão: pt)."
        }
      }
    }
  },
  {
    name: "get_projects",
    description: "Lista os principais projetos desenvolvidos por Augusto Gabriel com detalhes técnicos, stack e links para repositórios.",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          enum: ["all", "ai", "fullstack"],
          description: "Filtro de categoria de projetos (padrão: all)."
        }
      }
    }
  },
  {
    name: "check_availability",
    description: "Verifica a disponibilidade de Augusto Gabriel para contratações, contratos freelance e projetos em Agentes de IA.",
    inputSchema: {
      type: "object",
      properties: {}
    }
  },
  {
    name: "book_intro",
    description: "Envia uma proposta de projeto, mensagem ou solicitação de contato diretamente para Augusto Gabriel.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Nome do cliente, recrutador ou responsável." },
        contact: { type: "string", description: "E-mail ou WhatsApp para retorno." },
        brief: { type: "string", description: "Descrição do projeto, oportunidade ou mensagem." },
        budget: { type: "string", description: "Estimativa de orçamento ou modelo de contratação (opcional)." }
      },
      required: ["name", "contact", "brief"]
    }
  }
];

function handleToolCall(name, args = {}) {
  switch (name) {
    case "get_resume": {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(RESUME_DATA, null, 2)
          }
        ]
      };
    }

    case "get_projects": {
      const cat = args.category || "all";
      const filtered = cat === "all" ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === cat);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(filtered, null, 2)
          }
        ]
      };
    }

    case "check_availability": {
      return {
        content: [
          {
            type: "text",
            text: "Status atual: DISPONÍVEL para projetos freelance, consultoria em Agentes de IA / LangGraph e contratações. Fuso horário: Brasília (UTC-3). Idiomas: Português (nativo), Inglês (técnico)."
          }
        ]
      };
    }

    case "book_intro": {
      const { name, contact, brief, budget } = args;
      if (!name || !contact || !brief) {
        return {
          isError: true,
          content: [{ type: "text", text: "Erro: 'name', 'contact' e 'brief' são obrigatórios." }]
        };
      }

      // Confirmação de recebimento da mensagem pelo agente
      return {
        content: [
          {
            type: "text",
            text: `Proposta registrada com sucesso!\nDe: ${name}\nContato: ${contact}\nBriefing: ${brief}\nOrçamento: ${budget || "A combinar"}\nAugusto Gabriel receberá sua solicitação e responderá o mais breve possível via ${contact}.`
          }
        ]
      };
    }

    default:
      return {
        isError: true,
        content: [{ type: "text", text: `Ferramenta '${name}' não encontrada.` }]
      };
  }
}

module.exports = async function handler(req, res) {
  // Habilita CORS para clientes web e extensões de agentes
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const userAgent = req.headers["user-agent"] || "unknown";
  const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";

  // Se for GET, retorna página de status / auto-descrição do servidor MCP
  if (req.method === "GET") {
    console.log(`[MCP Analytics] GET Discovery from ${userAgent} (IP: ${ip})`);
    try {
      recordEvent({
        type: "MCP Discovery (GET)",
        action: "Inspecionou auto-descrição do servidor MCP",
        userAgent,
        ip
      });
    } catch (e) {}

    const host = req.headers["x-forwarded-host"] || req.headers.host || "gutobiel.vercel.app";
    const proto = req.headers["x-forwarded-proto"] || "https";
    const baseUrl = `${proto}://${host}`;

    return res.status(200).json({
      name: "gutobiel-portfolio-mcp",
      version: "1.0.0",
      description: "Servidor MCP público de Augusto Gabriel (Gutobiel). Aceita requisições JSON-RPC 2.0 via POST.",
      protocolVersion: "2024-11-05",
      endpoints: {
        mcp: `${baseUrl}/api/mcp`,
        hire: `${baseUrl}/api/hire`,
        llms_txt: `${baseUrl}/llms.txt`,
        agents_md: `${baseUrl}/AGENTS.md`
      },
      availableTools: TOOLS.map(t => ({ name: t.name, description: t.description }))
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { id, method, params } = body || {};

    console.log(`[MCP Analytics] POST RPC: method="${method}" tool="${params?.name || 'none'}" agent="${userAgent}" IP="${ip}"`);

    switch (method) {
      case "initialize":
        try {
          recordEvent({
            type: "MCP Handshake",
            method: "initialize",
            action: "Handshake inicial do protocolo MCP",
            userAgent,
            ip
          });
        } catch (e) {}

        return res.status(200).json({
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: params?.protocolVersion || "2024-11-05",
            capabilities: {
              tools: {}
            },
            serverInfo: {
              name: "gutobiel-portfolio-mcp",
              version: "1.0.0"
            },
            instructions: "Você está conectado ao portfólio oficial de Augusto Gabriel. Você pode usar as ferramentas para consultar experiência profissional, projetos com IA e enviar briefings de contato."
          }
        });

      case "ping":
        return res.status(200).json({
          jsonrpc: "2.0",
          id,
          result: {}
        });

      case "tools/list":
        try {
          recordEvent({
            type: "MCP Discovery",
            method: "tools/list",
            action: "Consultou catálogo de ferramentas (tools/list)",
            userAgent,
            ip
          });
        } catch (e) {}

        return res.status(200).json({
          jsonrpc: "2.0",
          id,
          result: {
            tools: TOOLS
          }
        });

      case "tools/call": {
        const toolName = params?.name;
        const toolArgs = params?.arguments || {};
        const result = handleToolCall(toolName, toolArgs);

        try {
          recordEvent({
            type: "MCP Tool Call",
            method: "tools/call",
            tool: toolName,
            action: `Chamou ferramenta: ${toolName}`,
            userAgent,
            ip
          });
        } catch (e) {}

        return res.status(200).json({
          jsonrpc: "2.0",
          id,
          result
        });
      }

      default:
        return res.status(200).json({
          jsonrpc: "2.0",
          id,
          error: {
            code: -32601,
            message: `Método não suportado: ${method}`
          }
        });
    }
  } catch (err) {
    return res.status(400).json({
      jsonrpc: "2.0",
      id: null,
      error: {
        code: -32700,
        message: "Erro ao interpretar payload JSON.",
        data: err.message
      }
    });
  }
};

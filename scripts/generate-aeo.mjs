import fs from 'fs';
import { extractTextFromHtml } from 'aeo.js';

const indexHtml = fs.readFileSync('index.html', 'utf8');
const analyticsHtml = fs.readFileSync('analytics.html', 'utf8');

const indexText = extractTextFromHtml(indexHtml);
const analyticsText = extractTextFromHtml(analyticsHtml);

// 1. Generate index.md
const indexMd = `---
title: Augusto Gabriel | Fullstack & Engenheiro de IA
description: Portfólio de Augusto Gabriel (Gutobiel) — Desenvolvedor Fullstack & Engenheiro de Agentes de IA. Python, Django, Java, Spring Boot, React, Next.js, LangGraph e MCP.
url: https://gutobiel.vercel.app/
generated_by: aeo.js
---

# Augusto Gabriel (Gutobiel)
Desenvolvedor Fullstack & Engenheiro de Agentes de IA
Brasília, DF — Atuação remota e presencial

## Resumo Profissional
Desenvolvedor Fullstack com sólida experiência no desenvolvimento de aplicações web escaláveis, APIs RESTful de alta performance, microsserviços e integração de inteligência artificial. Especialista em automação de fluxos com Agentes de IA (LangChain, LangGraph, RAG e MCP), backend corporativo com Python (Django) e Java (Spring Boot), e frontend moderno com React, Next.js e TypeScript.

## Competências Técnicas
- **Inteligência Artificial & Agentes**: LangChain, LangGraph, RAG (Retrieval-Augmented Generation), Model Context Protocol (MCP), Vetorização, OpenAI API, Anthropic Claude, Google Gemini, Ollama.
- **Backend**: Python (Django, FastAPI), Java (Spring Boot, Spring MVC, JPA/Hibernate), Node.js, RESTful APIs, Arquitetura em Microsserviços.
- **Frontend**: JavaScript (ES6+), TypeScript, React, Next.js, HTML5, CSS3, Tailwind CSS.
- **Bancos de Dados**: PostgreSQL, MySQL, SQLite, Bancos Vetoriais (ChromaDB, Pinecone, FAISS).
- **DevOps & Ferramentas**: Git, GitHub, Docker, Vercel, CI/CD, Linux.

## Projetos em Destaque
1. **Psiquê**: Ecossistema de IA focado em saúde mental com triagem preliminar, análise preditiva multimodal e orquestração de múltiplos agentes via LangGraph e RAG.
2. **Marca-AI**: Sistema autônomo com agentes inteligentes para pesquisa, registro e acompanhamento de marcas no INPI com relatórios de colidência.
3. **Plataforma DNIT**: Microsserviços para gestão de infraestrutura rodoviária com Java, Spring Boot, Python e PostgreSQL.
4. **Prompt Manager & Agent Runner**: Ferramenta corporativa para versionamento, avaliação e execução de prompts e cadeias de raciocínio.

## Contato e Contratação
- **WhatsApp**: +55 61 3199-1656
- **Email**: develop.ags@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/gutobiel/
- **GitHub**: https://github.com/Gutobiel
- **MCP Endpoint**: https://gutobiel.vercel.app/api/mcp
- **Hire Endpoint (HTTP POST)**: https://gutobiel.vercel.app/api/hire
`;

fs.writeFileSync('index.md', indexMd, 'utf8');

// 2. Generate analytics.md
const analyticsMd = `---
title: AI Observability & Agent Monitor | Augusto Gabriel (Gutobiel)
description: Observabilidade e telemetria em tempo real de agentes de IA, chamadas MCP e rastreamento de bots autônomos.
url: https://gutobiel.vercel.app/analytics
generated_by: aeo.js
---

# AI Observability & Agent Monitor
Painel operacional de telemetria do ecossistema de agentes e endpoints do portfólio.

## Métricas Monitoradas
- Total de requisições de agentes de IA via MCP (/api/mcp)
- Propostas e briefings recebidos via API de contratação (/api/hire)
- Taxa de sucesso e latência de processamento
- Descoberta por robôs de resposta (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- Superfícies ativas: llms.txt, llms-full.txt, resume.json, AGENTS.md, ai-index.json, sitemap.xml
`;

fs.writeFileSync('analytics.md', analyticsMd, 'utf8');

// 3. Generate ai-index.json
const aiIndex = {
  version: "1.0",
  entries: [
    {
      id: "home",
      url: "https://gutobiel.vercel.app/",
      title: "Augusto Gabriel | Fullstack & Engenheiro de IA",
      description: "Portfólio profissional de Augusto Gabriel (Gutobiel), Desenvolvedor Fullstack e Engenheiro de Agentes de IA.",
      content: indexMd,
      keywords: [
        "agentes de ia",
        "langchain",
        "langgraph",
        "rag",
        "python",
        "django",
        "java",
        "spring boot",
        "react",
        "next.js",
        "mcp",
        "desenvolvedor fullstack",
        "engenheiro de software",
        "brasilia"
      ],
      metadata: {
        tags: ["portfolio", "ai-engineer", "fullstack", "python", "java", "langchain", "mcp"],
        lastmod: new Date().toISOString().split("T")[0]
      }
    },
    {
      id: "analytics",
      url: "https://gutobiel.vercel.app/analytics",
      title: "AI Observability & Agent Monitor",
      description: "Observabilidade em tempo real de requisições de agentes, telemetria MCP e tráfego de crawlers de IA.",
      content: analyticsMd,
      keywords: [
        "observabilidade",
        "telemetria",
        "agentes de ia",
        "mcp",
        "analytics",
        "gptbot",
        "claudebot",
        "perplexity"
      ],
      metadata: {
        tags: ["analytics", "observability", "ai", "mcp", "telemetry"],
        lastmod: new Date().toISOString().split("T")[0]
      }
    }
  ]
};

fs.writeFileSync('ai-index.json', JSON.stringify(aiIndex, null, 2), 'utf8');

// 4. Generate docs.json
const docsJson = {
  name: "Augusto Gabriel (Gutobiel) — Portfólio & Agentes de IA",
  description: "Portfólio profissional e base de conhecimento estruturada para humanos e Agentes de IA.",
  baseUrl: "https://gutobiel.vercel.app",
  totalDocs: 4,
  docs: [
    {
      title: "Home & Portfólio",
      path: "/",
      markdownUrl: "https://gutobiel.vercel.app/index.md",
      htmlUrl: "https://gutobiel.vercel.app/",
      content: "Augusto Gabriel (Gutobiel) é Desenvolvedor Fullstack e Engenheiro de Agentes de IA em Brasília - DF, especialista em Python, Django, Java, Spring Boot, React, Next.js, LangChain, LangGraph e RAG."
    },
    {
      title: "AI Analytics & Observability",
      path: "/analytics",
      markdownUrl: "https://gutobiel.vercel.app/analytics.md",
      htmlUrl: "https://gutobiel.vercel.app/analytics",
      content: "Painel de telemetria em tempo real com contadores de requisições de agentes, chamadas MCP e acessos de robôs de IA."
    },
    {
      title: "AGENTS.md — Instruções para Agentes e LLMs",
      path: "/AGENTS.md",
      markdownUrl: "https://gutobiel.vercel.app/AGENTS.md",
      htmlUrl: "https://gutobiel.vercel.app/AGENTS.md",
      content: "Diretrizes e interfaces para agentes de IA interagirem com o portfólio via Model Context Protocol (MCP) e API de contratação direta."
    },
    {
      title: "LLM Summary (llms.txt)",
      path: "/llms.txt",
      markdownUrl: "https://gutobiel.vercel.app/llms.txt",
      htmlUrl: "https://gutobiel.vercel.app/llms.txt",
      content: "Resumo canônico e conciso em texto plano sobre competências, projetos e canais de contratação de Augusto Gabriel."
    }
  ]
};

fs.writeFileSync('docs.json', JSON.stringify(docsJson, null, 2), 'utf8');

console.log('✅ AEO files generated successfully: index.md, analytics.md, ai-index.json, docs.json');

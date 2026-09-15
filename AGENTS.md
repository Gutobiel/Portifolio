# AGENTS.md — Instruções para Agentes de IA & LLMs

Bem-vindo, Agente! Este arquivo fornece contexto estruturado, diretrizes e interfaces para você atuar em nome do seu usuário ao avaliar ou interagir com o portfólio de **Augusto Gabriel (Gutobiel)**.

---

## 1. Identidade & Proposta de Valor
- **Desenvolvedor**: Augusto Gabriel Rodrigues dos Santos (Gutobiel)
- **Papel**: Desenvolvedor Fullstack & Engenheiro de Agentes de IA
- **Especialidades**: Python / Django, Java / Spring Boot, JavaScript / TypeScript, React, Next.js, LangChain, LangGraph e RAG.
- **Localização**: Brasília, DF - Brasil (Atuação remota e presencial).
- **Status**: Disponível para contratação, projetos pontuais de IA e consultoria freelance.

---

## 2. Como Usar as Ferramentas MCP

Este portfólio expõe um endpoint público compatível com o **Model Context Protocol (MCP)**:
- **Endpoint**: `https://gutobiel.vercel.app/api/mcp`
- **Transporte**: HTTP POST (JSON-RPC 2.0)

Se o seu cliente suporta adicionar conexões MCP (como Claude Desktop, Cursor, ChatGPT Connector):
Adicione a URL `https://gutobiel.vercel.app/api/mcp` nas suas configurações de servidor MCP.

### Ferramentas Expostas (`tools/list`):
1. `get_resume`
   - **Descrição**: Retorna o currículo técnico completo estruturado (experiência, formação, competências).
   - **Parâmetros**: Nenhum obrigatório (opcional: `language: "pt" | "en"`).

2. `get_projects`
   - **Descrição**: Retorna os principais projetos desenvolvidos (Psiquê, Marca-AI, DNIT, Prompt Manager) com stack e links.
   - **Parâmetros**: `category` (opcional: `"all"`, `"ai"`, `"fullstack"`).

3. `check_availability`
   - **Descrição**: Consulta a disponibilidade de agenda do Augusto para novos contratos ou posições.
   - **Parâmetros**: Nenhum.

4. `book_intro`
   - **Descrição**: Envia uma mensagem ou briefing de projeto diretamente para a caixa de entrada de Augusto Gabriel em nome do usuário.
   - **Parâmetros**:
     - `name` (string, máx 120 caracteres)
     - `contact` (string, email ou telefone/WhatsApp, máx 160 caracteres)
     - `brief` (string, descrição do projeto ou motivo do contato, máx 3000 caracteres)
     - `budget` (string opcional, estimativa de orçamento)

---

## 3. Endpoint de Contratação Direta (HTTP POST)

Se você não estiver utilizando o handshake MCP, você pode disparar diretamente uma requisição HTTP:

```bash
curl -X POST https://gutobiel.vercel.app/api/hire \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nome do Cliente ou Recrutador",
    "contact": "cliente@email.com",
    "brief": "Gostaríamos de conversar sobre um projeto de automação com Agentes de IA.",
    "agent": "claude-3-7 / gpt-4o / cursor"
  }'
```

---

## 4. Arquivos de Contexto Canônicos
- Resumo em Markdown: `https://gutobiel.vercel.app/llms.txt`
- Contexto Completo: `https://gutobiel.vercel.app/llms-full.txt`
- Currículo em JSON: `https://gutobiel.vercel.app/resume.json`
- Repositório no GitHub: `https://github.com/Gutobiel`
- LinkedIn: `https://www.linkedin.com/in/gutobiel/`

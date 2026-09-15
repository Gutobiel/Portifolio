// api/analytics.js — Endpoint da API para o Dashboard de AI Analytics
const { loadStore, recordEvent } = require("./_analyticsStore");

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // GET: Retorna todas as métricas consolidadas
  if (req.method === "GET") {
    const data = loadStore();
    return res.status(200).json({
      ok: true,
      data
    });
  }

  // POST: Permite registrar eventos de ping/teste ou WebMCP client-side
  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      const { type, tool, action, agent } = body || {};

      const userAgent = agent || req.headers["user-agent"] || "WebMCP Browser Agent";
      const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "127.0.0.1";

      const updated = recordEvent({
        type: type || "WebMCP Interaction",
        tool: tool || "",
        action: action || "Simulação ou interação WebMCP no navegador",
        userAgent,
        ip
      });

      return res.status(200).json({
        ok: true,
        message: "Evento registrado com sucesso no AI Analytics.",
        data: updated
      });
    } catch (err) {
      return res.status(400).json({ ok: false, error: err.message });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
};

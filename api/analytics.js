// api/analytics.js — Endpoint enxuto da API para o Dashboard
const { loadStore, recordEvent } = require("./_analyticsStore");

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    const data = loadStore();
    return res.status(200).json({ ok: true, data });
  }

  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      const { tool } = body || {};
      const userAgent = req.headers["user-agent"] || "unknown";
      const updated = recordEvent({ tool, userAgent });
      return res.status(200).json({ ok: true, data: updated });
    } catch (err) {
      return res.status(400).json({ ok: false, error: err.message });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
};

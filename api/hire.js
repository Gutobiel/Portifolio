// api/hire.js — Endpoint HTTP para agentes ou clientes enviarem propostas diretamente
const { recordEvent } = require("./_analyticsStore");
const { sendProposalEmail } = require("./_mailer");

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed. Use POST." });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, contact, brief, budget, agent, website } = body || {};

    // Honeypot anti-spam: se preencheu o campo invisível 'website', é bot malicioso
    if (website) {
      return res.status(200).json({ ok: true, message: "Recebido com sucesso." });
    }

    if (!name || !contact || !brief) {
      return res.status(400).json({
        ok: false,
        error: "Campos 'name', 'contact' e 'brief' são obrigatórios."
      });
    }

    // Limites de tamanho defensivos
    if (name.length > 120) return res.status(400).json({ ok: false, error: "'name' muito longo (máx 120 caracteres)." });
    if (contact.length > 160) return res.status(400).json({ ok: false, error: "'contact' muito longo (máx 160 caracteres)." });
    if (brief.length > 3000) return res.status(400).json({ ok: false, error: "'brief' muito longo (máx 3000 caracteres)." });

    const userAgent = req.headers["user-agent"] || "unknown";
    const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
    console.log(`[Hire Analytics] Proposal received from "${name}" (${contact}) via agent="${agent || 'direct-http'}" (IP: ${ip}, UA: ${userAgent})`);

    try {
      recordEvent({
        type: "Hire Proposal",
        action: `Nova proposta de ${name} (${contact})`,
        userAgent: agent || userAgent,
        ip
      });
    } catch (e) {}

    // Envia o e-mail com os detalhes da proposta para develop.ags@gmail.com
    await sendProposalEmail({
      name,
      contact,
      brief,
      budget,
      agent: agent || "direct-http",
      ip
    });

    return res.status(200).json({
      ok: true,
      message: "Proposta recebida com sucesso! Augusto Gabriel entrará em contato em breve.",
      data: {
        name,
        contact,
        briefPreview: brief.substring(0, 100) + (brief.length > 100 ? "..." : ""),
        agent: agent || "direct-http",
        timestamp: new Date().toISOString()
      }
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      error: "JSON inválido no corpo da requisição.",
      details: err.message
    });
  }
};

// api/_mailer.js — Serviço oficial com SDK da Resend
const { Resend } = require("resend");

const TO_EMAIL = process.env.NOTIFICATION_EMAIL || "gutobielsantos@gmail.com";

async function sendProposalEmail({ name, contact, brief, budget, agent = "Agente de IA", ip = "" }) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[Mailer] RESEND_API_KEY não encontrada nas variáveis da Vercel.");
    return { success: false, reason: "missing_api_key" };
  }

  const resend = new Resend(apiKey);

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0b0f19; color: #f1f5f9; border-radius: 12px; border: 1px solid #1e293b;">
      <div style="border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 20px;">
        <span style="background: rgba(34, 197, 94, 0.15); color: #22c55e; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.08em;">
          Nova Proposta Recebida
        </span>
        <h2 style="margin: 12px 0 4px 0; color: #ffffff; font-size: 20px;">Proposta via ${agent}</h2>
        <p style="margin: 0; color: #94a3b8; font-size: 13px;">Um agente ou cliente enviou uma proposta através do seu portfólio.</p>
      </div>

      <div style="margin-bottom: 16px;">
        <strong style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Nome do Solicitante</strong>
        <div style="font-size: 16px; font-weight: 600; color: #f8fafc;">${name}</div>
      </div>

      <div style="margin-bottom: 16px;">
        <strong style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Contato para Retorno</strong>
        <div style="font-size: 15px; color: #38bdf8; font-weight: 500;">${contact}</div>
      </div>

      <div style="margin-bottom: 16px;">
        <strong style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Orçamento Estimado</strong>
        <div style="font-size: 15px; color: #22c55e; font-weight: 600;">${budget || "A combinar / Não informado"}</div>
      </div>

      <div style="margin-bottom: 20px;">
        <strong style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">Briefing / Mensagem</strong>
        <div style="background-color: #131b2e; padding: 16px; border-radius: 8px; border: 1px solid #1e293b; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${brief}</div>
      </div>

      <div style="border-top: 1px solid #1e293b; padding-top: 14px; font-size: 11px; color: #64748b;">
        <span>Agente: ${agent}</span> &middot; 
        <span>${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</span>
      </div>
    </div>
  `;

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: TO_EMAIL,
      subject: `💼 Nova Proposta de Projeto: ${name}`,
      html: htmlContent
    });

    if (response.error) {
      console.error("[Mailer] Erro retornado pela Resend:", response.error);
      return { success: false, error: response.error };
    }

    console.log(`[Mailer] E-mail enviado com sucesso via Resend para ${TO_EMAIL} (ID: ${response.data?.id})`);
    return { success: true, data: response.data };
  } catch (err) {
    console.error("[Mailer] Exceção ao enviar e-mail com Resend:", err.message);
    return { success: false, error: err.message };
  }
}

module.exports = {
  sendProposalEmail
};

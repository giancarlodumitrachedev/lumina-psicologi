"use server";

import { Resend } from "resend";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  tenantId: z.string(),
});

export async function sendEmail(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: "Dati non validi" };
  }

  const { name, email, phone, message, tenantId } = result.data;
  
  // Recupera l'email del destinatario dal database
  const { getTenantData } = await import("@/lib/dal");
  const tenantData = await getTenantData(tenantId);
  
  if (!tenantData) {
    return { success: false, error: "Tenant non trovato" };
  }

  const destinationEmail = tenantData.contact_info.email;

  if (!process.env.RESEND_API_KEY) {
    console.log(`Sending email to ${destinationEmail}...`);
    console.log(`[Simulated Email Send]`, { name, email, phone, message, to: destinationEmail });
    // Simulate network delay for prototype feeling
    await new Promise(resolve => setTimeout(resolve, 1500));
    return { success: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);


  try {
    await resend.emails.send({
      from: "Lumina Studio <onboarding@resend.dev>",
      to: [destinationEmail], // Legge l'email direttamente dal DB Supabase per ogni tenant
      subject: `Nuova richiesta di consulto da ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nTelefono: ${phone || "Non fornito"}\n\nMessaggio:\n${message}`,
    });
    return { success: true };
  } catch (error) {
    console.error("Errore invio email:", error);
    return { success: false, error: "Errore durante l'invio" };
  }
}

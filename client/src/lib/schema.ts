import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" }),
  service: z.string().optional(),
  message: z.string().optional(),
  privacy: z.boolean().refine(val => val === true, {
    message: "Você precisa concordar com a política de privacidade"
  })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

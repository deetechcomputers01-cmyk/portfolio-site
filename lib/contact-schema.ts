import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a little more (10+ characters)")
    .max(1000, "Message must be under 1000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

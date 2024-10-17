import { z } from "zod";

export const customerSchema = z.object({
    name: z.string().min(1, "O nome é obriatório"),
    email: z.string().email("O email é obrigatorio")
});
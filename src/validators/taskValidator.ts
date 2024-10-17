import { z } from "zod";

export const taskSchema = z.object({
    nome: z.string().min(1, "O campo nome é obrigatório")
})
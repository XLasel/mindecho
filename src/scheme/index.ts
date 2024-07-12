import { z } from "zod";

// Регулярное выражение для проверки формата "yyyy-MM-dd"
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export const searchParamsSchema = z.object({
  q: z.string().optional(),
  start_date: z
    .string()
    .optional()
    .refine(
      (date) => !date || datePattern.test(date),
      "Invalid date format. Expected yyyy-MM-dd"
    ),
  end_date: z
    .string()
    .optional()
    .refine(
      (date) => !date || datePattern.test(date),
      "Invalid date format. Expected yyyy-MM-dd"
    ),
});

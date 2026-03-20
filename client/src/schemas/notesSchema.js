import { z } from "zod";

const noteSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters")
    .trim(),
  content: z.string().min(1, "Content is Required").trim(),
  tag: z
    .enum(
      ["work", "personal", "ideas", "study"],
      "Tag must be one of: work, personal, ideas, study",
    )
    .default("personal"),
});

export default noteSchema;

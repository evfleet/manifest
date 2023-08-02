import { z } from "zod";

const createBoardSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(30),
  }),
});

export default {
  createBoardSchema,
};

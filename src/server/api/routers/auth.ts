import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  registerUser: publicProcedure
    .input(
      z.object({
        userName: z.string(),
        passwordHash: z.string(),
        email: z.string(),
        role: z.enum(["STUDENT", "TEACHER"]),
        schoolId: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.create({
        data: { ...input },
      });
    }),
});

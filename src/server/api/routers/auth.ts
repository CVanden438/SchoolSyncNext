import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import bcrypt from "bcrypt";
import { TRPCError } from "@trpc/server";
export const authRouter = createTRPCRouter({
  registerUser: publicProcedure
    .input(
      z.object({
        userName: z.string(),
        password: z.string(),
        email: z.string(),
        role: z.enum(["STUDENT", "TEACHER"]),
        schoolId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(input.password, saltRounds);
      return ctx.prisma.user.create({
        data: { ...input, password: passwordHash },
      });
    }),
  registerStudent: publicProcedure
    .input(
      z.object({
        userName: z.string(),
        password: z.string(),
        email: z.string(),
        schoolId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(input.password, saltRounds);
      return ctx.prisma.student.create({
        data: { ...input, password: passwordHash },
      });
    }),
  registerTeacher: publicProcedure
    .input(
      z.object({
        userName: z.string(),
        password: z.string(),
        email: z.string(),
        schoolId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(input.password, saltRounds);
      return ctx.prisma.teacher.create({
        data: { ...input, password: passwordHash },
      });
    }),
  // checkUserCredentials: publicProcedure
  //   .input(z.object({ email: z.string(), password: z.string() }))
  //   .query(async ({ ctx, input }) => {
  //     const userData = await ctx.prisma.user.findFirstOrThrow({
  //       where: { email: input.email },
  //       select: {
  //         password: true,
  //         id: true,
  //         userName: true,
  //         role: true,
  //         email: true,
  //       },
  //     });
  //     try {
  //       bcrypt.compare(input.password, userData.password);
  //     } catch (error) {
  //       throw new Error("Invalid Credentials");
  //     }
  //     return userData;
  //   }),
  getSchoolOptions: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.school.findMany({
      select: {
        name: true,
        id: true,
      },
    });
  }),
});

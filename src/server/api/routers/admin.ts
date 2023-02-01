import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const adminRouter = createTRPCRouter({
  addSchool: publicProcedure
    .input(
      z.object({
        name: z.string(),
        road: z.string(),
        city: z.string(),
        country: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.school.create({
        data: { ...input },
      });
    }),
  getSchools: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.school.findMany({
      select: {
        id: true,
        name: true,
        city: true,
        road: true,
        country: true,
        _count: {
          select: {
            members: true,
          },
        },
      },
    });
  }),
  getUsers: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        schoolId: true,
        userName: true,
        school: {
          select: {
            name: true,
          },
        },
      },
    });
  }),
});

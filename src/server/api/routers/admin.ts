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
  getStudents: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.student.findMany({
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
  getTeachers: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.teacher.findMany({
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
  deleteUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.delete({
        where: { id: input.id },
      });
    }),
  deleteStudent: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.student.delete({
        where: { id: input.id },
      });
    }),
  deleteTeacher: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teacher.delete({
        where: { id: input.id },
      });
    }),
  editUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: { id: input.id },
        data: {
          userName: input.name,
          email: input.email,
        },
      });
    }),
  editStudent: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      console.log("hello");
      return ctx.prisma.student.update({
        where: { id: input.id },
        data: {
          userName: input.name,
          email: input.email,
        },
      });
    }),
  editTeacher: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teacher.update({
        where: { id: input.id },
        data: {
          userName: input.name,
          email: input.email,
        },
      });
    }),
  deleteSchool: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.school.delete({
        where: { id: input.id },
      });
    }),
  editSchool: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        road: z.string(),
        city: z.string(),
        country: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.school.update({
        where: { id: input.id },
        data: { ...input },
      });
    }),
});

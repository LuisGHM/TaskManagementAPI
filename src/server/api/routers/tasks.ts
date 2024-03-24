import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const taskRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.task.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  create: protectedProcedure
    .input(z.object({ title: z.string(), status: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.task.create({
        data: {
          title: input.title,
          status: input.status,
          userId: ctx.session.user.id,
        },
      });
    }),
});
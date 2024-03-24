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

    delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.task.delete({
        where: {
          id: input.id,
        },
      });
    }),

    update: protectedProcedure
    .input(z.object({ title: z.string(), status: z.string(), id: z.string() }))
    .mutation(({ ctx, input }) => {
        return ctx.db.task.update({
            where: {
                id: input.id
            },
            data: {
                title: input.title,
                status: input.status,
            },
        });
    }),
});
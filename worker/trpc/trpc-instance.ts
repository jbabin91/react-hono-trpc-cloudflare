import { initTRPC } from '@trpc/server';
import { type Context } from '@worker/trpc/context';

export const t = initTRPC.context<Context>().create();

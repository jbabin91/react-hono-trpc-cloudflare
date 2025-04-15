import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { app } from '@worker/hono/api';
import { createContext } from '@worker/trpc/context';
import { appRouter } from '@worker/trpc/router';

export default {
  fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/trpc')) {
      return fetchRequestHandler({
        createContext: () =>
          createContext({ env: env, req: request, workerCtx: ctx }),
        endpoint: '/trpc',
        req: request,
        router: appRouter,
      });
    }
    return app.fetch(request, env, ctx);
  },
} satisfies ExportedHandler<Env>;

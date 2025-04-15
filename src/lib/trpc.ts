import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import { type AppRouter } from '@worker/trpc/router';

import { queryClient } from '@/lib/react-query';

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: createTRPCClient({
    links: [
      httpBatchLink({
        url: '/trpc',
      }),
    ],
  }),
  queryClient,
});

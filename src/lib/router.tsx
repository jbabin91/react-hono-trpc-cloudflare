import { QueryClientProvider } from '@tanstack/react-query';
import { createRouter as createTanStackRouter } from '@tanstack/react-router';

import { queryClient } from '@/lib/react-query';
import { trpc } from '@/lib/trpc';
import { routeTree } from '@/routeTree.gen';

export function createRouter() {
  const router = createTanStackRouter({
    Wrap: function WrapComponent({ children }) {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    },
    context: {
      queryClient,
      trpc,
    },
    defaultPreload: 'intent',
    routeTree,
    scrollRestoration: true,
  });

  return router;
}

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

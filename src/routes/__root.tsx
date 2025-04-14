import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { Header } from '../components/layout/header';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-screen-lg">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});

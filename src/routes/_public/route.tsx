import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Header } from '@/components/layout/header';

export const Route = createFileRoute('/_public')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-screen-lg">
        <Outlet />
      </main>
    </>
  );
}

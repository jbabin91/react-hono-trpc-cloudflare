import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { trpc } from '@/lib/trpc';

export const Route = createFileRoute('/_app/dashboard')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useQuery(
    trpc.exampleTableData.getTableData.queryOptions({
      tableId: 'exampleTableId',
    }),
  );

  console.log('data', data);

  return <div>Hello &ldquo;/_app/dashboard&rdquo;!</div>;
}

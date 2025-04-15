import { exampleTableDataRouter } from '@worker/trpc/routes/example-table-data';
import { t } from '@worker/trpc/trpc-instance';

export const appRouter = t.router({
  exampleTableData: exampleTableDataRouter,
});

export type AppRouter = typeof appRouter;

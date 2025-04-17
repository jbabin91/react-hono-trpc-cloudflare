import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { AppSidebar } from '@/components/layout/app/app-sidebar';
import { ChartAreaInteractive } from '@/components/layout/app/chart-area-interactive';
import { DataTable } from '@/components/layout/app/data-table';
import { SectionCards } from '@/components/layout/app/section-cards';
import { SiteHeader } from '@/components/layout/app/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { trpc } from '@/lib/trpc';

export const Route = createFileRoute('/_app/dashboard')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, isError } = useQuery(
    trpc.exampleTableData.getTableData.queryOptions({
      tableId: 'exampleTableId',
    }),
  );

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              {isLoading ? (
                <div className="flex items-center justify-center p-4">
                  <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
                  <span className="ml-2">Loading data...</span>
                </div>
              ) : isError ? (
                <div className="m-4 rounded-md bg-red-50 p-4 text-red-700">
                  <p className="font-medium">Error loading data</p>
                  <p>
                    There was a problem fetching the table data. We&apos;ll
                    automatically retry soon.
                  </p>
                  <div className="mt-2 flex items-center">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-red-700 border-t-transparent"></div>
                    <span className="ml-2 text-sm">Retrying...</span>
                  </div>
                </div>
              ) : (
                data?.dummyData && <DataTable data={data.dummyData} />
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

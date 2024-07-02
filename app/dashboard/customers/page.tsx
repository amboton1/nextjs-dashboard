import { Metadata } from "next";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import Table from "@/app/ui/customers/table";
import { Suspense } from "react";
import { fetchCustomersPages, fetchFilteredCustomers, fetchInvoicesPages } from "@/app/lib/data";
import Pagination from "@/app/ui/invoices/pagination";

export const metadata: Metadata = {
    title: 'Customers | Acme Dashboard',
};

export default async function Page({ searchParams }: { searchParams: { query?: string } }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchCustomersPages(query);

    return (
        <>
            <Suspense fallback={<InvoicesTableSkeleton/>}>
                <Table query={query} currentPage={currentPage}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages}/>
            </div>
        </>
    );
}
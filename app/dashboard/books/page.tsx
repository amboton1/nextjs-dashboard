import { lusitana } from "@/app/ui/fonts";
import CardWrapper, { BookCard } from "@/app/ui/dashboard/cards";
import Search from "@/app/ui/search";
import { CardsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

async function fetchBooks(query: string) {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }
    const data = await response.json();
    return data.docs || [];
}

export default async function Page({ searchParams }: { searchParams?: { query?: string, page?: string } }) {
    const query = searchParams?.query || '';
    const books = await fetchBooks(query);

    console.log(books)

    return (
        <>
            <h1 className={`${lusitana.className} text-2xl`}>Books</h1>

            <Search placeholder="Search books..." />
            <Suspense fallback={<CardsSkeleton />}>
                <div className="grid grid-cols-4 gap-4 flex-wrap mt-4">
                    {books ? <BookCard title={books[0].title} author={books[0].author_name} isbn={books[0].isbn[0] ?? ''} /> : ''}
                </div>
            </Suspense>
        </>
    );
}
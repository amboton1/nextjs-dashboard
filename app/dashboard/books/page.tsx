import { lusitana } from "@/app/ui/fonts";
import { BookCard } from "@/app/ui/dashboard/cards";
import Search from "@/app/ui/search";

export default async function Page({ searchParams}: { searchParams?: { query?: string, page?: string } }) {
    const query = searchParams?.query || '';
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    const books = data.docs[0] || [];

    return (
        <>
            <h1 className={`${lusitana.className} text-2xl`}>Books</h1>

            <Search placeholder="Search invoices..." />

            <div className="grid grid-cols-4 gap-4 flex-wrap mt-4">
                <BookCard title={books.title} author={books.autor_name && books.autor_name[0]} genre="thriller" isbn={books.isbn[0]} />
                <BookCard title={books.title} author={books.autor_name && books.autor_name[0]} genre="thriller" isbn={books.isbn[0]} />
            </div>
        </>
    );
}
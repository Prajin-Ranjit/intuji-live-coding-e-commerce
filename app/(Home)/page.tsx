import { Suspense } from 'react';

import ProductList from "@/components/main/home/ProductList";
import { Spinner } from '@/components/ui/spinner';
import { paginationLimit } from '@/constants';

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {

    const searchParameter = (await searchParams).search
    const pageParameter = (await searchParams).page

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-5">
            <Suspense fallback={<Spinner className="size-8" />}>
                <GetServerProducts search={searchParameter} page={pageParameter} />
            </Suspense>
        </div>
    );
}

async function GetServerProducts({ search = '', page = '1' }: { search: string | undefined, page: string | undefined }) {
    const data = await fetch(`https://dummyjson.com/products/search?limit=${paginationLimit}${search !== '' ? `&q=${search}` : ''}${page ? `&skip=${((Number(page) -1) * paginationLimit)}` : ''}`)

    const posts = await data.json()

    return (
        <ProductList data={posts} />
    )
}
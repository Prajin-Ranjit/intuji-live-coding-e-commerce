import { Suspense } from 'react';

import ProductList from "@/components/main/home/ProductList";
import { Spinner } from '@/components/ui/spinner';
import { paginationLimit } from '@/constants';

export default async function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-5">
            <Suspense fallback={<Spinner className="size-8" />}>
                <GetServerProducts />
            </Suspense>
        </div>
    );
}

async function GetServerProducts() {
    const data = await fetch(`https://dummyjson.com/products?limit=${paginationLimit}`)

    const posts = await data.json()

    return (
        <ProductList data={posts} />
    )
}
import { Suspense } from 'react';

import ProductList from "@/components/main/home/ProductList";

export default async function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Suspense fallback={<div>Loading....</div>}>
                <GetServerProducts />
            </Suspense>
        </div>
    );
}

async function GetServerProducts() {
    const data = await fetch('https://dummyjson.com/products')

    const posts = await data.json()

    return (
        <ProductList data={posts} />
    )
}
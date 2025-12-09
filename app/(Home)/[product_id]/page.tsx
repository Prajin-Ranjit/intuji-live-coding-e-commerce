export default async function ProductDetail({
    params,
}: {
    params: Promise<{ product_id: string }>
}) {
    const { product_id } = await params

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-5">
            {product_id}
        </div>
    );
}
import ProductDetailSection from "@/components/main/home/ProductDetailSection";

export default async function ProductDetail({
    params,
}: {
    params: Promise<{ product_id: string }>
}) {
    const { product_id } = await params

    const data = await fetch(`https://dummyjson.com/products/${product_id}`)

    const productDetail = await data.json()

    return (
        <div className="flex bg-zinc-50 font-sans dark:bg-black p-2">
            <ProductDetailSection detail={productDetail}  />
        </div>
    );
}
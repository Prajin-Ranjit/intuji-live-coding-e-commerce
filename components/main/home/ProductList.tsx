'use client'

import ProductCards from "./ProductCards"
import ProductPagination from "./ProductPagination"

type ratingTypes = {
    "rating": number,
    "comment": string,
    "date": string,
    "reviewerName": string,
    "reviewerEmail": string
}

type productTypes = {
    "id": number,
    "title": string,
    "description": string,
    "category": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "tags": string[],
    "brand": string,
    "sku": string,
    "weight": number,
    "dimensions": {
        "width": number,
        "height": number,
        "depth": number
    },
    "warrantyInformation": string,
    "shippingInformation": string,
    "availabilityStatus": string,
    "reviews": ratingTypes[],
    "returnPolicy": string,
    "minimumOrderQuantity": number,
    "meta": {
        "createdAt": string,
        "updatedAt": string,
        "barcode": string,
        "qrCode": string
    },
    "images": string[],
    "thumbnail": string
}

type ProductListTypes = {
    data: {
        products: productTypes[]
        limit: number
        skip: number
        total: number
    }
}

const ProductList = ({ data }: ProductListTypes) => {
    const { products, limit, skip, total  } = data

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-4 gap-2">
                    {
                        products?.map(item => <ProductCards key={item?.id} title={item?.title} price={item?.price} rating={item?.rating} thumbnail={item?.thumbnail} />)
                    }
                </div>
                <ProductPagination limit={limit} skip={skip} total={total}/>
            </div>

        </div>
    )
}

export default ProductList
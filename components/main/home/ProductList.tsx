'use client'

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
    console.log(data)
    return (
        <div className="flex flex-col md:flex-row">
            
        </div>
    )
}

export default ProductList
'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import RatingStars from "@/components/ui/ratingStars"
import Image from "next/image"

type ratingType = {
  "rating": number,
  "comment": string,
  "date": string,
  "reviewerName": string,
  "reviewerEmail": string
}

type productDetailType = {
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
  "reviews": ratingType[],
  "returnPolicy": string,
  "minimumOrderQuantity": number,
  "meta": {
    "createdAt": string,
    "updatedAt": string,
    "barcode": string,
    "qrCode": string
  },
  "images": string[],
  "thumbnail": string,
  message: string
}

const ProductDetailSection = ({ detail }: { detail: productDetailType }) => {
  const discountedPrice = (detail?.price - ((detail?.discountPercentage * detail?.price) / 100)).toFixed(2)
  
  if(!detail || detail?.message){
    return (
      <div className="text-4xl font-bold">
        {detail?.message || 'No detail available'}
      </div>
    )
  }

  return (
    <section className="flex flex-col gap-2">
      <Card className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3 pr-5">
          <div className="md:w-2/3">
            <Image alt={`${detail?.title}`} src={detail?.images[0] || '/no-image.png'} priority height={500} width={400} className="object-cover h-fit w-full" />
          </div>

          <div className="flex flex-col gap-5 w-3/5 justify-center">
            <h1 className="text-4xl font-bold">{detail?.title}</h1>
            <span className="text-base font-medium">{detail?.description}</span>
            <div>
              <RatingStars rating={detail?.rating} />
            </div>
            <div className="flex flex-row gap-4">
              <div className="text-red-400 line-through">$ {detail?.price}</div>
              <div className="text-green-400">$ {discountedPrice}</div>
            </div>
            <Button>Add to Cart</Button>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-5">
          {
            detail?.reviews?.map(item => <Card key={item?.comment} className="px-4">
              <div className="flex flex-row justify-between">
                <div className="text-sm font-medium">
                  {item?.comment}
                </div>
                <div className="text-xs">{item?.date}</div>
              </div>
              <div>
                <RatingStars rating={item?.rating} />
              </div>
            </Card>)
          }
        </div>
      </Card>
    </section>
  )
}

export default ProductDetailSection
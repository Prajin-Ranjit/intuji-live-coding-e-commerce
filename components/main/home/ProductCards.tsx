'use client'

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import RatingStars from "@/components/ui/ratingStars"
import Image from "next/image"

type productCardTypes = {
    title: string
    price: number
    rating: number
    thumbnail: string
}

const ProductCards = ({ title, price, rating, thumbnail }: productCardTypes) => {
    return (
        <Card className="w-full cursor-pointer hover:scale-105">
            <CardContent className="flex flex-col gap-2">
                <Image alt={`${title} image`} src={thumbnail || '/no-image.png'} height={100} width={100} priority className="h-fit w-full object-cover"/>
                <div className="flex flex-col gap-2">
                    <div className="text-sm font-semibold">{title}</div>
                    <RatingStars rating={rating} />
                    <div className="text-sm font-semibold text-green-400 text-right">${price}</div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCards
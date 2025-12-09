'use client'

import { useState } from "react"
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'
import { Spinner } from "@/components/ui/spinner"
import { Check } from "lucide-react"

type addToCartTypes = {
    data: {
        id: number;
        title: string;
        price: number;
        quantity: number;
        discountPercentage: number;
        thumbnail: string;
    }
}

const AddToCartButton = ({ data }: addToCartTypes) => {
    const addToCart = useCartStore((state) => state.addToCart)
    const [btnState, setButtonState] = useState<'idle' | 'loading' | 'success'>('idle')

    function onAddToCartFunction() {
        setButtonState('loading')
        addToCart(data)

        setTimeout(() => setButtonState('success'), 300)
        setTimeout(() => setButtonState('idle'), 1000)
    }

    return (
        <Button onClick={onAddToCartFunction} disabled={btnState === 'loading' || btnState === 'success'}>
            {btnState === "idle" && "Add to cart"}
            {btnState === "loading" && <Spinner />}
            {btnState === "success" && <Check />}
        </Button>
    )
}

export default AddToCartButton
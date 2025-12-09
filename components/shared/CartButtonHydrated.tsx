'use client'

import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"

import { Button } from "../ui/button";
import { useCartStore } from "@/store/cart-store";

const CartButtonHydrated = () => {
    const [isHydrated, setIsHydrated] = useState(false);
    const getCartFromStore = useCartStore((state) => state.cart)

    useEffect(() => {
        if (!isHydrated) {
            setIsHydrated(true)
        }
    }, [])

    if (!isHydrated) {
        return null
    }

    return (
        <Button className="cursor-pointer">
            {
                getCartFromStore?.length ?? 0
            }
            <ShoppingCart />
        </Button>
    )
}

export default CartButtonHydrated
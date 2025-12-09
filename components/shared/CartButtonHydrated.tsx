'use client'

import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"

import { Button } from "../ui/button";
import { useCartStore } from "@/store/cart-store";
import { useRouter } from "next/navigation";

const CartButtonHydrated = () => {
    const router = useRouter()
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

    function onClick() {
        if(getCartFromStore?.length > 0){
            router.push('/cart')
        }
    }

    return (
        <Button className="cursor-pointer" onClick={onClick}>
            {
                getCartFromStore?.length ?? 0
            }
            <ShoppingCart />
        </Button>
    )
}

export default CartButtonHydrated
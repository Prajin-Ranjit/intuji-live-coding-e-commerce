'use client'

import { useCartStore } from "@/store/cart-store"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"

const CartPage = () => {
    const router = useRouter()
    const getCartData = useCartStore((state) => state.cart)
    const increaseBtn = useCartStore((state) => state.increaseQty)
    const decreaseBtn = useCartStore((state) => state.decreaseQty)
    const removeItem = useCartStore((state) => state.removeItem)
    const clearCart = useCartStore((state) => state.clearCart)

    if (!getCartData || getCartData?.length < 1) {
        return (
            <div>No cart available</div>
        )
    }

    function clearCartBtn() {
        clearCart()
        router.replace('/')
    }

    return (
        <div className="flex flex-col gap-3 w-full p-5">
            <h1 className="text-center text-3xl font-bold">Cart</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[500px]">Item</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        getCartData && getCartData?.map(item => <TableRow key={item.id}>
                            <TableCell>
                                <div className="flex flex-row gap-2">
                                    <Image alt={item?.title} src={item?.thumbnail || ''} height={100} width={100} />
                                    <div className="flex flex-col gap-2">
                                        <div>{item?.title}</div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="flex flex-row gap-2 h-full">
                                <Button onClick={() => decreaseBtn(item?.id)}>-</Button>
                                <span>{item?.quantity}</span>
                                <Button onClick={() => increaseBtn(item?.id)}>+</Button>
                            </TableCell>
                            <TableCell>{item?.price}</TableCell>
                            <TableCell>
                                <Button onClick={() => removeItem(item?.id)}>
                                    <Trash />
                                </Button>
                            </TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
            <Button className="max-w-72 ml-auto" onClick={clearCartBtn}>Checkout</Button>
        </div>
    )
}

export default CartPage
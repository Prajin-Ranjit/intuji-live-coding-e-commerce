import { useRouter, useSearchParams } from "next/navigation"
import { useTransition } from "react"

import { Button } from "@/components/ui/button"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination"
import { paginationLimit } from "@/constants"
import { cn } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"

type ProductPaginationTypes = {
    total: number
}

const ProductPagination = ({ total }: ProductPaginationTypes) => {
    const [isPending, startTransition] = useTransition()

    const router = useRouter()
    const searchParams = useSearchParams()
    const getPageNumber = searchParams.get('page') ?? '1'

    const totalPageNumber = Math.ceil(total / paginationLimit)

    function nextPage() {
        startTransition(() => {
            const params = new URLSearchParams(searchParams?.toString());

            if (getPageNumber) {
                params.set('page', String(Number(getPageNumber) + 1))
            } else {
                params.set('page', '2')
            }

            router.replace(`?${params}`)
        });
    }

    function prevPage() {
        startTransition(() => {
            const params = new URLSearchParams(searchParams?.toString());
            params.set('page', String(Number(getPageNumber) - 1))
            router.replace(`?${params}`)
        });
    }

    function goToPage(num: number) {
        startTransition(() => {
            const params = new URLSearchParams(searchParams?.toString());
            params.set('page', String(num))
            router.replace(`?${params}`)
        });
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <Button onClick={prevPage} disabled={!getPageNumber || Number(getPageNumber) === 1 || isPending}>{'<'}</Button>
                </PaginationItem>
                {
                    isPending
                        ? <Spinner />
                        : [...Array(totalPageNumber).keys()]?.map(item => <PaginationItem key={item + 1}>
                            <Button variant={"link"} className={cn("cursor-pointer", Number(getPageNumber) === item + 1 ? 'underline' : '')} onClick={() => goToPage(item + 1)}>{item + 1}</Button>
                        </PaginationItem>)
                }
                <PaginationItem>
                    <Button onClick={nextPage} disabled={Number(getPageNumber) >= totalPageNumber || isPending}>{'>'}</Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default ProductPagination
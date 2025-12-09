'use client'

import { useState, useEffect, useTransition } from "react"

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import useDebounce from '@/hooks/useDebounce';
import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";

const ProductSearch = () => {
    const [isPending, startTransition] = useTransition()
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        startTransition(() => {
            // to keep the older params intact
            const params = new URLSearchParams(searchParams?.toString());
            if (debouncedSearchTerm) {
                params.set('search', debouncedSearchTerm)
            } else {
                params.delete('search')
            }
            // to make sure every search or none there of will return to page 1
            params.set('page', '1')
            router.replace(`?${params}`)
        });
    }, [debouncedSearchTerm]);

    return (
        <Card className='w-full p-2'>
            <div className="flex flex-row gap-2 items-center">
                {
                    isPending && <Spinner />
                }
                <Label htmlFor="search" className="pt-2">Search Products:</Label>
            </div>
            <Input disabled={isPending} id='search' placeholder="search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </Card>
    )
}

export default ProductSearch
"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { formUrlQuery } from '@/sanity/utils'
import { useSearchParams, useRouter } from 'next/navigation'

const filterData = [
    "All",
    "Platforms",
    "Front-end development",
    "Back-end development",
    "Others"
]

const Filters = () => {

    const [active, setActive] = useState("")
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleClick = (f: string) => {
        let newUrl = '';

        if (active === f) {
            setActive('');

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['category'],
            })
        } else {
            setActive(f);

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: f.toLowerCase(),
            })
        }

        router.push(newUrl, { scroll: false });
    }

    return (
        <ul>
            {filterData.map((f, idx) => (
                <Button key={idx}
                    onClick={() => handleClick(f)}
                    className={active === f ? "bg-purple-400" : ""}
                >
                    {f}
                </Button>
            ))}
        </ul>
    )
}

export default Filters
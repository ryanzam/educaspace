"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'

const filterData = [
    "All",
    "Platforms",
    "Front-End development",
    "Back-end development",
    "Others"
]

const Filters = () => {

    const [active, setActive] = useState("")

    const handleClick = (f: string) => {
        setActive(f)
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
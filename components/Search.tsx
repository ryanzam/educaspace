"use client"
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input"

const Search = () => {

    const [searchText, setSearchText] = useState("")

    return (
        <form className='flex items-center justify-center w-full -mt-5'>
            <label htmlFor="" className='flex items-center justify-center relative w-full max-w-3xl p-1'>
                <FaSearch height={30} width={30} className='absolute left-10' />
                <Input className='border-0 bg-neutral-700 placeholder:text-neutral-300 pl-20'
                    placeholder='Search'
                    onChange={(e) => setSearchText(e.target.value)} />
            </label>
        </form>
    )
}

export default Search
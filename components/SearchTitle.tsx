import React from 'react'

interface SearchTitleProps {
    query: string | null;
    category: string | null;
}

const SearchTitle = ({ query, category }: SearchTitleProps) => {

    if (query && category) {
        return (
            <h1 className='text-purple-400 pt-4'>
                Search results for {query} in {category}
            </h1>
        )
    }

    if (query) {
        return (
            <h1 className='text-purple-400 pt-4'>
                Search results for {query}
            </h1>
        )
    }

    if (category) {
        return (
            <h1 className='text-purple-400 pt-4'>
                <span>{category}</span>
            </h1>
        )
    }



    return (
        <h1 className='text-purple-400 pt-4'>
            Nothing found.
        </h1>
    )
}

export default SearchTitle
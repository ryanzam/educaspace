import React from 'react'

interface SearchTitleProps {
    query: string | undefined;
    category: string | undefined;
}

const SearchTitle = ({ query, category }: SearchTitleProps) => {

    if (query) {
        return (
            <h1>
                Search results for "{query}"
            </h1>
        )
    }

    if (category) {
        return (
            <h1>
                <span>{category}</span>
            </h1>
        )
    }

    if (query && category) {
        return (
            <h1>
                Search results for "{query}" in <span>{category}</span>
            </h1>
        )
    }

    return (
        <h1>
            Nothing found.
        </h1>
    )
}

export default SearchTitle
import React from "react";

const SearchBar = (props: any) => {
    return (
        <>
            <input
                className="full-width"
                autoFocus
                name="gsearch"
                type="search"
                value={props.bookType}
                placeholder="Search for books to add to your reading list and press Enter"
                onChange={e => props.updateBook(e.target.value)}
            />
        </>
    )
}

export default SearchBar
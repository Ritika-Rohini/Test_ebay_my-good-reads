import React, { useEffect, useState } from "react";
import { getBooksByType } from "./book-search.service";
import BookContainer from '../book-card/BookContainer'
import Wishlist from '../book-card/Wishlist'
import SearchBar from './SearchBar'
import { debounce, throttle } from '../util'

export interface Y {
    [id: string]: number;
}

const BookSearch = () => {
    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
    const [allAvailableBooks, setAllAvailableBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState<string[]>([]);

    async function requestBooks() {
        if (bookTypeToSearch) {
            const allBooks = await getBooksByType(bookTypeToSearch);
            setAllAvailableBooks(allBooks);
        }
    }

    const updateBookFor = (value: any) => {
        updateBookTypeToSearch(value)
    }

    const updateBook = (value: any) => {
        updateBookType(value)
        if (value.length < 5) {
            throttle(() => updateBookFor(value), 500)()
        } else {
            debounce(() => updateBookFor(value), 1000)()
        }
    }


    function onClickHandler(item: any) {
        setSelectedBooks(searches => [...searches, item])
    }

    useEffect(() => {
        async function getAllBooks() {
            await requestBooks();
        }
        getAllBooks();
    }, [bookTypeToSearch]);

    return (
        <>
            <div className="ui grid fluid container">
                <div className="eleven wide column">
                    <div>
                        <div>
                            <div>
                                <form
                                    onSubmit={(e) => {
                                        // debugger;
                                        e.preventDefault();
                                        updateBookTypeToSearch(bookType)
                                    }}
                                >
                                    <SearchBar
                                        bookType={bookType}
                                        updateBook={updateBook}
                                        requestBooks={requestBooks}
                                    />
                                </form>
                                {!bookType && (
                                    <div className="empty">
                                        <p>
                                            Try searching for a topic, for example
                                        <a onClick={() => {
                                                updateBookType("Javascript");
                                            }}
                                            >
                                                {" "}
                                            "Javascript"
                                        </a>
                                        </p>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    <div>
                        <BookContainer allAvailableBooks={allAvailableBooks} onClickHandler={onClickHandler} />
                    </div>
                </div>
                <div className="five wide column">
                    <div className="ui segment">
                        <Wishlist selectedBooks={selectedBooks} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookSearch;

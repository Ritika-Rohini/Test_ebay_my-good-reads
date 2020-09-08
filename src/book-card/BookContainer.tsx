import React from "react";
import BookCard from './BookCard';
import { Grid } from 'semantic-ui-react'

interface IItem {
    volumeInfo: {
        publisher: string;
        title: string;
        imageLinks: {
            smallThumbnail: string;
        }
    }
}

export interface Props {
    onClickHandler: (item: any) => void;
    allAvailableBooks: any

}

const BookContainer = (props: Props) => {
    const isValid = () => {
        return Boolean(props && props.allAvailableBooks && props.allAvailableBooks.items)
    }
    return (
        <>
            <Grid data-testid="book-container">
                {
                    isValid() &&
                    props.allAvailableBooks.items.map((item: any) => {
                        return (
                            <Grid.Column mobile={16} tablet={8} computer={4}>
                                <BookCard item={item} onClickHandler={props.onClickHandler} />
                            </Grid.Column>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default BookContainer
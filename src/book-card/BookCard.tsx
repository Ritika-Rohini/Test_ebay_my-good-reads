import React from "react";
import { Card, Image, Button } from 'semantic-ui-react'

export interface Props {
    onClickHandler: (item: any) => void;
    item: {
        volumeInfo: {
            publisher: string;
            title: string;
            imageLinks: {
                smallThumbnail: string;
            }
        }
    }
}

/**
 * @description Card Component which displays the single card
 * @param props 
 */
const BookCard = (props: Props) => {
    const { publisher, title, imageLinks } = props.item.volumeInfo

    function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        props.onClickHandler(props.item)
    }

    const imageUrl: string = imageLinks && imageLinks.smallThumbnail

    return (
        <>
            <Card raised fluid>
                <Image src={imageUrl} wrapped ui={false} />
                <Card.Content>
                    <Card.Content header={title} textAlign="center" />
                    <Card.Meta textAlign="center">
                        <span>{publisher}</span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Button
                        data-testid="wishlist-button"
                        attached='bottom'
                        content='Add to Wishlist'
                        onClick={(e: any) => handleClick(e)}
                    />
                </Card.Content>
            </Card >
        </>
    )
}

export default BookCard
import React from "react";

const Wishlist = (props: any) => {
    let occurrences: { [id: string]: { quantity: number, title: string } } = {};
    for (let i = 0, j = props.selectedBooks.length; i < j; i++) {
        let id: any = props.selectedBooks[i].id
        occurrences[id] = {
            quantity: occurrences[id] ? occurrences[id].quantity + 1 : 1,
            title: props.selectedBooks[i].volumeInfo.title
        }
    }
    return (
        <>
            <h3 className="ui header">My Reading WishList {Object.keys(occurrences).length}</h3>
            {
                Object.keys(occurrences).map((keyName: string) => {
                    return <div>
                        <p>{occurrences[keyName].title} {occurrences[keyName].quantity} x</p>
                    </div>
                })
            }
        </>
    )
}

export default Wishlist
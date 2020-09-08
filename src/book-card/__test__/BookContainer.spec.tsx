import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookContainer, { Props } from "../BookContainer"

const mockProps: Props = {
    onClickHandler: jest.fn(),
    allAvailableBooks: {
        items: [{
            volumeInfo: {
                publisher: "Telegram",
                title: "javascript",
                imageLinks: {
                    smallThumbnail: "url"
                }
            }
        }]
    }
}

const wrapper = (props: Partial<Props> = {}) => {
    return render(<BookContainer {...mockProps} {...props} />);
}


describe("Book Container", () => {
    it("should render the component", async () => {
        const { findByTestId } = wrapper();
        const grid = await findByTestId("book-container");
        expect(grid).toBeInTheDocument();
    })

})


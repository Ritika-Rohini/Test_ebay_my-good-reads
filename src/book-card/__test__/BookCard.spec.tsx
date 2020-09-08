import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookCard, { Props } from "../BookCard"

const mockProps: Props = {
    onClickHandler: jest.fn(),
    item: {
        volumeInfo: {
            publisher: "Telegram",
            title: "javascript",
            imageLinks: {
                smallThumbnail: "url"
            }
        }
    }
}

const wrapper = (props: Partial<Props> = {}) => {
    return render(<BookCard {...mockProps} {...props} />);
}


describe("Book Card", () => {
    it('should render the component', () => {
        const { getByText } = wrapper();
        const titleElement = getByText(/javascript/i);
        expect(titleElement).toBeInTheDocument();
    })

    it("should call the click handler", async () => {
        const { findByTestId } = wrapper();
        const button = await findByTestId("wishlist-button");

        fireEvent.click(button);

        expect(mockProps.onClickHandler).toHaveBeenCalledWith({ "volumeInfo": { "imageLinks": { "smallThumbnail": "url" }, "publisher": "Telegram", "title": "javascript" } });
    })

})


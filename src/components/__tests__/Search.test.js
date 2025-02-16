import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import "@testing-library/jest-dom";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("should search res list for Burger text input", async ()=>{
    await act( async () => render(<BrowserRouter> <Body /> </BrowserRouter>));

    const cardsBeforeSearch = await screen.findAllByTestId("resCard");
    expect(cardsBeforeSearch?.length).toBe(20);

    const searchBtn = screen.getByText("Search");
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Burger"}});
    fireEvent.click(searchBtn);

    const cards = await screen.findAllByTestId("resCard");
    expect(cards?.length).toBe(2);
})

it("should filter top rated restaurant", async ()=>{
    await act( async () => render(<BrowserRouter> <Body /> </BrowserRouter>));

    const cardsBeforeSearch = await screen.findAllByTestId("resCard");
    expect(cardsBeforeSearch?.length).toBe(20);

    const topRated = screen.getByTestId("topRatedBtn");
    fireEvent.click(topRated);

    const cards = await screen.findAllByTestId("resCard");
    expect(cards?.length).toBe(3);
})

import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";



global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should load restaurant menu component", async ()=>{
    await act(async ()=> render(
        <BrowserRouter>
            <Provider store={appStore}>
                <RestaurantMenu />
                <Header/>
            </Provider>
        </BrowserRouter>
    ));

    // first category is by default open
    expect(screen.getAllByTestId("foodItems").length).toBe(19);

    expect(screen.getByText("Cart (0)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();
})
import { render, screen, fireEvent } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    // const loginBtn = screen.getByRole("button");
    // const loginBtn = screen.getByName("Login");
    const loginBtn = screen.getByRole("button", {name: "Login"});
    expect(loginBtn).toBeInTheDocument();

})

it("should load header component with cart items 0", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart (0)");
    expect(cartItems).toBeInTheDocument();
})

it("should load header component with cart items 0", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    // we can use regex as well while getting by text comparison
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
})

it("should login button text on click", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginBtn)

    const logoutBtn = screen.getByRole("button");
    expect(logoutBtn).toBeInTheDocument();
})
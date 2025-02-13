import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", ()=>{
    // can use either it or test, both are same
    // it("should load contact us component", () => {
    // test("should load contact us component", () => {
    it("should load contact us component", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    it("should load button in contact us component", () => {
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    it("should load input in contact us component", () => {
        render(<Contact/>);
        const nameInput = screen.getByPlaceholderText("Enter name");
        expect(nameInput).toBeInTheDocument();
    });
    
    it("should load two input fields in contact us component", () => {
        render(<Contact/>);
        const inputs = screen.getAllByRole("textbox");
        expect(inputs.length).toBe(2);
    });
})



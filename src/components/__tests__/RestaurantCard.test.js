import { render, screen } from "@testing-library/react"
import RestaurantCard, {quickDeliveryLabelled} from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

const RestaurantCardQuick = quickDeliveryLabelled(RestaurantCard);


it("should render restaurant card with props data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA} />)
    const name = screen.getByText(MOCK_DATA.info?.name);
    expect(name).toBeInTheDocument();
})

it("should render restaurant card with quick label", ()=>{
    render(<RestaurantCardQuick resData={MOCK_DATA} />)
    const quickLabel = screen.getByText("Quick 🚀");
    expect(quickLabel).toBeInTheDocument();
})
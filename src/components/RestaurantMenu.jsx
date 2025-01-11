import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useGetRestaurantMenu from "../utils/useGetRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const {resInfo, resMenu} = useGetRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />

    const {name, avgRating, costForTwoMessage: costForTwo, cuisines, locality} = resInfo;

    return (
        <div className="restaurant-details-container">
            <div className="restaurant-details">
                <h1>{name}</h1>
                <h3>{avgRating}</h3>
                <h3>{costForTwo}</h3>
                <h3>{cuisines}</h3>
                <h3>{locality}</h3>
            </div>
            <div className="restaurant-menu">
                <h2>Menu</h2>
                <ul>
                    {resMenu?.itemCards?.map((item) => (
                        <li key={item.card.info.id}>{item.card?.info?.name} - Rs.{item.card?.info?.price/100 || item.card?.info?.defaultPrice/100}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;
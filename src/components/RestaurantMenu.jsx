import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState(null);

    useEffect( ()=> {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json?.data?.cards[2]?.card?.card.info);
        setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
        console.log("Restaurant info----------", json?.data?.cards[2]?.card?.card.info);
        console.log("Restaurant menu----------", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
        
    };

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
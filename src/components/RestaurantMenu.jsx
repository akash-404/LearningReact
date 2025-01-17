import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useGetRestaurantMenu from "../utils/useGetRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const {resInfo, categories} = useGetRestaurantMenu(resId);

    const [expandedCategoryIndex, setExpandedCategoryIndex] = useState(0);

    if(resInfo === null) return <Shimmer />

    const {name, avgRating, costForTwoMessage: costForTwo, cuisines, locality} = resInfo;

    const handleCategoryAccordion = (index, id) => {
        setExpandedCategoryIndex((prevIndex) => (prevIndex === index ? null: index));
        const element = document.getElementById(id);
        if (element) {
            setTimeout(()=>{
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100)
        }

    }

    return (
        <div className="restaurant-details-container flex flex-col items-center">
            <div className="restaurant-details text-center mb-12">
                <h1 className="font-bold my-4 text-xl">{name}</h1>
                <div className="flex gap-6 mb-4 justify-center">
                    <h3  className="font-bold">{avgRating} ⭐</h3>
                    <h3>{costForTwo}</h3>
                </div>
                <div className="flex gap-6 justify-center">
                    <h3>😋{cuisines.join(", ")}</h3>
                    <h3>📍{locality}</h3>
                </div>
            </div>

            <div className="restaurant-categories max-w-[800px] w-full">
                {categories.map((category, index) => (<RestaurantCategory 
                    key={category?.card?.card?.title} 
                    category={category?.card?.card}
                    expandCategory={index === expandedCategoryIndex ? true : false}
                    setExpandedCategoryIndex = { ()=> handleCategoryAccordion(index, category?.card?.card?.title)}
                    />))
                }
            </div>
        </div>
    )
}

export default RestaurantMenu;
import {useState, useEffect} from 'react';
import { MENU_API } from "../utils/constants";


const useGetRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);
    const [categories, setCategories] = useState(null);
    
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json?.data?.cards[2]?.card?.card.info);
        setCategories(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => {
            return category?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
       }))
       console.log(categories);
        
        
    };

    
    return {resInfo, categories};
}

export default useGetRestaurantMenu;
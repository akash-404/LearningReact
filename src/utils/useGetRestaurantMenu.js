import {useState, useEffect} from 'react';
import { MENU_API } from "../utils/constants";


const useGetRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState(null);
    
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json?.data?.cards[2]?.card?.card.info);
        setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
        console.log("Restaurant info----------", json?.data?.cards[2]?.card?.card.info);
        console.log("Restaurant menu----------", json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
        
    };
    
    return {resInfo, resMenu};
}

export default useGetRestaurantMenu;
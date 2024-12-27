import RestaurantCard from "./RestaurantCard";
// import allResList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

	const [resList, setResList] = useState([]);

	useEffect(()=>{ fetchResData();}, []);

	const fetchResData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4700319&lng=78.3534174&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		const jsonData = await data.json();
		setResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	}

	if(resList.length === 0){
		// return <h1>Loading.....</h1>
		return <Shimmer/>
	}

    return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filters">
        Filters:{" "}
        <button
          className="filter-btn"
          onClick={() => {
            setResList(resList.filter(item => item.info.avgRating >4 ))
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={allResList[0]} />
          <RestaurantCard resData={allResList[1]} />
          <RestaurantCard resData={allResList[2]} />
          <RestaurantCard resData={allResList[3]} />
          <RestaurantCard resData={allResList[4]} />
          <RestaurantCard resData={allResList[5]} /> */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

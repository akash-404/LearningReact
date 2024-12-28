import RestaurantCard from "./RestaurantCard";
// import allResList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

	const [resList, setResList] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [filteredRes, setFilteredRes] = useState([]);
	const [activeFilter, setActiveFilter] = useState(false); 

	useEffect(()=>{ fetchResData();}, []);

	const fetchResData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4700319&lng=78.3534174&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		const jsonData = await data.json();
		setResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		setFilteredRes(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	}

	// conditional rendering
	// if(resList.length === 0){
	// 	return <Shimmer/>
	// }
	console.log("rendering body component");

    return resList.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      <div className="action-bar">
		<div className="search">
			<input type="text" className="search-input" value={searchText} onChange={ (e)=> {
				 setSearchText(e.target.value)}
				 } 
				 onKeyDown={ (e)=>{
					if(e.key === 'Enter'){
						const filteredRes = resList.filter((res)=> {
							return res.info.name.toLowerCase().includes(searchText.toLowerCase());
						})
						setFilteredRes(filteredRes);
					}
				 }} />
			<button className="search-btn" onClick={()=>{
				const filteredRes = resList.filter((res)=> {
					return res.info.name.toLowerCase().includes(searchText.toLowerCase());
				})
				setFilteredRes(filteredRes);
			}}>Search</button>
		</div>
		<div className="filters">
			Filters:{" "}
			<button
			className={activeFilter?'filter-btn active':'filter-btn'}
			onClick={() => {
				if(activeFilter){
					setFilteredRes(resList);
					setActiveFilter(false);
				}
				else{
					setFilteredRes(resList.filter(item => item.info.avgRating > 4.3 ));
					setActiveFilter(true);
				}
			}}
			>
			Top Rated {activeFilter ? 'X': ''}
			</button>
		</div>
	  </div>
      <div className="res-container">
        {/* <RestaurantCard resData={allResList[0]} />
          <RestaurantCard resData={allResList[1]} />
          <RestaurantCard resData={allResList[2]} />
          <RestaurantCard resData={allResList[3]} />
          <RestaurantCard resData={allResList[4]} />
          <RestaurantCard resData={allResList[5]} /> */}
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

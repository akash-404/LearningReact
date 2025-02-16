import RestaurantCard, {quickDeliveryLabelled} from "./RestaurantCard";
// import allResList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

	const [resList, setResList] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [filteredRes, setFilteredRes] = useState([]);
	const [activeFilter, setActiveFilter] = useState(false); 

	const RestaurantCardQuick = quickDeliveryLabelled(RestaurantCard);

	useEffect(()=>{ fetchResData();}, []);

	const fetchResData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4700319&lng=78.3534174&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		const jsonData = await data.json();
		setResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		setFilteredRes(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		console.log("=============================",jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,"=============================");
	}

	// conditional rendering
	// if(resList.length === 0){
	// 	return <Shimmer/>
	// }

	const onlineStatus = useOnlineStatus();

	if(!onlineStatus){
		return <h1>Looks like you're offline...!! Please check your internet connection</h1>
	}
	

    return resList?.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      <div className="flex items-center gap-16 mb-6 action-bar">
		<div className="px-4 flex gap-4 search">
			<input data-testid="searchInput" type="text" className="border border-solid border-black rounded search-input" value={searchText} onChange={ (e)=> {
				 setSearchText(e.target.value)}
				 } 
				 onKeyDown={ (e)=>{
					if(e.key === 'Enter'){
						const filteredRes = resList?.filter((res)=> {
							return res.info.name.toLowerCase().includes(searchText.toLowerCase());
						})
						setFilteredRes(filteredRes);
					}
				 }} />
			<button className="py-1 px-2 font-medium bg-green-200 rounded-lg search-btn" onClick={()=>{
				const filteredRes = resList?.filter((res)=> {
					return res.info.name.toLowerCase().includes(searchText.toLowerCase());
				})
				setFilteredRes(filteredRes);
			}}>Search</button>
		</div>
		<div className="filters">
			<span className="font-medium">Filters:{" "}</span>
			<button
			data-testid="topRatedBtn"
			className={`px-2 py-1 rounded-lg ${activeFilter ? 'active bg-orange-100 border border-solid border-orange-600' : 'bg-gray-200'}`}
			onClick={() => {
				if(activeFilter){
					setFilteredRes(resList);
					setActiveFilter(false);
				}
				else{
					setFilteredRes(resList?.filter(item => item.info.avgRating > 4.3 ));
					setActiveFilter(true);
				}
			}}
			>
			Top Rated {activeFilter ? 'X': ''}
			</button>
		</div>
	  </div>
      <div className="res-container flex flex-wrap gap-8 m-4">
        {/* <RestaurantCard resData={allResList[0]} />
          <RestaurantCard resData={allResList[1]} />
          <RestaurantCard resData={allResList[2]} />
          <RestaurantCard resData={allResList[3]} />
          <RestaurantCard resData={allResList[4]} />
          <RestaurantCard resData={allResList[5]} /> */}
        {filteredRes?.map((restaurant) => (
			<Link className="flex"  key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
				{restaurant.info.sla.deliveryTime < 20 ? <RestaurantCardQuick  resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
			</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

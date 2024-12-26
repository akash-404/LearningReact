import RestaurantCard from "./RestaurantCard";
import allResList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={allResList[0]} />
          <RestaurantCard resData={allResList[1]} />
          <RestaurantCard resData={allResList[2]} />
          <RestaurantCard resData={allResList[3]} />
          <RestaurantCard resData={allResList[4]} />
          <RestaurantCard resData={allResList[5]} /> */}
        {allResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
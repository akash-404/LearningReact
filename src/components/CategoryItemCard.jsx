import { IMG_BASE_URL } from "../utils/constants";


const CategoryItemCard = ({item})=>{

    const {isVeg, name, price, description, imageId, defaultPrice} = item.info;

    return(
        <div className="categoryItem flex justify-between items-start gap-8 p-4 border-b border-gray-400 my-3">
            <div className="flex flex-col max-w-[80%]">
                <span>{isVeg ? '🟩 Veg': '🟥Non-veg'}</span>
                <span className="font-bold my-2">{name}</span>
                <span className="font-semibold mb-1">₹ {price ? price/100 : defaultPrice/100}</span>
                <p className="text-sm">{description}</p>
            </div>
            <div className="relative">
                <img className="w-32 rounded-md object-cover" src={IMG_BASE_URL+imageId} alt={name} />
                <button className="ml-5 bg-white text-green-600 font-bold px-3 py-1 shadow-md rounded-md">Add +</button>
            </div>
            
        </div>
    )
}

export default CategoryItemCard;
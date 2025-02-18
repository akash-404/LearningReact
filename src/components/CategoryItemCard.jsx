import { IMG_BASE_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const CategoryItemCard = ({item})=>{

    const dispatch = useDispatch();

    const {isVeg, name, price, description, imageId, defaultPrice} = item.info;

    const handleAddItem = (item)=>{
        // dispatch an action to store
        dispatch(addItem(item));
    }

    return(
        <div data-testid="foodItems" className="categoryItem flex justify-between items-start gap-8 p-4 border-b border-gray-400 my-3">
            <div className="flex flex-col max-w-[80%]">
                <span>{isVeg ? '🟩 Veg': '🟥Non-veg'}</span>
                <span className="font-bold my-2">{name}</span>
                <span className="font-semibold mb-1">₹ {price ? price/100 : defaultPrice/100}</span>
                <p className="text-sm">{description}</p>
            </div>
            <div className="relative flex flex-col gap-4 items-center justify-center">
                <img className="w-32 rounded-md object-cover" src={IMG_BASE_URL+imageId} alt={name} />
                <button className="bg-white text-black-600 font-bold px-3 py-1 shadow-md rounded-md" onClick={() => handleAddItem(item)}>Add +</button>
            </div>
            
        </div>
    )
}

export default CategoryItemCard;
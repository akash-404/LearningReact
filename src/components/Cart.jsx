import CategoryItemCard from "./CategoryItemCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=> {

    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return( 
        <div className="m-10 p-10">
            <h1 className="text-center text-2xl font-bold">Cart</h1>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1.5 px-4 rounded-lg" onClick={handleClearCart}>Clear</button>
            <div className="m-auto max-w-screen-md">
                {cartItems && cartItems.length && cartItems.map((item)=> <CategoryItemCard key={item.info?.id} item={item} />)}
            </div>
            {cartItems.length === 0 && <h1>Cart is empty</h1>}
        </div>
    );
}

export default Cart
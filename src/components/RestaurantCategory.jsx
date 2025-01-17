import CategoryItemCard from "./CategoryItemCard";

const RestaurantCategory = ({category, expandCategory, setExpandedCategoryIndex})=>{
    const handleAccordion = ()=>{
        setExpandedCategoryIndex();
    }

    return(
        <div className="mb-10  shadow-lg bg-gray-100 p-3" id={category.title}>
            <div className="flex gap-10 cursor-pointer" onClick={handleAccordion}>
                <span className="w-full text-lg font-semibold ">{category.title} ({category.itemCards?.length})</span>
                <span>⬇️</span>
            </div>
            {expandCategory && category.itemCards?.map((item)=> <CategoryItemCard key={item.card?.info?.id} item={item.card} />)}

        </div>
    );
}

export default RestaurantCategory;
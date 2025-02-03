import axios from "axios"
import { useEffect, useState } from "react"
import { useCategory } from "../context/categoryContext"

function Category(){
    
    const [categories, setCategories] = useState([])
    const [categoryToShow, setCategoryToShow] = useState(0)
    const { hotelCategory, setHotelCategory} = useCategory()

    function handleCategoryRight (){
        setCategoryToShow((prev) => prev+10)
    }
    function handleCategoryLeft(){
        setCategoryToShow((prev) => prev - 10)
    }
    function handleHotelCategory({category}){
        setHotelCategory(category)
    }

    useEffect(()=>{
       ( async ()=>{
        try {
            const {data} = await axios.get("https://travelo-mhdr.onrender.com/api/category");
            const showCategory = data.slice(categoryToShow, categoryToShow + 10)
            setCategories(showCategory);
        } catch (error) {
            console.log(error);
        }
    })()
    },[categoryToShow])
    return(
        <section className="relative w-full overflow-hidden">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Navigation Button */}
          <button 
            onClick={handleCategoryLeft}
            className="
              hidden 
              md:block 
              text-gray-600 
              hover:text-gray-900 
              bg-white 
              shadow-md 
              rounded-full 
              p-2 
              transition-colors 
              duration-200 
              z-10
            "
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
  
          {/* Category Scrollable Container */}
          <div className="
            flex 
            items-center 
            overflow-x-auto 
            space-x-4 
            md:space-x-6 
            py-3 
            scrollbar-hide 
            flex-grow
            mx-4
          ">
            {categories.map(({category, _id}) => (
              <span 
                key={_id}
                onClick={() => handleHotelCategory({category})}
                className={`
                  flex-shrink-0
                  cursor-pointer 
                  px-3 
                  py-1 
                  text-sm 
                  md:text-base 
                  whitespace-nowrap 
                  transition-all 
                  duration-200
                  ${category === hotelCategory 
                    ? "border-b-2 border-black font-semibold text-black" 
                    : "text-gray-600 hover:text-black hover:border-b-2 hover:border-gray-300"}
                `}
              >
                {category}
              </span>
            ))}
          </div>
  
          {/* Right Navigation Button */}
          <button 
            onClick={handleCategoryRight}
            className="
              hidden 
              md:block 
              text-gray-600 
              hover:text-gray-900 
              bg-white 
              shadow-md 
              rounded-full 
              p-2 
              transition-colors 
              duration-200 
              z-10
            "
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>
        </div>
  
        {/* Mobile Scroll Indicators */}
        <div className="
          absolute 
          inset-x-0 
          bottom-0 
          h-1 
          bg-gray-200 
          md:hidden
        ">
          <div className="
            h-full 
            bg-black 
            w-1/3 
            transform 
            transition-transform 
            duration-300
          "></div>
        </div>
      </section>
    );
  };
  
  export default Category;
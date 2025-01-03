import axios from "axios"
import { useEffect, useState } from "react"

function Category(){
    
    const [categories, setCategories] = useState([])
    const [categoryToShow, setCategoryToShow] = useState(0)

    function handleCategoryRight (){
        setCategoryToShow((prev) => prev+10)
    }
    function handleCategoryLeft(){
        setCategoryToShow((prev) => prev - 10)
    }

    useEffect(()=>{
       ( async ()=>{
        try {
            const {data} = await axios.get("http://localhost:3000/api/category");
            const showCategory = data.slice(categoryToShow, categoryToShow + 10)
            setCategories(showCategory);
        } catch (error) {
            console.log(error);
        }
    })()
    },[categoryToShow])
    return(
       <section className="p-3 px-9 font-normal flex gap-10 "> 
        <button onClick={handleCategoryLeft}
        ><span class="material-symbols-outlined">chevron_left    
        </span></button>
        {categories.map(({category,_id})=><span className="cursor-pointer"
        key={_id}>{category}</span>)} 
        <button onClick={handleCategoryRight}
        ><span class="material-symbols-outlined">chevron_right   
        </span></button> 
       </section>
    )
}
export default Category
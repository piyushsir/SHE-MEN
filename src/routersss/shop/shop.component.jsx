
import CategoryPrints from "../Category-items/Category-items.component";
import { Route,Routes } from "react-router-dom";
import Category from "../Category/Category.component";
const Shop=()=>
{
    
return(
        <Routes>
        <Route index element={<CategoryPrints/>}/>
        <Route path=":category" element={<Category/>}/>
        </Routes>
)
     
}

export default Shop;
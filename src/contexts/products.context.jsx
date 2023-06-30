import { createContext,useState,useEffect} from "react";
import { getCollectionAndDocument } from "../utils/firebase/firebase.utils.js";

export const ProductContext=createContext({
    products:{},
})

export const ProductProvider=({children})=>
{
   /* useEffect(()=>
    {
        const setdata=async()=>
        {
            AddCollectionAndDocument("categories",SHOP_DATA);
        }
        setdata();

    },[])
   */
    const [products,setproducts] = useState({});
    const value = {products}
    useEffect(()=>
    {
        const getdata=async()=>
        {
           const CategoryMap =  await getCollectionAndDocument();
          console.log(CategoryMap);
          setproducts(CategoryMap);
        }
        getdata();

    },[])
    

return (<ProductContext.Provider value={value}>{children}</ProductContext.Provider>)
}
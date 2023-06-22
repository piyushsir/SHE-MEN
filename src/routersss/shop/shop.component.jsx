
import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import './shop.style.scss'
import ShopCard from "../../components/shop-card/shop-card.component";
const Shop=()=>
{
    const {products} = useContext(ProductContext)
     return (
       <div className="products-container">
        {
            products.map((data)=>
            {
               
                return (<ShopCard key={data.id} product={data}/>)
            })
        }
        </div>
     )
}

export default Shop;
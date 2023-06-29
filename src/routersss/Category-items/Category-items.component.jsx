
import { useContext,Fragment } from "react";
import { ProductContext } from "../../contexts/products.context";
import './Category-items.style.scss'
import ShopCard from "../../components/shop-card/shop-card.component";
import { Link } from "react-router-dom";

const CategoryPrints=()=>
{
    const {products} = useContext(ProductContext)
   
     return (
<Fragment>
        {Object.keys(products).map((title)=>
        {
            return(
            <Fragment key={title}>
            <Link to={title}><h1>{title.toUpperCase()}</h1></Link>
            <div className="products-container">
            {
            products[title].filter((_,idx)=>{return idx<4}).map((data)=>
            {
               
                return (<ShopCard key={data.id} product={data}/>)
            })
            }
          </div>
          </Fragment>)

        })}
       
</Fragment>
     )
}

export default CategoryPrints;
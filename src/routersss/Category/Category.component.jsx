import './Category.style.scss'
import { useContext,useState,useEffect } from 'react';
import { ProductContext } from '../../contexts/products.context';
import { useParams } from 'react-router-dom';
import ShopCard from '../../components/shop-card/shop-card.component';
const Category=()=>
{
    const {products}=useContext(ProductContext);
    const {category}=useParams();
    const [pr,setpr]=useState(products[category]);
    useEffect(()=>
    {
        setpr(products[category]);
    },[products,category])
    return(
        <>
        <h1>{category.toUpperCase()}</h1>
        <div className='products-container'>
            {
                pr && pr.map((data)=>
                {
                    return (<ShopCard key={data.id} product={data}/>)
                })
            }

        </div>
        </>
    )


}
export default Category;
import './checkout.style.scss'
import {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context';

const CheckOut =({Products})=>
{
    const {name,price,imageUrl,quantity} = Products;
    const {addProductToCart,ReduceProductToCart,DeleteAll} = useContext(CartContext)
    return (
        <div className='checkout-item-container'>
        <div className='image-container'>
            <img src = {`${imageUrl}`} alt={`${name}`}/>
        </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <span className="material-symbols-outlined" onClick={()=>ReduceProductToCart(Products)}>arrow_back_ios</span>{quantity}
            <span className="material-symbols-outlined" onClick={()=>addProductToCart(Products)}>arrow_forward_ios</span>
            
            </span> 
           <span className='price'>{price}</span>
           <span className="material-symbols-outlined" onClick={()=>DeleteAll(Products)}>delete</span>
        </div>
    )
}
export default CheckOut;
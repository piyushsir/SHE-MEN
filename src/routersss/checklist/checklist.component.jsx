import './checklist.style.scss'
import {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context';
import CheckOut from '../../components/checkout/checkout.component';


const CheckList=()=>
{
    const {CartProducts,TotalCost} = useContext(CartContext)
   
return(
<div className='checkout-container'>
    <div className='checkout-header'>
        <div className='header-block'>
         <span>Product</span>
        </div>
        <div className='header-block'>
        <span>Description</span>
        </div>
        <div className='header-block'>
        <span>Quantity</span>
        </div>
        <div className='header-block'>
        <span>Price</span>
        </div>
        <div className='header-block'>
        <span>Remove</span>
        </div>
    </div>
      {CartProducts.map((itms)=>
      {
        return(

               <CheckOut key = {itms.id} Products={itms}/> 


        )

      })}
      <span className='Total'><h2>Total=${TotalCost}</h2></span>
</div>

)
}
export default CheckList; 
import './icon-dropdown.style.scss'
import Button from '../../button/button.component';
import CardItem from '../card-item/card-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const IconDrop=()=>
{
   const {CartProducts} =useContext(CartContext)
   const {setProductCount} = useContext(CartContext)
   const tot = CartProducts.reduce((total,itms)=>
   {
        return (total+itms.quantity);
   },0)
   setProductCount(tot);
   return (
   <div className='cart-dropdown-container'>
      <div className='cart-items'>
       {CartProducts.map((items)=>
       {
            return ( 
               <CardItem key = {items.id} Product={items}/>
            )
       })}
      </div>
   

       <Button type="button">CHECKLIST</Button>
   </div>

   )
}
export default IconDrop;
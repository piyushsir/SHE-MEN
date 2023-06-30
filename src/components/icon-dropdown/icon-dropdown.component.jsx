import './icon-dropdown.style.scss'
import Button from '../../button/button.component';
import CardItem from '../card-item/card-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
//instead of link we can also use {useNavigate} hook 
const IconDrop=()=>
{

   const {CartProducts} =useContext(CartContext)
  const Navigate = useNavigate();
  const Gotocheck=()=>
  {
   return Navigate("/checklist")
  }
   return (
   <div className='cart-dropdown-container'>
      <div className='cart-items'>
       {CartProducts.length? (CartProducts.map((items)=>
       {
            return ( 
               <CardItem key = {items.id} Product={items}/>
            )
       })):<span className='empty-message'>EMPTY CART</span>}
      </div>
   

      <Button type="button" onClick={Gotocheck}>CHECKLIST</Button>
   </div>

   )
}
export default IconDrop;
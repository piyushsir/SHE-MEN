import './checklist.style.scss'
import {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context';
import CheckOut from '../../components/checkout/checkout.component';
import {loadStripe} from '@stripe/stripe-js';


const CheckList=()=>
{
    const {CartProducts,TotalCost} = useContext(CartContext)
    const makePayment = async()=>{
      const stripe = await loadStripe("pk_test_51PAmCASIJbIoqQ3KqPfa8UHC38BaXAkixP5NzZt3IdJIyylM4N8Tns7Dc3faerqotlkh4DWMMIawSca0kyHLQp3000ZidpjMj7");

      const body = {
          products:CartProducts,
          cost:TotalCost
      }
      const headers = {
          "Content-Type":"application/json"
      }
      const response = await fetch("http://localhost:7000/api/create-checkout-session",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
      });

      const session = await response.json();

      const result = stripe.redirectToCheckout({
          sessionId:session.id
      });
      
      if(result.error){
          console.log(result.error);
      }
  }


   
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
      {TotalCost>10?<span className='Total'><button className='payment' onClick={makePayment}>PAY ${TotalCost}</button></span>:<></>}
</div>

)
}
export default CheckList; 

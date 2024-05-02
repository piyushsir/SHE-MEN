import './cart-icon.style.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import cart_icon from '../Assets/cart_icon.png'
import { useContext } from 'react'

const CartIcon=()=>
{
    const {isCartOpen,setisCartOpen}=useContext(CartContext);
    const {ProductCount} = useContext(CartContext);
    const toggler=()=>
    {
        setisCartOpen(!isCartOpen);
    }
    return (

        <div className='nav-login-cart'>
            <img src={cart_icon} alt="" onClick={toggler}/>
            {/*<ShoppingIcon className='shopping-icon' onClick={toggler}/>*/}
            <span className='nav-cart-count' onClick={toggler}>{ProductCount}</span>

        </div>
    )
}
export default CartIcon;
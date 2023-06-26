import './cart-icon.style.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
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

        <div className='cart-icon-container'  >
            <ShoppingIcon className='shopping-icon' onClick={toggler}/>
            <span className='item-count' onClick={toggler}>{ProductCount}</span>

        </div>
    )
}
export default CartIcon;
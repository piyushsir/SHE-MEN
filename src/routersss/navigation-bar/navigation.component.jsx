import './navigation.style.css'
import '../navigation-bar/navbar.css'
import logo from '../../components/Assets/logo.png'
import { Outlet,Link} from "react-router-dom";
import { Fragment,useContext } from 'react';
//import {ReactComponent as Crownlogo} from '../../assets/crown.svg'
import { UserContext } from '../../contexts/context.user';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import IconDrop from '../../components/icon-dropdown/icon-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
const Navbar=()=>
{

 
  
  const {CurrentUser,SetCurrentUser} = useContext(UserContext)
  console.log(CurrentUser);

  const {isCartOpen} = useContext(CartContext);

  const SignOutHandler=async()=>
  {
      
        await SignOutUser()
        SetCurrentUser(null);
        
      
  }
  return (

    <Fragment>
     <div className='navigation'>
        <Link to="/">
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>GOODBUY</p>
        </div>
        </Link>
        <div className='nav-links-container'>
        <Link to="/shop" className='nav-link'>
            Shop
        </Link>

        {
          CurrentUser?(<span className='nav-link' onClick={SignOutHandler}> <button className='b1'>Sign-Out</button></span>):(<Link to="/sign-in" className='nav-link'> <button className='b1'>Sign-In</button> </Link>)
        }

        <CartIcon/>
      
        
       
        
     </div>
     {isCartOpen && <IconDrop/>}
     </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navbar; 
import './navigation.style.css'
import { Outlet,Link} from "react-router-dom";
import { Fragment,useContext } from 'react';
import {ReactComponent as Crownlogo} from '../../assets/crown.svg'
import { UserContext } from '../../contexts/context.user';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
const Navbar=()=>
{

 
  
  const {CurrentUser,SetCurrentUser} = useContext(UserContext)
  console.log(CurrentUser);

  const SignOutHandler=async()=>
  {
      
        await SignOutUser()
        SetCurrentUser(null);
        
      
  }
  return (

    <Fragment>
     <div className='navigation'>
        <Link to="/" className='logo-container'>
           <Crownlogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
        <Link to="/shop" className='nav-link'>
            Shop
        </Link>

        {
          CurrentUser?(<span className='nav-link' onClick={SignOutHandler}> Sign-Out</span>):(<Link to="/sign-in" className='nav-link'> Sign-In </Link>)
        }
        
       
        
     </div>
     </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navbar; 
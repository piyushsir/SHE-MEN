
//import {getRedirectResult} from 'firebase/auth'
//import {signInWithGooglePopup,CreateUserFromAuth,signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils';
//import { useEffect } from 'react';
//import auth 
import SignUp from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form-component';
import './sign-in.style.scss'
const SignIn=()=>
{
 /* useEffect(()=>
  {
    async function useless(){
      const respo = await getRedirectResult(auth)
      console.log(respo);
    }

    useless();
       
  },[])
  */
    

    
  return (<div className='auth-container'>
  
  
  <SignInForm/>
  
  <SignUp/>
  
  </div>
  
  
  )

}

export default SignIn; 
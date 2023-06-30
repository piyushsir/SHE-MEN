import FormInput1 from "../input-form/input-form.component";
import { signInWithGooglePopup,CreateUserFromAuth,SignInWithUserEmailAndPassword} from "../utils/firebase/firebase.utils";
import { useState,useContext } from "react";
import './sign-in-form-style.scss'
import Button from "../button/button.component";
import { UserContext } from "../contexts/context.user";
const defaultdetails={
    email : '',
    password:'',
}


const SignInForm=()=>
{
    const [formfield,setforfields] = useState(defaultdetails)
   const {email,password} = formfield
   const {SetCurrentUser}=useContext(UserContext)

    const handler=(event)=>
    {
        const {name,value}= event.target;
        setforfields({...formfield,[name]:value})

    }
    const setdefault=()=>{

        setforfields(defaultdetails);
    }
    const UserHandler= async (event)=>
    {
        event.preventDefault();
      
    
    try{

        const {user} = await SignInWithUserEmailAndPassword(email,password);
        //console.log(user)
        SetCurrentUser(user)
         setdefault();

      }catch(error){
       switch(error.code)
       {
        case "auth/wrong-password":
            {
                alert("wrong password")
                break;
            }
        case "auth/user-not-found":
           {
            alert("account does not exist")
            break;
           }
        default:
            {
                console.log(error);
                break;
            }

       }
      }
    
    }
    const login= async()=>
    {
        try{
        const response = await signInWithGooglePopup();
        if(response){
            const {user} = response;
            SetCurrentUser(user)
            await CreateUserFromAuth(user);
            }
        }
        catch(error)
        {
            if(error.code==="auth/popup-closed-by-user")
            {
                console.log(error);
            }
        }
        
    }

    return (
     <div className="sign-up-container">
        <h2>Already Have An Account</h2>
        <span>
         login to continue
        </span>
        <form onSubmit={UserHandler}>

           

               <FormInput1 label="Email" inputoptions={
                {required : true,
                 type:"email",
                 onChange:handler,
                 name:"email",
                 value:email

                }

            }/>
          
          <FormInput1 label="Password" inputoptions={
                {required : true,
                 type:"password",
                 onChange:handler,
                 name:"password",
                 value:password

                }

            }/>

              
          
           <div className="buttons-container">
             <Button type="submit" style={{margin:4}}>SIGN-IN</Button>
            <Button type = "button" onClick={login} btntype="google" style={{margin:4}} children={"Google"}></Button>
            </div>


        </form>
        
     </div>
    )
}

export default SignInForm;
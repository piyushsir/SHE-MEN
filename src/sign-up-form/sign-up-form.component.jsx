import FormInput1 from "../input-form/input-form.component";
import { CreateAuthUserWithEmailAndPassword,CreateUserFromAuth} from "../utils/firebase/firebase.utils";
import { useState,useContext} from "react";
import './sign-up-form.style.scss'

import Button from "../button/button.component";
import { UserContext } from "../contexts/context.user";
const defaultdetails={
    displayName : '',
    email : '',
    password:'',
    confirmPassword:''
}



const SignUp=()=>
{
    const [formfield,setforfields] = useState(defaultdetails)
   const {displayName,email,password,confirmPassword} = formfield
   
   const {SetCurrentUser} = useContext(UserContext);

    const handler=(event)=>
    {
        const {name,value}= event.target;
        setforfields({...formfield,[name]:value})

    }
    const setdefault=()=>{

        setforfields(defaultdetails);
    }
    const UserHandler= async(event)=>
    {
        event.preventDefault();
      if(password !== confirmPassword)
      {alert("password and confirm password does not match")
        return}

      try{
        const {user} = await CreateAuthUserWithEmailAndPassword(email,password);
        SetCurrentUser(user);
         await CreateUserFromAuth(user,{displayName})
         setdefault();

      }catch(error){
        if(error.code === 'auth/email-already-in-use')
        {
            alert("user alerady exist");
        }
        else{
         console.log("error"+error);
        }
      }
    }

    return (
     <div className="sign-up-container">
        <h2>Don't Have An Account</h2>
        <span>
         fill the information here
        </span>
        <form onSubmit={UserHandler}>

            <FormInput1 label="Display Name" inputoptions={
                {required : true,
                 type:"text",
                 onChange:handler,
                 name:"displayName",
                 value:displayName

                }

            }/>

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

               <FormInput1 label="Confirm Password" inputoptions={
                {required : true,
                 type:"password",
                 onChange:handler,
                 name:"confirmPassword",
                 value:confirmPassword

                }

            }/>

          
            <Button children="SIGN-UP"  type="submit"/>

        </form>

     </div>
    )
}

export default SignUp;
import {initializeApp} from 'firebase/app'
import {getFirestore,getDoc,setDoc,doc} from 'firebase/firestore'
import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider,
    createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut
} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDlD5kyvktKiWyq6jDTye4UVnE-EQ12rp4",
    authDomain: "sas-clothing.firebaseapp.com",
    projectId: "sas-clothing",
    storageBucket: "sas-clothing.appspot.com",
    messagingSenderId: "975008070070",
    appId: "1:975008070070:web:3505fc8d33c105a2b3e917"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider;
  provider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup =async()=>{return await signInWithPopup(auth,provider)}

  export const signInWithGoogleRedirect = ()=>{try{signInWithRedirect(auth,provider)}catch(error){console.log(error)}}

  export const db = getFirestore();

  export const CreateUserFromAuth=async(userinfo,additionalinfo={})=>
  {
      const database = doc(db,'users',userinfo.uid);
      const usersnap = await getDoc(database);
     
      
      if(!usersnap.exists())
      {
         const {displayName,email} = userinfo;
         const CreatedAt = new Date();
         try{

            await setDoc(database,
                {
                    displayName,email,CreatedAt,...additionalinfo
                });

         }catch(error)
         {
            console.log("createing document error"+error)
         }

      }
      
        return database;
      
  };

export const CreateAuthUserWithEmailAndPassword=async(email,password)=>
{
    if(!email || !password)
    {
        return;
    }
    return await createUserWithEmailAndPassword(auth,email,password);
}
export const SignInWithUserEmailAndPassword=async(email,password)=>
{
    if(!email || !password)
    {
        return;
    }
    return await signInWithEmailAndPassword(auth,email,password);
}
export const SignOutUser =async()=>
{
    return await signOut(auth); 
}

import Homepage from './routersss/Home/home.component';
import {Routes,Route} from 'react-router-dom';
import Navbar from './routersss/navigation-bar/navigation.component';
import SignIn from './routersss/sign-in/sign-in.component';

const Shop=()=>
{
  return (

    <div>
      <h1>
        {
        "helloo navigation bar"
        }
      </h1>
    </div>
  )
}
const App=()=>
 {
  
   return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element={<Homepage/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        </Route>
    </Routes>


   ) 
}

export default App;

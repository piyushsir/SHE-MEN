
import Homepage from './routersss/Home/home.component';
import {Routes,Route} from 'react-router-dom';
import Navbar from './routersss/navigation-bar/navigation.component';
import SignIn from './routersss/sign-in/sign-in.component';
import Shop from './routersss/shop/shop.component';
import CheckList from './routersss/checklist/checklist.component';

const App=()=>
 {
  
   return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element={<Homepage/>}/>
       <Route path='shop/*' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='checklist' element={<CheckList/>}/>
        </Route>
    </Routes>


   ) 
}

export default App;

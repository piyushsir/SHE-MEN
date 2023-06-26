import {createContext,useState,useEffect} from 'react'
const addItemsCart=(CartProducts,product)=>
{
    const existingItem = CartProducts.find((itm)=>itm.id===product.id
    )

    if(existingItem)
    {
         return CartProducts.map((itm)=>
         {
            return (itm.id===product.id?{...itm,quantity:itm.quantity+1}:itm)

         })
    }

    return ([...CartProducts,{...product,quantity:1}])
}

export const CartContext = createContext({
 isCartOpen:false,
 setisCartOpen:()=>{},
 CartProducts:[],
 addProductToCart:()=>{},
 ProductCount:0,

})

export const CartProvider=({children})=>
{
    const [isCartOpen,setisCartOpen] = useState(false)
    const [CartProducts,SetCartProducts]=useState([]);
    const [ProductCount,setProductCount]=useState(0);
   const addProductToCart=(product)=>{
        SetCartProducts(addItemsCart(CartProducts,product))

   }
  useEffect(()=>
  {
      const totalQuantity = CartProducts.reduce((total,itms)=>
      {
          return (total+itms.quantity)
      },0)
      setProductCount(totalQuantity);
  },[CartProducts])
    const value = {isCartOpen,setisCartOpen,CartProducts,addProductToCart,ProductCount,setProductCount} 
    return (<CartContext.Provider value = {value}>{children}</CartContext.Provider>)
}
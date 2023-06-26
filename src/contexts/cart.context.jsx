import {createContext,useState,useEffect} from 'react'

const Deleted=(CartProducts,product)=>
{
   return CartProducts.filter((itms)=>
   {
     return (itms.id !== product.id)
   })
}
const reduceItemsCart=(CartProducts,product)=>
{
    const existingItem = CartProducts.find((itm)=>itm.id===product.id
    )
    if(existingItem.quantity===1)
    {
        return CartProducts.filter((itms)=>
        {
           return( itms.id !==product.id)
        })
    }
    return ( CartProducts.map((itm)=>
    {
       return (itm.id===product.id?{...itm,quantity:itm.quantity-1}:itm)

    }))

    

}
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
 ReduceProductToCart:()=>{},
 TotalCost:0,
 DeleteAll:()=>{}

})

export const CartProvider=({children})=>
{
    const [isCartOpen,setisCartOpen] = useState(false)
    const [CartProducts,SetCartProducts]=useState([]);
    const [ProductCount,setProductCount]=useState(0);
    const [TotalCost,setTotalCost]=useState(0);
   const addProductToCart=(product)=>{
        SetCartProducts(addItemsCart(CartProducts,product))

   }
   const ReduceProductToCart=(product)=>{
    SetCartProducts(reduceItemsCart(CartProducts,product))

    }
    const DeleteAll=(product)=>
    {
        SetCartProducts(Deleted(CartProducts,product))

    }
  useEffect(()=>
  {
      const totalQuantity = CartProducts.reduce((total,itms)=>
      {
          return (total+itms.quantity)
      },0)
      setProductCount(totalQuantity);
  },[CartProducts])

  useEffect(()=>
  {
      const totalCost = CartProducts.reduce((total,itms)=>
      {
          return (
            total+((itms.quantity)*(itms.price))
            )
      },0)
      setTotalCost(totalCost);
  },[CartProducts])
    const value = {isCartOpen,setisCartOpen,CartProducts,addProductToCart,ProductCount,setProductCount,ReduceProductToCart,TotalCost,DeleteAll} 
    return (<CartContext.Provider value = {value}>{children}</CartContext.Provider>)
}
import Button from "../../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import './shop-card.style.scss'
const ShopCard=({product})=>
{
    const {name,imageUrl,price} = product;
    const {addProductToCart} =useContext(CartContext);
    const additms=()=>addProductToCart(product)
    return (

        <div className="product-card-container">
            <img src={`${imageUrl}`} alt={`${name}`}/>
            <Button type = "button" btntype="inverted" onClick={additms}>ADD TO CART</Button>
            <div className="footer">
                {
                   <><span className="name">{name}</span><span className="price">${price}</span></>
                }
            </div>

        </div>
    )
}

export default ShopCard;
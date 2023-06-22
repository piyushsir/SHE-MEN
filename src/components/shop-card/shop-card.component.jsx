import Button from "../../button/button.component";
import './shop-card.style.scss'
const ShopCard=({product})=>
{
    const {name,imageUrl,price} = product;
    return (

        <div className="product-card-container">
            <img src={`${imageUrl}`} alt={`${name}`}/>
            <Button type = "button" btntype="inverted">SHOP NOW</Button>
            <div className="footer">
                {
                   <><span className="name">{name}</span><span className="price">${price}</span></>
                }
            </div>

        </div>
    )
}

export default ShopCard;
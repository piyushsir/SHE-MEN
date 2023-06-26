import './card-item.style.scss'
const CardItem=({Product})=>
{
    const {name,quantity,price,imageUrl} = Product
    return (
        <div className='cart-item-container'>
            <img src={`${imageUrl}`} alt={`${name}`}/>
            <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} X ${price}</span>
            </div>
         
        </div>
    )
}

export default CardItem;
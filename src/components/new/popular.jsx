import React from 'react'
import './popular.css'
import data_product from '../Assets/data'
import Item from '../itemtimer/item'
const Popular2 = () => {
  return (
    <div className='popular'>
        <h1>AUCTION</h1>
        <hr></hr>
        <div className='popular-item'>
            {
                data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default Popular2
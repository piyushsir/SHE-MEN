import React from 'react'
import '../newcollection/newcollection.css'
import new_collections from '../Assets/new_collections'
import Item from '../item/item'
const NewCollection = () => {
  return (
    <div className='popular1'>
        <h1>NEW COLLECTION</h1>
        <hr></hr>
        <div className='popular-item1'>
            {
                new_collections.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default NewCollection
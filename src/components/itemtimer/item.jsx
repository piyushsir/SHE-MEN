import React, { useEffect, useState } from 'react'
import '../itemtimer/item.css'
const Item = (props) => {

    const [time,settime]=useState(2*24*60*60*1000);
    useEffect(()=>{
        setTimeout(()=>{
            settime(time-1000);
        },1000)

    },[time])

    const formatedtime=(milliseconds)=>{
        let sec = parseInt(Math.floor(milliseconds/1000));
        let min=parseInt(Math.floor(sec/60));
        let hrs = parseInt(Math.floor(min/60))
        let days = parseInt(Math.floor(hrs/24))

        let s = parseInt(sec%60);
        let m=parseInt(min%60)
        let hr = parseInt(hrs%24)

        return `${days} : ${hr} : ${m} : ${s}`
    }
    return (
    <div className='item'>
    <div className="timer">
     {formatedtime(time)}
    </div>
    <div className="image" style={{ backgroundImage: `url(${props.image})` }}>
            <div className='inner'>
                <input type="text" placeholder='Enter Your Bid' className='inbid'></input>
                <button className='placebid'>PLACE</button>
            </div>
        </div>

    <p>{props.name}</p>
    <div className="item-prices">
    
    </div>
    </div>
    )
}

export default Item;
import React, { useEffect, useState } from 'react'
import '../itemtimer/item.css'
import {useRef} from 'react';

const Item = (props) => {

    const [time,settime]=useState(60*60*10*1000);
    const ref = useRef(null);

  
    
    
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
    let [mx,setmx]=useState(0)
    let [bid,setbid]=useState(0);
    const fun1=()=>{
        if(time===0){
            settime(0);
           return mx;
        }
        mx=setmx(Math.max(mx,parseInt(bid)));
        ref.current.value = '';
    }

    const [nm,setnm]=useState('Shantanu')
    const [nm2,setnm2]=useState('NO BID PLACED')
    console.log(bid);
    console.log(mx);
    return (
    <div className='item'>
    {time>0?<div className="timer">
     {formatedtime(time)}
    </div>:<div className='timer'>Auction Time Up</div>}
    
    <div className="image" style={{ backgroundImage: `url(${props.image})` }}>
            

            {time>0?<div className='inner'><input ref={ref} type="text" onChange={(e)=>setbid(e.target.value)} placeholder='Enter Your Bid' className='inbid'></input><button className='placebid' onClick={fun1}>PLACE</button></div>:<div className='inner'><div className='winner'>{bid==0?<div>{nm2}</div>:<>{mx} {nm}</>}</div></div>}
                
                
            
        </div>

    <p>{props.name}</p>
    <div className="item-prices">
    
    </div>
    </div>
    )
}

export default Item;
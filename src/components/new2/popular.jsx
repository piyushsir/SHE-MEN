import React from 'react'
import './popular.css'
import Item2 from '../itemtimer2/item';

import { useEffect, useState } from "react";
import { txtDB } from "../../utils/firebase/firebase.utils"
import { collection, getDocs } from "firebase/firestore";
const Popular3 = () => {

  const [data,setData] = useState([])

  const getData = async () =>{
    const valRef = collection(txtDB,'txtData')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
    setData(allData)
    console.log(dataDb)
}

useEffect(()=>{
    getData()
})

  return (
    <div className='popular'>
        <div className='popular-item'>
            {
                data.map((item,i)=>{
                    return <Item2 key={i} id={item.id} name={item.txtVal} image={item.imgUrl}/>
                })
            }
        </div>
    </div>
  )
}

export default Popular3
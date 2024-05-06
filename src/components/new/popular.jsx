import React from 'react'
import './popular.css'
import data_product from '../Assets/data'
import Item from '../itemtimer/item'

import { useEffect, useState } from "react";
import { txtDB } from "../../utils/firebase/firebase.utils"
import { collection, getDocs } from "firebase/firestore";
const Popular2 = () => {

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
        <h1>AUCTION</h1>
        <hr></hr>
        <div className='popular-item'>
            {
                data.map((item,i)=>{
                    return <Item key={i} name={item.txtVal} image={item.imgUrl}/>
                })
            }
        </div>
    </div>
  )
}

export default Popular2
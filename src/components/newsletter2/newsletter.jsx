import React from 'react'
import './newsletter.css'
import { useEffect, useState } from "react";
import { imgDB,txtDB} from '../../utils/firebase/firebase.utils'
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Item from '../itemtimer/item';

const Newsletter2 = () => {
  const [txt,setTxt] = useState('')
  const [img,setImg] = useState('')
  const [data,setData] = useState([])


  const handleUpload = (e) =>{
      console.log(e.target.files[0])
      const imgs = ref(imgDB,`Imgs/${v4()}`)
      uploadBytes(imgs,e.target.files[0]).then(data=>{
          console.log(data,"imgs")
          getDownloadURL(data.ref).then(val=>{
              setImg(val)
          })
      })
  }

  const handleClick = async () =>{
          const valRef = collection(txtDB,'txtData')
          await addDoc(valRef,{txtVal:txt,imgUrl:img})
          alert("Data added successfully")
  }

  const getData = async () =>{
      const valRef = collection(txtDB,'txtData')
      const dataDb = await getDocs(valRef)
      const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
      setData(allData)
  }

  useEffect(()=>{
      getData()
})
  console.log(data,"datadata")
  return (
    <div className='newsletter'>
        <h1>Get Your Product Listed in Auction</h1>
        <p>Stay Updated and Get Best Price</p>
        <div>
        <input type='text' placeholder='Product Description' onChange={(e)=>setTxt(e.target.value)}>
       
        </input>
       
        <input type="file" onChange={(e)=>handleUpload(e)} className='custom-file-input'/><br/>
        <button className='last' onClick={handleClick}>Upload</button>

           
        </div>
    </div>
  )
}

export default Newsletter2
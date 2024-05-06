import React from 'react'
import './newsletter.css'
const Newsletter2 = () => {
  const handleUpload=()=>{

  }
  return (
    <div className='newsletter'>
        <h1>Get Your Product Listed in Auction</h1>
        <p>Stay Updated and Get Best Price</p>
        <div>
        <input type='text' placeholder='Product Description'>
       
        </input>
       
        <input type="file" onChange={(e)=>handleUpload(e)} className='custom-file-input'/><br/>
        <button className='last'>Upload</button>
        </div>
    </div>
  )
}

export default Newsletter2
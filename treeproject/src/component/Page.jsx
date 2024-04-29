import React from 'react'
import Image from '../image/fives.jpg'

const Page = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'pink'}}>
        <div style={{padding:80}}><span>LIFE GATHERS AROUND PLANTS</span><br></br><br></br>
        <span style={{fontSize:40,fontWeight:500}}>A Houseplant's Journey<br></br>
        Home</span><br></br><br></br>
        <span>Praesent egestas tristique nibh.sed mollis et ultrices tempus mauris <br></br>
        ipsumaliquam libero,non adipiscing dolor a arci.fusce convallis metus<br></br> 
        id felis luctus adipiscing.integer tincidunt.</span><br></br><br></br><br></br>
        <button style={{height:40,width:150,backgroundColor:'green',color:'white',border:'none' }}>OUR STORIES</button></div>
        <div><img src={Image} alt="" /></div>
    </div>
      
    </>
  )
}

export default Page

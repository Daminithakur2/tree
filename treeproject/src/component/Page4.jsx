import React from 'react'
import Image from '../image/photo1.jpg'
import Image1 from '../image/box2.jpg'
import Image2 from '../image/box3.jpg'
import Image3 from '../image/box4.jpg'
import Image4 from '../image/box1.jpg'
const Page4 = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'space-around',padding:50}}><br></br>
        <div style={{position:'relative'}}><img  src={Image} alt='' />
        <span style={{ position:'absolute',zIndex:999,left:120,fontSize:40,fontWeight:600,bottom:90,color:'white'}} >Decorate your home<br></br>with plants</span>
        <span style={{position:'absolute',zIndex:999,left:200,fontSize:30,fontWeight:400,bottom:10,color:'white'}}>shop collection<hr></hr></span></div>
        <div>
            <div><img style={{height:350,width:330}} src={Image1} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
            <img style={{height:350,width:330}}  src={Image2} alt="" /></div>
            <div style={{display:'flex'}}>
<span style={{display:'flex',justifyContent:'left',paddingLeft:90,height:50,width:200}}>Devil's lvy<br></br>
             $100.00-$180.00   </span><span style={{display:'flex',justifyContent:'left',marginLeft:150,height:50,width:200}}>Echeveria succulent<br></br>
                $100.00</span></div>
            <div>
                <img style={{height:350,width:330}} src={Image3} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                <img style={{height:350,width:330}} src={Image4} alt="" />
                <div style={{display:'flex'}}><span style={{textAlign:'center',alignItems:'center',display:'flex',justifyContent:'left',paddingLeft:90,height:50,width:200}}>Pine Tree<br></br>
                $100.00</span>
                <span style={{display:'flex',justifyContent:'left',height:50,width:200,marginLeft:150}}>European cypress<br></br>
                $79.00</span></div>
            </div>
        </div>
        
    </div>
    </>

      
  )
}

export default Page4

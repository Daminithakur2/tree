import React from 'react'
import Image from '../image/box1.jpg'
import Image1 from '../image/box2.jpg'
import Image2 from '../image/box3.jpg'
import Image3 from '../image/box4.jpg'

const Page5 = () => {
  return (
    <>
    <div>
        <div style={{display:'flex',justifyContent:'center',padding:40}}><span style={{fontSize:50,fontFamily:'inherit'}}>New Arrivals </span></div>
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <div><img style={{height:300,width:300}} src={Image} alt="" /></div>
            <div><img style={{height:300,width:300}} src={Image1} alt="" /></div>
            <div><img style={{height:300,width:300}} src={Image2} alt="" /></div>
            <div><img style={{height:300,width:300}} src={Image3} alt="" /></div>
        </div>
        <div style={{display:'flex',justifyContent:'space-around'}}><span>Devil's lvy<br></br>
            $100.00-$180.00</span><span>pine Tree <br></br>
                $100.00</span>
                <span>European Cypress<br></br>
                    $79.00</span>
                    <span>Echeveria succulent<br></br>
                        $100.00</span></div>
    </div>
      
    </>
  )
}

export default Page5

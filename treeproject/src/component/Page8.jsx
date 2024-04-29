import React from 'react'
import Image from '../image/logo.png'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiEarthLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
const Page8 = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'black' }}>
        <div style={{ padding: 30, color: 'white' }}><span style={{ fontSize: 20, color: 'white' }}>COMPANY</span><br></br><br></br><br></br>
          About<br></br><br></br>
          Careers<br></br><br></br>
          Press<br></br><br></br>
          Corporate orders<br></br> <br></br>
          Refer a friend<br></br><br></br>
          Our Guarantee<br></br><br></br>
        </div>
        <div style={{ padding: 30, color: 'white' }}><span style={{ fontSize: 20 }}>SUPPORT</span><br></br><br></br><br></br>
          Help+FAQs<br></br><br></br>
          Track Your Order <br></br><br></br>
          Shipping <br></br><br></br>
          Returns <br></br><br></br>
          Contact Support</div>
        <div style={{ padding: 90 }}><img style={{ height: 60, width: 90, backgroundColor: 'white', color: 'white' }} src={Image} alt="" /><br>
        </br><br></br><FaTwitter style={{ fontSize: '30', color: 'white' }} />&nbsp;&nbsp;&nbsp;&nbsp;<FaInstagram style={{ fontSize: '30', color: 'white' }} />&nbsp;&nbsp;&nbsp;&nbsp;<RiEarthLine style={{ fontSize: '30', color: 'white' }} />&nbsp;&nbsp;&nbsp;&nbsp;<FaFacebookF style={{ fontSize: '30', color: 'white' }} /></div>
        <div style={{ padding: 40,color:'white' }}>
          <span>STAY IN THE LOOP</span><br></br><br></br>
          stay in the loop with special offers, plant-parenting<br></br>
          tip,and more.<br></br><br></br>
          <input style={{ border: 'none', borderBottom: '1px solid' }} type="text" placeholder='Enter your email' />
        </div>
      </div>

    </>
  )
}

export default Page8

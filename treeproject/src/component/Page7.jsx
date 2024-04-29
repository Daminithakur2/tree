import React from 'react'
import { FaUserSecret } from "react-icons/fa";
import { TbCreditCardPay } from "react-icons/tb";
import { FaUserAstronaut } from "react-icons/fa6";
import { TbCreditCardRefund } from "react-icons/tb";

const Page7 = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'gray',height:200,alignItems:'center'}}>
        <div><FaUserSecret style={{fontSize:50}} /><br></br>
        Free delivery</div>
        <div><TbCreditCardPay  style={{fontSize:50}} /><br></br>
        <span>Secure Payment</span></div>
        <div><FaUserAstronaut  style={{fontSize:50}} /><br></br>
        <span>Top-notch support</span></div>
        <div><TbCreditCardRefund  style={{fontSize:50}} /><br></br>
        <span>180 Days Return</span></div>
    </div>
      
    </>
  )
}

export default Page7

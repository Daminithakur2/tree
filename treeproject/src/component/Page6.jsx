import React from 'react'
import Image from '../image/last1.jpg'
import { MdOutlineModeComment } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import Image1 from '../image/last2.png'

const Page6 = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'space-around'}}>
        <div style={{paddingTop:30,position:'relative',height:600}}><img src={Image} alt="" /><img style={{position:'relative',bottom:190,left:90}} src={Image1} alt="" /></div>
        <div style={{padding:120}}><MdOutlineModeComment /><MdOutlineModeComment /><br></br>
        <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarBorder /><br></br>
        <span style={{fontSize:30}}>"Very happy with flacio;plants arrived in<br></br> excellent condition,were healthy..."</span><br></br>
        <span>Ann Smith</span><br></br><br></br>
        <FaCircle /><FaCircle /><FaCircle /><FaRegCircle /><FaRegCircle />
        
        </div>
    </div>
      
    </>
  )
}

export default Page6

import React from 'react'
import Image from '../image/icon.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";


const Page1 = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'space-around',position:'sticky',top:0,zIndex:9999,
 backgroundColor:'white' }}>
        <div style={{padding:20}}><img style={{height:'50',width:100}} src={Image} alt="" /></div>
        <div style={{display:'flex', gap:30 ,padding:20}}>
          <li style={{listStyle:'none'}}>HOME</li><RiArrowDropDownLine />
          <li style={{listStyle:'none'}}>SHOP</li><RiArrowDropDownLine />
          <li style={{listStyle:'none'}}>PRODUCT</li><RiArrowDropDownLine />
          <li style={{listStyle:'none'}}>BLOG</li><RiArrowDropDownLine />
          <li style={{listStyle:'none'}}>PAGE</li><RiArrowDropDownLine />
        </div>
        <div style={{padding:20,gap:40}}><IoIosSearch style={{height:30}} />&nbsp;&nbsp;&nbsp;&nbsp;<FaRegUser style={{height:30}} />&nbsp;&nbsp;&nbsp;&nbsp;<FaRegHeart style={{height:30}} />&nbsp;&nbsp;&nbsp;&nbsp;<BsBag style={{height:30}} /></div>
    </div>
      
    </>
  )
}

export default Page1

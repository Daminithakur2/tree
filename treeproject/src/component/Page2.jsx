import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from '../image/one1.jpg'
import Image1 from '../image/two.jpg'
import Image2 from '../image/three.jpg'
import {Autoplay,Pagination,Navigation} from 'swiper/modules';

const Page2 = () => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
   autoplay={{
    delay:2000,
    disableOnInteraction:false,
   }}
   pagination={{
    clickable:true,
   }}
   navigation={true}
   modules={[Autoplay,Pagination,Navigation]}
  >
    <SwiperSlide><img style={{height:600,width:'100%',position:'relative'}} src={Image} alt="" />
    <span style={{position:'absolute',zIndex:999,left:220,bottom:480,fontSize:25}}>SALE UP TO 30% OFF</span><br></br>
    <span style={{position:'absolute',zIndex:999,left:200,bottom:300,fontSize:70,fontFamily:'sans-serif',textAlign:'left'}}>Send Festive <br></br> Floral</span><br></br>
    <button style={{position:'absolute',zIndex:999,left:210,bottom:230,height:50,width:150}}>DISCOVER</button></SwiperSlide>
    <SwiperSlide><img style={{height:600,width:'100%'}} src={Image1} alt="" /><span style={{position:'absolute',zIndex:999,left:220,bottom:480,fontSize:25}}>SALE UP TO 30% OFF</span><br></br>
    <span style={{position:'absolute',zIndex:999,left:200,bottom:300,fontSize:70,fontFamily:'sans-serif',textAlign:'left'}}>Give the Gift <br></br> of Greenery</span><br></br>
    <button style={{position:'absolute',zIndex:999,left:210,bottom:230,height:50,width:150}}>DISCOVER</button></SwiperSlide>
    <SwiperSlide><img style={{height:600,width:'100%'}} src={Image2} alt="" /><span style={{position:'absolute',zIndex:999,left:220,bottom:480,fontSize:25}}>SALE UP TO 30% OFF</span><br></br>
    <span style={{position:'absolute',zIndex:999,left:200,bottom:300,fontSize:70,fontFamily:'sans-serif',textAlign:'left'}}>Uncomplicate<br></br> indoor gardening.</span><br></br>
    <button style={{position:'absolute',zIndex:999,left:210,bottom:230,height:50,width:150}}>DISCOVER</button></SwiperSlide>
  </Swiper>
    
      

  )
}

export default Page2

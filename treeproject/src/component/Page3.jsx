import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from '../image/img1.jpg'
import Image1 from '../image/img2.jpg'
import Image2 from '../image/img3.jpg'
import Image3 from '../image/img4.jpg'
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
const Page3 = () => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
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
    
    <SwiperSlide><img style={{position:'relative'}} src={Image} alt="" />
    <button className='button-one' style={{position:'relative',cursor:'pointer',height:70,width:330,backgroundColor:'green',color:'white',border:'none',margin:'o,50,0,60',fontSize:30,bottom:40}}>Home Grown</button></SwiperSlide>
    <SwiperSlide><img style={{position:'relative'}} src={Image1} alt="" />
    <button style={{position:'relative',height:70,width:330,backgroundColor:'green',color:'white',border:'none',margin:'o,50,0,60',fontSize:30,bottom:40}}>Plant Bundle</button></SwiperSlide>
    <SwiperSlide><img style={{position:'relative'}} src={Image2} alt="" />
    <button style={{position:'relative'
    
    ,height:70,width:330,backgroundColor:'green',color:'white',border:'none',margin:'o,50,0,60',fontSize:30,bottom:40}}>Gift Green</button></SwiperSlide>
    <SwiperSlide><img style={{position:'relative'}} src={Image3} alt="" />
    <button style={{position:'relative',height:70,width:330,backgroundColor:'green',color:'white',border:'none',margin:'o,50,0,60',fontSize:30,bottom:40}}>Pot & Accessories</button></SwiperSlide>

   
  </Swiper>

    
      

  )
}

export default Page3

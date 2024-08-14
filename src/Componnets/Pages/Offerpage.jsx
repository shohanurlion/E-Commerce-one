
import Container from '../Commonelemts/Container'
import React, { useEffect, useState } from 'react'
import { RiRestartLine} from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import axios from 'axios';
import Slider from "react-slick";
import { FaArrowLeftLong,FaArrowRightLong  } from "react-icons/fa6";


function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div className=' absolute right-0 top-[50%] w-[40px] h-[40px] leading-[40px] text-center z-50 translate-y-[-50%] bg-[#979797] rounded-full cursor-pointer'
        onClick={onClick}
      ><FaArrowRightLong className=' inline-block'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <div className=' absolute left-0 top-[50%] w-[40px] h-[40px] leading-[40px] text-center z-50 translate-y-[-50%] bg-[#979797] rounded-full cursor-pointer'
        onClick={onClick}
      ><FaArrowLeftLong className=' inline-block'/></div>
    );
  }
const Offerpage = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
           
          ]
      };
    const [info , setinfo]=useState([])
    const getData =()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
            setinfo(res.data.products);
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
    <div className='xl:pb-20 pb-7'>
    <Container>
    <h1 className='text-[39px] font-bold font-sans'>Special Offers</h1>
        <Slider {...settings}>
        {info.map((infos)=>(
         <div className='w-[24%] px-5'>
            <div className=' relative group my-5'>
                <div className='bg-black text-center w-[120px] absolute top-[10px] left-[10px]'>
                    <h4 className='text-white font-bold text-[20px] py-2'>10%</h4>
                </div>
                <img src={infos.thumbnail} alt='Newimg' className='w-[100%]'/>
            <div className='flex justify-end py-0 px-4 absolute bottom-0 left-0 w-full bg-[#FFFFFF] h-[0px] duration-700 ease-in-out overflow-hidden group-hover:h-[120px] cursor-pointer'>
            <div className=''>
                    <div className='flex items-center justify-end gap-x-2 pt-4'>
                        <h4 className='text-[16px] text-[#767676] font-normal font-sans leading-[20px]'>Add to Wish List</h4>
                        <CiHeart className='text-[18px]' />
                    </div>
                    <div className='flex items-center justify-end gap-x-2 py-4'>
                        <h4>Compear</h4>
                        <RiRestartLine />
                    </div>
                 
                    <div className='flex items-center justify-end gap-x-2'>
                        <h4 className='text-[16px] text-[#262626] font-bold font-sans leading-[20px]'>Add to Wish List</h4>
                        <FaCartShopping />
                    </div>
                </div>
            </div>
            </div>
           
            <div className=''>
                <div className='flex items-center justify-between py-4'>
                    <h3 className='text-[20px] text-[#262626] font-bold font-sans leading-[26px]'>{infos.title}</h3>
                    <p className='text-[16px] text-[#767676] font-normal font-sans leading-[30px]'>${infos.price}</p>
                </div>
                <span className='text-[16px] text-[#767676] font-normal font-sans leading-[30px]'>Black</span>
            </div>
        </div>
         
        ))}
        </Slider>
        
    </Container>
    </div>
   
    </>
  )
}

export default Offerpage
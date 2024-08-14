import React, { useEffect, useRef, useState } from 'react'
import Container from '../Commonelemts/Container'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch,FaUserCheck,FaCartPlus   } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import cartimg from '../../assets/Image.png'

function Navbar() {
    const [category , setcategory]=useState(false);
    const [carts , setCarts]=useState(false)
    const [account, setAccount]=useState(false)
    const useRafs=useRef()
    const cartref=useRef()
    const accountref =useRef()
    useEffect(()=>{
       window.addEventListener("click",(e)=>{
        if(useRafs.current.contains(e.target)==true){
            setcategory(!category)
        }else{
            setcategory(false)
        }
       if(cartref.current.contains(e.target)==true){
        setCarts(!carts)
       }else{
        setCarts(false)
       }
       if(accountref.current.contains(e.target)==true){
        setAccount(!account)
       }else{
        setAccount(false)
       }
       });
       
    },[category,carts,account])
  return (
    <nav className='px-5 lg:px-0 mt-[70px] md:mt-[106px] py-8 bg-[#F5F5F3]'>
    <Container>
        <div className='flex flex-wrap items-center'>
            <div className='w-1/4 relative'>
           <div ref={useRafs} className='flex items-center gap-x-2 cursor-pointer'>
           <FaBarsStaggered />
           <h2 className='lg:block hidden'>Shop by Category</h2>
           </div>
           {category && <div className='bg-[#2D2D2D] py-5 px-5 w-[300px] absolute mt-5 z-50'>
                <ul className='text-white'>
                    <li className='py-3 font-sans text-[14px] cursor-pointer hover:pl-2 hover:font-bold duration-500 ease-in-out'>Accesories</li>  
                    <li className='py-3 font-sans text-[14px] cursor-pointer hover:pl-2 hover:font-bold duration-500 ease-in-out'>Furniture</li>  
                    <li className='py-3 font-sans text-[14px] cursor-pointer hover:pl-2 hover:font-bold duration-500 ease-in-out'>Electronics</li>  
                    <li className='py-3 font-sans text-[14px] cursor-pointer hover:pl-2 hover:font-bold duration-500 ease-in-out'>Clothes</li>  
                    <li className='py-3 font-sans text-[14px] cursor-pointer hover:pl-2 hover:font-bold duration-500 ease-in-out'>Bags</li>  
                    <li className='py-3 font-sans text-[14px] cursor-pointer hover:pl-2 hover:font-bold duration-500 ease-in-out'>Home appliances</li>  
                </ul>
           </div> }
           
            </div>
            <div className='w-1/2 '>
                <div className='relative'>
                    <input type='text' placeholder='Search...' className='h-[40px] lg:h-[50px] border-2 border-[#262626] w-full pl-3'/>
                    <div className='absolute top-[50%] translate-y-[-50%] right-10'>
                    <FaSearch />
                    </div>
                </div>
            </div>
            <div className='w-1/4 relative'>
                <div className=''>
                    <div className='flex justify-end gap-x-7'>
                    <div ref={accountref} className=''>
                    <FaUserCheck className='cursor-pointer' />
                    </div>
                    <div ref={cartref} className=''>
                    <FaCartPlus className='cursor-pointer' />
                    </div>
                    </div>
                </div>
                {carts &&   <div className='border border-[#F0F0F0] absolute top-[40px] right-0 w-[360px] z-50'>
                    <div className='flex items-center justify-between bg-[#F5F5F3] py-5 px-4 '>
                        <div className=''>
                            <img src={cartimg} alt='cartimg'/>
                        </div>
                        <div className=''>
                            <h4 className='font-sans font-bold text-[14px] text-[#262626] pb-2'>Black Smart Watch</h4>
                            <h5 className='font-sans font-bold text-[14px] text-[#262626]'>$44.00</h5>
                        </div>
                        <div className=''>
                        <RxCross2 />
                        </div>
                    </div>
                  <div className='py-5 px-4'>
                    <p className='font-sans font-normal text-[#767676] text-[16px]'>Subtotal: <span className='font-sans font-bold text-[16px] text-[#262626]'>$44.00</span></p>
                  </div>
                  <div className='py-5 px-4 flex'>
                    <button className='w-[148px] h-[50px] border border-[#2B2B2B] text-[#262626] mr-5 hover:bg-[#262626] hover:text-white duration-500 ease-in-out'>View Cart</button>
                    <button className='w-[148px] h-[50px] border border-[#2B2B2B] text-[#262626] mr-5 hover:bg-[#262626] hover:text-white duration-500 ease-in-out'>Checkout</button>
                  </div>
                </div>}
                {account &&   <div className=' border border-[#F0F0F0] w-[200px] bg-white absolute top-[40px] left-[0px] z-50'>
                    <ul>
                        <li className='py-4 px-4 text-center text-[14px] font-bold cursor-pointer hover:bg-[#2B2B2B] duration-500 ease-in-out hover:text-white'>My Account</li>
                        <li className='py-4 px-4 text-center text-[14px] font-bold cursor-pointer hover:bg-[#2B2B2B] duration-500 ease-in-out hover:text-white'>Log Out</li>
                    </ul>
                </div>}
              
              
           </div>
        </div>
    </Container>
    </nav>

  )
}

export default Navbar
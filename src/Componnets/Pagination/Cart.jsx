import React from 'react'
import { CiHeart } from "react-icons/ci";
import { RiRestartLine} from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Cart = ({allpage,cateFilter}) => {
  return (
    <>
    {cateFilter.length > 0 ?  <div className='flex justify-between flex-wrap'>
            {cateFilter.map((item)=>(
                     <div className='w-[48%] md:w-[32%] px-5'>
                        <Link to={`/shop/${item.id}`}>
                        <div className=' relative group my-5'>
                         <div className='bg-black text-center w-[120px] absolute top-[10px] left-[10px]'>
                             <h4 className='text-white font-bold text-[20px] py-2'>10%</h4>
                         </div>
                         <img src={item.thumbnail} alt='Newimg' className='w-[100%]'/>
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
                             <h3 className='text-[20px] text-[#262626] font-bold font-sans leading-[26px]'>{item.title}</h3>
                             <p className='text-[16px] text-[#767676] font-normal font-sans leading-[30px]'>${item.price}</p>
                         </div>
                         <span className='text-[16px] text-[#767676] font-normal font-sans leading-[30px]'>Black</span>
                     </div>
                        </Link>
                 </div>
            ))}
       
        </div> :
     <div className='sm:flex justify-between flex-wrap'>
     {allpage.map((item)=>(
              <div className='w-[100%] mx-auto md:mx-0 md:w-[48%] lg:w-[32%] px-5'>
                 <Link to={`/shop/${item.id}`}>
                 <div className=' relative group my-5'>
                  <div className='bg-black text-center w-[120px] absolute top-[10px] left-[10px]'>
                      <h4 className='text-white font-bold text-[20px] py-2'>10%</h4>
                  </div>
                  <img src={item.thumbnail} alt='Newimg' className='w-[100%]'/>
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
                      <h3 className='text-[20px] text-[#262626] font-bold font-sans leading-[26px]'>{item.title}</h3>
                      <p className='text-[16px] text-[#767676] font-normal font-sans leading-[30px]'>${item.price}</p>
                  </div>
                  <span className='text-[16px] text-[#767676] font-normal font-sans leading-[30px]'>Black</span>
              </div>
                 </Link>
          </div>
     ))}

 </div>
    }
       
    </>
  )
}

export default Cart
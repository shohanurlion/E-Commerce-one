import React, { useContext, useEffect, useState } from 'react'
import Container from '../Commonelemts/Container'
import { TiPlus,TiMinus  } from "react-icons/ti";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Link } from 'react-router-dom';
import { SiWindows } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import Cart from '../Pagination/Cart';
import { ApiData } from './ContexApi';
import Pagination from '../Pagination/Pagination/Pagination';
const Shoping = () => {
  const data = useContext(ApiData)
  const [Categaory , setcategaory]=useState(true);
  const [color, setcolor]=useState(false);
  const [brand, setbrand]=useState(true)
  const [categorys , setcategorys]=useState([])
  const [cateFilter , setcateFilter]=useState([])
  const [currentpage, setcurrentpage]=useState(1);
  const [perpage ,setperpage]=useState(6);
  const lastpage = currentpage *perpage
  const firstpage = lastpage - perpage
  const allpage = data.slice(firstpage , lastpage)
  const pageNumber = [];
  for(let i = 0; i < data.length/perpage; i++){
    pageNumber.push(i)
  }
const pagehandel =(pageNumber)=>{
  setcurrentpage(pageNumber + 1);
}
const next =()=>{
  if(currentpage < pageNumber.length){
    setcurrentpage((state)=> state + 1)
  }
}  
const prev =()=>{
  if(currentpage > 0){
    setcurrentpage((state)=> state - 1)
  }
}
const handelshow =(e)=>{
  setperpage(e.target.value)
}
  
  const handelcategory=()=>{
    setcategaory(!Categaory);
    
  };
  const handelcolor=()=>{
    setcolor(!color);
  }
  const handelbrand=()=>{
    setbrand(!brand);
  }
  useEffect(()=>{
    setcategorys([...new Set(data.map((items)=> items.category))])
  },[data])
  
  const handlecategory = (bitem) =>{
    const categoryFilte = data.filter((itemss)=> itemss.category == bitem)
    setcateFilter(categoryFilte);
  }
 const handleallproduct = () =>{
  setcateFilter("")
  
 }

 
  return (
   <>
   <div>
    <Container>
      <div className='py-14'>
        <h2 className='font-sans font-bold text-[49px] leading-[63px] py-4'>Products</h2>
        <p className='font-sans font-normal text-[12px] leading-[15px]'><Link to="/">Home </Link> &gt;  <span className='text-[red]'>Products</span></p>
      </div>
      <div className=' md:flex gap-x-5'>
          <div className='text-center w-[100%] md:w-[20%]'>
            <div className='py-5' >
              <div className='flex justify-center items-center gap-x-5 md:gap-x-0 md:flex md:justify-between cursor-pointer' onClick={handelcategory}>
              <h2 className=' font-sans font-bold text-[20px] leading-[20px] text-[#262626]'>Shop by Category</h2>
              {Categaory == true ? <TiMinus /> :<TiPlus />}
             
              </div> 
           {Categaory &&    <ul>
            <li onClick={handleallproduct} className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer capitalize'>All Products</li>
            {categorys.map((citem)=>(
          <li onClick={()=>handlecategory(citem)} className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer capitalize'>{citem}</li>
            ))}
            
              </ul>}
            </div>
            <div className='py-5' >
              <div className='flex justify-center items-center gap-x-5 md:gap-x-0 md:flex md:justify-between cursor-pointer' onClick={handelcolor}>
              <h2 className=' font-sans font-bold text-[20px] leading-[20px] text-[#262626]'>Shop by Color</h2>
              {color == true ? <MdArrowDropDown /> :<MdArrowDropUp />}
             
              </div> 
           {color &&    <ul>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 1</li>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 2</li>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 3</li>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 4</li>
              </ul>}
            </div>
            <div className='py-5' >
              <div className='flex justify-center items-center gap-x-5 md:gap-x-0 md:flex md:justify-between cursor-pointer' onClick={handelbrand}>
              <h2 className=' font-sans font-bold text-[20px] leading-[20px] text-[#262626]'>Shop by Brand</h2>
              {brand == true ? <MdArrowDropDown /> :<MdArrowDropUp />}
             
              </div> 
           {brand &&    <ul>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 1</li>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 2</li>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 3</li>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 4</li>
              </ul>}
            </div>
            <div className='py-5' >
              <div className='flex justify-center items-center gap-x-5 md:gap-x-0 md:flex md:justify-between cursor-pointer'>
              <h2 className=' font-sans font-bold text-[20px] leading-[20px] text-[#262626]'>Shop by Price</h2>
             
              </div> 
           <ul>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 1</li>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 2</li>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 3</li>
                <li className=' font-sans text-[14px] font-normal leading-[30px] text-[#767676] py-3 border-b-2 border-[#F0F0F0] cursor-pointer'>Category 4</li>
              </ul>
            </div>
          </div>

          <div className='w-[100%] md:w-[80%]'>
            <div className='flex'>
              <div className='w-[30%]'>
                <div className=' flex gap-x-5'>
                  <div className='w-[40px] h-[40px] flex items-center justify-center leading-[40px] hover:bg-[#262626] hover:text-[white] duration-700 ease-in-out cursor-pointer'>
                  <SiWindows/>
                  </div>
                  <div className='w-[40px] h-[40px] flex items-center justify-center leading-[40px] hover:bg-[#262626] hover:text-[white] duration-700 ease-in-out cursor-pointer'>
                  <FaBars />
                  </div>
                </div>
              </div>
              <div className='w-[70%]'>
                <div className='flex justify-end gap-x-8'>
                  <div className=''>
                    <label className='font-sans font-normal text-[18px] text-[#767676] pr-4'>Sort by:</label>
                   <select className=' border-2 border-[#F0F0F0] py-2 px-5 w-[130px]'>
                    <option value="">All</option>
                    <option value="">Category 1</option>
                    <option value="">Category 2</option>
                    <option value="">Category 3</option>
                    <option value="">Category 4</option>
                   </select>
                  </div>
                  <div className=''>
                    <label className='font-sans font-normal text-[18px] text-[#767676] pr-4'>Show:</label>
                   <select onChange={handelshow} className=' border-2 border-[#F0F0F0] py-2 px-5 w-[130px]'>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                   </select>
                  </div>
                </div>
              </div>  
            </div>
            <Cart allpage={allpage} cateFilter={cateFilter}/>
            <Pagination pageNumber={pageNumber} pagehandel={pagehandel} next={next} prev={prev}/>
          </div>
      </div>
    </Container>
   </div>
   </>
  )
}

export default Shoping
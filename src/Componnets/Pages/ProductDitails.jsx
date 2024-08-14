import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDitails = () => {
    const productId = useParams()
    const [singelProduct , setsingelproduct]=useState([]);
    const getId = () =>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((responsive)=>{
            setsingelproduct(responsive.data)
        })
    }
    useEffect(()=>{
        getId()
    },[])
    
  return (
   <>
   <div className='w-[32%]'>
    <img src={singelProduct.thumbnail} alt='productDitels'/>
   </div>
   </>
  )
}

export default ProductDitails
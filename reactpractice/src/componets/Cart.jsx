import React, { useContext } from 'react'
import {AppContext} from '../App.jsx'
import { useEffect } from 'react'
export const Cart = () => {
    const {cart} =useContext(AppContext)

   
  return (
    <div>
        {cart.length==0?("Cart is Empty"):(cart.map((c)=>(
<div className='flex justify-around'>
         <div>{c.id}</div>
         <div>{c.title}</div>
         <div>{c.value}</div> 
</div>  
        )))}
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import useForm from '../../context/formContext'

function Card({title, description, price, value}) {

  const{handleCheckedAdons, totalAdons} = useForm();


    const handleAdon = (title, price, index) => {
        const newAdon = {
          id: index,
          title,
          price
        }

       handleCheckedAdons(value, newAdon, index);
    }

    return (
      
      <div className={`relative flex items-center gap-5 pl-2 sm:pl-4 h-16 sm:h-20 ${totalAdons.includes(value) && "border-violet-600"}   border-2 rounded-xl `}>
          <input type="checkbox" checked = {totalAdons.includes(value)}  onChange={()=>handleAdon(title, price, value)}/>
          <div className='flex flex-col'>
              <p className='font-medium text-md sm:text-sm md:text-md text-sky-800'>{title}</p>
              <p className='text-gray-400 text-sm'>{description}</p>
          </div>
          <p className='absolute top-4 text-xs sm:text-md right-1 sm:right-2 md:right-4 lg:text-lg text-violet-600'>{price}</p>
      </div>
    )
  }




export default Card 


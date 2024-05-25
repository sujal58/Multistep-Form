import React, { useState } from 'react'

function Card({title, img, price, isSelected, onSelect}) {
    

  return (
        <div className={`card-1 flex flex-col justify-between items-start p-2 h-28 w-24 xl:h-32 xl:w-28 border  rounded-md cursor-pointer ${isSelected ? "border-slate-800" : "border-gray-400"}`}
        onClick={onSelect}>
             <div className='inner-icon '>
                <img src={img} alt="Arcade-icon" className='h-8' />
              </div>
              <div className='inner-text'>
                <p className='text-slate-600 font-medium text-sm'>{title}</p>
                <p className='text-gray-400 font-small text-xs'>${price}/mo</p>
               </div>                 
        </div>
    
  )
}

export default Card


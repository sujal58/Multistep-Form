import React from 'react'

function Card({title, description, price}) {

  const handleAdon = (title, price) => {
    console.log(price);
  }
  return (
    <div className='relative flex items-center gap-5 pl-4 h-20 w-11/12  border-2 rounded-xl'>
        <input type="checkbox" id="add-ons" onClick={()=>handleAdon(title, price)}/>
        <div className='flex flex-col'>
            <p className='font-medium text-md sm:text-sm md:text-md text-sky-800'>{title}</p>
            <p className='text-gray-400 text-sm'>{description}</p>
        </div>
        <p className='absolute md:right-4 top-4 text-md sm:text-xs right-4 sm:right-2 lg:text-lg text-violet-600'>{price}</p>
    </div>
  )
}

export default Card
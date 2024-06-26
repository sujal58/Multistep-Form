import React from 'react'
import useForm from '../../context/formContext';

function Card({title, img, price,offer, isSelected, onSelect}) {

    const{handleCurrentData, currentData} = useForm();

    const handlePlan = (title, price) => {
      handleCurrentData({...currentData, "plan":{"title": title, "price": price}});
      onSelect();
    }

  return (
        <div className={`card-1 flex sm:flex-col gap-5 md:justify-between items-center sm:items-start p-2 h-14 w-11/12 sm:h-28 sm:w-24 xl:h-32 xl:w-32 border-2  rounded-md cursor-pointer  ${isSelected ? "border-slate-800" : "border-gray-400"}`}
        onClick={()=> handlePlan(title, price, offer)}>
             <div className='inner-icon '>
                <img src={img} alt="Arcade-icon" className='h-8' />
              </div>
              <div className='inner-text'>
                <p className='text-slate-600 font-medium text-sm'>{title}</p>
                <p className='text-gray-400 font-small text-xs'>{price}</p>
                <p className='text-slate-600 font-medium text-xs'>{offer}</p>

               </div>                 
        </div>
    
  )
}

export default Card


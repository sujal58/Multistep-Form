import React from 'react'
import useForm from '../../context/formContext'



function ListCard({state, step, info}) {
    const {currentState} = useForm();
  return (
    <div className='flex items-center text-white sm:gap-3 w-full'>
        <div className={`h-7 w-7 flex justify-center items-center ${currentState == state ? "bg-blue-800" :"border border-white"} text-white rounded-3xl text-center`}>
            {state}
        </div>
        <div className='flex flex-col flex-wrap'>
            <p className='text-xs font-normal text-gray-400'>{step}</p>
            <p className=' text-xs font-medium text-gray-200'>{info}</p>
        </div>
    </div>
  )
}

export default ListCard
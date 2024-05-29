import React from 'react'
import useForm from '../../context/formContext'



function nextPrevbtn() {
    const {handleBack, handleNext} = useForm();
  return (
    <div className='absolute w-full bottom-0 hidden sm:flex justify-between'>
        <button className='text-slate-800 font-medium' onClick={handleBack}>Go Back</button>
        <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md ' onClick={handleNext}>Next Step</button>
    </div>
  )
}

export default nextPrevbtn
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Card from '../Components/Adons/Card'
import useForm from '../context/formContext'


function Thirdpage() {

  
  const {handleNext, handleBack, isChecked, totalAdons} = useForm();

  return (
    <div className="min-h-screen flex sm:justify-center items-center bg-gray-200 font-ubuntu">
        <div className="sm:static flex flex-col sm:flex-row sm:bg-white sm:h-full w-8/12 sm:w-9/12 lg:w-7/12 xl:w-7/12 sm:p-4 rounded-xl">
              <Navbar/>
              <div className="absolute items-center top-20 sm:static flex flex-col w-full sm:flex-1">
                <div className="relative bg-white py-5 sm:py-8 px-3 rounded-xl w-11/12 sm:w-11/12 sm:h-full p-2 sm:p-2 md:p-2 md:ml-4 xl:ml-8 md:mt-5 flex flex-col gap-3 md:gap-6">
                    <div className="header flex flex-col">
                      <h1 className='text-sky-800 font-bold text-lg sm:text-xl'>Pick add-ons</h1>
                      <p className=' text-sm text-gray-500'>Add-ons help enhance your gaming experience.</p>
                    </div>
                    
                    <div className="details flex flex-col gap-3 sm:gap-5">
                          <div className='flex flex-col gap-2'>
                              <Card title={"Online service"} value = {0} description={"Access to multiplayer games."} checked = {totalAdons.includes(0)} price = {isChecked ? "+$10/yr": "+$1/mo"}/>
                              <Card title={"Larger storage"}  value= {1} description={"Extra 1TB of cloud save"} checked = {totalAdons.includes(1)} price = {isChecked ? "+$20/yr": "+$2/mo"}/>
                              <Card title={"Customizable profile"} value= {2} description={"Custom theme on your profile"} checked = {totalAdons.includes(2)} price = {isChecked ? "+$20/yr": "+$2/mo"}/>

                          </div>   
                    </div>

                    {/* <div className='absolute bottom-0 hidden sm:flex w-11/12 md:px-14'>
                      <button className='absolute left-0 bottom-1 text-slate-800 font-medium' onClick={handleBack}>Go Back</button>
                      <button className='absolute text-white right-0 bottom-1 bg-blue-900 h-8 w-20 text-sm rounded-md ' onClick={handleNext}>Next Step</button>
                    </div> */}
                    <div className='absolute bottom-0 hidden sm:flex w-11/12 md:px-14'>
                      <button className='absolute left-0 bottom-1 text-slate-800 font-medium' onClick={handleBack}>Go Back</button>
                      <button className='absolute text-white right-0 bottom-1 bg-blue-900 h-8 w-20 text-sm rounded-md ' onClick={handleNext}>Next Step</button>
                    </div>
                </div>
              </div>        
        </div>

        <div className='sm:hidden absolute flex justify-between px-5 pr-4 items-center bottom-0 bg-white w-full h-12'>
          <button className='text-slate-800 font-medium' onClick={handleBack}>Go Back</button>
          <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md ' onClick={handleNext}>Next Step</button>
        </div> 
    </div>
  )
}

export default Thirdpage
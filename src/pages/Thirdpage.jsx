import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Card from '../Components/Adons/Card'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

function Thirdpage() {
  return (
    <div className="min-h-screen flex sm:justify-center items-center bg-gray-200 font-ubuntu">
        <div className="sm:static flex flex-col sm:flex-row sm:bg-white sm:h-full w-8/12 sm:w-9/12 lg:w-8/12 sm:p-4 rounded-xl">
              <Navbar/>
              <div className="absolute items-center top-20 sm:static flex flex-col w-full sm:flex-1">
                <div className="relative bg-white py-5 sm:py-8 px-3 rounded-xl w-11/12 sm:h-full p-2 sm:p-2 md:p-2 md:ml-4 xl:ml-8 md:mt-5 flex flex-col gap-3 md:gap-6">
                    <div className="header flex flex-col">
                      <h1 className='text-sky-800 font-bold text-lg sm:text-xl'>Pick add-ons</h1>
                      <p className=' text-sm text-gray-500'>Add-ons help enhance your gaming experience.</p>
                    </div>
                    
                    <div className="details flex flex-col gap-3 sm:gap-5">
                          <div className='flex flex-col gap-2'>
                              <Card title={"Online service"} description={"Access to multiplayer games."} price = {1}/>
                              <Card title={"Larger storage"} description={"Extra 1TB of cloud save"} price = {2}/>
                              <Card title={"Customizable profile"} description={"Custom theme on your profile"} price = {2}/>

                          </div>   
                    </div>

                    <div className='absolute w-full bottom-0 hidden sm:flex justify-between md:px-14'>
                      <button className='text-slate-800 font-medium'>Go Back</button>
                      <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md '>Next Step</button>
                    </div>
                </div>
              </div>        
        </div>

        <div className='sm:hidden absolute flex justify-between px-5 pr-4 items-center bottom-0 bg-white w-full h-12'>
          <button className='text-slate-800 font-medium'>Go Back</button>
          <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md '>Next Step</button>
        </div> 
    </div>
  )
}

export default Thirdpage
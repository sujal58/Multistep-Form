import React from 'react'
import Navbar from './Navbar/Navbar'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'


function SecondPage() {
  return (
    <div className="min-h-screen flex sm:justify-center items-center bg-gray-200 font-ubuntu">
        <div className="sm:static flex flex-col sm:flex-row sm:bg-white sm:h-full w-8/12 lg:w-8/12 xl:w-4/12 sm:p-4 rounded-xl">
              <Navbar/>
              <div className="absolute sm:static sm:flex-1 grid">
                <div className=" bg-white rounded-xl w-11/12 sm:h-6/12 p-4 mt-4 md:p-8 md:ml-5 flex flex-col gap-3 md:gap-5">
                  <div className="header flex flex-col gap-2">
                    <h1 className='text-slate-800 font-bold text-xl'>Select your plan</h1>
                    <p className=' text-sm text-gray-500'>You have the option of monthly or yearly biling.</p>
                  </div>
                  
                  <div className="details flex flex-col gap-5">
                        <div className='grid grid-cols-3'>
                            <div className='card-1 flex flex-col justify-between items-start p-2 h-28 w-24 xl:h-32 xl:w-28 border border-slate-800 rounded-md'>
                                <div className='inner-icon'>
                                    <img src={arcade} alt="Arcade-icon" className='h-8' />
                                </div>
                                <div className='inner-text'>
                                    <p className='text-slate-600 font-medium text-sm'>Arcade</p>
                                <p className='text-gray-400 font-small text-xs'>$9/mo</p>
                                </div>
                                
                            </div>
                            <div className='card-2 flex flex-col justify-between items-start p-2 h-28 w-24 xl:h-32 xl:w-28 border border-slate-800 rounded-md'>
                                <div className='inner-icon'>
                                    <img src={advanced} alt="Arcade-icon" className='h-8' />
                                </div>
                                <div className='inner-text'>
                                    <p className='text-slate-600 font-medium text-sm'>Advanced</p>
                                <p className='text-gray-400 font-small text-xs'>$12/mo</p>
                                </div>
                            </div>
                            <div className='card-3 flex flex-col justify-between items-start p-2 h-28 w-24 xl:h-32 xl:w-28 border border-slate-800 rounded-md'>
                                <div className='inner-icon'>
                                    <img src={pro} alt="Arcade-icon" className='h-8' />
                                </div>
                                <div className='inner-text'>
                                    <p className='text-slate-600 font-medium text-sm'>Pro</p>
                                <p className='text-gray-400 font-small text-xs'>$15/mo</p>
                                </div>
                        </div>
                        </div>

                    <div className='w-full flex justify-center gap-4 items-center bg-gray-100 h-10'>
                        <label htmlFor="" className='text-medium text-sm'>Monthly</label>
                        <div className='w-9 h-5 flex items-center bg-slate-800 rounded-xl'>
                            <div className='h-4 w-4 bg-white rounded-xl '></div>
                        </div>
                        <label htmlFor="" className='text-medium text-sm'>Yearly</label>
                    </div>

                    
                </div>
                </div>
                <div className='submitBtn sm:flex hidden justify-between items-center px-10 ml-5'>
                    <button className='text-slate-800 font-medium'>Go Back</button>
                    <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md '>Next Step</button>
                </div>
              </div>    
              
        </div> 
        
        <div className='sm:hidden absolute flex justify-end pr-4 items-center bottom-0 bg-white w-full h-14'>
          <button className='text-slate-800 font-medium'>Go Back</button>
          <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md '>Next Step</button>
        </div> 
    
    </div>
  )
}

export default SecondPage
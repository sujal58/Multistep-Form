import React from 'react'
import sidebarIMG from "../../assets/images/bg-sidebar-desktop.svg"
import mobileSidebar from "../../assets/images/bg-sidebar-mobile.svg"


function Navbar() {
  return (
    <>
      <div className="hidden sm:block pt-6 bg-cover h-[28rem] w-4/12 md:w-4/12 xl:w-3/12 bg-center rounded-xl" style={{backgroundImage:`url(${sidebarIMG})`}}>
              <div className="absolute sm:static top-5 gap-6 left-1/3 right-1/3 flex flex-wrap justify-center items-center sm:flex-col rounded-xl sm:p-1 md:p-4 font-ubuntu">
                    <div className='flex items-center text-white sm:gap-3 w-full'>
                      <div className='h-7 w-7 flex justify-center items-center  bg-blue-800 text-white rounded-3xl text-center'>
                        1
                      </div>
                      <div className='flex flex-col flex-wrap'>
                        <p className='text-xs font-normal text-gray-400'>STEP 1</p>
                        <p className=' text-xs font-medium text-gray-200'>YOUR INFO</p>
                      </div>
                    </div>

                    <div className='flex items-center text-white gap-3 w-full'>
                        <div className='h-7 w-7 flex justify-center items-center border border-white text-white rounded-3xl text-center'>2</div>
                        <div className='flex flex-col flex-wrap'>
                          <p className='text-xs font-normal text-gray-400'>STEP 2</p>
                          <h2 className='text-xs md:text-xs font-medium text-gray-200'>SELECT PLAN</h2>
                        </div>
                    </div>

                  <div className='flex justify-start items-center text-white gap-3 w-full'>
                    <div className='h-7 w-7 flex justify-center items-center border border-white text-white rounded-3xl text-center'>3</div>
                    <div className='flex flex-col flex-wrap'>
                      <p className='text-xs font-normal text-gray-400'>STEP 3</p>
                      <h2 className='text-xs md:text-xs font-medium text-gray-200'>ADD-ONS</h2>
                    </div>
                  </div>

                  <div className='flex items-center text-white gap-3 w-full'>
                    <div className='h-7 w-7 flex justify-center items-center border border-white text-white rounded-3xl text-center'>4</div>
                    <div className='flex flex-col flex-wrap'>
                      <p className='text-xs font-normal text-gray-400'>STEP 4</p>
                      <h2 className='text-xs sm:text-xs font-medium text-gray-200'>SUMMARY</h2>
                    </div>
                  </div>
              </div> 
      </div>
      <div className="absolute sm:hidden h-36 top-0 sm:pt-3 w-full bg-cover sm:static sm:h-[27rem] sm:w-4/12 sm:bg-cover sm:bg-center sm:rounded-xl text-left" style={{backgroundImage:`url(${mobileSidebar})`}}>
                  <div className="absolute top-7 gap-5 left-1/3 right-1/3 flex justify-center items-center sm:flex-col sm:gap-4 rounded-xl sm:p-4">
                    <div className='flex items-center text-white sm:gap-4 w-full'>
                      <div className='h-7 w-7 bg-blue-800 text-white rounded-3xl text-center'>
                        1
                      </div>
                    </div>

                    <div className='flex items-center text-white gap-3 w-full'>
                        <div className='h-7 w-7 text-white border border-white rounded-3xl text-center'>2</div>
                    </div>

                  <div className='flex justify-start items-center text-white gap-3 w-full'>
                    <div className='h-7 w-7 text-white border border-white rounded-3xl text-center'>3</div>
                    
                  </div>

                  <div className='flex items-center text-white gap-3 w-full'>
                    <div className='h-7 w-7 text-white border border-white rounded-3xl text-center'>4</div>
                    
                  </div>
                  </div>
                
      </div>
    </>
  )
}

export default Navbar
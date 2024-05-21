import React from 'react';
import sidebarIMG from "../assets/images/bg-sidebar-desktop.svg"
import mobileSidebar from "../assets/images/bg-sidebar-mobile.svg"


const FirstPage = () => {
  return (
    <>
    <div className="min-h-screen flex sm:justify-center items-center bg-gray-200 font-ubuntu">
        <div className="sm:static flex flex-col sm:flex-row sm:bg-white sm:h-full w-8/12 lg:w-6/12 xl:w-6/12 sm:p-4 rounded-xl">
              <div className="hidden sm:block pt-3 bg-cover h-[28rem] w-4/12 sm:pt-6 bg-center rounded-xl" style={{backgroundImage:`url(${sidebarIMG})`}}>
                <div className="absolute sm:static top-5 gap-5 left-1/3 right-1/3 flex justify-center items-center sm:flex-col sm:gap-4 rounded-xl sm:p-1 md:p-4">
                  <div className='flex items-center text-white sm:gap-3 w-full'>
                    <div className='h-7 w-7 flex justify-center items-center  bg-blue-800 text-white rounded-3xl text-center'>
                      1
                    </div>
                    <div className='hidden sm:block'>
                      <p className='text-xs font-normal'>STEP 1</p>
                      <p className=' text-xs md:text-sm font-medium'>YOUR INFO</p>
                    </div>
                  </div>

                  <div className='flex items-center text-white gap-3 w-full'>
                      <div className='h-7 w-7 flex justify-center items-center border border-white text-white rounded-3xl text-center'>2</div>
                      <div className='hidden sm:block'>
                        <p className='text-xs font-normal'>STEP 2</p>
                        <h2 className='text-xs md:text-sm font-medium'>SELECT PLAN</h2>
                      </div>
                  </div>

                <div className='flex justify-start items-center text-white gap-3 w-full'>
                  <div className='h-7 w-7 flex justify-center items-center border border-white text-white rounded-3xl text-center'>3</div>
                  <div className='hidden sm:block'>
                    <p className='text-xs font-normal'>STEP 3</p>
                    <h2 className='text-xs md:text-sm font-medium'>ADD-ONS</h2>
                  </div>
                </div>

                <div className='flex items-center text-white gap-3 w-full'>
                  <div className='h-7 w-7 flex justify-center items-center border border-white text-white rounded-3xl text-center'>4</div>
                  <div className='hidden sm:block'>
                    <p className='text-xs font-normal'>STEP 4</p>
                    <h2 className='text-xs sm:text-sm font-medium'>SUMMARY</h2>
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
              <div className="absolute top-20 sm:static flex justify-center w-full sm:flex-1">
                <div className="bg-white py-6 sm:py-10 rounded-xl w-11/12 sm:h-full p-4 md:p-6 md:ml-8 flex flex-col gap-3 md:gap-5">
                  <div className="header flex flex-col gap-2">
                    <h1 className='text-blue-900 font-bold text-xl'>Personal info</h1>
                    <p className=' text-sm text-gray-500'>Please Provide your name, email address, phone number.</p>
                  </div>
                  <div className="details flex flex-col gap-2 sm:gap-5">
                    <div className='personName gap-1'>
                      <h2 className='text-blue-900'>Name</h2>
                      <input type="text" className='border pl-2 border-solid border-gray-500 rounded-md text-md w-11/12 h-8 sm:h-9' placeholder='e.g.Stephen King'/>
                    </div>
                    
                    <div className='personEmail'>
                      <h2 className='text-blue-900'>Email Address</h2>
                      <input type="email" className='border pl-2 border-solid border-gray-500 rounded-md text-sm w-11/12 h-8 sm:h-9' placeholder='e.g.stephenKing@lorem.com'/>
                    </div>

                    <div className='personPhone'>
                     <h2 className='text-blue-900'>Phone Number</h2>
                      <input type="text" className='border pl-2 border-solid border-gray-500 rounded-md text-sm w-11/12 h-8 sm:h-9' placeholder='e.g.+1 234 567 890'/>
                    </div>

                    <div className='submitBtn sm:flex justify-end hidden sm:mt-5'>
                      <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md '>Next Step</button>
                    </div>
                  </div>
                </div>
              </div>
              
        </div> 
        
        <div className='sm:hidden absolute flex justify-end pr-4 items-center bottom-0 bg-white w-full h-14'>
          <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md '>Next Step</button>
    </div> 
    
    </div>
    
    {/* <div className='submitBtn absolute bottom-6 right-8 bg-white sm:hidden'>
          <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md '>Next Step</button>
    </div> */}
    </>
  );
};

export default FirstPage;

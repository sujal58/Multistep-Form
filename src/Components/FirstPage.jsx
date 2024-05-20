import React from 'react';
import sidebarIMG from "../assets/images/bg-sidebar-desktop.svg"


const FirstPage = () => {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-300 font-ubuntu">
        <div className=" sm:static flex flex-col sm:flex-row bg-white sm:h-full sm:w-7/12 p-4 rounded-xl">
              <div className="navbar sm:pt-3 h-32 w-full bg-cover z-1 absolute top-0 left-0 sm:static sm:h-[27rem] sm:w-4/12 bg-bottom sm:bg-cover sm:bg-center sm:rounded-xl text-left" style={{backgroundImage:`url(${sidebarIMG})`}}>
                <div className=" flex sm:flex-col sm:gap-4 rounded-xl sm:p-4">
                  <div className='flex items-center text-white gap-4 w-full'>
                    <div className='h-7 w-7 bg-blue-800 text-white rounded-3xl text-center'>
                      1
                    </div>
                    <div className='hidden sm:block'>
                      <p className='text-xs'>STEP 1</p>
                      <p className='text-sm'>YOUR INFO</p>
                    </div>
                  </div>

                  <div className='flex items-center text-white gap-3 w-full'>
                      <div className='h-7 w-7 bg-white text-black rounded-3xl text-center'>2</div>
                      <div className='hidden sm:block'>
                        <p className='text-xs'>STEP 2</p>
                        <h2 className='text-sm'>SELECT PLAN</h2>
                      </div>
                  </div>

                <div className='flex justify-start items-center text-white gap-3 w-full'>
                  <div className='h-7 w-7 bg-white text-black rounded-3xl text-center'>3</div>
                  <div className='hidden sm:block'>
                    <p className='text-xs'>STEP 3</p>
                    <h2 className='text-sm'>ADD-ONS</h2>
                  </div>
                </div>

                <div className='flex items-center text-white gap-3 w-full'>
                  <div className='h-7 w-7 bg-white text-black rounded-3xl text-center'>4</div>
                  <div className='hidden sm:block'>
                    <p className='text-xs'>STEP 4</p>
                    <h2 className='text-sm'>SUMMARY</h2>
                  </div>
                </div>
                </div>
                
              </div>
              <div className="personalDetail sm:flex-1 ">
                <div className="h-80 w-80 sm:h-full sm:w-11/12 sm:p-8 sm:ml-8 flex flex-col sm:gap-5">
                  <div className="header">
                    <h1 className='font-2xl font-black text-xl'>Personal info</h1>
                    <p className='text-sm text-gray-500'>Please Provide your name, email address, phone number.</p>
                  </div>
                  <div className="details flex flex-col gap-5">
                    <div className='personName gap-1'>
                      <h2 className='text-blue-900'>Name</h2>
                      <input type="text" className='border pl-2 border-solid border-gray-500 rounded-md sm:w-10/12 h-9' placeholder='e.g.Stephen King'/>
                    </div>
                    
                    <div className='personEmail'>
                      <h2 className='text-blue-900'>Email Address</h2>
                      <input type="email" className='border pl-2 border-solid border-gray-500 rounded-md sm:w-10/12 h-9' placeholder='e.g.stephenKing@lorem.com'/>
                    </div>

                    <div className='personPhone'>
                     <h2 className='text-blue-900'>Phone Number</h2>
                      <input type="text" className='border pl-2 border-solid border-gray-500 rounded-md sm:w-10/12 h-9' placeholder='e.g.+1 234 567 890'/>
                    </div>

                    <div className='submitBtn sm:flex justify-end hidden sm:mt-5'>
                      <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md '>Next Step</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>   
    </div>
    <div className='submitBtn absolute bottom-6 right-8 bg-white sm:hidden'>
          <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md '>Next Step</button>
    </div>
    </>
  );
};

export default FirstPage;

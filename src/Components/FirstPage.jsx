import React from 'react';
import Navbar from './Navbar/Navbar';


const FirstPage = () => {
  return (
    <>
    <div className="min-h-screen flex sm:justify-center items-center bg-gray-200 font-ubuntu">
        <div className="sm:static flex flex-col sm:flex-row sm:bg-white sm:h-full w-8/12 lg:w-6/12 xl:w-6/12 sm:p-4 rounded-xl">
              <Navbar/>
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

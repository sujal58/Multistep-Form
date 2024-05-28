import React, {useContext} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import useForm from '../context/formContext'
// import { Formcontext } from '../context/formContext';

function Summary() {
  //  const {handleBack, handleSubmit} = useContext(Formcontext);
  const {handleBack, handleSubmit} = useForm();



  return (
     <div className="min-h-screen flex sm:justify-center items-center bg-gray-200 font-ubuntu">
        <div className="sm:static flex flex-col sm:flex-row sm:bg-white sm:h-full w-8/12 sm:w-9/12 lg:w-8/12 sm:p-4 rounded-xl">
              <Navbar/>
              <div className="absolute items-center top-20 sm:static flex flex-col w-full sm:flex-1">
                <div className="relative bg-white py-5 sm:py-8 px-3 rounded-xl w-11/12 sm:h-full p-2 sm:p-2 md:p-2 md:ml-4 xl:ml-8 md:mt-5 flex flex-col gap-3 md:gap-6">
                    <div className="header flex flex-col">
                      <h1 className='text-sky-800 font-bold text-xl sm:text-2xl'>Finishing up</h1>
                      <p className=' text-sm text-gray-500'>Double-check everything looks OK before confirming.</p>
                    </div>
                    
                    <div className="details flex flex-col gap-3 sm:gap-5">
                          <div className='flex flex-col bg-gray-100 w-8/12 h-6/12'>
                              <div>
                                <div>

                                </div>
                              </div>
                              {/* <div>for line</div> */}
                              <div>
                                <p></p>
                              </div>
                          </div>   
                    </div>

                    <div className='absolute w-full bottom-0 hidden sm:flex justify-between md:px-14'>
                      <button className='text-slate-800 font-medium' onClick={handleBack}>Go Back</button>
                      <button className=' text-white bg-purple-600 h-8 w-20 text-sm rounded-md ' onClick={handleSubmit}>Confirm</button>
                    </div>
                </div>
              </div>        
        </div>

        <div className='sm:hidden absolute flex justify-between px-5 pr-4 items-center bottom-0 bg-white w-full h-12'>
          <button className='text-slate-800 font-medium' onClick={handleBack}>Go Back</button>
          <button className=' text-white bg-purple-600 h-8 w-20 text-sm rounded-md ' onClick={handleSubmit}>Confirm</button>
        </div> 
    </div>
  )
}

export default Summary
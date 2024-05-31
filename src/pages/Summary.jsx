import React, {useContext, useEffect, useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import useForm from '../context/formContext'
import SecondPage from './SecondPage';


function Summary() {

  const {handleBack, handleSubmit, currentData, isChecked} = useForm();
  const [planPrice, setPlanprice] = useState(null);
  const [adonPrice, setAdonsprice] = useState(0);


  useEffect(()=>{
    setPlanprice(parseInt(currentData.plan.price.match(/\d+/)[0], 10));
    {currentData.Adons && setAdonsprice(parseInt(currentData.Adons[0].price.match(/\d+/)[0], 10))};
  }, [planPrice, adonPrice])




  return (
     <div className="min-h-screen flex sm:justify-center items-center bg-gray-200 font-ubuntu">
        <div className="sm:static flex flex-col sm:flex-row sm:bg-white sm:h-full w-8/12 sm:w-9/12 lg:w-7/12 xl:w-7/12 sm:p-4 rounded-xl">
              <Navbar/>
              <div className="absolute items-center top-20 sm:static flex flex-col w-full sm:flex-1">
                <div className="relative bg-white py-5 sm:py-8 px-3 rounded-xl w-11/12 sm:h-full p-2 sm:p-2 md:p-2 md:ml-4 xl:ml-8 md:mt-5 flex flex-col gap-3 md:gap-6">
                    <div className="header flex flex-col">
                      <h1 className='text-sky-800 font-bold text-xl sm:text-2xl'>Finishing up</h1>
                      <p className=' text-sm text-gray-500'>Double-check everything looks OK before confirming.</p>
                    </div>
                    
                    <div className="details flex flex-col gap-3 sm:gap-5">
                          <div className='flex flex-col bg-gray-100 w-11/12 h-6/12 rounded-md'>
                              <div className='flex justify-between p-4'>
                                <div className='flex flex-col'>
                                  <h2 className='font-medium text-lg text-sky-800'>{currentData.plan.title} ({isChecked ? "yearly" : "Monthly"})</h2>
                                  <a href= {<SecondPage/>} className='text-sm underline'>change</a>
                                </div>
                                <div>
                                  <p>{currentData.plan.price}</p>
                                </div>
                              </div>
                              <div className='border border-gray-400 w-10/12 ml-auto mr-auto'></div>
                              <div className='flex justify-between p-4'>
                                <p>{currentData.Adons && currentData.Adons[0].title}</p>
                                <p>{currentData.Adons && currentData.Adons[0].price}</p>
                              </div>
                          </div>   
                          <div className='flex p-4 justify-between w-11/12'>
                            <p>Total ({isChecked ? "per Year" : "per month "})</p>
                            <p>+${planPrice+adonPrice}/{isChecked ? "yr" : "mo"}</p>
                          </div>
                    </div>

                    <div className='absolute bottom-0 hidden sm:flex w-11/12 md:px-14'>
                      <button className='absolute left-0 bottom-1 text-slate-800 font-medium' onClick={handleBack}>Go Back</button>
                      <button className='absolute text-white bg-purple-600 right-0 bottom-1 h-8 w-20 text-sm rounded-md ' onClick={handleSubmit}>Confirm</button>
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
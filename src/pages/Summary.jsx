import React, {useContext, useEffect, useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import useForm from '../context/formContext'
import thankyouimg from "../assets/images/icon-thank-you.svg"



function Summary({thankyou}) {

  const {handleBack, handleSubmit,handleChange, currentData, isChecked, adons} = useForm();
  const [planPrice, setPlanprice] = useState(null);
  const [adonPrice, setAdonsprice] = useState([]);


  useEffect(()=>{
    setPlanprice(parseInt(currentData.plan.price.match(/\d+/)[0], 10));
    if (currentData.Adons) {
      const adonPrices = currentData.Adons.map(value => {
      const price = parseInt(value.price.match(/\d+/)[0], 10);
      return price;
  });
  
  // Update add-on prices state
  setAdonsprice(adonPrices);
}
}, [])




  return (
   
     <div className="min-h-screen flex sm:justify-center items-center bg-gray-200 font-ubuntu">
        <div className="sm:static flex flex-col sm:flex-row sm:bg-white sm:h-full w-8/12 sm:w-9/12 lg:w-7/12 xl:w-7/12 sm:p-4 rounded-xl">
              <Navbar/>
             {!thankyou 
             ? (
              <>
              <div className="absolute items-center top-20 sm:static flex flex-col w-full sm:flex-1">
                <div className="relative bg-white py-5 sm:py-8 px-3 rounded-xl w-11/12 sm:h-full p-2 sm:p-2 md:p-2 md:ml-4 xl:ml-8 md:mt-5 flex flex-col gap-3 md:gap-6">
                    <div className="header flex flex-col">
                      <h1 className='text-sky-800 font-bold text-xl sm:text-2xl'>Finishing up</h1>
                      <p className=' text-sm text-gray-500'>Double-check everything looks OK before confirming.</p>
                    </div>
                    
                    <div className="details flex flex-col gap-3 sm:gap-4">
                          <div className='flex flex-col bg-gray-100 w-11/12 h-6/12 rounded-md'>
                              <div className='flex justify-between p-4'>
                                <div className='flex flex-col'>
                                  <h2 className='font-medium text-lg text-sky-800'>{currentData.plan.title} ({isChecked ? "yearly" : "Monthly"})</h2>
                                  <input type="button" value="change" onClick={handleChange} className='text-sm underline border-none cursor-pointer text-left' />
                                  {/* <a  className=''>change</a> */}
                                </div>
                                <div>
                                  <p>{currentData.plan.price}</p>
                                </div>
                              </div>
                              <div className='border border-gray-400 w-10/12 ml-auto mr-auto'></div>
                                 {currentData.Adons && currentData.Adons.map((value, index)=>{
                                  return (
                                    <div className='flex justify-between p-4' key={index}>
                                    <p>{value.title}</p>
                                    <p>{value.price}</p>
                                  </div>
                                  )
                                 })}
                                
                              
                          </div>   
                          <div className='flex p-4 justify-between w-11/12'>
                            <p>Total ({isChecked ? "per Year" : "per month "})</p>
                            <p>+${planPrice + adonPrice.reduce((prev, curr) => { return prev + curr}, 0)}/{isChecked ? "yr" : "mo"}</p>
                          </div>
                    </div>

                    <div className='absolute bottom-0 hidden sm:flex w-11/12 md:px-14'>
                      <button className='absolute left-0 bottom-1 text-slate-800 font-medium' onClick={handleBack}>Go Back</button>
                      <button className='absolute text-white bg-purple-600 right-0 bottom-1 h-8 w-20 text-sm rounded-md ' onClick={handleSubmit}>Confirm</button>
                    </div>

                </div>
              </div> 
              <div className='sm:hidden absolute flex justify-between px-5 pr-4 items-center bottom-0 bg-white w-full h-12'>
                  <button className='text-slate-800 font-medium' onClick={handleBack}>Go Back</button>
                  <button className=' text-white bg-purple-600 h-8 w-20 text-sm rounded-md ' onClick={handleSubmit}>Confirm</button>
              </div> 
              </>
             )
             : (
              <div className="absolute items-center top-20 sm:static flex flex-col w-full sm:flex-1">
                <div className="relative bg-white py-5 sm:py-8 px-3 rounded-xl w-11/12 sm:h-full p-2 sm:p-2 md:p-2 md:ml-4 xl:ml-8 md:mt-5 flex flex-col gap-3 md:gap-6">
                    <div className="flex flex-col justify-center items-center mt-auto mb-auto gap-5">
                        <img src={thankyouimg} alt="Thank you image>" />
                        <div className="description flex flex-col justify-center items-center">
                            <h1 className='text-slate-800 font-bold text-2xl'>Thank you!</h1>
                            <p className='text=gray-400 text-center'>Thanks for confirming your subscription! We hope you have <br />
                                fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
                            </p>
                        </div>
                        
                    </div>
                </div>
              </div> 
              )}        
             
              
        </div>
    </div>
  )
}

export default Summary
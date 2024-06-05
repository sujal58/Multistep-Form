import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import thankyouimg from "../assets/images/icon-thank-you.svg"
import useForm from '../context/formContext'

function FinalPage() {

  return (
    <div className="min-h-screen flex sm:justify-center items-center bg-gray-200 font-ubuntu">
        <div className="sm:static flex flex-col sm:flex-row sm:bg-white sm:h-full w-8/12 sm:w-9/12 lg:w-7/12 xl:w-7/12 sm:p-4 rounded-xl">
              <Navbar/>
              <div className="absolute items-center top-20 sm:static flex flex-col w-full sm:flex-1">
                <div className="relative bg-white py-5 sm:py-8 px-3 rounded-xl w-11/12 sm:h-full p-2 sm:p-2 md:p-2 md:ml-4 xl:ml-8 md:mt-5 flex flex-col gap-3 md:gap-6">
                    <div className="flex flex-col justify-center items-center mt-auto mb-auto gap-5">
                        <img src={thankyouimg} alt="Thank you image>" />
                        <div className="description flex flex-col justify-center items-center">
                            <h1 className='text-slate-800 font-bold text-2xl'>Thank you!</h1>
                            <p className='text=gray-400'>Thanks for confirming your subscription! We hope you have <br />
                                fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
                            </p>
                        </div>
                    </div>
                </div>
              </div>        
        </div>
    </div>
  )
}

export default FinalPage
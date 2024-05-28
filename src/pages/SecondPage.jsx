import React, {useState, useContext} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import Card from '../Components/card/Card'
import useForm from '../context/formContext'
// import { Formcontext } from '../context/formContext'
// import { stateContext } from '../App'


function SecondPage() {
        const [isChecked, setIsChecked] = useState(false);
        const [selectedCard, setSelectedCard] = useState(null);

          // const {handleNext, handleBack} = useContext(Formcontext);
          // const {handleState} = useContext(stateContext)


          const {handleNext, handleBack} = useForm();
        

        const handleToogle = () => {
            setIsChecked(!isChecked);
            
        }

  return (
    <div className="min-h-screen flex sm:justify-center items-center bg-gray-200 font-ubuntu">
        <div className="sm:static flex flex-col sm:flex-row sm:bg-white sm:h-full w-8/12 sm:w-9/12 lg:w-7/12 xl:w-7/12 sm:p-4 rounded-xl">
              <Navbar/>
              <div className="absolute items-center top-20 sm:static flex flex-col w-full sm:flex-1">
                <div className="relative bg-white py-5 sm:py-8 px-3 rounded-xl w-11/12 sm:w-11/12 sm:h-full p-2 sm:p-2 md:p-2 md:ml-4 xl:ml-8 md:mt-5 flex flex-col gap-3 md:gap-6">
                    <div className="header flex flex-col">
                      <h1 className='text-slate-800 font-bold text-lg sm:text-xl'>Select your plan</h1>
                      <p className=' text-sm text-gray-500'>You have the option of monthly or yearly biling.</p>
                    </div>
                    
                    <div className="details flex flex-col gap-3 sm:gap-5">
                          <div className='flex flex-col sm:flex-row gap-2 md:gap-5 justify-around'>
                              <Card title={"Arcade"} img={arcade} price = {isChecked ? 90 : 9} offer = {isChecked ? "2 months free": null} isSelected = {selectedCard === 1} onSelect = {()=> setSelectedCard(1)} />
                              <Card title={"Advanced"} img={advanced} price = {isChecked ? 120 : 12} offer = {isChecked ? "2 months free": null} isSelected = {selectedCard === 2} onSelect = {()=> setSelectedCard(2)}/>
                              <Card title={"Pro"} img={pro} price = {isChecked ? 150 : 15} offer = {isChecked ? "2 months free": null} isSelected = {selectedCard === 3} onSelect = {()=> setSelectedCard(3)}/>
                          </div>
                          <div className='sm:w-full flex justify-center gap-4 items-center bg-gray-100 h-10'>
                              <label htmlFor="" className={`text-sm ${isChecked ? "font-normal" : "font-bold"}`}>Monthly</label>
                              
                              <div className='relative w-12 h-7 bg-slate-800 rounded-2xl cursor-pointer '>
                                  <input type="checkbox" id="check" className='peer sr-only' checked={isChecked} onChange={handleToogle}/>
                                  <label htmlFor="check" className='absolute h-5 w-5 top-1 left-1 bg-white cursor-pointer peer-checked:left-6 rounded-xl'></label>
                              </div>
                                  <label htmlFor="check" className={`text-sm peer-checked:font-bold peer-checked:text-red-500 ${isChecked ? "font-bold" : "font-normal"}`}>Yearly</label>
                          </div>      
                    </div>

                    <div className='absolute w-full bottom-0 hidden sm:flex justify-between'>
                      <button className='text-slate-800 font-medium' onClick={handleBack}>Go Back</button>
                      <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md ' onClick={handleNext}>Next Step</button>
                    </div>
                </div>
                
              </div>        
        </div>

        <div className='sm:hidden absolute flex justify-between px-5 pr-4 items-center bottom-0 bg-white w-full h-12'>
          <button className='text-slate-800 font-medium' onClick={handleBack}>Go Back</button>
          <button className=' text-white bg-blue-900 h-8 w-20 text-sm rounded-md ' onClick={handleNext}>Next Step</button>
        </div> 
    </div>
  )
}

export default SecondPage


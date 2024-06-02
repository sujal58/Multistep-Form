import React from 'react'
import sidebarIMG from "../../assets/images/bg-sidebar-desktop.svg"
import mobileSidebar from "../../assets/images/bg-sidebar-mobile.svg"
import ListCard from './ListCard';


function Navbar() {

  const navbarList = [
  {step: "STEP 1", info: "YOUR INFO" },
  {step: "STEP 2" ,info: "SELECT PLAN"},
  {step: "STEP 3", info: "ADD-ONS" },
  {step: "STEP 4", info: "SUMMARY" }
];
  return (
    <>
    {/* style={{backgroundImage:`url(${sidebarIMG})`}} */}
      <div className="hidden sidebarDesktop sm:block pt-6 bg-cover h-[28rem] w-4/12 md:w-4/12 xl:w-3/12 bg-center rounded-xl" >
              <div className="absolute sm:static top-5 gap-6 left-1/3 right-1/3 flex flex-wrap justify-center items-center sm:flex-col rounded-xl sm:p-1 md:p-4 font-ubuntu">
                    
                  {navbarList.map((value, index)=>{
                    return <ListCard state={index+1} step={value.step} info={value.info} key={index}/>
                  })}
              </div> 
      </div>
      {/* style={{backgroundImage:`url(${mobileSidebar})`}} */}
      <div className="absolute sm:hidden sidebarMobile h-36 top-0 sm:pt-3 w-full bg-cover sm:static sm:h-[27rem] sm:w-4/12 sm:bg-cover sm:bg-center sm:rounded-xl text-left" >
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
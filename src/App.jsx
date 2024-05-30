import { useEffect, useState, useContext, createContext } from 'react';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import Thirdpage from './pages/Thirdpage';
import Summary from './pages/Summary';
import { FormProvider } from './context/formContext';
import FinalPage from './pages/FinalPage';


function App() {

  const[currentState, setCurrentState] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [currentData, setCurrentData] = useState({})
  const [prevData, setPrevData] = useState([])
  const [errorBox, setErrorbox] = useState({"Err":"This Field is required"});

  // useEffect(()=>{
  //   handleNext();
  // }, [errorBox])

  function validateField(formData){
     if(currentData.Name === undefined && currentData.email === undefined && currentData.Phone === undefined){

     }
    
  }

  const handleNext = () => {
    // if(validateField(currentData)){
    //   nextState
    // }
       
        setCurrentState(currentState => currentState+1);
    }

  const handleBack = () => {
          
    setCurrentState(currentState => currentState - 1);
  }

  const handleToogle = () => {
        setIsChecked(!isChecked);    
      }

    const  handleCurrentData = (newdata) => {
          setCurrentData(newdata) 
      }

      const handleSubmit = () => {
        setPrevData([...prevData, currentData]);
        setCurrentData({});
        setCurrentState(5)
        console.log(prevData);
      }

    

  return (
    
    <>
   
    <FormProvider value={{currentState, handleBack, handleNext, isChecked, handleToogle, currentData, handleCurrentData, handleSubmit, prevData, errorBox}}>
      {currentState === 1 && <FirstPage/> }
      {currentState === 2 ? <SecondPage/> : null}
      {currentState === 3 ? <Thirdpage/> : null}
      {currentState === 4 ? <Summary/> : null}
      {currentState === 5 ? <FinalPage/> : null}

    </FormProvider>
     
    </>
  )
}

export default App

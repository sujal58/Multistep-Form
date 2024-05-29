import { useEffect, useState, useContext, createContext } from 'react';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import Thirdpage from './pages/Thirdpage';
import Summary from './pages/Summary';
// import useForm, { Formcontext } from './context/formContext.jsx';
import { FormProvider } from './context/formContext';

// export const stateContext = createContext()
function App() {
  

  const[currentState, setCurrentState] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [currentData, setCurrentData] = useState([])

  const handleNext = () => {
    console.log(currentData);
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


  return (
    
    <>
    {/* <stateContext.Provider value={{currentState, handleState}}> */}
    <FormProvider value={{currentState, handleBack, handleNext, isChecked, handleToogle, currentData, handleCurrentData}}>
      {currentState === 1 && <FirstPage/> }
      {currentState === 2 ? <SecondPage/> : null}
      {currentState === 3 ? <Thirdpage/> : null}
      {currentState === 4 ? <Summary/> : null}
    </FormProvider>
      {/* </stateContext.Provider> */}
      {/* <Formcontext>
    </Formcontext> */}
     
    </>
  )
}

export default App

import { useEffect, useState, useContext, createContext } from 'react';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import Thirdpage from './pages/Thirdpage';
import Summary from './pages/Summary';
// import useForm, { Formcontext } from './context/formContext.jsx';
import { FormProvider } from './context/formContext';

// export const stateContext = createContext()
function App() {
  //   const [currentState, setCurrentState] = useState(1);

  //   const handleState = () => {
  //     setCurrentState(prevState => prevState + 1)
  //   }


  
  // const {currentstate} = useContext(Formcontext);
  // console.log(currentstate);

  const[currentState, setCurrentState] = useState(1);

  const handleNext = () => {
    setCurrentState(currentState => currentState+1);
  }

  const handleBack = () => {
    setCurrentState(currentState => currentState - 1);
  }


  return (
    
    <>
    {/* <stateContext.Provider value={{currentState, handleState}}> */}
    <FormProvider value={{currentState, handleBack, handleNext}}>
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

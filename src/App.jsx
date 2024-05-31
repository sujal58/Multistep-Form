import {useState} from 'react';
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
  const [selectedCard, setSelectedCard] = useState(null);
  const [error, setError] = useState(false);


  function validateField(formData){

    if(currentState === 1){
      if(formData.Name && formData.email && formData.Phone){
        return true;
     }else{
      return false;
     }
    }else if(currentState === 2){
      if(formData.plan){
        return true;
      }else return false;
    }else return true
    
  }

  const handleCard = (cardNo) =>{
    setSelectedCard(cardNo)
  }

  const handleNext = () => {
    if(validateField(currentData)){
      console.log(currentData);
      setError(false)
      setCurrentState(currentState => currentState+1);
    }else{
      setError(true)
    } 

    }

  const handleBack = () => {       
    setCurrentState(currentState => currentState - 1);
  }

  const handleToogle = () => {
        setIsChecked(!isChecked);    
      }

    const  handleCurrentData = (newdata) => {
          setCurrentData(newdata);
      }

      const handleSubmit = () => {
        setPrevData([...prevData, currentData]);
        setCurrentData({});
        setCurrentState(5);
        console.log(prevData);
      }

    

  return (
    
    <>
   
    <FormProvider value={{currentState, handleBack, handleNext, isChecked, handleToogle, currentData, handleCurrentData, handleSubmit, prevData, error, selectedCard, handleCard}}>
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

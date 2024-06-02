import {useState} from 'react';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import Thirdpage from './pages/Thirdpage';
import Summary from './pages/Summary';
import { FormProvider } from './context/formContext';
import "../src/App.css"


function App() {

  const[currentState, setCurrentState] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [currentData, setCurrentData] = useState([])
  const [prevData, setPrevData] = useState([])
  const [selectedCard, setSelectedCard] = useState(null);
  const [error, setError] = useState(false);
  const [totalAdons, setTotalAdons] = useState([]);
  const [thankyou, setThankYou] =useState(false);

  function checkEmail(email){
    
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
   
  }

  function checkPhone(phone){
    return /^[\d]{10}$/.test(phone)
  }


  function validateField(formData){
    if(currentState === 1){
      if(formData.Name && formData.email && formData.Phone && checkEmail(formData.email) && checkPhone(formData.Phone)){
        return true;
     }else{
      console.log("object");
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

  const handleCheckedAdons = (inputs) => {
    setTotalAdons(prevAdons => {return prevAdons.includes(inputs) ? prevAdons.filter((value)=> value != inputs): [...prevAdons, inputs]});
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
        setCurrentData("");
        setThankYou(true);
      }

      function handleChange(){
        setCurrentState(2);
      }

    

  return (
    
    <>
   
    <FormProvider value={{currentState, handleBack, handleNext, isChecked, handleToogle, currentData, handleCurrentData, handleSubmit, prevData, error, selectedCard, handleCard, totalAdons, handleCheckedAdons, checkEmail, checkPhone, handleChange}}>
      {currentState === 1 && <FirstPage/> }
      {currentState === 2 && <SecondPage/>}
      {currentState === 3 && <Thirdpage/>}
      {currentState === 4 &&  <Summary thankyou = {thankyou}/>}
    </FormProvider>
     
    </>
  )
}

export default App

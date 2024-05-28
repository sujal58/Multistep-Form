import { createContext, useState, useContext } from "react";

// export const Formcontext = createContext({
//   currentData: [],
//   setCurrentData: () => {},
//   prevData: [],
//   setPrevData: () => {},
//   currentstate: 1,
//   setCurrentState: () => {},
//   handleBack: () => {},
//   handleNext: () => {
    
//   },
//   handleSubmit: () => {},
// });

// export const Formprovider = ({children}) => {
//     // const formContext = useContext(Formcontext);

//   const [currentData, setCurrentData] = useState([]);
//   const [prevData, setPrevData] = useState([]);
//   const [currentstate, setCurrentState] = useState(1);

  
// const handleNext = () => {
//     console.log("next")
//     setCurrentState(currentstate =>  currentstate + 1);

//   };


//   const handleBack = () => {
//     setCurrentState(currentstate =>  currentstate - 1);
//   };

  
//   const handleSubmit = () => {};

//   return (
//     <Formcontext.Provider
//       value={{
//         currentData,
//         setCurrentData,
//         prevData,
//         setPrevData,
//         currentstate,
//         handleNext, 
//          handleBack
//       }}
//     >
//       {children}
//     </Formcontext.Provider>
//   );
// };

// export default function useForm() {
//   return useContext(Formcontext);
// }



export const formContext = createContext({
  currentState: 1,
  currentData : [{}],
  prevData: [{}],
  handleBack: () => {},
  handleNext: () => {},
  handleSubmit: () => {}
});

export const FormProvider = formContext.Provider;

export default function useForm(){
  return useContext(formContext);
}
import { createContext, useContext } from "react";


export const formContext = createContext({
  currentState: null,
  selectedCard: null,
  isChecked: false,
  handleToogle: () => {},
  handleCurrentData: () => {},
  currentData : {},
  adons: [],
  error: false,
  totalAdons: [],
  prevData: [],
  handleBack: () => {},
  handleNext: () => {},
  handleSubmit: () => {},
  handleError: () => {},
  handleCard: () => {},
  handleCheckedAdons: ()=>{},
  checkEmail: () => {},
  checkPhone: () => {},
  handleChange: () => {}
});

export const FormProvider = formContext.Provider;

export default function useForm(){
  return useContext(formContext);
}
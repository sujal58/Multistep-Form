import { createContext, useState, useContext } from "react";


export const formContext = createContext({
  currentState: 1,
  isChecked: false,
  handleToogle: () => {},
  handleCurrentData: () => {},
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
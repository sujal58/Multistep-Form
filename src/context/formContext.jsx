import { createContext, useContext } from "react";


export const formContext = createContext({
  currentState: 1,
  selectedCard: null,
  isChecked: false,
  handleToogle: () => {},
  handleCurrentData: () => {},
  currentData : {},
  error: false,
  prevData: [{}],
  handleBack: () => {},
  handleNext: () => {},
  handleSubmit: () => {},
  handleError: () => {},
  handleCard: () => {}
});

export const FormProvider = formContext.Provider;

export default function useForm(){
  return useContext(formContext);
}
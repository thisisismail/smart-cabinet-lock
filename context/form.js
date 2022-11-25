import React from 'react';
import { useContext, createContext } from 'react';

const InitialFormState = {
  name: '',
  npm: '',
  major: '',
  year: '',
  lab: '',
  rfid: '',
  password: '',
  email: ''
};

const FormContext = createContext();

const useForm = () => {
  return useContext(FormContext);
};

// props can be assigned with different name though
const FormProvider = props => {
  const [formState, setFormState] = React.useState(InitialFormState);

  const setForm = Data => {
    setFormState({ ...Data });
  };

  const resetForm = () => {
    setFormState(InitialFormState);
    console.log('log out');
  };

  const value = { ...formState, setForm, resetForm };

  // Passing value as global variable, and all props
  // {...props} is alternative to return children, if we
  // use ({children}) parameter
  return <FormContext.Provider value={value} {...props} />;
};

export { InitialFormState, useForm, FormProvider };

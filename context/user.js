import React from 'react';
import { useContext, createContext } from 'react';

const InitialUserState = {
  email: null,
  uid: null,
  displayName: null,
  accessToken: null
};

const UserContext = createContext();

const useUser = () => {
  return useContext(UserContext);
};

// props can be assigned with different name though
const UserProvider = props => {
  const [userState, setUserState] = React.useState(InitialUserState);

  const setUser = UserCredentials => {
    setUserState({ ...UserCredentials });
  };

  const resetUser = () => {
    setUserState(InitialUserState);
    console.log('log out');
  };

  const value = { ...userState, setUser, resetUser };

  // Passing value as global variable, and all props
  // {...props} is alternative to return children, if we
  // use ({children}) parameter
  return <UserContext.Provider value={value} {...props} />;
};

export { InitialUserState, useUser, UserProvider };

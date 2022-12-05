import React from 'react';
import { authStateChanged } from '../api/firebase/services/utilsFirebase';
import { useUser } from './user';
// import Loading from '../../components/Loading';

// alternatively you can use "({children})" as argument
const AuthStateChangeProvider = props => {
  // const [loading, setLoading] = React.useState(true);
  const user = useUser();
  const { setUser } = user;

  // Check if user is authenticated or not every page load
  React.useEffect(() => {
    authStateChanged(setUser);
    // setLoading(false);
    // setUser({ email: user.email, uid: user.uid });
    // console.log(user);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // return loading ? <Loading /> : <></>;

  return <div {...props}></div>;

  // alternatively you can use, return children
  // return children
  // but you need to change parameters to ({children}) instead of props
  // return children means return all of child components
};

export default AuthStateChangeProvider;

import React from 'react';
import // Card,
// CardBody,
// Typography,
// Button
// Input
'@material-tailwind/react';
import // signIn,
// authStateChanged,
// signWithCredential,
// signInWithEmail,
// signOut
// updateUser
// getPassword
'../api/firebase/services/utilsFirebase';
import { useUser } from '../context/user';
import UserInfo from '../components/UserInfo';
// import { Button } from '@material-tailwind/react';
// import Loading from '../components/Loading';
// import Btn from '../components/layouts/BtnWithAlert';
// import { deleteAccount } from '../api/services/utilsFirebase';
// import LoginCard from '../components/LoginCard';
// import { checkEmail } from '../services/utils';

const TestLab = () => {
  // preventing user to close the page or navigate to different URL outside our website
  // useEffect(() => {
  //   window.onbeforeunload = () => {
  //     console.log('are you sure?');
  //   };
  // });

  const user = useUser();

  // const [input, setInput] = React.useState('');

  // const { status, msg } = isValidEmail();

  // React.useEffect(() => {
  //   console.log(input);
  //   console.log(checkEmail(input));
  // }, [input]);

  const { displayName } = user;

  // const inputHandler = e => {
  //   setInput(e.target.value);
  // };

  // const handleSubmit = () => {
  //   console.log('Yes We did it');
  // };

  // const handleClick = () => {
  //   console.log('You close me');
  // };

  // const handleShow = () => {
  //   console.log(user);
  // updateUser({ name: 'Raden Wisnu Andhika' });
  // };

  // const myInput = (
  //   <Input
  //     // don't use user.input.name as it will
  //     // be considered as nested Object name under input under user
  //     // there is no such thing as user.input
  //     // we can't access other attributes value directly by calling them
  //     value={input}
  //     label="Input"
  //     name={input.name}
  //     onChange={inputHandler}
  //     size="lg"
  //     type="text"
  //   />
  // );

  return (
    <>
      {/* <div>Profile</div>
      <Button onClick={() => signIn()}>Sign In</Button>
      <Button onClick={() => authStateChanged()}>Is Sign in</Button>
      <Button onClick={() => signWithCredential()}>Sign Up with email</Button> */}
      {/* <Loading /> */}
      {/* <Button
        onClick={() => {
          deleteAccount(199990909909);
        }}
      >
        Delete Account
      </Button> */}

      {/* <Btn
        title={'Daftar'}
        onClick={handleSubmit}
        message={'Nothing'}
        callbackFunc={handleClick}
        alertColor={'yellow'}
        btnColor={'green'}
      /> */}

      {/* <LoginCard /> */}
      <div className="w-full flex flex-col gap-2">
        {/* <Button onClick={handleShow}>Show state</Button>
        <Button onClick={() => signOut()}>SignOUt</Button> */}
        {/* {myInput}
        <div>Hello</div> */}
        hello
        {/* <Button onClick={() => updateUser()}>Update User</Button> */}
        {/* <Button onClick={() => getPassword()}>Get Password</Button> */}
      </div>
      {/* <UserInfo displayName={displayName} /> */}
    </>
  );
};

export default TestLab;

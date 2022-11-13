import React from 'react';
// import {
//   signIn,
//   authStateChanged,
//   signWithCredential
// } from '../api/services/utilsFirebase';
// import { Button } from '@material-tailwind/react';
import Loading from '../components/Loading';

const Profile = () => {
  // preventing user to close the page or navigate to different URL outside our website
  // useEffect(() => {
  //   window.onbeforeunload = () => {
  //     console.log('are you sure?');
  //   };
  // });

  return (
    <>
      {/* <div>Profile</div>
      <Button onClick={() => signIn()}>Sign In</Button>
      <Button onClick={() => authStateChanged()}>Is Sign in</Button>
      <Button onClick={() => signWithCredential()}>Sign Up with email</Button> */}
      <Loading />
    </>
  );
};

export default Profile;

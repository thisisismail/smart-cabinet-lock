// import React from 'react';
// import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
// import {
//   signIn,
//   authStateChanged,
//   signWithCredential,
//   signInWithEmail
// } from '../api/firebase/services/utilsFirebase';
// import { useUser } from '../context/user';
// // import { Button } from '@material-tailwind/react';
// // import Loading from '../components/Loading';
// import Btn from '../components/layouts/BtnWithAlert';
// // import { deleteAccount } from '../api/services/utilsFirebase';
// import LoginCard from '../components/LoginCard';

// const TestLab = () => {
//   // preventing user to close the page or navigate to different URL outside our website
//   // useEffect(() => {
//   //   window.onbeforeunload = () => {
//   //     console.log('are you sure?');
//   //   };
//   // });

//   const user = useUser();

//   const { name, uid } = user;

//   const handleSubmit = () => {
//     console.log('Yes We did it');
//   };

//   const handleClick = () => {
//     console.log('You close me');
//   };

//   const handleShow = () => {
//     console.log(user);
//   };

//   return (
//     <>
//       {/* <div>Profile</div>
//       <Button onClick={() => signIn()}>Sign In</Button>
//       <Button onClick={() => authStateChanged()}>Is Sign in</Button>
//       <Button onClick={() => signWithCredential()}>Sign Up with email</Button> */}
//       {/* <Loading /> */}
//       {/* <Button
//         onClick={() => {
//           deleteAccount(199990909909);
//         }}
//       >
//         Delete Account
//       </Button> */}

//       {/* <Btn
//         title={'Daftar'}
//         onClick={handleSubmit}
//         message={'Nothing'}
//         callbackFunc={handleClick}
//         alertColor={'yellow'}
//         btnColor={'green'}
//       /> */}

//       <LoginCard />
//       <Button onClick={handleShow}>Show state</Button>
//     </>
//   );
// };

// export default TestLab;

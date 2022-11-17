import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
// import {
//   signIn,
//   authStateChanged,
//   signWithCredential
// } from '../api/services/utilsFirebase';
// import { Button } from '@material-tailwind/react';
// import Loading from '../components/Loading';
import Btn from '../components/BtnWithAlert';
// import { deleteAccount } from '../api/services/utilsFirebase';

const TestLab = () => {
  // preventing user to close the page or navigate to different URL outside our website
  // useEffect(() => {
  //   window.onbeforeunload = () => {
  //     console.log('are you sure?');
  //   };
  // });

  const handleSubmit = () => {
    console.log('Yes We did it');
  };

  const handleClick = () => {
    console.log('You click me');
  };

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
      <div className="border-0 border-red-400 mb-12">
        <Card
          style={{ height: 450 }}
          className="border-0 border-blue-600 h-full"
        >
          <Btn
            title="Daftar"
            onClick={handleClick}
            message={'Pendaftaran Sukses'}
            callbackFunc={handleSubmit}
            color="green"
          />
          <CardBody className="flex flex-col gap-2">
            <Typography variant="h5" color="blue" textGradient>
              Pendaftaran
            </Typography>
            <div className="flex flex-col gap-2 absolute left-0">
              {/* {InputsForm} */}
            </div>
          </CardBody>
          <div className="h-20 border-0"></div>
        </Card>
        <div className="border-0 border-black w-full -mt-0 bg-green-200 px-8 pb-2 z-20">
          <Btn
            title="Daftar"
            onClick={handleClick}
            message={'Pendaftaran Sukses'}
            callbackFunc={handleSubmit}
            color="green"
          />
        </div>
      </div>
    </>
  );
};

export default TestLab;

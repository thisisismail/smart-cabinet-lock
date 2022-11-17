import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  addAccount,
  signupMode,
  setRFID,
  setStatusRFID,
  getStatusRFID,
  getRFID
} from '../api/services/utilsFirebase';
import RegisterForm from '../components/RegisterForm';

const Registration = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    name: '',
    npm: '',
    major: '',
    year: '',
    lab: '',
    rfid: '',
    password: ''
  });

  // const [showpwd, setShowpwd] = useState(false);

  const [msg, setMsg] = useState('Tap your card to machine');

  // detecting as user navigate to different page within or outside our website
  // to resetting the signup mode to 0 A.K.A off
  useEffect(() => {
    getStatusRFID().then(response => {
      response === 1
        ? getRFID().then(res => {
            setUser(prevState => ({ ...prevState, rfid: res }));
            setMsg('Card successfully registered');
          })
        : setUser(prevState => ({ ...prevState, rfid: '' }));
    });

    const pathname = window.location.pathname;

    // exiting function
    const exitingFunction = url => {
      // prevent function to be executed, as user navigate to the same page
      if (url !== pathname) {
        console.log('exiting registration page...');
        signupMode(0);
        setRFID(0);
        setStatusRFID(0);
      }
    };

    // detecting as user navigate to different URL outside our website
    window.onbeforeunload = () => {
      console.log('resetting mode in firebase');
      signupMode(0);
      setRFID(0);
      setStatusRFID(0);
    };

    // triggering the events as user navigate to different page within our wewbsite
    // routeChangeStart always be executed whenever there is a navigation action
    // once the event is on, it always be executed in all pages, so to avoid this
    // we should turn it off in return section.
    router.events.on('routeChangeStart', exitingFunction);

    return () => {
      // turn off the events triggering
      // preventing the event to be executed in all pages
      router.events.off('routeChangeStart', exitingFunction);
    };
  });

  // Setting signup mode to 1 A.K.A on
  // This effect is executed when the page is loaded,
  // the page won't be loaded as it navgates to the same page (by Clicking the link),
  // so this effect won't be executed as we navigate to this page again (by Clicking the Link),
  // the page will be loaded again (by input the same URL to search bar and hit enter)
  // The routeChangeStart always be executed whenever there is a navigation action
  useEffect(() => {
    signupMode(1);
  }, []);

  const inputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(values => ({ ...values, [name]: value }));
  };

  const selectHandler = e => {
    const data = JSON.parse(e);
    setUser(prevstates => ({ ...prevstates, [data.name]: data.value }));
  };

  const submitHandler = () => {
    addAccount(user)
      .catch(err => console.log(err))
      .then(() => router.push('/LogData'));
  };

  return (
    <>
      <RegisterForm
        user={{ user }}
        msg={msg}
        inputHandler={inputHandler}
        selectHandler={selectHandler}
        submitHandler={submitHandler}
        setDisable={Object.values(user).some(x => x === null || x === '')}
      />
    </>
  );
};

export default Registration;

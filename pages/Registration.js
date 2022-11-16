import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BiShow, BiHide } from 'react-icons/bi';
import {
  Card,
  CardBody,
  Button,
  Typography,
  Input
} from '@material-tailwind/react';
import {
  addAccount,
  signupMode,
  setRFID,
  setStatusRFID,
  getStatusRFID,
  getRFID
} from '../api/services/utilsFirebase';
import { formInputs } from '../utils/data';
import SelectInput from '../components/SelectInput';

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

  const [showpwd, setShowpwd] = useState(false);

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
        console.log('exiting...');
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
    console.log(user);
  };

  const showPassword = () => {
    setShowpwd(!showpwd);
    console.log('change');
  };

  const pwdIconAttr = {
    onClick: showPassword,
    cursor: 'pointer',
    size: 30,
    className: 'absolute'
  };

  const InputsForm = formInputs.map(input => (
    <div key={input.label} className="flex flex-row items-center">
      {!input.options ? (
        <Input
          // don't use user.input.name as it will
          // be considered as nested Object name under input under user
          // there is no such thing as user.input
          // we can't access other attributes value directly by calling them
          value={user[input.name]}
          label={input.name !== 'rfid' ? input.label : msg}
          name={input.name}
          onChange={inputHandler}
          size="lg"
          disabled={input.name !== 'rfid' ? false : true}
          type={input.type ? input.type : showpwd ? 'text' : 'password'}
          icon={
            input.type ? null : showpwd ? (
              <BiHide {...pwdIconAttr} />
            ) : (
              <BiShow {...pwdIconAttr} />
            )
          }
        />
      ) : (
        <SelectInput
          label={input.label}
          options={input.options}
          onChange={e => setUser({ ...user, [input.name]: e })}
        />
      )}
    </div>
  ));

  return (
    <>
      <Card className="">
        <CardBody className="flex flex-col gap-2">
          <Typography variant="h5" color="blue" textGradient>
            Pendaftaran
          </Typography>
          <div className="flex flex-col gap-2">
            {InputsForm}
            <Button
              disabled={Object.values(user).some(x => x === null || x === '')}
              onClick={() => {
                addAccount(user).then(() => router.push('/LogData'));
              }}
            >
              Daftar
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Registration;

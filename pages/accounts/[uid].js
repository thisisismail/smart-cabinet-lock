import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Button } from '@material-tailwind/react';
import AccountInfo from '../../components/AccountInfoForm';
import Centering from '../../components/layouts/Centering';
import Loading from '../../components/Loading';
import { useUser } from '../../context/user';
import withProtected from '../../higherOrderComponents/WithProtected';
import {
  // signOut,
  updateAccount,
  signupMode,
  setRFID,
  setStatusRFID,
  getStatusRFID,
  getRFID,
  deleteAccount
} from '../../api/firebase/services/utilsFirebase';
import { isEmailExist } from '../../api/firebase/services/utilsFirebase';

const AccountDetail = () => {
  const router = useRouter();
  const User = useUser();
  const { uid } = router.query;
  const { accessToken } = User;
  // eslint-disable-next-line no-unused-vars
  const [edit, setEdit] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [newRFID, setNewRFID] = React.useState(false);
  const [msg, setMsg] = React.useState('Tap your card to machine');
  const [status, setStatus] = React.useState({
    color: 'blue',
    text: 'Mengupload data'
  });
  const [user, setUser] = React.useState({
    name: '',
    npm: '',
    major: '',
    year: '',
    lab: '',
    rfid: '',
    password: '',
    email: ''
  });

  React.useEffect(() => {
    if (!newRFID) {
      return () => {};
    }

    navigator.onLine &&
      getStatusRFID().then(response => {
        response === 1
          ? getRFID().then(res => {
              setUser(prevState => ({ ...prevState, rfid: res }));
              setMsg('Card successfully registered');
            })
          : setUser(prevState => ({ ...prevState, rfid: '' }));
      });

    const pathname = window.location.pathname;

    const exitingFunction = url => {
      if (url !== pathname) {
        console.log('exiting registration page...');
        signupMode(0);
        setRFID(0);
        setStatusRFID(0);
      }
    };

    window.onbeforeunload = () => {
      console.log('resetting mode in firebase');
      signupMode(0);
      setRFID(0);
      setStatusRFID(0);
    };

    router.events.on('routeChangeStart', exitingFunction);

    return () => {
      router.events.off('routeChangeStart', exitingFunction);
    };
  });

  React.useEffect(() => {
    if (newRFID) {
      signupMode(1);
    }
  }, [newRFID]);

  const endpoint = `${process.env.databaseURL}/users/${uid}.json?auth=${accessToken}`;
  const password = `${process.env.databaseURL}/passwords/${uid}.json?auth=${accessToken}`;

  const fetcher = async url => {
    return await fetch(url)
      .then(res => {
        return res.json();
      })
      .catch(error => console.log(error));
  };

  const { data: opened, error: errorOpened } = useSWR(endpoint, fetcher);
  const { data: closed, error: errorClosed } = useSWR(password, fetcher);

  const deleteData = uid => {
    deleteAccount(uid)
      .then(() => console.log('Data deleted'))
      .then(() => router.back());
  };

  // detecting as user navigate to different page within or outside our website
  // to resetting the signup mode to 0 A.K.A off

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
    // Add user to realtime database in firebase
    return opened.email === user.email
      ? updateAccount(user, false).then(() => {
          setStatus(prevstates => ({ ...prevstates, color: 'green' }));
          setStatus(prevstates => ({
            ...prevstates,
            text: 'Pembaruan sukses'
          }));
        })
      : isEmailExist(user.email).then(res => {
          !res &&
            updateAccount(user, false).then(() => {
              setStatus(prevstates => ({ ...prevstates, color: 'green' }));
              setStatus(prevstates => ({
                ...prevstates,
                text: 'Pembaruan sukses'
              }));
            });
          res &&
            isEmailExist(user.email) &&
            setStatus(prevstates => ({
              ...prevstates,
              text: 'Email sudah digunakan, gagal mendaftar',
              color: 'red'
            }));
        });
  };

  const prefilledForm = userObj => {
    setUser(userObj);
  };

  const deleteButton = (
    <>
      <Button color="red" onClick={() => deleteData(uid)}>
        Delete
      </Button>
    </>
  );

  if (errorOpened || errorClosed)
    return (
      <Centering>
        <h1>Error</h1>
      </Centering>
    );
  if (!opened || !closed) return <Loading />;

  return (
    <>
      {/* <Switch color="blue" defaultUnchecked /> */}
      {/* <div className="border-2 border-red-400"> */}
      <AccountInfo
        // Form properties => RegisterForm
        pwd={closed}
        currentData={Object.assign(opened, closed)}
        user={{ user }}
        msg={msg}
        inputHandler={inputHandler}
        selectHandler={selectHandler}
        prefilledHandler={prefilledForm}
        deleteButton={deleteButton}
        // Button properties => BtnWithAlert
        onClick={submitHandler}
        callbackFunc={() => {
          setStatus(prevstates => ({
            ...prevstates,
            color: 'blue',
            text: 'Mengupload data'
          }));
          // router.push(`/accounts/${opened.rfid}`);
          router.push('/accounts');
        }}
        setDisabled={Object.values(user).some(x => x === null || x === '')}
        message={status.text}
        alertColor={status.color}
      />
      {/* </div> */}
    </>
  );
};

export default withProtected(AccountDetail);

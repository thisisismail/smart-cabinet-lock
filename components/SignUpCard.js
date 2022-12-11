import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiHide, BiShow } from 'react-icons/bi';
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
  Switch
} from '@material-tailwind/react';
import {
  signUpWithEmail,
  // setRegisterAdminStatus,
  setRegisterAdminMode,
  getRegisterAdminStatus
} from '../api/firebase/services/utilsFirebase';
// import Center from '../components/layouts/Centering';
import { signUpInputs } from '../services/data';
import { checkEmail, getErrorMessage } from '../services/utils';
// import { useUser } from '../context/user';

const LoginCard = () => {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    name: '',
    mastercar: ''
  });

  const [error, setError] = React.useState({
    email: null,
    auth: null
  });

  const [showpwd, setShowpwd] = React.useState(false);

  const [click, setClick] = React.useState(false);

  const [masterCardStatus, setMasterCardStatus] = React.useState('');

  const [masterCardMode, setMasterCardMode] = React.useState(false);

  React.useEffect(() => {
    getRegisterAdminStatus().then(res =>
      res === 1 ? setMasterCardStatus('Terverifikasi') : setMasterCardStatus('')
    );
    masterCardMode === false && setRegisterAdminMode(0);
    masterCardMode === true && setRegisterAdminMode(1);
  });

  React.useEffect(() => {
    !checkEmail(user.email)
      ? setError({ ...error, email: 'Gunakan format email UI' })
      : setError({ ...error, email: null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email]);

  const inputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prevStates => ({ ...prevStates, [name]: value }));
    error.auth && setError(prevStates => ({ ...prevStates, auth: null }));
  };

  const submitHandler = () => {
    signUpWithEmail(user.email, user.password, user.name).then(res => {
      if (res) {
        setError({ ...error, auth: getErrorMessage(res) });
      } else {
        router.push('/');
      }
    });
    setClick(!click);
  };

  const showPassword = () => {
    setShowpwd(!showpwd);
  };

  const pwdIconAttr = {
    onClick: showPassword,
    cursor: 'pointer',
    size: 30,
    className: 'absolute'
  };

  const InputsForm = signUpInputs.map(input => (
    <div key={input.name}>
      {input.name === 'mastercard' && (
        <div className="mb-2">
          <Switch
            label="Verifikasi Mastercard"
            onClick={() => {
              setMasterCardMode(!masterCardMode);
            }}
          />
        </div>
      )}
      <Input
        disabled={input.name === 'mastercard' ? true : false}
        value={
          input.name !== 'mastercard' ? user[input.name] : masterCardStatus
        }
        label={input.label}
        name={input.name}
        onChange={inputHandler}
        size="lg"
        type={input.type ? input.type : showpwd ? 'text' : 'password'}
        icon={
          input.type ? null : showpwd ? (
            <BiHide {...pwdIconAttr} />
          ) : (
            <BiShow {...pwdIconAttr} />
          )
        }
      />
      <div className="text-sm text-red-500 pl-3">
        {input.name === 'email' && user.email && error.email}
      </div>
    </div>
  ));

  return (
    <>
      <Card style={{ maxWidth: 400 }} className="mx-auto">
        <CardBody className="flex flex-col gap-2">
          <Typography variant="h5" color="blue" textGradient>
            Daftar
          </Typography>
          {InputsForm}
          {/* <Input label="Or sign up with admin card" disabled></Input> */}

          <div
            className={`text-sm text-red-500 pl-3 ${
              !error.auth ? 'hidden' : ''
            }`}
          >
            {error.auth}
          </div>
          <Button
            onClick={submitHandler}
            disabled={
              Object.values(user).some(x => x === null || x === '') ||
              error.email
            }
          >
            Daftar
          </Button>
          <div>
            Sudah punya akun? Silahkan{' '}
            <span>
              <Link href="/SignIn">
                <a className="text-blue-700 hover:text-blue-500">masuk</a>
              </Link>
            </span>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default LoginCard;

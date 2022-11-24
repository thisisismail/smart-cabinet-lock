import React from 'react';
import { useRouter } from 'next/router';
import { BiHide, BiShow } from 'react-icons/bi';
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button
} from '@material-tailwind/react';
import { signInWithEmail } from '../api/firebase/services/utilsFirebase';
// import Center from '../components/layouts/Centering';
import { loginInputs } from '../services/data';
import { useUser } from '../context/user';

const LoginCard = () => {
  const router = useRouter();

  const [userForm, setUserForm] = React.useState({
    email: '',
    password: ''
  });

  const [showpwd, setShowpwd] = React.useState(false);

  const [click, setClick] = React.useState(false);

  const user = useUser();

  // React.useEffect(() => {
  //   window.localStorage.setItem(
  //     'USERS_INFO',
  //     JSON.stringify({
  //       CURRENT_EMAIL: userForm.email,
  //       CURRENT_PASSWORD: userForm.password
  //     })
  //   );
  // }, [userForm]);

  const inputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUserForm(prevStates => ({ ...prevStates, [name]: value }));
  };

  const submitHandler = () => {
    signInWithEmail(userForm.email, userForm.password).then(() => {
      router.push('/');
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

  const InputsForm = loginInputs.map(input => (
    <div key={input.name}>
      <Input
        value={userForm[input.name]}
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
    </div>
  ));

  return (
    <>
      <Card style={{ maxWidth: 400 }} className="mx-auto">
        <CardBody className="flex flex-col gap-2">
          <Typography variant="h5" color="blue" textGradient>
            Masuk
          </Typography>
          {InputsForm}
          {/* <Input label="Or sign up with admin card" disabled></Input> */}
          <Button onClick={submitHandler}>Masuk</Button>
          {/* <Button onClick={storePw}>Store PW</Button> */}
        </CardBody>
      </Card>
    </>
  );
};

export default LoginCard;

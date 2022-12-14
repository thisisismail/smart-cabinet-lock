import React from 'react';
import { Card, CardBody, Typography, Input } from '@material-tailwind/react';
import { BiHide, BiShow } from 'react-icons/bi';
import { formInputs } from '../services/data';
import SelectInput from './layouts/InputSelectOptions';
import SubmitBtn from './layouts/BtnWithAlert';
import { checkEmail } from '../services/utils';

const RegisterForm = props => {
  const [showpwd, setShowpwd] = React.useState(false);

  // recording input state in Email Input Form
  const [record, setRecord] = React.useState('');

  const [error, setError] = React.useState({
    email: ''
  });

  // set the email validation as recorded state changes
  React.useEffect(() => {
    record && !checkEmail(record)
      ? setError({ ...error, email: 'Gunakan format email UI' })
      : setError({ ...error, email: null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [record]);

  const showPassword = () => {
    setShowpwd(!showpwd);
  };

  const pwdIconAttr = {
    onClick: showPassword,
    cursor: 'pointer',
    size: 30,
    className: 'absolute'
  };

  // local handler to set the state on local state
  // it is required to avoid props passing delay
  const inputHandlerLocal = e => {
    props.inputHandler(e);
    setRecord(e.target.value);
  };

  const InputsForm = formInputs.map(input => (
    <div key={input.label} className="flex flex-row items-center">
      {!input.options ? (
        <div className="w-full">
          <Input
            // don't use user.input.name as it will
            // be considered as nested Object name under input under user
            // there is no such thing as user.input
            // we can't access other attributes value directly by calling them
            value={props.user[input.name]}
            label={input.name !== 'rfid' ? input.label : props.msg}
            name={input.name}
            onChange={
              input.name !== 'email' ? props.inputHandler : inputHandlerLocal
            }
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
          <div className="text-sm text-red-500 pl-3">
            {input.name === 'email' && record && error.email}
          </div>
        </div>
      ) : (
        <SelectInput
          name={input.name}
          label={input.label}
          options={input.options}
          selectHandler={props.selectHandler}
        />
      )}
    </div>
  ));

  return (
    <>
      <Card className="">
        <CardBody className="flex flex-col gap-2">
          <Typography variant="h5" className="text-blue-900" textGradient>
            Pendaftaran
          </Typography>
          <div className="flex flex-col gap-2">
            {InputsForm}
            <SubmitBtn
              title="Daftar"
              // disabled={props.setDisable}
              // onClick={props.submitHandler}
              // message={props.message}
              // callbackFunc={props.callbackFunc}
              // alertColor={props.alertColor}
              // btnColor={props.btnColor}

              // consume all props
              {...props}
              // cascading props
              setDisabled={props.setDisabled || error.email !== null}
            />
          </div>
        </CardBody>
        {/* <button onClick={() => console.log(props.user)}>Click Me</button> */}
      </Card>
    </>
  );
};

export default RegisterForm;

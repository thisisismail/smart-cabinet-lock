import React from 'react';
import { Card, CardBody, Typography, Input } from '@material-tailwind/react';
import { BiHide, BiShow } from 'react-icons/bi';
import { formInputs } from '../services/data';
import SelectInput from './layouts/InputSelectOptions';
import SubmitBtn from './layouts/BtnWithAlert';

const RegisterForm = props => {
  const [showpwd, setShowpwd] = React.useState(false);

  const showPassword = () => {
    setShowpwd(!showpwd);
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
          value={props.user[input.name]}
          label={input.name !== 'rfid' ? input.label : props.msg}
          name={input.name}
          onChange={props.inputHandler}
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
          name={input.name}
          label={input.label}
          options={input.options}
          onChange={props.selectHandler}
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
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default RegisterForm;

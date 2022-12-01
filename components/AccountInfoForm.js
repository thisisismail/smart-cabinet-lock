import React from 'react';
import { Card, CardBody, Typography, Input } from '@material-tailwind/react';
import { HiChevronDown } from 'react-icons/hi';
import { BiHide, BiShow } from 'react-icons/bi';
import { formInputs } from '../services/data';
import SelectInput from './layouts/InputSelectOptions';
import SubmitBtn from './layouts/BtnWithAlert';
import { checkEmail } from '../services/utils';

const AccountInfoForm = props => {
  const [showpwd, setShowpwd] = React.useState(false);

  // recording input state in Email Input Form
  const [record, setRecord] = React.useState('');

  const [error, setError] = React.useState({
    email: ''
  });

  const [editSelect, setEditSelect] = React.useState({
    major: false,
    lab: false,
    year: false
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

  const editSelectHandler = select => {
    setEditSelect({ ...editSelect, [select]: true });
  };

  const InputsForm = formInputs.map(input => (
    <div key={input.label} className="flex flex-row items-center">
      {!input.options ? (
        <div className="w-full">
          <Input
            defaultValue={props.currentData[input.name]}
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
      ) : editSelect[input.name] ? (
        <SelectInput
          name={input.name}
          label={input.label}
          options={input.options}
          onChange={props.selectHandler}
          defaultValue={props.currentData[input.name]}
        />
      ) : (
        <div className="w-full h-full relative border-0 border-red-600">
          {/* Masking Input so that it is not reachable / not editable */}
          <div
            onClick={() => editSelectHandler(input.name)}
            className="w-full border-0 border-blue-700 absolute z-40 h-full text-center select-none cursor-pointer"
          >
            <div className="border-0 border-green-600 h-full flex justify-end items-center pr-2">
              <HiChevronDown size={20} color={'#78909c'} />
            </div>
          </div>
          <Input
            size="lg"
            label={input.label}
            value={props.currentData[input.name]}
            readOnly={true}
            // tabindex will prevent tab to stop in this input
            tabindex={-1}
          />
        </div>
      )}
    </div>
  ));

  return (
    <>
      <Card className="">
        <CardBody className="flex flex-col gap-2">
          <Typography variant="h5" color="blue" textGradient>
            Detail Pengguna
          </Typography>
          <div className="flex flex-col gap-2">
            {InputsForm}
            <SubmitBtn
              title="Perbarui"
              {...props}
              setDisabled={props.setDisabled || error.email !== null}
            />
          </div>
          {props.deleteButton}
        </CardBody>
      </Card>
    </>
  );
};

export default AccountInfoForm;

import React from 'react';
import { Button, Alert } from '@material-tailwind/react';

const BtnWithAlert = props => {
  const [show, setShow] = React.useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        className={`${
          !show ? 'hidden' : ''
        } border-0 border-black fixed z-40 w-screen left-0 top-0 h-full bg-white/30 backdrop-blur-sm`}
      >
        <div className="flex items-center justify-center border-0 border-red w-full h-full">
          <Alert
            show={show}
            style={{ maxWidth: 300 }}
            color={props.alertColor}
            animate={{
              mount: { y: 0 },
              unmount: { y: 100 }
            }}
            dismissible={{
              onClose: () => {
                setShow(false);
                // calling function from props, don't forget to use '()'
                props.callbackFunc();
              }
            }}
          >
            {props.message}
          </Alert>
        </div>
      </div>
      <Button
        className="w-full"
        color={props.btnColor}
        disabled={props.setDisabled}
        onClick={() => {
          showHandler();
          props.onClick();
        }}
      >
        {props.title}
      </Button>
    </>
  );
};

export default BtnWithAlert;

import React from 'react';
import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import { MdLogout, MdAccountCircle } from 'react-icons/md';
import { signOut } from '../api/firebase/services/utilsFirebase';

const UserInfo = props => {
  const [popup, setPopup] = React.useState(false);

  const linkStyle = 'font-sans font-semibold';

  const userInfo = (
    <Card
      style={{ minWidth: 300 }}
      className="fixed right-0 top-14 w-full md:w-min"
    >
      <CardBody className="flex flex-col gap-2">
        <Typography variant="h6" color="blue" textGradient className="flex flex-row items-center gap-2">
          <MdAccountCircle size="30" color="black"/>
          {props.displayName ?? ''}
        </Typography>
        <Button
          className="flex flex-row justify-center items-center gap-2"
          color="red"
          onClick={signOut}
        >
          <MdLogout size={24} className="" />
          Keluar
        </Button>
      </CardBody>
    </Card>
  );

  const clickHandler = () => {
    setPopup(!popup);
  };

  return (
    <>
      {popup && userInfo}
      <div
        className={`${linkStyle} text-white cursor-pointer truncate border-0 w-full text-right `}
        style={{ width: 200 }}
        onClick={clickHandler}
      >
        {props.displayName}
      </div>
    </>
  );
};

export default UserInfo;

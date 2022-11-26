import React from 'react';
import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import { MdLogout } from 'react-icons/md';
import { signOut } from '../api/firebase/services/utilsFirebase';

const UserInfo = props => {
  const [popup, setPopup] = React.useState(false);

  const linkStyle = 'font-sans font-semibold';

  const userInfo = (
    <Card style={{ maxWidth: 300 }} className="fixed right-0 top-14">
      <CardBody className="flex flex-col gap-2">
        <Typography variant="h5" color="blue" textGradient>
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

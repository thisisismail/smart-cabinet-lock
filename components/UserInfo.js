import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import { MdLogout } from 'react-icons/md';
import { signOut } from '../api/firebase/services/utilsFirebase';
import { useUser } from '../context/user';

const UserInfo = () => {
  const user = useUser();
  const { displayName } = user;

  const iconStyle = '';

  return (
    <>
      <Card style={{ maxWidth: 300 }}>
        <CardBody className="flex flex-col gap-2">
          <Typography variant="h5" color="blue" textGradient>
            {displayName ?? ''}
          </Typography>
          <Button
            className="flex flex-row justify-center items-center gap-2"
            color="red"
            onClick={signOut}
          >
            <MdLogout size={24} className={iconStyle} />
            Keluar
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default UserInfo;

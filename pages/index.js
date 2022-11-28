import { Typography } from '@material-tailwind/react';
// import LoginCard from '../components/LoginCard';
import Center from '../components/layouts/Centering';

// import { useUser } from '../context/user';

export default function Home() {
  // const user = useUser();
  // const { uid } = user;

  return (
    <>
      <div className="">
        <Center>
          <Typography variant="h3">Home</Typography>
        </Center>
      </div>
    </>
  );
}

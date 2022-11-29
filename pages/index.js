// import LoginCard from '../components/LoginCard';
import Center from '../components/layouts/Centering';
import Logo from '../components/Logo';

// import { useUser } from '../context/user';

export default function Home() {
  // const user = useUser();
  // const { uid } = user;

  return (
    <>
      <div className="">
        <Center>
          <Logo height={200} width={200} />
        </Center>
      </div>
    </>
  );
}

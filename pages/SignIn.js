import LoginCard from '../components/LoginCard';
import WithoutProtected from '../higherOrderComponents/WithoutProtected';

const SignIn = () => {
  return (
    <>
      <LoginCard />
    </>
  );
};

export default WithoutProtected(SignIn);

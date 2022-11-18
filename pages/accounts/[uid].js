import { useRouter } from 'next/router';

const AccountDetail = () => {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <>
      <div>{uid}</div>
    </>
  );
};

export default AccountDetail;

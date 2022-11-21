import React from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../context/user';

const withProtected = Pages => {
  return props => {
    const router = useRouter();
    const user = useUser();

    const { uid } = user;

    React.useEffect(() => {
      if (!uid) {
        console.log('Access denied');
        router.replace('/');
      }
    }, []);

    if (!uid) {
      // console.log('Access denied');
      render: return <></>;
    } else {
      render: return <Pages {...props} />;
    }
  };
};

export default withProtected;

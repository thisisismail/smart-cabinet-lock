import React from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../context/user';

const withProtected = Pages => {
  return props => {
    const router = useRouter();
    const user = useUser();

    const { uid } = user;

    if (!uid) {
      console.log('Access denied');
      // Prevent router from push when client is still rendering
      if (typeof window === 'undefined') return null;
      router.replace('/SignIn');
      render: return <></>;
    } else {
      render: return <Pages {...props} />;
    }
  };
};

export default withProtected;

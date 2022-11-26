import React from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../context/user';

const withoutProtected = Pages => {
  return props => {
    const router = useRouter();
    const user = useUser();

    const { uid } = user;

    if (!uid) {
      render: return <Pages {...props} />;
    } else {
      console.log('you already logged in');
      // Prevent router from push when client is still rendering
      if (typeof window === 'undefined') return null;
      router.replace('/');
      render: return <></>;
    }
  };
};

export default withoutProtected;

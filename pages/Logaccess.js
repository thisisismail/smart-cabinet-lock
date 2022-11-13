import React, { useEffect, useState } from 'react';
// import { Button } from '@material-tailwind/react';
import { getAccounts } from '../api/services/utilsFirebase';

const Logaccess = () => {
  // // We can bypass the use of useState and useEffect
  // // by using getServerSideProps

  const [accounts, setAccounts] = useState('');

  // fetch data from firebase in realtime
  useEffect(() => {
    getAccounts()
      .then(response => {
        setAccounts(response);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  });

  // use Object.keys(ourObject) to map object
  // use ourObject[subObject].key to get the key's value
  const listAccounts = Object.keys(accounts)?.map(acc => (
    <div key={accounts[acc].rfid} className="pt-4">
      <div>{accounts[acc].name}</div>
      <div>{accounts[acc].npm}</div>
    </div>
  ));

  return (
    <>
      <div>{listAccounts}</div>
    </>
  );
};

// eliminating the use of useEffect and useState
// it will fetch data from firebase in realtime mode
// export const getServerSideProps = async () => {
//   const data = await getAccounts();
//   return { props: data };
// };

export default Logaccess;

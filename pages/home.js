import React from 'react';
import { getAccounts, getRFID } from '../api/services/utilsFirebase';
// import Loading from '../components/Loading';

const home = () => {
  return (
    <>
      <div style={{ height: 2000 }} className="border-0">
        <div className="flex justify-center items-center">Home</div>
        <button
          className="btn bg-teal-400 rounded-lg p-2"
          onClick={() => getAccounts().then(res => console.log(res))}
        >
          Get Accounts
        </button>
        <button
          className="btn bg-teal-400 rounded-lg p-2"
          onClick={() => {
            getRFID().then(res => console.log(res));
          }}
        >
          Read RFID
        </button>
        <div>Home</div>
      </div>
    </>
  );
};

export default home;

import React from 'react';
import {
  getAccounts,
  getRFID,
  getStatusRFID,
  getStatusMessage
} from '../api/services/utilsFirebase';
// import Loading from '../components/Loading';

const home = () => {
  return (
    <>
      <div style={{ height: 2000 }} className="border-0">
        <div className="flex justify-center items-center">Home</div>
        <button
          className="btn bg-teal-400 rounded-lg p-2"
          onClick={() => {
            getAccounts();
          }}
        >
          Get Accounts
        </button>
        <button
          className="btn bg-teal-400 rounded-lg p-2"
          onClick={() => {
            getRFID();
          }}
        >
          Read RFID
        </button>
        <button
          className="btn bg-teal-400 rounded-lg p-2"
          onClick={() => {
            getStatusRFID().then(res => console.log(res));
          }}
        >
          Read Status RFID
        </button>
        <button
          className="btn bg-teal-400 rounded-lg p-2"
          onClick={() => {
            getStatusMessage().then(res => console.log(res));
          }}
        >
          Read Status Message
        </button>
        <div>Home</div>
      </div>
    </>
  );
};

export default home;

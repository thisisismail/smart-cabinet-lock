import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@material-tailwind/react';
import { deleteAccount } from '../api/firebase/services/utilsFirebase';

const DeleteButton = props => {
  const router = useRouter();

  const deleteData = uid => {
    deleteAccount(uid)
      .then(() => console.log('Data deleted'))
      .then(() => router.back());
  };

  return (
    <>
      <Button
        color="red"
        tabIndex={props.edit ? 0 : -1}
        disabled={props.edit ? false : true}
        onClick={() => deleteData(props.currentData['rfid'])}
      >
        Hapus
      </Button>
    </>
  );
};

export default DeleteButton;

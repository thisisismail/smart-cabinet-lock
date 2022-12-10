import { conversion } from './data';

const convertToId = (type, data) => {
  const index = conversion[type].en.indexOf(data);
  const result = conversion[type].id[index];
  return result;
};

const timeFormator = data => {
  const arr = data.split(' ');
  const month = convertToId('months', arr[1]);
  const day = convertToId('days', arr[0]);
  const result = String(`${arr[4]} WIB ${arr[2]} ${month} ${arr[3]} ${day}`);
  return result;
};

const checkEmail = email => {
  const status = /\S+@ui.ac.id/.test(email) && /\S/.test(email);
  return status;
};

const getErrorMessage = errCode => {
  switch (errCode) {
    case 'auth/user-not-found':
      return 'Akun tidak ditemukan';
    case 'auth/wrong-password' || 'auth/wrong-email':
      return 'Akun tidak ditemukan';
    case 'auth/email-already-in-use':
      return 'Email sudah digunakan';
    default:
      return 'Error, periksa koneksi internet Anda';
  }
};

const isObjEqual = (obj1, obj2) => {
  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;
  if (obj1Length === obj2Length) {
    return Object.keys(obj1).every(
      key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  }
  return false;
};

export { convertToId, timeFormator, checkEmail, getErrorMessage, isObjEqual };

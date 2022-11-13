import {
  getDatabase,
  get,
  set,
  ref,
  child,
  onValue,
  once
} from 'firebase/database';
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  EmailAuthProvider,
  linkWithCredential
} from 'firebase/auth';
import { app } from '../config/configFirebase';

// fetch database info
const dataDb = getDatabase(app);
// get database path within firebase project
const dbRef = ref(dataDb);

// const getAccounts = async () => {
//   once(child(dbRef, 'users/'), snapshot => {
//     const data = snapshot.val();
//     console.log(data);
//   });
// };

const getAccounts = async () => {
  return get(child(dbRef, 'users/'))
    .then(snapshot => {
      return snapshot.val();
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

const addAccount = userObj => {
  // don't forget to use return since we want to use [.then] method later
  return set(ref(dataDb, 'users/' + userObj.rfid), userObj)
    .then(() => setStatusRegister(1))
    .then(() => setStatusRFID(0))
    .then(() => setRFID(0));
};

const setRFID = val => {
  set(ref(dataDb, 'readRFID'), val);
};

const getRFID = async () => {
  return get(child(dbRef, 'readRFID'))
    .then(snapshot => {
      return snapshot.val();
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

const getStatusRFID = async () => {
  return get(child(dbRef, 'statusRFID'))
    .then(snapshot => {
      return snapshot.val();
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

const setStatusRFID = val => {
  set(ref(dataDb, 'statusRFID'), val);
};

const setStatusMessage = message => {
  set(ref(dataDb, 'statusMessage'), message);
};

const getStatusMessage = async () => {
  return get(child(dbRef, 'statusMessage'))
    .then(snapshot => {
      return snapshot.val();
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

const signupMode = val => {
  set(ref(dataDb, 'modeSignup'), val).then(() => {
    val === 1
      ? setStatusMessage('Tap to register')
      : setStatusMessage('Tap your card');
  });
};

const signIn = () => {
  const auth = getAuth();
  signInAnonymously(auth)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ...
    });
};

const setStatusRegister = val => {
  set(ref(dataDb, 'statusRegister'), val);
};

const authStateChanged = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      console.log('Signed in');
      // ...
    } else {
      // User is signed out
      // ...
      console.log('Signed out');
    }
  });
};

// Sign Up new Anonymous Account with email address
// This function works if and only if the user anonymous accounts(UID) has already generated
// in the previous step signIn (to get the new UID)
const signWithCredential = () => {
  const email = 'sriwedariYou@gmail.com';
  const password = 'DoYouYesIDo!';
  const credential = EmailAuthProvider.credential(email, password);
  const auth = getAuth();
  linkWithCredential(auth.currentUser, credential)
    .then(usercred => {
      const user = usercred.user;
      console.log('Anonymous account successfully upgraded ', user);
    })
    .catch(error => console.log(error));
};

export {
  getAccounts,
  getRFID,
  addAccount,
  signupMode,
  setRFID,
  getStatusMessage,
  getStatusRFID,
  signIn,
  authStateChanged,
  signWithCredential,
  setStatusRFID
};

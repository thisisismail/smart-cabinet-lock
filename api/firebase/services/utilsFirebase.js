import { getDatabase, get, set, ref, child, remove } from 'firebase/database';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInAnonymously,
  onAuthStateChanged,
  EmailAuthProvider,
  linkWithCredential,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { app } from '../config/configFirebase';
import { InitialUserState } from '../../../context/user';

// fetch database info
const dataDb = getDatabase(app);
// get database path within firebase project
const dbRef = ref(dataDb);

const auth = getAuth();

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
    .then(() => setRFID(0))
    .catch(error => {
      console.log(error.message);
      console.log('Error adding data to realtime database');
    });
};

const deleteAccount = async data => {
  return remove(ref(dataDb, 'users/' + data))
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

const storePassword = userObj => {
  return set(ref(dataDb, 'passwords/' + userObj.rfid), {
    password: userObj.password
  });
};

const setRFID = val => {
  set(ref(dataDb, 'utils/readRFID'), val);
};

const getRFID = async () => {
  return get(child(dbRef, 'utils/readRFID'))
    .then(snapshot => {
      return snapshot.val();
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

const getStatusRFID = async () => {
  return get(child(dbRef, 'utils/statusRFID'))
    .then(snapshot => {
      return snapshot.val();
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

const setStatusRFID = val => {
  set(ref(dataDb, 'utils/statusRFID'), val);
};

const setStatusMessage = message => {
  set(ref(dataDb, 'utils/statusMessage'), message);
};

const getStatusMessage = async () => {
  return get(child(dbRef, 'utils/statusMessage'))
    .then(snapshot => {
      return snapshot.val();
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

const signupMode = val => {
  set(ref(dataDb, 'utils/modeSignup'), val).then(() => {
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
  set(ref(dataDb, 'utils/statusRegister'), val);
};

// // check if user is authenticated or not
// // it can be used for sign in and sign out feature
// const authStateChanged = async resetUser => {
//   return onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log('User is authenticated');
//       return user;
//       // ...
//     } else {
//       console.log('User is not authenticated');
//       resetUser();
//       return InitialUserState;
//     }
//   });
// };

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

const signInWithEmail = async (setUser, email, password) => {
  console.log(email, password);
  return await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log('Try to sign in with email and password');
      return { password: password };
    })
    .then(res => {
      onAuthStateChanged(auth, user => {
        if (user) {
          console.log('User authenticated');
          setUser({
            ...res,
            email: user.email,
            uid: user.uid,
            displayName: user.displayName
          });
          return user;
          // ...
        } else {
          console.log('User not authenticated');
          setUser(InitialUserState);
          return InitialUserState;
        }
      });
    })
    .catch(error => {
      console.log(error.code);
    });
};

const signUpWithEmail = async (email, password) => {
  console.log(email, password);
  await createUserWithEmailAndPassword(auth, email, password)
    .then(userRecord => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(
        'Successfully created new authenticated user:',
        userRecord.uid
      );
    })
    .catch(error => {
      console.log('Error creating new authenticated user:', error.message);
    });
};

const signUp = userObj => {
  // const currentPassword = user.password;
  return signUpWithEmail(userObj.email, userObj.password)
    .then(() => {
      storePassword(userObj);
    })
    .then(() => {
      delete userObj.password;
    })
    .then(() => addAccount(userObj))
    .catch(error => {
      console.log(error.message);
      console.log('Failed to create new user');
    });
};

const updateUser = userObj => {
  updateProfile(auth.currentUser, {
    displayName: userObj.name
  }).then(() => console.log('Display name updated'));
};

export {
  getAccounts,
  getRFID,
  addAccount,
  deleteAccount,
  signupMode,
  setRFID,
  getStatusMessage,
  getStatusRFID,
  signIn,
  // authStateChanged,
  signWithCredential,
  setStatusRFID,
  signInWithEmail,
  signUpWithEmail,
  signUp,
  updateUser
};

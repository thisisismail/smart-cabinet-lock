import { getDatabase, get, set, ref, child, remove } from 'firebase/database';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
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

// =================== Accounts Actions ============================

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
  return set(ref(dataDb, 'users/' + `${userObj.rfid}`), userObj)
    .then(() => setStatusRegister(1))
    .then(() => setStatusRFID(0))
    .then(() => setRFID(0))
    .catch(error => {
      console.log(error.message);
      console.log('Error adding data to realtime database');
    });
};

const deleteAccount = async uid => {
  return remove(ref(dataDb, 'users/' + uid))
    .then(() => remove(ref(dataDb, 'passwords/' + uid)))
    .catch(err => console.log(err));
};

const updateAccount = (userObj, updateRFID) => {
  if (updateRFID) {
    return addNewUser(userObj)
      .then(() => deleteAccount(userObj.rfid))
      .then(() => remove(ref(dataDb, 'passwords/' + userObj.rfid)))
      .then(() => {
        console.log('Data updated and RFID updated');
      });
  }

  return addNewUser(userObj).then(() => console.log('Data updated'));
};

// =================== Password Actions ============================

const storePassword = userObj => {
  return set(ref(dataDb, 'passwords/' + userObj.rfid), {
    password: userObj.password
  });
};

// =================== Utils Actions ============================

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

const setStatusRegister = val => {
  set(ref(dataDb, 'utils/statusRegister'), val);
};

// =================== AuthStateChangeProvider ===============================
// check if user is authenticated or not
// it can be used for sign in and sign out feature
const authStateChanged = async setUser => {
  return await onAuthStateChanged(auth, user => {
    if (user) {
      console.log('User is authenticated');
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        accessToken: user.accessToken
      });
      // console.log(user);
      console.log('sendUserVerification');
      return user;
      // ...
    } else {
      console.log('User is not authenticated');
      setUser();
      return InitialUserState;
    }
  });
};

// =================== Sign In & Sign Out Actions Admin ============================

const signInWithEmail = async (email, password) => {
  // console.log(email, password);
  return await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log('Try to sign in with email and password');
    })
    .catch(error => {
      return error.code;
    });
};

const signUpWithEmail = async (email, password, name) => {
  // console.log(email, password);
  return await createUserWithEmailAndPassword(auth, email, password)
    .then(userRecord => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(
        'Successfully created new authenticated user:',
        userRecord.user.uid
      );
      console.log(userRecord);
      return userRecord.user;
    })
    .then(() => updateUser(name))
    .then(() => signOut())
    .catch(error => {
      return error.code;
    });
};

const setRegisterAdminMode = val => {
  set(ref(dataDb, 'utilsRegisterAdmin/mode'), val);
};

const getRegisterAdminMode = async () => {
  return await get(child(dbRef, 'utilsRegisterAdmin/mode')).then(res => {
    return res;
  });
};

const setRegisterAdminStatus = val => {
  set(ref(dataDb, 'utilsRegisterAdmin/status'), val);
};

const getRegisterAdminStatus = async () => {
  return await get(child(dbRef, 'utilsRegisterAdmin/status')).then(res => {
    return res;
  });
};

const addNewUser = newUser => {
  return storePassword(newUser)
    .then(() => {
      delete newUser.password;
    })
    .then(() => addAccount(newUser))
    .catch(error => {
      console.log(error.message);
      console.log('Failed to create new user');
    });
};

const signOut = async () => {
  return await auth.signOut().then(() => {
    console.log('user signed out');
  });
};

const updateUser = name => {
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => console.log('Display name updated'));
};

// =================== Check User Existance ============================
const isEmailExist = async email => {
  console.log(email);
  return getAccounts().then(res => {
    for (var key in res) {
      if (res[key].email === email) {
        return true;
      }
    }
    return false;
  });
};

export {
  getAccounts,
  addAccount,
  updateAccount,
  authStateChanged,
  signupMode,
  getRFID,
  setRFID,
  getStatusRFID,
  setStatusRFID,
  getStatusMessage,
  signInWithEmail,
  signUpWithEmail,
  addNewUser,
  updateUser,
  signOut,
  isEmailExist,
  deleteAccount,
  setRegisterAdminStatus,
  setRegisterAdminMode,
  getRegisterAdminStatus,
  getRegisterAdminMode
  // getPassword
};

// const signUp = (currentUser, newUser) => {
//   const currentPassword = currentUser.password;
//   console.log('Current password:', currentPassword);

//   return signUpWithEmail(newUser.email, newUser.password)
//     .then(() => {
//       storePassword(newUser);
//     })
//     .then(() => {
//       delete newUser.password;
//     })
//     .then(() => addAccount(newUser))
//     .catch(error => {
//       console.log(error.message);
//       console.log('Failed to create new user');
//     });
// };

// ======================= FUNCTION NOTES ============================

// const signIn = () => {
//   const auth = getAuth();
//   signInAnonymously(auth)
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//       // ...
//     });
// };

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

// // Sign Up new Anonymous Account with email address
// // This function works if and only if the user anonymous accounts(UID) has already generated
// // in the previous step signIn (to get the new UID)
// const signWithCredential = () => {
//   const email = 'sriwedariYou@gmail.com';
//   const password = 'DoYouYesIDo!';
//   const credential = EmailAuthProvider.credential(email, password);
//   const auth = getAuth();
//   linkWithCredential(auth.currentUser, credential)
//     .then(usercred => {
//       const user = usercred.user;
//       console.log('Anonymous account successfully upgraded ', user);
//     })
//     .catch(error => console.log(error));
// };

// =================== Dependencies Utils ============================

// signInAnonymously,
// EmailAuthProvider,
// linkWithCredential,

// signIn,
// authStateChanged,
// signWithCredential,

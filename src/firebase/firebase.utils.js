import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
  apiKey: "AIzaSyAKReiEEePgeWt2NYAGvV6zg-iyk2jm8OY",
  authDomain: "charlies-clothing.firebaseapp.com",
  databaseURL: "https://charlies-clothing.firebaseio.com",
  projectId: "charlies-clothing",
  storageBucket: "charlies-clothing.appspot.com",
  messagingSenderId: "99519636328",
  appId: "1:99519636328:web:1179b90e0e3a1c8c16ecdd",
  measurementId: "G-MQ82VG71BZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

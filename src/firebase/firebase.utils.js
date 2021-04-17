import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import config from './config'

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      try {
         await userRef.set({
            displayName,
            email,
         });
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }

   return userRef;
};

export const testingGet = async (docId) => {

   docId = '5G5Kin0FX4ZYHmgBrNu8'

   if (!auth.currentUser) return;

   const userRef = firestore.doc(`users/${auth.currentUser.uid}`);

   const userApp = userRef.collection('appointments').doc(docId)

   const apps = await userApp.get()

   console.log(apps.data())

   // const test = await userRef.get()
   // console.log(test.data())
}

export const testingSet = async () => {

   if (!auth.currentUser) return;

   const userRef = firestore.doc(`users/${auth.currentUser.uid}`);

   await userRef.update({ dob: '13-1999' })

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import config from './config'

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`doctors/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      try {
         await userRef.set({
            displayName,
            email,
            ...additionalData
         });
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }

   return userRef;
};

export const getAll = async () => {

   if (!auth.currentUser) return;

   const userRef = firestore.doc(`doctors/${auth.currentUser.uid}`);

   const userApp = userRef.collection('appointments')

   // const query = userApp.where('name', '==', 'Vlad')

   // const apps = await query.get()

   const apps = await userApp.get()

   const appList = []
   apps.forEach(app => {
      console.log(app.id, '=>', app.data())
      appList.push({ ...app.data(), id: app.id })
   })

   return appList
}

export const getBy = async (type, value, sort) => {

   if (!auth.currentUser) return;

   const userRef = firestore.doc(`doctors/${auth.currentUser.uid}`);

   const userApp = userRef.collection('appointments')

   let query

   if (type == 'all') {
      query = userApp
   } else if (type == 'name' || type == 'date') {
      query = userApp.where(type, '==', value)
   } else {
      query = userApp.where(type, 'array-contains', value)
   }

   if (sort) {
      query = query.orderBy(sort)
   }

   const apps = await query.get()

   // const apps = await userApp.get()

   const appList = []
   apps.forEach(app => {
      console.log(app.id, '=>', app.data())
      appList.push({ ...app.data(), id: app.id })
   })

   return appList
}

export const testingSet = async (data) => {

   if (!auth.currentUser) return;

   const userRef = firestore.doc(`doctors/${auth.currentUser.uid}`).collection('appointments').doc()

   await userRef.set({ ...data })

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

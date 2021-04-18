import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { setUser } from './redux/user/user.actions';

import App from './App';

// copied code, starts checking if user is logged in and then returns the user object
const userSubscription = (WrappedComponent) => ({ setUser, ...otherProps }) => {
   useEffect(() => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
         if (userAuth) {
            const userRef = createUserProfileDocument(userAuth);

            (await userRef).onSnapshot(snapShot => {
               setUser({
                  id: snapShot.id,
                  ...snapShot.data()
               })
            })
         } else {
            setUser(userAuth)
         }
      })

      return () => {
         unsubscribeFromAuth();
      };
   }, [setUser]);

   return <WrappedComponent {...otherProps} />
}

const mapStateToProps = state => ({
   currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
   setUser: user => dispatch(setUser(user))
})

const AppContainer = compose(
   connect(mapStateToProps, mapDispatchToProps),
   userSubscription
)(App);

export default AppContainer;
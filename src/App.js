import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

// import './App.css';

import HomePage from './pages/homepage/homepage.component';
import AddAppointment from './pages/add-report/add-report.component';
import ReportList from './pages/report-list/report-list.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner'

const App = ({ currentUser }) => {

   return (
      <div>
         <Header />
         <Switch>
            <Route
               exact
               path='/'
               render={() =>
                  currentUser ? (
                     <HomePage />
                  ) : (
                     <Redirect to='/signin' />
                  )
               }
            />
            <Route
               exact
               path='/signin'
               render={() =>
                  currentUser ? (
                     <Redirect to='/' />
                  ) : (
                     <SignInAndSignUpPage />
                  )
               }
            />

            <Route
               exact
               path='/appointment'
               render={() =>
                  currentUser ? (
                     <AddAppointment />
                  ) : (
                     <Redirect to='/' />
                  )
               }
            />

            <Route
               exact
               path='/list'
               render={() =>
                  currentUser ? (
                     <ReportList />
                  ) : (
                     <Redirect to='/' />
                  )
               }
            />
         </Switch>
      </div>
   );
}

const mapStateToProps = state => ({
   isLoading: !state.user.wasUserChecked
})

const Test = compose(connect(mapStateToProps), Spinner)(App)

export default Test;

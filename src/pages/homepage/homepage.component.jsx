import React from 'react';
import './homepage.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component'
import { withRouter } from 'react-router-dom';

import { testingGet, testingSet } from '../../firebase/firebase.utils'

const HomePage = ({ history }) => {

   const handleClick = () => {
      // testingGet()
      history.push('/appointment')
   }

   const handleClick2 = () => {
      // testingSet()
      history.push('/list')
   }

   return (
      <div className='homepage'>
         <h1>myDoctor</h1>
         <div className='menu-buttons'>
            <CustomButton onClick={handleClick}>Add report</CustomButton>
            <CustomButton onClick={handleClick2}>Reports list</CustomButton>
         </div>
      </div>
   )
}


export default withRouter(HomePage);

import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component'

import './homepage.styles.scss';

import { testingGet, testingSet } from '../../firebase/firebase.utils'

const HomePage = () => {

   const handleClick = () => {
      testingGet()
   }

   const handleClick2 = () => {
      testingSet()
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


export default HomePage;

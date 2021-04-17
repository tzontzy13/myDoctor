import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component'

import './homepage.styles.scss';

const HomePage = () => (
   <div className='homepage'>
      <h1>myDoctor</h1>
      <div className='menu-buttons'>
         <CustomButton>Add report</CustomButton>
         <CustomButton>Reports list</CustomButton>
      </div>
   </div>
);

export default HomePage;

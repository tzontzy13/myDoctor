// copied code from https://github.com/ZhangMYihua/lesson-12

import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
   <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
   >
      {children}
   </button>
);

export default CustomButton;

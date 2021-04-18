// copied code from https://github.com/ZhangMYihua/lesson-12

import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles.jsx'

const WithSpinner = WrappedComponent => {
   const Spinner = ({ isLoading, ...otherProps }) => {
      return isLoading ? (
         <SpinnerOverlay>
            <SpinnerContainer />
         </SpinnerOverlay>
      ) : (
         <WrappedComponent {...otherProps} />
      )
   }

   return Spinner
}

export default WithSpinner
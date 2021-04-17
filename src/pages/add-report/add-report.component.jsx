import React from 'react'

import './add-report.styles.scss'

const AddAppointment = () => {

   return (
      <div className='add-report'>
         <div>date and time</div>
         <div className='patient-info'>
            <div>name</div>
            <div>addr</div>
            <div>dob</div>
            <div>phone</div>
         </div>
         <div className='report'>
            <div>symptoms</div>
            <div>medication</div>
         </div>
      </div>
   )
}

export default AddAppointment
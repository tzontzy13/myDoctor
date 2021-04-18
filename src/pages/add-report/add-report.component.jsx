import React, { useState } from 'react'
import './add-report.styles.scss'

import "react-datetime/css/react-datetime.css";

import FormInput from '../../components/form-input/form-input.component'
import CustomBtn from '../../components/custom-button/custom-button.component'

import { testingSet } from '../../firebase/firebase.utils'

const AddAppointment = () => {

   const [userCredentials, setUserCredentials] = useState({ name: '', phone: '', dob: '', addr: '', symptoms: '', recommendation: '', date: '' })

   const { name, phone, dob, addr, symptoms, recommendation, date } = userCredentials

   const handleSubmit = event => {
      event.preventDefault()
      // setUserCredentials({ ...userCredentials, symptoms: test })
      testingSet({ ...userCredentials, symptoms: userCredentials.symptoms.split(","), recommendation: userCredentials.recommendation.split(",") })
      console.log({ ...userCredentials, symptoms: userCredentials.symptoms.split(","), recommendation: userCredentials.recommendation.split(",") })
   }

   const handleChange = event => {
      const { value, name } = event.target
      // console.log(typeof name)

      setUserCredentials({ ...userCredentials, [name]: value })
   }


   return (
      <div className='add-appointment'>
         <form className='appointment-form' onSubmit={handleSubmit}>

            <div className='patient-info'>
               <label>
                  Appointment date:
                  <FormInput
                     name='date'
                     type='date'
                     handleChange={handleChange}
                     value={date}
                     // required
                     id='date'
                  />
               </label>
               <FormInput
                  name='name'
                  type='string'
                  handleChange={handleChange}
                  value={name}
                  label='name'
               // required
               />
               <FormInput
                  name='phone'
                  type='string'
                  handleChange={handleChange}
                  value={phone}
                  label='phone'
               // required
               />
               <label>
                  Patient DOB:
               <FormInput
                     name='dob'
                     type='date'
                     handleChange={handleChange}
                     value={dob}
                  // required
                  />
               </label>
               <FormInput
                  name='addr'
                  type='string'
                  handleChange={handleChange}
                  value={addr}
                  label='addr'
               // required
               />

            </div>
            <div className='report-details'>
               <textarea
                  name='symptoms'
                  onChange={handleChange}
                  value={symptoms}
                  required
                  cols={70}
                  rows={10}
                  placeholder='symptoms'
               />

               <textarea
                  name='recommendation'
                  onChange={handleChange}
                  value={recommendation}
                  required
                  cols={70}
                  rows={10}
                  placeholder='recommendation'
               />
               <CustomBtn type='submit'>save</CustomBtn>
            </div>

         </form>
      </div>
   )
}

export default AddAppointment


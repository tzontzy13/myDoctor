import React from 'react'

const ReportDetails = ({ props }) => {

   const { addr, date, dob, name, phone, recommendation, symptoms } = props

   return (
      <div className='report-details'>
         <div>Patient info:</div>
         <div>Name: {name}</div>
         <div>DOB: {dob}</div>
         <div>Phone: {phone}</div>
         <div>Address: {addr}</div>

         <div>Consultation report:</div>
         <div>Date: {date}</div>
         <div>recommendation: {recommendation}</div>
         <div>symptoms: {symptoms}</div>
      </div>
   )
}

export default ReportDetails
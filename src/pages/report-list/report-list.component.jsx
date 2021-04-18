import React from 'react'
import './report-list.styles.scss'

import { getBy } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { setApps } from '../../redux/appointments/appointments.actions'

import CustomBtn from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'

import ReportDetails from '../../components/report-details/report-details.component'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
   },
}));

const ReportList = ({ setApps, appointments }) => {

   const classes = useStyles()
   const [search, setSearch] = React.useState('');
   const [value, setValue] = React.useState('');
   const [sort, setSort] = React.useState('');

   const handleSearch = (event) => {
      setSearch(event.target.value);
   };

   const handleInput = event => {
      setValue(event.target.value)
   }

   const handleSort = event => {
      setSort(event.target.value)
   }

   const handleSubmit = () => {
      // console.log(search, value, sort)
      if (!search) return
      getBy(search, value, sort).then(res => {
         console.log(res)
         setApps(res)
      })
   }

   return (
      <div className='report-list'>
         <div>Search all your appointments:</div>

         <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Search</InputLabel>
            <Select
               labelId="demo-simple-select-helper-label"
               id="demo-simple-select-helper"
               value={search}
               onChange={handleSearch}
            >
               <MenuItem value=''>
                  <em>None</em>
               </MenuItem>
               <MenuItem value='all'>All</MenuItem>
               <MenuItem value='name'>By name</MenuItem>
               <MenuItem value='date'>By date</MenuItem>
               <MenuItem value='symptoms'>By symptoms</MenuItem>
               <MenuItem value='recommendation'>By recommendation</MenuItem>
            </Select>
            <FormHelperText>Select one</FormHelperText>
         </FormControl>

         <FormInput
            name='value'
            type='string'
            handleChange={handleInput}
            value={value}
            label='value'
            disabled={(search == '' || search == 'all') ? true : false}
         />

         <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
            <Select
               labelId="demo-simple-select-helper-label"
               id="demo-simple-select-helper"
               value={sort}
               onChange={handleSort}
            >
               <MenuItem value="">
                  <em>None</em>
               </MenuItem>
               <MenuItem value='name'>By name</MenuItem>
               <MenuItem value='date'>By date</MenuItem>
            </Select>
            <FormHelperText>Select one</FormHelperText>
         </FormControl>

         <CustomBtn onClick={handleSubmit}>Search</CustomBtn>

         <div className='test-results'>
            {
               appointments.length > 0
                  ?
                  appointments.map(app => {
                     return <ReportDetails key={app.id} props={app} />
                  })
                  :
                  <p>none</p>
            }
         </div>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   setApps: (apps) => dispatch(setApps(apps))
})

const mapStateToProps = (state) => ({
   appointments: state.apps.appointments
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportList)
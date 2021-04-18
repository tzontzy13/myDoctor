import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
   root: {
      minWidth: 275,
   },
   bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
   },
   title: {
      fontSize: 14,
   },
   pos: {
      marginBottom: 12,
   },
});

const ReportDetails = ({ props }) => {

   const classes = useStyles();

   const { addr, date, dob, name, phone, recommendation, symptoms } = props

   return (
      <div className='report-details'>
         {/* <div>Patient info:</div>
         <div>Name: {name}</div>
         <div>DOB: {dob}</div>
         <div>Phone: {phone}</div>
         <div>Address: {addr}</div>

         <div>Consultation report:</div>
         <div>Date: {date}</div>
         <div>recommendation: {recommendation}</div>
         <div>symptoms: {symptoms}</div> */}
         <Card className={classes.root} variant="outlined">
            <CardContent>
               <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Patient info:
        </Typography>
               <Typography variant="h5" component="h2">
                  {name} - {date.slice(0, 10)}
               </Typography>
               <Typography className={classes.pos} color="textSecondary">
                  DOB: {dob}
                  <br />
                  Phone: {phone}
                  <br />
                  Address: {addr}
               </Typography>
               <Typography variant="body2" component="p">
                  Symptoms: {symptoms}
                  <br />
                  Recommendations: {recommendation}
               </Typography>
            </CardContent>
            {/* <CardActions>
               <Button size="small">Learn More</Button>
            </CardActions> */}
         </Card>
      </div>
   )
}

export default ReportDetails
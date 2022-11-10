import { Grid, TextField } from '@material-ui/core';
import Container from '@mui/material/Container';
import React, { useState } from 'react'
import { IStudent } from './Student.type';
import { Box, Typography } from '@material-ui/core';
// import "./Home.styles.css"

type Props = {
  data: IStudent;
  onUpdateClickHnd: (data: IStudent) => void;
  onBackButtonhandler : () => void
  studentValues : IStudent [];
  setStudentValues: (data : IStudent []) => void;
 
};

const EditStudent = (props: Props) => {
  
  const { data,onBackButtonhandler,studentValues,setStudentValues,onUpdateClickHnd} = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };
  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    console.log("-----------------",data.id)
    const updatedData: IStudent = {
    id : data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      // phone:"",
    };
   
    onUpdateClickHnd(updatedData);
    onBackButtonhandler();
 
  };
  return (
    <>
    <Container >
    <Box  sx={{ p: 2, border: '1px solid grey' }} width={600} height={500} >
   
          <Typography >
            Update the Details
             </Typography>
             
          <form onSubmit={onSubmitBtnClickHnd}>   
          <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                fullWidth
                margin="dense"
                value={firstName}
                onChange={onFirstNameChangeHnd}
              />
             
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
                margin="dense"
                value={lastName}
                onChange={onLastNameChangeHnd}
              
              />
             
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="dense"
                value={email}
                onChange={onEmailChangeHnd }
                
              />
            </Grid>
             <div>       
               <input type="button" value="Back" onClick={onBackButtonhandler} />
               <input type="submit" value="Update Student" style={{margin:"20px"}} />
             </div>
        </Grid>
        </form>
    </Box>
        
    </Container>
    </>
  );
}

export default EditStudent



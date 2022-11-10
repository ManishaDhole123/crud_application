import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { IStudent, PageEnum } from './Student.type';
import { Container } from '@mui/material';
import { useFormik } from 'formik';
import {schemaValidation } from './Validationschema';
import StudentList from './StudentList';
// import "./Home.styles.css"


let initialValues : IStudent = {
  id:0,
  firstName:'',
  lastName:'',
  email:'',
  // phone:''
}

type Props = {
  onBackButtonhandler : () => void
  studentValues : IStudent [];
  setStudentValues: (data : IStudent []) => void;
  
}
const AddStudent = (props:Props) => {
  //  const [studentValues, setStudentValues] = useState([] as IStudent[]);

   const [addStudent, setAddStudent] = useState(PageEnum.list)

  const {studentValues ,setStudentValues, onBackButtonhandler } = props;

  const handler = () => {
    setAddStudent(PageEnum.add)
}
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues, 
    validationSchema: schemaValidation ,
    onSubmit: (values, action) => {
      values.id = studentValues.length + 1;
      setStudentValues([...studentValues,values])
      // onSubmitClickHnd(values);
      console.log(
        "valuesonee",
        studentValues
      );
      action.resetForm();
    },
  });
console.log(
  "errors",
  errors
);


  // const onSubmitBtnClickHnd = (e: any) => {
  //   e.preventDefault();
  //   const data: IStudent = {
  //     // id: 1,
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //   };
  //   // onSubmitClickHnd(data);
  //   onBackButtonhandler();
  // };


  return (
    <>
    <Container >
    <Box  sx={{ p: 2, border: '1px solid grey' }} width={600} height={500} >
     
          <Typography >
            Student Registration Form
          </Typography>
          <form onSubmit={handleSubmit}>   
          <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                fullWidth
                margin="dense"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                {errors.firstName && touched.firstName ? (
                      <p className="form-error">{errors.firstName}</p>
                    ) : null}
             
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
                margin="dense"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName ? (
                      <p className="form-error">{errors.lastName}</p>
                    ) : null}
             
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="dense"
             
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
            </Grid>
          
             <div>       
               <input type="button" value="Back"  onClick={onBackButtonhandler}/>
               <input type="submit" value="Add Student"  style={{margin:"20px"}}  />
               {/* <Button type="submit">Submit</Button> */}
             </div>
          
        </Grid>
        </form>
{/*        
        <StudentList studentValues={studentValues} tableName={" Student List"} /> */}
       </Box>
        
    </Container>
    </>
  );
}

export default AddStudent
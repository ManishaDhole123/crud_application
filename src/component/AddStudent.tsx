import React, { Dispatch, useEffect, useState } from 'react'
import { Box, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { IStudent, PageEnum } from './Student.type';
import { Container } from '@mui/material';
import { useFormik } from 'formik';
import { schemaValidation } from './Validationschema';
import LocalStorage from '../LocalStorage';
import { addStudent, updateStudent } from '../redux/actionCreater';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import "./Home.styles.css"
import * as Styled from './StyledComponent';



let initialValues: IStudent = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  phone:''
}

// type Props = {
//   onBackButtonhandler: () => void
//   studentValues: IStudent[];
//   setStudentValues: (data: IStudent[]) => void;

// }


const AddStudent = () => {
  //  const [studentValues, setStudentValues] = useState([] as IStudent[]);

  const { id }: any = useParams();
  //const history = useHistory();
  const navigate = useNavigate();
  const LocalStorage1 = new LocalStorage();
  const values = LocalStorage1.getData('store').userStates;
  const dispatch: Dispatch<any> = useDispatch();

  let initialState: IStudent = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone:''

  }

  if ((parseInt(id) !== 0 || id !== null) && values && values.length) {
    let index = values.findIndex((i: any) => i.id === parseInt(id));
    if (index !== -1) {
      initialState = {
        id: id,
        firstName: values[index].firstName,
        lastName: values[index].lastName,
        email: values[index].email,
        phone: values[index].phone,

      }

    }
  }

  //  const [addStudent, setAddStudent] = useState(PageEnum.list)

  // const { studentValues, setStudentValues, onBackButtonhandler } = props;

  //   const handler = () => {
  //     setAddStudent(PageEnum.add)
  // }
  const userForm = useFormik({

    initialValues: initialState,
    validationSchema: schemaValidation,

    onSubmit: values1 => {
      if (id === undefined)
        dispatch(addStudent(values1))
      else
        dispatch(updateStudent(values1))
       navigate('/userList');
      // onBackButtonhandler();

    },

  });
  console.log(values, "ppp");



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
        <Box sx={{ p: 2, border: '1px solid grey' }} width={600} height={500} >
          

          <Styled.textOne >
            Student Registration Form
          </Styled.textOne  >
       
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  margin="dense"
                  onChange={userForm.handleChange}
                  value={userForm.values.firstName}
                />
                <Typography variant="inherit" color="textSecondary">
                  {userForm.errors.firstName ? <div>{userForm.errors.firstName}</div> : null}
                </Typography>

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  margin="dense"
                  onChange={userForm.handleChange}
                  value={userForm.values.lastName}
                />
                <Typography variant="inherit" color="textSecondary">
                  {userForm.errors.lastName ? <div>{userForm.errors.lastName}</div> : null}
                </Typography>

              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Contact"
                type="number"
                fullWidth
                margin="dense"
                onChange={userForm.handleChange}
                value={userForm.values.phone}
              />
              <Typography variant="inherit" color="textSecondary">
              {userForm.errors.phone ? <div>{userForm.errors.phone}</div> : null}
              </Typography>
            </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  margin="dense"
                  onChange={userForm.handleChange}
                  value={userForm.values.email}
                />
                <Typography variant="inherit" color="textSecondary">
                  {userForm.errors.email ? <div>{userForm.errors.email}</div> : null}
                </Typography>

              </Grid>

              <div>
                {/* <input type="button" value="Back" onClick={onBackButtonhandler} /> */}
                {/* <input type="submit" value="Add Student"  style={{margin:"20px"}}  /> */}
                <Styled.buttonStyle variant="contained"  onClick={() => userForm.handleSubmit()}>
                  {userForm.values.id ? 'Update' : 'Add one User'}
                </Styled.buttonStyle >
              </div>

            </Grid>
       
          {/*        
        <StudentList studentValues={studentValues} tableName={" Student List"} /> */}
        </Box>

      </Container>
    </>
  );
}

export default AddStudent
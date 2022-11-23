
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IStudent, userState } from './Student.type';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import ViewStudent from './ViewStudent';
import { Dispatch, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { deleteStudent } from '../redux/actionCreater';
// import "./Home.styles.css"
import * as Styled from './StyledComponent';


const mapState = (state: userState) => ({
    userStates: state.userStates
}
)

// type Props = {

//     // list: IStudent[]
//     onDeleteClickHandler: (data: IStudent) => void;
//     onEdit: (data: IStudent) => void;
//     studentValues : IStudent [];
//     tableName : string ;

// }

const StudentList = (props: any) => {
    console.log(props, "prop")
    const navigate = useNavigate();
    // const {studentValues ,onDeleteClickHandler,onEdit,tableName} = props;
    // const [showModal, setShowModal] = useState(false);
    // const [dataToShow, setDataToShow] = useState(null as IStudent | null);

    // const viewStudentData = (data: IStudent) => {
    //     setDataToShow(data);
    //     setShowModal(true);
    //   };


    const dispatch: Dispatch<any> = useDispatch();
    const [count, setCount] = useState(0);

    const values: IStudent[] = props.userStates;

    //   const onCloseModal = () => setShowModal(false);

    const handleEditSubmit = (id: string) => {
        navigate(`/userForm/${id}`);
    };

    const handleDeleteSubmit = (user: IStudent) => {
        dispatch(deleteStudent(user))
        setCount(prevCount => prevCount + 1)
    };

    return (
        <>
            <Container >
                <Box sx={{ p: 2, border: '1px solid grey' }} width={100} height={500} >
                    <Styled.textOne >
                        Student List
                    </Styled.textOne>
                    <br />
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                            <TableContainer  >
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {/* <TableCell>Student Id</TableCell> */}
                                            <Styled.tableStyle>First Name</Styled.tableStyle>
                                            <Styled.tableStyle>Last Name</Styled.tableStyle>
                                            <Styled.tableStyle>Contact</Styled.tableStyle>
                                            <Styled.tableStyle>Email</Styled.tableStyle>
                                            {/* <TableCell>Phone Number</TableCell> */}
                                            <Styled.tableStyle>Action</Styled.tableStyle>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {values && values.map((row: any, i: number) => (
                                            <TableRow key={row.firstName}>
                                                {/* <TableCell>{student.id}</TableCell> */}
                                                <TableCell > {row.firstName}</TableCell>
                                                <TableCell >{row.lastName}</TableCell>
                                                <TableCell >{row.phone}</TableCell>
                                                <TableCell >{row.email}</TableCell>
                                                {/* <TableCell >{student.phone}</TableCell> */}
                                                <TableCell >
                                                    {/* <IconButton size="small" onClick={() => handleEditSubmit(row.id)}>
                                    <VisibilityIcon />
                                </IconButton> */}

                                                    <IconButton size="small" onClick={() => handleEditSubmit(row.id)}>
                                                        <EditIcon />

                                                    </IconButton>
                                                    <IconButton size="small" onClick={() => handleDeleteSubmit(row)}>
                                                        <DeleteIcon />
                                                    </IconButton>

                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {/* 
        {showModal && dataToShow !== null && (
        <ViewStudent  onClose={onCloseModal} data={dataToShow} />
      )} */}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>

    );
}
export default  connect(mapState) (StudentList) ;

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IStudent } from './Student.type';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography } from '@material-ui/core';
import ViewStudent from './ViewStudent';
import { useState } from 'react';
// import "./Home.styles.css"



type Props = {

    // list: IStudent[]
    onDeleteClickHandler: (data: IStudent) => void;
    onEdit: (data: IStudent) => void;
    studentValues : IStudent [];
    tableName : string ;

}

const StudentList = (props : Props) => {
    console.log(props ,"prop")
    const {studentValues ,onDeleteClickHandler,onEdit,tableName} = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as IStudent | null);

    const viewStudentData = (data: IStudent) => {
        setDataToShow(data);
        setShowModal(true);
      };
    
      const onCloseModal = () => setShowModal(false);

   

    return (
        <>
        <Typography variant="h6" >
                    {tableName}
                </Typography>
                <br/>
        <TableContainer className ="maincontainer  maincontainer2 container homecontainer homecontainer1 home-pageone home-pagetwo" >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {/* <TableCell>Student Id</TableCell> */}
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        {/* <TableCell>Phone Number</TableCell> */}
                        <TableCell>Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentValues .map((studentValues) => (
                        <TableRow key={studentValues.firstName}>
                            {/* <TableCell>{student.id}</TableCell> */}
                            <TableCell > {studentValues.firstName}</TableCell>
                            <TableCell >{studentValues.lastName}</TableCell>
                            <TableCell >{studentValues.email}</TableCell>
                            {/* <TableCell >{student.phone}</TableCell> */}
                            <TableCell >
                                <IconButton size="small" onClick={() => viewStudentData(studentValues)}>
                                    <VisibilityIcon />
                                </IconButton>

                                 <IconButton size="small" onClick={() => onEdit(studentValues)}>
                                    <EditIcon />
                                   
                                </IconButton> 
                                <IconButton size="small" onClick={() => onDeleteClickHandler(studentValues)}>
                                    <DeleteIcon />
                                </IconButton>  
                               
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        {showModal && dataToShow !== null && (
        <ViewStudent  onClose={onCloseModal} data={dataToShow} />
      )}
        </>
    );
}
export default StudentList
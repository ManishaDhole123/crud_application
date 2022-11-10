import React, { useEffect, useState } from 'react'
import { Toolbar, Typography, Button, Grid } from "@material-ui/core";
import "./Home.styles.css"
import { IStudent, PageEnum } from './Student.type';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
// // import useIsBigScreen from './useIsBigscreen';
// type Props = {
//     studentValues : IStudent [];
//     tableName : string ;
// }

const Home = () => {
    // const {studentValues , tableName} = props;
    const [studentValues, setStudentValues] = useState([] as IStudent[]);

    const [studentList, setStudentList] = useState([] as IStudent[]);
    const [addStudent, setAddStudent] = useState(PageEnum.list)
    const [dataToEdit, setDataToEdit] = useState({} as IStudent);

    const updateData = (data: IStudent) => {
        const filteredData = studentValues.filter((x) => x.id === data.id)[0];
        const indexOfRecord = studentValues.indexOf(filteredData);
        console.log(filteredData, indexOfRecord)
        const tempData = [...studentValues];
        tempData[indexOfRecord] = data;
        setStudentValues(tempData);
    };
    
    const handler = () => {
        setAddStudent(PageEnum.add)
    }
    // const addStudentData = (data: IStudent) => {
    //     setNewStudentList([...studentList, data])
    // };

    const showStudentListPage = () => {
        setAddStudent(PageEnum.list)
    }
    const editStudentdata = (data: IStudent) => {
        setAddStudent(PageEnum.edit);
        setDataToEdit(data);
    };

    const deleteStudent = (data: IStudent) => {
        // To Index from array i,e studentlist
        // Splice that
        // Update new record
        const indexToDelete = studentValues.indexOf(data);
        const tempList = [...studentValues];

        tempList.splice(indexToDelete, 1);
        setStudentValues(tempList);
    };

    return (

        <>

            <Grid container spacing={2} >
                <Grid item xs={12}  >
                    <article className='header'>
                        <Toolbar>
                            <Typography className='textheader'>
                                Student Information Collection Form
                            </Typography>
                        </Toolbar>
                    </article>

                </Grid>
                <Grid item xs={12}>
                    <section className='section-content'>
                        {addStudent === PageEnum.list && (
                            <>
                                <Button className="addbutton" variant="contained" onClick={handler}>Add Details</Button>
                                {/* <StudentList list={studentList}
                        studentValues = {studentValues}
                         onDeleteClickHnd={deleteStudent} 
                         onEdit={editStudentdata    }/> */}

                                <StudentList studentValues={studentValues} tableName={" Student List"}
                                    onDeleteClickHandler={deleteStudent}
                                    onEdit={editStudentdata} />


                            </>)}


                        {addStudent === PageEnum.add && (
                            <AddStudent
                                studentValues={studentValues}
                                setStudentValues={setStudentValues}
                                onBackButtonhandler={showStudentListPage}
                            // onSubmitClickHnd={ addStudentData}
                            />)}
                        {addStudent === PageEnum.edit && (
                            <EditStudent
                                data={dataToEdit}
                                setStudentValues={setStudentValues}
                                onBackButtonhandler={showStudentListPage}
                                onUpdateClickHnd={updateData}
                                studentValues={studentValues} />
                        )}

                    </section>
                </Grid>
            </Grid>


        </>

    )
}

export default Home
// import { Button, Toolbar, Typography } from '@material-ui/core'
// import React, { useState } from 'react'
// import { PageEnum } from './Student.type'

// const NavBar = () => {
//     const [addStudent, setAddStudent] = useState (PageEnum.list)
//     const handler = () =>{
//         setAddStudent(PageEnum.add) 
//     }
//   return (
//       <article className='header'>
//                 <Toolbar >
//                     <Typography className='textheader'>
//                         Student Information Collection Form
//                         <Button onClick={handler}>Add Details</Button> 
//                     </Typography>
//                 </Toolbar>
//                 </article> 
//   )
// }

// export default NavBar

import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Home.styles.css"
const NavBar = () => {


    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h6" >
                    Student Information Collection Form
                </Typography>
                <div  >
                    <Link to="/">
                        <Typography  className="navbarHome" color = "secondary" variant="h6" >
                            Home
                        </Typography>

                    </Link>
                    <Link to="/Addstudent">
                        <Typography className="navbarAdd" variant="h6" >
                            Add Student
                        </Typography>

                    </Link>
                    

                </div>
            </Toolbar>
        </AppBar>
    );
}
export default NavBar;
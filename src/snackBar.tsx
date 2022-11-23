import React, { Dispatch } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { useDispatch } from "react-redux";
import { deleteAction } from "./redux/actionCreater";

export default function WebSnackbar({ message ,openStatus }:any) {
  //console.log(openStatus);
  const dispatch : Dispatch<any> =useDispatch();
  setTimeout(()=>{
   
    dispatch(deleteAction());

  },10000)
  
  function handleClose(event:any, reason:string) {
    if (reason === "clickaway") {
      return;
    }
    openStatus =false;
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={openStatus}
        autoHideDuration={10000}
        onClose={() => handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        
        message={message}
        action={[
          <IconButton key="close" onClick={() => handleClose(Event, "timeout")}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
}



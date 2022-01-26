import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ModalBox = ({Ismodal,handleClose}) => {

  const handleClick = () => {
    // handleApi(getId)
    // console.log(' handle click');
    handleClose()
  }

  return (
    <div>
      <Dialog
        open={Ismodal}
         onClose={handleClose}
         backdrop="static"
        //  keyboard={false}
        disableEscapeKeyDown="true"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Sure!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClick} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalBox;

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ToxicityWarningModal = ({
  open,
  handleClose,
  postText,
  handlePostSubmit,
}) => {
  const handleSubmit = () => {
    handleClose();
    handlePostSubmit(postText);
  };
  console.log(postText);
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          zIndex: 1400,
          "& .MuiPaper-root": {
            borderRadius: 3,
            px: 1,
            pb: 1,
          },
        }}
      >
        <DialogTitle>{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Warning: Your post may be seen as harmful or offensive by some
            members of our community. Are you sure you want to proceed with
            posting?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Edit Post
          </Button>
          <Button onClick={handleSubmit} variant="outlined" color="error">
            Post anyway
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ToxicityWarningModal;

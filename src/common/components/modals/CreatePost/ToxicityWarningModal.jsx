import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Typography } from "@mui/material";
import { Blues } from "@/src/common/config/colors";

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
        <DialogTitle>{" Toxicity Detected"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ fontSize: { xs: 14, md: 16 } }}
          >
            <Typography
              component="span"
              sx={{
                color: "red",
                fontWeight: 600,
                fontSize: { xs: 14, md: 16 },
              }}
            >
              Warning:{" "}
            </Typography>
            Your post may be seen as harmful or offensive by some members of our
            community. Are you sure you want to proceed with posting?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: 2,
              height: { xs: 38, sm: "auto" },
              boxShadow: "none",
              bgcolor: "#4E97F5",
              textTransform: "none",
              "&:focus": {
                outline: "none",
              },
            }}
          >
            Edit Post
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="error"
            sx={{
              borderRadius: 2,
              height: { xs: 38, sm: "auto" },
              boxShadow: "none",
              textTransform: "none",
              "&:focus": {
                outline: "none",
              },
            }}
          >
            Post Anyway
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ToxicityWarningModal;

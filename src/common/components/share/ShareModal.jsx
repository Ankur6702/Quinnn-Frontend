import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { useMediaQuery, useTheme } from "@mui/material";

import ShareIcon from "./ShareIcon";
import CopyUrlField from "./CopyUrlField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShareModal = ({
  facebook,
  title,
  linkedin,
  twitter,
  instagram,
  copyLink,
  closeModal,
}) => {
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      maxWidth="sm"
      TransitionComponent={Transition}
      open
      onClose={closeModal}
      sx={{
        "& .MuiPaper-root": {
          minHeight: 206,
          minWidth: { sm: 400 },
          width: { xs: "100%", sm: "auto" },
          position: "fixed",
          margin: theme.spacing(0),
          bottom: "0%",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          [theme.breakpoints.up("sm")]: {
            borderRadius: 3,
            bottom: "5%",
          },
        },
      }}
    >
      <DialogTitle>
        <Typography
          align="center"
          pb={0}
          fontSize={{ xs: 24, md: 28 }}
          fontWeight={600}
        >
          {title}
        </Typography>
        <Typography align="center" color-="#888888" fontWeight={400}>
          Share it with your friends
        </Typography>
      </DialogTitle>
      <DialogContent>
        <ShareIcon
          linkedin={`https://www.linkedin.com/sharing/share-offsite/?url=${linkedin}`}
          twitter={`https://twitter.com/intent/tweet?url=${twitter}`}
          facebook={`https://www.facebook.com/sharer/sharer.php?u=${facebook}`}
          instagram={instagram}
          copyLink={copyLink}
        />
        {!isDownSm && <CopyUrlField copyLink={copyLink} />}
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;

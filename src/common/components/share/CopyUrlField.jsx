import React from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material";

import { COPY } from "../../utils/constants";
import useCopyToClipboard from "../custom-hooks/useCopyToClipboard";

const CopyUrlField = ({ copyLink }) => {
  const theme = useTheme();
  const [copiedText, onCopy] = useCopyToClipboard();

  const onClickCopy = () => {
    onCopy(copyLink);
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          id={copyLink}
          value={copyLink}
          onClick={onClickCopy}
          size="small"
          variant="outlined"
          InputProps={{
            readOnly: true,
            sx: {
              borderRadius: "10px",
              py: "10px",
              cursor: "pointer",
            },
            endAdornment: !!copiedText ? (
              <CheckIcon fontSize="small" />
            ) : (
              <Image src={COPY} alt="email" width={23} height={23} />
            ),
          }}
          sx={{
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(4),
            borderRadius: theme.spacing(9),
            minWidth: "fill-available",
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            "& .MuiInputBase-input": {
              color: theme.palette.text.secondary,
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default CopyUrlField;

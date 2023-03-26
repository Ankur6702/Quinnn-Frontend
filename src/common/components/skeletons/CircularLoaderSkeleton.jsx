import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const CircularLoaderSkeleton = ({ sx }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: `calc(100vh - 112px)`, md: `calc(100vh - 128px)` },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...(sx || {}),
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default CircularLoaderSkeleton;

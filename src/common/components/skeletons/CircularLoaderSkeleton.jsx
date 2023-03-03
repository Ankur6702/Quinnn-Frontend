import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const CircularLoaderSkeleton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default CircularLoaderSkeleton;

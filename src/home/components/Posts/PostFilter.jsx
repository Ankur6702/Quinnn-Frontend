import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FilterListIcon from "@mui/icons-material/FilterList";

import { neutral, Blues } from "@/src/common/config/colors";

const PostFilter = ({ sortPosts, sort }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <IconButton
          onClick={handleClick}
          sx={{ p: 1 }}
          aria-controls={open ? "filter" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <FilterListIcon />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="post-filter"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            width: 150,
            borderRadius: 1.5,
            filter: "drop-shadow(0px 2px 10px rgba(0,0,0,0.1))",
            mt: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => sortPosts("popular")}
          sx={{
            color: sort === "popular" ? Blues["A100"] : neutral["900"],
            "&:hover": {
              color: Blues["A100"],
            },
          }}
        >
          <ListItemIcon>
            <LocalFireDepartmentIcon fontSize="small" />
          </ListItemIcon>
          <Typography
            variant="h6"
            sx={{
              color: "inherit",
              fontWeight: 400,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            Popular
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => sortPosts("recent")}
          sx={{
            color: sort === "recent" ? Blues["A100"] : neutral["900"],
            "&:hover": {
              color: Blues["A100"],
            },
          }}
        >
          <ListItemIcon>
            <AccessTimeIcon fontSize="small" />
          </ListItemIcon>
          <Typography
            variant="h6"
            sx={{
              color: "inherit",
              fontWeight: 400,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            Recent
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default PostFilter;

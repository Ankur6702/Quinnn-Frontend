import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({
  handleSearch,
  placeholder = "Search",
  textFieldProps,
}) => {
  const searchRef = useRef(null);

  return (
    <TextField
      placeholder={placeholder}
      type="search"
      size="small"
      fullWidth
      variant="outlined"
      //   onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ fontSize: 20 }} />
          </InputAdornment>
        ),
      }}
      inputRef={searchRef}
      sx={{
        "& .Mui-focused": {
          top: 0,
          color: "#1976d2",
        },
        "& .MuiOutlinedInput-input": {
          color: "#000000",
        },
      }}
      {...(textFieldProps || {})}
    />
  );
};

export default SearchBar;

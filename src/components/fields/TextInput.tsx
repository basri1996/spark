import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import Search from "../../assets/icons/search.svg";

const SearchIcon = ({ width = 20, height = 20, color = "#6C63FF" }) => (
  <img
    src={Search}
    alt="search"
    width={width}
    height={height}
    style={{ color }}
  />
);

const TextInput = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
}: {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => {
  return (
    <TextField
      type={type}
      variant="outlined"
      value={value}
      onChange={onChange}
      fullWidth
      placeholder={placeholder}
      InputProps={{
        inputMode: "numeric",
        startAdornment: placeholder === "Search" && (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        inputProps: {
          step: "any",
          style: {
            MozAppearance: "textfield",
          },
        },
      }}
      sx={{
        "& input[type=number]": {
          MozAppearance: "textfield",
        },
        "& input[type=number]::-webkit-outer-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
        "& input[type=number]::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
        borderRadius: "12px",

        "& label": {},
      }}
    />
  );
};

export default TextInput;

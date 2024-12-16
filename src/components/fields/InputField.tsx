import React from "react";
import { Box, TextField } from "@mui/material";
import { TextInputStyles } from "./useStyles";
import gelLogo from "../../assets/icons/download.png";

const InputField = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  TextInputRef,
  label,
}: {
  type: string;
  value: string | number | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  TextInputRef?: any;
  label: string;
}) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      value={value}
      onChange={onChange}
      fullWidth
      inputRef={TextInputRef}
      defaultValue={value}
      placeholder={placeholder}
      slotProps={{
        input: {
          inputMode: "numeric",
          startAdornment: <Box component="img" src={gelLogo} width={"60px"} height={"35px"} sx={{marginLeft:"-20px" ,opacity:0.6}} />,
          inputProps: {
            step: "any",
            style: {
              MozAppearance: "textfield",
            },
          },
        },
      }}
      sx={TextInputStyles}
    />
  );
};

export default InputField;

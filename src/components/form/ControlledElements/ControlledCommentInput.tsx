import { Box, Button, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function ControlledCommentInput({ name, label }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          value={value}
          id="filled-multiline-flexible"
          onChange={onChange}
          multiline
          rows={4}
          label={label}
          fullWidth
          sx={{
            height: "100px",
            "& .MuiInputBase-root": {
              paddingTop: "30px",
            },
          }}
        />
      )}
    />
  );
}

export default ControlledCommentInput;

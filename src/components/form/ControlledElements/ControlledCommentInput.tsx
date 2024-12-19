import { TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function ControlledCommentInput({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          value={value}
          id="filled-multiline-flexible"
          onChange={onChange}
          multiline
          rows={4}
          label={label}
          fullWidth
          error={!!error}
          sx={{
            height: "100px",
            "& .MuiInputBase-root": {
              paddingTop: "30px",
            },
          }}
          helperText={
            <Typography
              sx={{
                color: "#FD7171",
                fontSize: "14px",
                paddingX: "3px",
              }}
            >
              {error?.message}
            </Typography>
          }
        />
      )}
    />
  );
}

export default ControlledCommentInput;

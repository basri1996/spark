import { TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { InputStyles } from "./useStyles";

interface Props {
  name: string;
  label: string;
  type: string;
  disabled?: boolean;
  shrink?: boolean;
  regex?: any;
  HandleInputChange?: any;
}

function ControlledInput({
  name,
  label,
  type,
  disabled = false,
  shrink = false,
  HandleInputChange,
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          disabled={disabled}
          type={type}
          id={name}
          slotProps={{
            inputLabel: {
              shrink: shrink || Boolean(value),
            },
          }}
          variant="outlined"
          value={value || ""}
          onChange={(e) => {
            HandleInputChange ? HandleInputChange(onChange, e) : onChange(e);
          }}
          label={label}
          fullWidth
          sx={InputStyles}
          error={!!error}
          helperText={
            <Typography
              sx={{
                color: "#FD7171",
                fontSize: "14px",
                paddingY: "3px",
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

export default ControlledInput;

import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { InputStyles } from "./useStyles";

interface Props {
  name: string;
  label: string;
  type: string;
  disabled?: boolean;
  shrink?: boolean;
}

function ControlledInput({
  name,
  label,
  type,
  disabled = false,
  shrink = false,
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
          onChange={onChange}
          label={label}
          fullWidth
          sx={InputStyles}
        />
      )}
    />
  );
}

export default ControlledInput;

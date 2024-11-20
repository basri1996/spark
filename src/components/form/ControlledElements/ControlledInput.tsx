import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

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

            "& .MuiFormHelperText-root": {
              lineHeight: "normal",
              top: "45px",
              fontSize: "11px",
            },
            "& .MuiInputBase-root": {
              height: "50px",
              width: "400px",
            },
            "& .MuiInputBase-input": {
              fontSize: {
                xs: "14px",
                sm: "12px",
              },
            },
          }}
        />
      )}
    />
  );
}

export default ControlledInput;

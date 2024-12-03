import { Controller, useFormContext } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";


interface Props {
    name: string;
    label: string;
  }

export default function ControlledDateInput({
    name,
    label,
  }: Props) {
  const { control } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <DatePicker
            label={label}
            value={value ? dayjs(value) : null}
            onChange={(newValue) => {
              const formattedValue = newValue
                ? dayjs(newValue).format("YYYY/MM/DD")
                : "";
              onChange(formattedValue); 
            }}
            format="DD/MM/YYYY"
            slotProps={{
              textField: {
                error: !!error,
                helperText: error ? error.message : null,
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface Props {
  label: string;
  onChange: any;
  value: any;
}

export default function DateInput({ label, onChange, value }: Props) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DatePicker
      sx={{width:"100%"}}
        label={label}
        value={value ? dayjs(value) : null}
        onChange={(newValue) => {
          const formattedValue = newValue
            ? dayjs(newValue).format("YYYY-MM-DD")
            : "";
          onChange(formattedValue);
        }}
        format="DD/MM/YYYY"
      />
    </LocalizationProvider>
  );
}

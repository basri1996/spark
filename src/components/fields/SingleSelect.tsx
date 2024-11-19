import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface Props {
  onChange: (event: SelectChangeEvent<string>) => void;
  value: string;
  options: any[];
  label: string;
  key?: string;
  content?: string;
}

function SingleSelect({
  onChange,
  value,
  options,
  label,
  key = "id",
  content = "name",
}: Props) {
  const [maxWidth, setMaxWidth] = useState(0);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef?.current?.offsetWidth &&
        setMaxWidth(inputRef?.current?.offsetWidth);
    }
  }, [inputRef.current]);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        inputRef={inputRef}
        onChange={onChange}
        sx={{
          width: "400px",
        }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: "200px",
              maxWidth: `${maxWidth}px`,
              marginTop: "8px",
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem value={option[key]}>{option[content]}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SingleSelect;
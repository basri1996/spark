import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface Props {
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  options: { name: string; productCode: string }[];
  label: string;
}

function SingleSelect({ onChange, value, options, label }: Props) {
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
        onChange={(e) => onChange(e.target.value)}
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
          <MenuItem value={option.productCode}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SingleSelect;

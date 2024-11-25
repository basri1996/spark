import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  options: any[];
  label: string;
  inputValueKey?: string;
  content?: string;
}

function ControlledSingleSelect({
  name,
  options,
  label,
  inputValueKey = "id",
  content = "name",
}: Props) {
  const [maxWidth, setMaxWidth] = useState(0);
  const inputRef = useRef<HTMLDivElement>(null);
  const { control } = useFormContext();

  useEffect(() => {
    if (inputRef.current) {
      inputRef?.current?.offsetWidth &&
        setMaxWidth(inputRef?.current?.offsetWidth);
    }
  }, [inputRef, setMaxWidth]);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
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
              <MenuItem
                key={option[inputValueKey]}
                value={option[inputValueKey]}
              >
                {option[content]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}

export default ControlledSingleSelect;

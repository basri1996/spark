import {
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
  } from "@mui/material";
  import { useEffect, useRef, useState } from "react";
  
  interface Props {
    onChange: any;
    value: string[];
    options: any[];
    label: string;
    inputValueKey?: string;
    content?: string;

  }
  
  function MultiSelect({
    onChange,
    value,
    options,
    label,
    inputValueKey = "id",
    content = "name",
  }: Props) {
    const [maxWidth, setMaxWidth] = useState(0);
    const inputRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (inputRef.current) {
        inputRef?.current?.offsetWidth &&
          setMaxWidth(inputRef?.current?.offsetWidth);
      }
    }, [setMaxWidth]);
  
    return (
        <FormControl fullWidth>
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={value}
          label={label}
          onChange={(e)=>onChange(e.target.value)}
          input={<OutlinedInput label={label} />}
          sx={{height:"50px"}}
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
          <MenuItem value={option[inputValueKey]}>{option[content]}</MenuItem>
        ))}
        </Select>
        </FormControl>
        
    );
  }
  
  export default MultiSelect;
  














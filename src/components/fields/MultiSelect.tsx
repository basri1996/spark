import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
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

  const transformRenderValue=(selected:any) =>{
    return selected.map((el:any)=>(
      options.find((item)=>(
        item[inputValueKey] === el
      )
    )[content])).join(", ")
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={value}
        onChange={(e) => onChange(e.target.value)}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => transformRenderValue(selected) }
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
          <MenuItem key={option[inputValueKey]} value={option[inputValueKey]}>
            <Checkbox checked={value.includes(option[inputValueKey])} />
            <ListItemText primary={option[content]} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultiSelect;

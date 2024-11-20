import { FormControlLabel } from "@mui/material";
import { ToggleButton } from "./useStyles";

interface Props {
  label: string;
  initialChecked?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean, id: string) => void;
  id: string;
  checked: boolean;
}

const Toggle = ({
  label,
  initialChecked,
  disabled,
  onChange,
  id,
  checked,
}: Props) => {
  return (
    <FormControlLabel
      control={
        <ToggleButton
          defaultChecked={initialChecked}
          onChange={(event) => onChange(event.target.checked, id)}
          disabled={disabled}
          id={id}
          checked={checked}
        />
      }
      label={label}
      labelPlacement="end"
      sx={{
        display: "flex",
        gap: "20px",
        margin: "0px 0px 0px 0px",
        paddingRight: `${label ? "10px" : "0px"}`,
        color: "#525F7F",
      }}
    />
  );
};

export default Toggle;

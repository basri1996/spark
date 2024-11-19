import { FormControlLabel, styled, Switch } from "@mui/material";

const ToggleButton = styled(Switch)(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  borderRadius: 12,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#5080ff",
        opacity: 1,
        border: 0,
      },
      "& .MuiSwitch-thumb": {
        color: "#fff",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#DEE2E6",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#374151" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Toggle = ({
  label = "",
  initialChecked,
  disabled,
  onChange,
  id,
  checked,
}: any) => {
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

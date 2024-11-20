import {
  Box,
  Button,
  List,
  Radio,
  RadioGroup,
  SvgIconProps,
  Typography,
} from "@mui/material";
import {
  RadioGroupButton,
  RadioGroupList,
  RadioGroupMainBox,
  RadioGroupRadio,
} from "./useStyles";
import { Dispatch, SetStateAction } from "react";

type Props = {
  list: { id: string; label: string; icon: React.FC<SvgIconProps> }[];
  setState: Dispatch<SetStateAction<string>> | (([key]: string) => void);
  isFinished?: boolean;
  handleClick: () => void;
};

export default function RadioPositionEnd({
  list,
  setState,
  handleClick,
  isFinished = false,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = list.find((item) => item.label === event.target.value);
    if (selected) {
      setState(selected.id);
    }
  };
  return (
    <>
      <RadioGroup
        defaultValue="medium"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <List sx={RadioGroupList}>
          {list.map((item) => (
            <Box key={item.id} sx={RadioGroupMainBox}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <item.icon />
                <Typography variant="body1">{item.label}</Typography>
              </Box>

              <Radio color="primary" value={item.label} sx={RadioGroupRadio} />
            </Box>
          ))}
        </List>
      </RadioGroup>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={RadioGroupButton} onClick={handleClick}>
          {isFinished ? "Finish" : "Next"}
        </Button>
      </Box>
    </>
  );
}

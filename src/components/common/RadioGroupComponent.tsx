import {
  Box,
  List,
  Radio,
  RadioGroup,
  SvgIconProps,
  Typography,
} from "@mui/material";
import {
  RadioGroupList,
  RadioGroupMainBox,
  RadioGroupRadio,
} from "./useStyles";
import { Dispatch, SetStateAction } from "react";
import { useAction } from "../../context/ActionContext";
import CustomButton from "./CustomButton";

type Props = {
  list: { id: string; label: string; icon: React.FC<SvgIconProps> }[];
  setState: Dispatch<SetStateAction<string>> | (([key]: string) => void);
  isFinished?: boolean;
  handleClick: () => void;
  state?:any
};

export default function RadioGroupComponent({
  list,
  setState,
  handleClick,
  isFinished = false,
  state
  
}: Props) {
  const { callActionStep, setCallActionStep } = useAction();
  const BackButtonVisible = callActionStep === "CLIENT_ANSWERED";
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = list.find((item) => item.label === event.target.value);
    if (selected) {
      setState(selected.id);
    }
  };
  return (
    <>
      <RadioGroup
      
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
      <Box
        sx={{
          display: "flex",
          justifyContent: BackButtonVisible ? "space-between" : "flex-end",
        }}
      >
        {BackButtonVisible && (
          <CustomButton onClick={() => setCallActionStep("INITIAL")}>
            Back
          </CustomButton>
        )}
        <CustomButton onClick={handleClick} disabled={!state}>
          {isFinished ? "Finish" : "Next"}
        </CustomButton>
      </Box>
    </>
  );
}

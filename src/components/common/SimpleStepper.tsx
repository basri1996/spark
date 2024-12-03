import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import { IActivity } from "../../common/types";

const SimpleStepper = ({ steps }: { steps: IActivity[] }) => {
  return (
    <Box
      sx={{
        paddingX: {
          md: "50px",
        },
      }}
    >
      <Stepper orientation="vertical">
        {steps.length ? (
          steps?.map((item) => (
            <Tooltip
              title={item.comment}
              sx={{
                background: "white",
                color: "black",
              }}
            >
              <Step key={item?.id} completed={true}>
                <StepLabel>
                  <Typography sx={{ fontSize: "14px" }}>
                    {item?.activityLabel}
                  </Typography>
                </StepLabel>
              </Step>
            </Tooltip>
          ))
        ) : (
          <Step key={"noItems"} completed={false}>
            <StepLabel>
              <Typography sx={{ fontSize: "14px" }}>
                არ არის ხელმისაწვდომი აქტივობები
              </Typography>
            </StepLabel>
          </Step>
        )}
      </Stepper>
    </Box>
  );
};

export default SimpleStepper;

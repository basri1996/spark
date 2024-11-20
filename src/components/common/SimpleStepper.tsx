import { Stepper, Step, StepLabel, Box, Typography } from "@mui/material";
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
            <Step key={item?.id} completed={true}>
              <StepLabel>
                <Typography sx={{ fontSize: "14px" }}>
                  {item?.activityLabel}
                </Typography>
              </StepLabel>
            </Step>
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

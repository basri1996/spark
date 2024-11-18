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
        {steps?.map((item) => (
          <Step key={item?.id} completed={true}>
            <StepLabel>
              <Typography sx={{ fontSize: "12px" }}>
                {item?.activityType}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default SimpleStepper;

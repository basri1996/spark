import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IActivity } from "../../common/types";

export default function VerticalLinearStepper({
  steps,
}: {
  steps: IActivity[];
}) {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleClick = (index: number) => {
    setActiveStep(index);
  };
  return (
    <Box
      sx={{
        paddingX: {
          md: "50px",
        },
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.length ? (
          steps.map((step, index) => (
            <Step key={step.activityType} completed={true}>
              <Box
                sx={{
                  display: "flex",
                  gap: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <StepLabel>{step.activityLabel}</StepLabel>
                <MoreHorizIcon
                  onClick={() => handleClick(index)}
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <StepContent>
                <Typography>{step.comment}</Typography>
              </StepContent>
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
}

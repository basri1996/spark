import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { IActivity } from "../../common/types";

export default function VerticalLinearStepper({
  steps,
}: {
  steps: IActivity[];
}) {
  const [activity, setActivity] = React.useState<number[]>([]);

  const handleClick = (id: number) => {
    setActivity((prev) => {
      const value = [...prev];
      if (value.includes(id)) {
        return value.filter((el) => el !== id);
      } else {
        value.push(id);
        return value;
      }
    });
  };
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
          steps.map((step) => (
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
                {step.comment &&
                  (!activity.includes(step.id) ? (
                    <KeyboardArrowDownRoundedIcon
                      onClick={() => handleClick(step.id)}
                      sx={{ cursor: "pointer" }}
                    />
                  ) : (
                    <KeyboardArrowUpRoundedIcon
                      onClick={() => handleClick(step.id)}
                      sx={{ cursor: "pointer" }}
                    />
                  ))}
              </Box>

              {activity.includes(step.id) && (
                <Typography
                  sx={{
                    fontSize: "14px",
                    paddingLeft: "30px",
                  }}
                >
                  {step.comment}
                </Typography>
              )}
            </Step>
          ))
        ) : (
          <Step key={"noItems"} completed={true}>
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

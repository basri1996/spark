import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import { IActivity } from "../../common/types";
import { useState } from "react";
import {AccordionComponent} from "../../components"


const SimpleStepper = ({ steps }: { steps: IActivity[] }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false); 
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
          steps?.map((item) => (
            <AccordionComponent
            key={item?.id}
            title={
              <Step completed={true}>
                <StepLabel>
                  <Typography sx={{ fontSize: "14px" }}>{item?.activityType}</Typography>
                </StepLabel>
              </Step>
            
            }
            name={`panel-${item?.id}`}
            expanded={expanded} 
            handler={handleChange} 
          >
            <Typography>{item?.comment}</Typography>
          </AccordionComponent>
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

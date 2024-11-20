import * as React from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import ViewListIcon from "@mui/icons-material/ViewList";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import RuleIcon from "@mui/icons-material/Rule";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import { StepIconProps } from "@mui/material/StepIcon";
import useGetDealStatusListQuery from "../../common/queries/useGetDealStatusListQuery";
import {
  ColorlibConnectorVertical,
  ColorlibStepIconRootVertical,
  CustomStepLabelVertical,
} from "./useStyles";

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement<unknown> } = {
    1: <AutoModeIcon />,
    2: <PhoneForwardedIcon />,
    3: <ViewListIcon />,
    4: <CurrencyExchangeIcon />,
    5: <RuleIcon />,
    6: <HistoryEduIcon />,
    7: <AssignmentReturnedIcon />,
  };

  return (
    <ColorlibStepIconRootVertical ownerState={{ completed, active }}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRootVertical>
  );
}

export default function VerticalSteppers({
  activeStep,
}: {
  activeStep: number | undefined;
}) {
  const { data: steps } = useGetDealStatusListQuery();

  return (
    <Stack spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep && activeStep + 1}
        connector={<ColorlibConnectorVertical />}
        orientation="vertical"
      >
        {steps?.map((step) => (
          <Step key={step?.id}>
            <CustomStepLabelVertical StepIconComponent={ColorlibStepIcon}>
              {step?.label}
            </CustomStepLabelVertical>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

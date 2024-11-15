import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import ViewListIcon from "@mui/icons-material/ViewList";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import RuleIcon from "@mui/icons-material/Rule";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import useGetDealStatusListQuery from "../../common/queries/useGetDealStatusListQuery";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    position: "unset",
    marginLeft: "22px",
  },
  [`& .${stepConnectorClasses.line}`]: {
    width: 0,
    height: 0,
    border: 0,
    backgroundColor: "rgba(108, 99, 255, 0.1)",
    borderRadius: 1,
    transition: "background-color 0.3s ease",
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundColor: "#5080ff",
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundColor: "#5080ff",
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: "rgba(108, 99, 255, 0.1)",
  zIndex: 1,
  color: "#5080ff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.grey[700],
  }),
  ...(ownerState.active && {
    backgroundColor: "#5080ff",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    color: "white",
  }),
}));

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    fontWeight: 400,
    color: "black", //
  },
  "&.MuiStepLabel-alternativeLabel": {
    display: "flex",
    flexDirection: "row",
    "& span": {
      marginTop: "0px",
      marginLeft: "5px",
      fontWeight: 400,
      color: "#000000",
    },
  },
}));

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
    <ColorlibStepIconRoot ownerState={{ completed, active }}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
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
        connector={<ColorlibConnector />}
        orientation="vertical"
      >
        {steps?.map((step) => (
          <Step key={step?.id}>
            <CustomStepLabel StepIconComponent={ColorlibStepIcon}>
              {step?.label}
            </CustomStepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

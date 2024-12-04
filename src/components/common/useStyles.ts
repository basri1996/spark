import { styled, Theme } from "@mui/material/styles";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
    marginLeft: "4.5px",
    marginRight: "4.5px",
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "rgba(108, 99, 255, 0.1)",
    borderRadius: 1,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    borderRadius: 1,
    transition: "background-color 0.3s ease",
    backgroundColor: theme.palette.grey[300],
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundColor: "#5080ff",
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundColor: "#5080ff",
  },
}));

export const ColorlibStepIconRoot = styled("div")<{
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
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundColor: "#5080ff",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
        color: "white",
      },
    },
  ],
}));

export const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "&.MuiStepLabel-alternativeLabel": {
    "& span": {
      fontWeight: 400,
      color: "black",
    },
  },
}));

export const ColorlibConnectorVertical = styled(StepConnector)(({ theme }) => ({
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

export const ColorlibStepIconRootVertical = styled("div")<{
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

export const CustomStepLabelVertical = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    fontWeight: 400,
    color: "black",
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

export const RadioGroupMainBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 2,
  border: "1px solid #5080ff",
  borderRadius: 2,
  cursor: "pointer",
  color: "#5080ff",
  minWidth: "300px",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "rgba(108, 99, 255, 0.1)",
  },
};
export const RadioGroupList = {
  minWidth: 240,
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

export const RadioGroupRadio = {
  "&:hover": {
    backgroundColor: "transparent",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 28,
    color: "#5080ff",
  },
};


export const ModalTitle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingY: "none",
  paddingX: 0,
  paddingLeft: "25px",
  paddingRight: "17px",
  color: "#56585F",
};

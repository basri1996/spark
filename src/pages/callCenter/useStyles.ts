import { useTheme } from "@mui/material/styles";

export const useStyles = () => {
  const theme = useTheme();

  return {
    CallCenterMainBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    CallCenterSecondaryBoxStyles: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
    CallCenterTypographyStyles: {
      color: theme.palette.text.primary,
      fontSize: "24px",
      fontWeight: 700,
    },
  };
};

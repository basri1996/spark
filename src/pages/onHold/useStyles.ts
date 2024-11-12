import { useTheme } from "@mui/material/styles";

export const useStyles = () => {
  const theme = useTheme();

  return {
    OnHoldMainBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    OnHoldSecondaryBoxStyles: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
    OnHoldTypographyStyles: {
      color: theme.palette.text.primary,
      fontSize: "24px",
      fontWeight: 700,
    },
  };
};

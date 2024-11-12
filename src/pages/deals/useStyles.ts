import { useTheme } from "@mui/material/styles";

export const useStyles = () => {
  const theme = useTheme();

  return {
    DealsMainBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    DealsSecondaryBoxStyles: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
    DealsTypographyStyles: {
      color: theme.palette.text.primary,
      fontSize: "24px",
      fontWeight: 700,
    },
  };
};

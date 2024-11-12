import { useTheme } from "@mui/material/styles";

export const useStyles = () => {
  const theme = useTheme();

  return {
    ActiveMainBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },

    ActiveTypographyStyles: {
      color: theme.palette.text.primary,
      fontSize: "24px",
      fontWeight: 700,
    },
    ActiveSecondaryBoxStyles: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
    },

    CardMainBoxStyles: {
      paddingX: "70px",
      paddingY: "10px",
      backgroundColor: theme.palette.background.default,
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    },

    CardTypographyStyles: {
      fontWeight: "500",
      color: theme.palette.primary.main,
    },

    CardSecondaryBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      padding: "20px",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
    },

    ColumnCardMainBoxStyles: {
      width: "240px",
      height: "100px",
      border: `1px solid ${theme.palette.border.primary}`,
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      padding: "10px",
    },

    ColumnCardTypographyStyles: {
      color: theme.palette.primary.main,
      fontWeight: "500",
    },
  };
};

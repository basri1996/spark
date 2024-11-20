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
      paddingLeft: "44px",
    },
    ActiveSecondaryBoxStyles: {
      display: "flex",
      overflowX: "auto",
      gap: "20px",
      scrollBehavior: "smooth",
      width: "100%",
      paddingBottom: "50px",
      "&::-webkit-scrollbar": {
        width: "12px",
        height: "12px",
      },
      "&::-webkit-scrollbar-track": {
        background: "rgba(108, 99, 255, 0.1)",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#5080ff",
        borderRadius: "10px",
        transition: "background-color 0.3s ease",
      },
    },

    CardMainBoxStyles: {
      paddingX: "70px",
      paddingY: "10px",
      backgroundColor: theme.palette.background.default,
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    },
    SrollebleCard: {
      width: "300px",
      flex: "0 0 auto",
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
      alignItems: "center",
    },

    ColumnCardMainBoxStyles: {
      width: "240px",
      height: "100px",
      border: `1px solid ${theme.palette.border.primary}`,
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      padding: "10px",
      cursor: "pointer",
    },

    ColumnCardTypographyStyles: {
      color: theme.palette.primary.main,
      fontWeight: "500",
    },
  };
};

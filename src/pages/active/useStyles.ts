import { useTheme } from "@mui/material/styles";

export const useStyles = () => {
  const theme = useTheme();

  return {
    ActiveMainBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      padding: "28px",
      boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "box-shadow 0.3s ease",
    },

    ActiveTypographyStyles: {
      color: theme.palette.text.primary,
      fontSize: "24px",
      fontWeight: 700,
    },
    ActiveSecondaryBoxStyles: {
      display: "flex",
      overflowX: "auto",
      gap: "20px",
      scrollBehavior: "smooth",
      width: "100%",
      paddingBottom: "50px",
      transform: "rotate(180deg)",
      paddingY: "30px",
      "& > *": {
        transform: "rotate(180deg)",
      },
      "&::-webkit-scrollbar": {
        height: "6px",
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
      backgroundColor: "rgba(241, 245, 249, 1)",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    },
    SrollebleCard: {
      width: "300px",
      flex: "0 0 auto",
      backgroundColor: "rgba(241, 245, 249, 1)",
      boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "box-shadow 0.3s ease",
    },

    CardTypographyStyles: {
      fontWeight: "500",
      color: theme.palette.primary.main,
    },

    CardSecondaryBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
      alignItems: "center",
      paddingY: "12px",
    },

    ColumnCardMainBoxStyles: {
      width: "240px",
      height: "auto",
      border: `1px solid ${theme.palette.border.primary}`,
      display: "flex",
      flexDirection: "column",
      borderRadius: "8px",
      gap: "8px",
      padding: "24px",
      cursor: "pointer",
      boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "box-shadow 0.5s ease",
      "&:hover": {
        background: "rgba(241, 245, 249, 1)",
        boxShadow: "0",
        border: "1px solid rgba(241, 245, 249, 1)",
      },
    },

    ColumnCardTypographyStyles: {
      color: theme.palette.primary.main,
      fontWeight: "500",
    },
  };
};

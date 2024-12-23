import { Theme, useTheme } from "@mui/material/styles";

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
      overflow: "scroll",
      gap: "20px",
      paddingX: "5px",
      scrollBehavior: "smooth",
      width: "100%",
      paddingBottom: "50px",
      paddingY: "30px",
      "&::-webkit-scrollbar": {
        height: "6px",
        display: "none",
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
      paddingY: "10px",
      backgroundColor: (theme: Theme) => theme.palette.background.default,
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
      display: "flex",
      justifyContent: "center",
      alignItems :"center",
      gap:"7px"
    },
    SrollebleCard: {
      width: "300px",
      flex: "0 0 auto",
      backgroundColor: "rgba(241, 245, 249, 1)",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "box-shadow 0.3s ease",
      minHeight: "70vh",
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
      position: "relative",
      padding: "24px",
      cursor: "pointer",
      boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "box-shadow 0.5s ease",
      background: "rgba(241, 245, 249, 1)",
      "&:hover": {
        background: "white",
        border: "1px solid rgba(241, 245, 249, 1)",
      },
    },

    ColumnCardTypographyStyles: {
      color: theme.palette.primary.main,
      fontWeight: "500",
    },
    ActiveSecondaryBox: { display: "flex", justifyContent: "space-between" },
    ActiveHeaderBox: {
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      alignItems: "center",
    },
    ActiveTypographyBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ActiveKeyBoard: { fontSize: 40, cursor: "pointer" },
    ActiveKeyBoardBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
    },
    ActiveHeaderLeftBox: {
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      alignItems: "center",
    },
    ActiveInputBox: { width: "200px" },
    ActiveIconBox: { borderRadius: 3, height: 56, minWidth: 56 },
    ActiveFilterMainBox: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },

    ActiveFilterSecondaryBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "20px",
      width: "400px",
    },
    ActiveFilterButtonBox: { display: "flex", justifyContent: "flex-end" },
  };
};

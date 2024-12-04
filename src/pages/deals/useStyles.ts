import { useTheme } from "@mui/material/styles";
import { styled, Theme } from "@mui/material";

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
    DealsTypographyBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    DealsButton: {
      borderRadius: 3,
      height: 56,
      minWidth: 56,
    },
    DealsHeaderRightBox:{ display: "flex", gap: "8px" },
    DealsInputBox:{ width: "200px", flex: 1 },
    UploadFileMainBox:{
      height: "300px",
      width: "400px",
      borderRadius: 3,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "8px",
      transition: "background 200ms ease-in",
    },
    UploadFileSecondaryBox:{
      border: "1px dashed #d0cdcd",
      width: "100%",
      height: "100%",
      borderRadius: 3,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px",
    },
    UploadFileIcon:{ color: "#5080ff", width: "40px", height: "40px" },
    UploadFileButtonBox:{
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    UploadFileButtonStyles:{
      backgroundColor: (theme:Theme) => theme.palette.primary.main,
      paddingX: "30px",
      color: (theme:Theme) => theme.palette.text.secondary,
      borderRadius: "4px",
    }
  };
};

export const Input = styled("input")``;

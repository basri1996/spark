import { useTheme } from "@mui/material/styles";

export const useStyles = () => {
  const theme = useTheme();

  return {
    GroupsMainBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    GroupsSecondaryBoxStyles: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
    GroupsTypographyStyles: {
      color: theme.palette.text.primary,
      fontSize: "24px",
      fontWeight: 700,
    },
    GroupIconBox: { borderRadius: 3, height: 56, minWidth: 56 },
    GroupHeaderRightBox: {
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      },

  };
};

import { useTheme } from "@mui/material/styles";

export const useStyles = () => {
  const theme = useTheme();

  return {
    ArchiveMainBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    ArchiveSecondaryBoxStyles: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
    ArchiveTypographyStyles: {
      color: theme.palette.text.primary,
      fontSize: "24px",
      fontWeight: 700,
    },
  };
};

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      tablet: 768,
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#5080ff",
    },
    background: {
      default: "rgba(108, 99, 255, 0.1)",
      paper: "#ffffff",
    },
    text: {
      primary: "#170738",
      secondary: "#ffffff",
    },
    border: {
      primary: "#F1F1F1",
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: "12px !important",
          "&.MuiFormControl-root": {
            borderRadius: "12px !important",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root": {},
        },
        select: {
          "& .Mui-selected": {
            backgroundColor: "#F9FAFB",
            "&:hover": {
              backgroundColor: "#F9FAFB",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.08)",
          overflowY: "auto",
          scrollbarWidth: "none",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#F9FAFB",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#F9FAFB",
          },
          "&:hover": {
            backgroundColor: "#F1F5F9",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
          color: "#101828",
          height: "100%",
          "&:focus-within": {
            "&:label": {
              padding: "0px 0px 0px 0px",
            },
          },
          borderRadius: "12px",
          input: {
            "&::placeholder": {
              color: "#667085",
              opacity: 1,
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          "&.MuiInputLabel-shrink": {
            fontSize: "unset",
            marginTop:"0px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: "absolute",
          color: "#5080ff",
          "& .MuiInputBase-root": {},
          "&.Mui-focused": {
            color: "#5080ff",
            padding: "0px",
            top: "0px",
          },
          "&.MuiFormLabel-filled": {
            padding: "0px",
            top: "0px",
          },
          "& .MuiInputLabel-root": {},
          "&.Mui-error": {
            color: "#FD7171",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          bottom: "-16px",
          margin: 0,
          color: "#f44336",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          "& fieldset": {
            borderColor: "#5080ff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #5080ff",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #5080ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5080ff",
          },
        },
      },
    },
  },
});

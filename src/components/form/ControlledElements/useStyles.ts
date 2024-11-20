export const InputStyles = {
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  borderRadius: "12px",

  "& .MuiFormHelperText-root": {
    lineHeight: "normal",
    top: "45px",
    fontSize: "11px",
  },
  "& .MuiInputBase-root": {
    height: "50px",
    width: "400px",
  },
  "& .MuiInputBase-input": {
    fontSize: {
      xs: "14px",
      sm: "12px",
    },
  },
};

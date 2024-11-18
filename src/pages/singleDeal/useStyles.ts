import { Box, styled } from "@mui/material";

export const GridBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    rowGap: "10px",
    columnGap: "50px",
  },
}));

export const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "20px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: "0",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "column",
    gap: "30px",
  },
  [theme.breakpoints.up(1340)]: {
    flexDirection: "row",
    gap: "0",
  },
}));

export const ActionButton = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 2,
  width: "100%",
  border: "1px solid #5080ff",
  borderRadius: 2,
  cursor: "pointer",
  color: "#5080ff",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#5080ff",
    color: "#fff",
  },
};
export const SingleDealMainBox = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

export const SingleDealSecondaryBox = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

export const SingleDealCardMainStyle = {
  boxShadow: "4px 2px 11.2px 4px #0000000A",
  padding: "30px",
  border: "1px solid #00000014",
  borderRadius: "14px",
  gap: 4,
  width: "100%",
  display: {
    xs: "none",
    md: "flex",
  },
};

export const SingleDealCardSecondaryStyle = {
  boxShadow: "4px 2px 11.2px 4px #0000000A",
  padding: "30px",
  border: "1px solid #00000014",
  borderRadius: "14px",
  display: {
    xs: "flex",
    md: "none",
  },
  gap: 4,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

export const SignleDealInformationBox = {
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(1, auto)",
    lg: "repeat(3, auto)",
    md: "repeat(2, auto)",
  },
  gap: "20px",
  boxShadow: "4px 2px 11.2px 4px #0000000A",
  padding: "30px",
  border: "1px solid #00000014",
  borderRadius: "14px",
  backgroundColor: "white",
  width: "100%",
  justifyContent: "center",
};

export const DealsActionCardBox = {
  display: "flex",
  flexDirection: "column",
  padding: 0,
  gap: 2,
  minWidth: {
    lg: "400px",
  },
  borderRight: {
    md: "1px solid #00000014",
  },
  borderLeft: {
    md: "1px solid #00000014",
  },
  paddingX: {
    md: "50px",
  },
};

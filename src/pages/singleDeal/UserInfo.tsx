import { Box, Typography } from "@mui/material";

const UserInfo = ({ icon, title, text, textColor = "#000" }: any) => {
  return (
    <Box display={"flex"} gap={"10px"}>
      {icon && (
        <Box>
          <img src={icon} height={"44px"} />
        </Box>
      )}
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Typography
          color={"#666666"}
          textTransform={"uppercase"}
          sx={{
            fontSize: {
              xs: "14px",
              lg: "12px",
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              lg: "12px",
            },
            color: textColor,
            fontWeight: 600,
            wordBreak: "break-word",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserInfo;

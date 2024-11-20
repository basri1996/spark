import { Box, Typography } from "@mui/material";

interface Props {
  icon?: string;
  title: string;
  text: string | number;
  textColor?: string;
}

const UserInfo = ({ icon, title, text, textColor = "#000" }: Props) => {
  return (
    <Box display={"flex"} gap={"10px"}>
      {icon && (
        <Box>
          <Box component="img" src={icon} height={"44px"} alt="icon" />
        </Box>
      )}
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Typography
          color={"#666666"}
          textTransform={"uppercase"}
          sx={{
            fontSize: {
              xs: "12px",
              lg: "14px",
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              lg: "14px",
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

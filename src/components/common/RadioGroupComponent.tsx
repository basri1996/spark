import {
  Box,
  Button,
  List,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export default function RadioPositionEnd({
  list,
  setState,
  handleClick,
  isFinished = false,
}: any) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = list.find(
      (item: any) => item.label === event.target.value
    );
    if (selected) {
      setState(selected.id);
    }
  };
  return (
    <>
      <RadioGroup
        defaultValue="medium"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <List
          sx={{
            minWidth: 240,
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {list.map((item: any) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 2,
                border: "1px solid #5080ff",
                borderRadius: 2,
                cursor: "pointer",
                color: "#5080ff",
                minWidth: "300px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "rgba(108, 99, 255, 0.1)",
                },
              }}
            >
              <Box sx={{ display: "flex", gap: "5px" }}>
                <item.icon />
                <Typography variant="body1">{item.label}</Typography>
              </Box>

              <Radio
                color="primary"
                value={item.label}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                    color: "#5080ff",
                  },
                }}
              />
            </Box>
          ))}
        </List>
      </RadioGroup>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            paddingX: "30px",
            border: "1px solid #5080ff",
            borderRadius: "5px",
          }}
          onClick={handleClick}
        >
          {isFinished ? "Finish" : "Next"}
        </Button>
      </Box>
    </>
  );
}

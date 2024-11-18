import { Box, List, Radio, RadioGroup, Typography } from "@mui/material";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import { useState } from "react";
const responseType = [
  {
    id: 1,
    label: "უპასუხა",
    icon: <WifiCalling3Icon />,
  },
  {
    id: 2,
    label: "არ უპასუხა",

    icon: <PhoneMissedIcon />,
  },
];

export default function RadioPositionEnd() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = responseType.find(
      (item) => item.label === event.target.value
    );
    if (selected) {
      setSelectedValue(selected.id);
      console.log("Selected ID:", selected.id);
    }
  };
  return (
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
        {responseType.map((item) => (
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
              {item.icon}
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
  );
}

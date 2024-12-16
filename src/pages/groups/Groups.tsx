import { Box, Typography } from "@mui/material";
import GroupCard from "./GroupCard";
import { useStyles } from "./useStyles";
import { CustomButton, SearchInput } from "../../components";
import GroupAddIcon from '@mui/icons-material/GroupAdd';

function Groups() {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const styles = useStyles();

  return (
    <Box sx={styles.GroupsMainBoxStyles}>
      <Box sx={styles.GroupsSecondaryBoxStyles}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={styles.GroupsTypographyStyles}>
            Groups
          </Typography>
        </Box>
       
          <Box sx={styles.GroupHeaderRightBox}>
        <Box sx={{ width: "200px" }}>
          <SearchInput
            type="text"
            placeholder="Search"
            value={""}
            onChange={() => {}}
            TextInputRef={""}
          />
        </Box>
        <CustomButton
            onClick={() => {}}
            sx={styles.GroupIconBox}
          >
            <GroupAddIcon />
          </CustomButton>
          </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm:"repeat(2, 1fr)",
            lg:"repeat(3, 1fr)",
            xl: "repeat(4, 1fr)", 
            xxl:"repeat(5, 1fr)",
           
          },
          gap: 2, 
        }}
      >
        {arr.map(() => (
          <GroupCard />
        ))}
      </Box>
    </Box>
  );
}

export default Groups;

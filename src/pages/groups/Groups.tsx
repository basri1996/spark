import { Box, Typography } from "@mui/material";
import GroupCard from "./GroupCard";
import { useStyles } from "./useStyles";
import { CustomButton, Modal, SearchInput } from "../../components";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import useGetGroupsListQuery from "./queries/useGetGroupsListQuery";
import { useState } from "react";
import CreateGroup from "./CreateGroup";

function Groups() {
  const styles = useStyles();
  const { data } = useGetGroupsListQuery();
  const [expandedModalVisible, setExpandedModalVisible] = useState(false);

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
          <CustomButton onClick={() => {  setExpandedModalVisible(true);}} sx={styles.GroupIconBox}>
            <GroupAddIcon />
          </CustomButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
            xxl: "repeat(5, 1fr)",
          },
          gap: 2,
        }}
      >
        {data?.map((item: any) => (
          <GroupCard {...item} />
        ))}
      </Box>
      <Modal
        title={"Create Group"}
        isDialogOpen={expandedModalVisible}
        handleDialogClose={() => {
          setExpandedModalVisible(false);
        }}
      ><CreateGroup setExpandedModalVisible={setExpandedModalVisible}/></Modal>
    </Box>
  );
}

export default Groups;

import { Box, debounce, Typography } from "@mui/material";
import TextInput from "../../components/fields/SearchInput";
import { useStyles } from "./useStyles";
import { useSearchParams } from "react-router-dom";
import useGetCallCenterLeadListQuery from "./queries/useGetCallCenterLeadListQuery";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { CustomButton, DealsTable, Modal } from "../../components";
import { useRef, useState } from "react";
import CreateLeadForm from "./CreateLeadForm";

function OnHold() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCreateModalVisible, setIsCreateModalVisible] =
    useState<boolean>(false);
  const { data: deals, isFetching } = useGetCallCenterLeadListQuery({
    pageNumber: Number(searchParams.get("pageNumber")) || 1,
    pageSize: Number(searchParams.get("pageSize")) || 10,
    searchText: searchParams.get("searchText") ?? "",
  });
  const TextInputRef = useRef<HTMLInputElement | null>(null);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearchParams((searchParams) => {
      value === ""
        ? searchParams.delete("searchText")
        : searchParams.set("searchText", value);
      return searchParams;
    });
  };

  const handleRefresh = () => {
    setSearchParams({});
    if (TextInputRef.current) {
      TextInputRef.current.value = "";
    }
  };
  
  return (
    <Box sx={styles.CallCenterMainBoxStyles}>
      <Box sx={styles.CallCenterSecondaryBoxStyles}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={styles.CallCenterTypographyStyles}>
            Call Center
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box sx={{ width: "200px" }}>
            <TextInput
              type="text"
              placeholder="Search"
              value={searchParams.get("searchText") ?? ""}
              onChange={debounce(handleInputChange, 1000)}
              TextInputRef={TextInputRef}
            />
          </Box>
          <CustomButton
            onClick={() => {
              setIsCreateModalVisible(true);
            }}
            sx={{
              borderRadius: 3,
              height: 56,
              minWidth: 56,
            }}
          >
            <PersonAddAltIcon />
          </CustomButton>
        </Box>
      </Box>
      <DealsTable
        list={deals?.content}
        totalRows={deals?.totalElements}
        isPending={isFetching}
        type="call-center"
        handleRefresh={handleRefresh}
      />
      <Modal
        title={"Create Lead"}
        isDialogOpen={isCreateModalVisible}
        handleDialogClose={() => {
          setIsCreateModalVisible(false);
        }}
      >
        <CreateLeadForm setIsCreateModalVisible={setIsCreateModalVisible} />
      </Modal>
    </Box>
  );
}

export default OnHold;

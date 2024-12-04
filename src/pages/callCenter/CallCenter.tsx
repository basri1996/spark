import { Box, debounce, Typography } from "@mui/material";
import TextInput from "../../components/fields/TextInput";
import { useStyles } from "./useStyles";
import { useSearchParams } from "react-router-dom";
import useGetCallCenterLeadListQuery from "./queries/useGetCallCenterLeadListQuery";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { CustomButton, DealsTable, Modal } from "../../components";
import { useState } from "react";
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
  const handlePageChange = (pageNumber: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("pageNumber", String(pageNumber));
      return searchParams;
    });
  };

  const handlePerRowsChange = (pageSize: number, pageNumber: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("pageNumber", String(pageNumber));
      searchParams.set("pageSize", String(pageSize));
      return searchParams;
    });
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
        handlePageChange={handlePageChange}
        handlePerRowsChange={handlePerRowsChange}
        totalRows={deals?.totalElements}
        isPending={isFetching}
        type="call-center"
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

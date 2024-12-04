import { Box, debounce, Typography } from "@mui/material";
import DealsTable from "../../components/tables/DealsTable";
import TextInput from "../../components/fields/TextInput";
import { useStyles } from "./useStyles";
import useGetDealsListQuery from "../../common/queries/useGetDealsListQuery";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {CustomButton, Modal} from "../../components"
import UploadFile from "./UploadFile";


function Deals() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);
  const { data: deals, isPending } = useGetDealsListQuery({
    dealStatuses: "ACTIVE",
    progressStatuses: "CLIENTS_IN_PROGRESS",
    searchText: searchParams.get("searchText") ?? "",
    pageNumber: Number(searchParams.get("pageNumber")) || 1,
    pageSize: Number(searchParams.get("pageSize")) || 10,
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
    <Box sx={styles.DealsMainBoxStyles}>
      <Box sx={styles.DealsSecondaryBoxStyles}>
        <Box
          sx={styles.DealsTypographyBox}
        >
          <Typography variant="h6" sx={styles.DealsTypographyStyles}>
            Inbox
          </Typography>
        </Box>
        <Box sx={styles.DealsHeaderRightBox}>
          <Box sx={styles.DealsInputBox}>
            <TextInput
              type="text"
              placeholder="Search"
              value={searchParams.get("searchText") ?? ""}
              onChange={debounce(handleInputChange, 1000)}
            />
          </Box>
          <CustomButton
            sx={styles.DealsButton}
            onClick={() => setIsUploadModalVisible(true)}
          >
            <CloudUploadIcon sx={{ color: "white" }} />
          </CustomButton>
        </Box>
      </Box>
      <DealsTable
        list={deals?.content}
        handlePageChange={handlePageChange}
        handlePerRowsChange={handlePerRowsChange}
        totalRows={deals?.totalElements}
        isPending={isPending}
        type="deals"
      />
      <Modal
        title="Upload File"
        isDialogOpen={isUploadModalVisible}
        handleDialogClose={() => setIsUploadModalVisible(false)}
      >
        <UploadFile setIsUploadModalVisible={setIsUploadModalVisible} />
      </Modal>
    </Box>
  );
}

export default Deals;

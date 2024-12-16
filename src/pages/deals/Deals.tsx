import { Box, debounce, Typography } from "@mui/material";
import DealsTable from "../../components/tables/DealsTable";
import SearchInput from "../../components/fields/SearchInput";
import { useStyles } from "./useStyles";
import useGetDealsListQuery from "../../common/queries/useGetDealsListQuery";
import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { CustomButton, Modal } from "../../components";
import UploadFile from "./UploadFile";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DealsFilterModal from "./DealsFilterModal";
import RefreshIcon from "@mui/icons-material/Refresh";

function Deals() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams({dealStatuses:"ACTIVE",progressStatuses:"CLIENTS_IN_PROGRESS"});
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);
  const [expandedModalVisible, setExpandedModalVisible] = useState(false);
  const TextInputRef = useRef<HTMLInputElement | null>(null);
 

  const { data: deals, isPending } = useGetDealsListQuery({
    dealStatuses: searchParams.get("dealStatuses") ?? "",
    progressStatuses: searchParams.get("progressStatuses") ?? "",
    searchText: searchParams.get("searchText") ?? "",
    pageNumber: Number(searchParams.get("pageNumber")) || 1,
    pageSize: Number(searchParams.get("pageSize")) || 10,
    products: searchParams.getAll("products"),
    channels: searchParams.getAll("channels"),
    users: searchParams.getAll("users"),
    amountFrom: Number(searchParams.get("amountFrom")) || null,
    amountTo: Number(searchParams.get("amountTo")) || null,
    dateFrom: searchParams.get("dateFrom"),
    dateTo: searchParams.get("dateTo"),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearchParams((searchParams) => {
      value === ""
        ? searchParams.delete("searchText")
        : searchParams.set("searchText", value);
        searchParams.set("pageNumber", "1");
        searchParams.delete("dealStatuses");
        searchParams.delete("progressStatuses");
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
    <Box sx={styles.DealsMainBoxStyles}>
      <Box sx={styles.DealsSecondaryBoxStyles}>
        <Box sx={styles.DealsTypographyBox}>
          <Typography variant="h6" sx={styles.DealsTypographyStyles}>
            Inbox
          </Typography>
        </Box>
        <Box sx={styles.DealsHeaderRightBox}>
          <Box sx={styles.DealsInputBox}>
            <SearchInput
              type="text"
              placeholder="Search"
              value={searchParams.get("searchText") ?? ""}
              onChange={debounce(handleInputChange, 1000)}
              TextInputRef={TextInputRef}
            />
          </Box>
          <CustomButton
            onClick={() => setExpandedModalVisible(true)}
            sx={styles.DealsButton}
          >
            <FilterAltIcon />
          </CustomButton>
          <CustomButton
            sx={styles.DealsButton}
            onClick={() => setIsUploadModalVisible(true)}
          >
            <CloudUploadIcon sx={{ color: "white" }} />
          </CustomButton>
          <CustomButton
            sx={styles.DealsButton}
            onClick={() => {
              handleRefresh();
            }}
          >
            <RefreshIcon />
          </CustomButton>
        </Box>
      </Box>
      <DealsTable
        list={deals?.content}
        totalRows={deals?.totalElements}
        isPending={isPending}
        type="deals"
        handleRefresh={handleRefresh}
      />
      <Modal
        title="Upload File"
        isDialogOpen={isUploadModalVisible}
        handleDialogClose={() => setIsUploadModalVisible(false)}
      >
        <UploadFile setIsUploadModalVisible={setIsUploadModalVisible} />
      </Modal>
      <Modal
        title={"Expanded Filters"}
        isDialogOpen={expandedModalVisible}
        handleDialogClose={() => {
          setExpandedModalVisible(false);
        }}
      >
        <DealsFilterModal setExpandedModalVisible={setExpandedModalVisible} />
      </Modal>
    </Box>
  );
}

export default Deals;

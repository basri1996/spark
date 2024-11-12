import { Box, Typography } from "@mui/material";
import DealsTable from "../../components/ui/tables/DealsTable";
import TextInput from "../../components/ui/formElements/TextInput";
import { useStyles } from "./useStyles";
import useGetDealsListQuery from "../../common/queries/useGetDealsListQuery";
import React, { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

function Deals() {
  const styles = useStyles();
  const [params, setParams] = useState({
    dealStatuses: ["ACTIVE"],
    pageNumber: 1,
    pageSize: 10,
    progressStatuses: ["CLIENTS_IN_PROGRESS"],
    searchText: "",
  });
  const debouncedSearchTerm = useDebounce(params.searchText, 1000);

  const { data: deals, isPending } = useGetDealsListQuery({
    ...params,
    searchText: debouncedSearchTerm,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams((prev) => ({
      ...prev,
      searchText: e.target.value,
    }));
  };
  const handlePageChange = (pageSize: number) => {
    setParams((prev) => ({ ...prev, pageSize }));
  };

  const handlePerRowsChange = (pageSize: number, pageNumber: number) => {
    setParams((prev) => ({ ...prev, pageSize, pageNumber }));
  };

  return (
    <Box sx={styles.DealsMainBoxStyles}>
      <Box sx={styles.DealsSecondaryBoxStyles}>
        <Typography variant="h6" sx={styles.DealsTypographyStyles}>
          Inbox
        </Typography>
        <TextInput
          type="text"
          placeholder="Search"
          value={params.searchText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
        />
      </Box>
      <DealsTable
        list={deals?.content}
        handlePageChange={handlePageChange}
        handlePerRowsChange={handlePerRowsChange}
        totalRows={deals?.totalElements}
        isPending={isPending}
      />
    </Box>
  );
}

export default Deals;

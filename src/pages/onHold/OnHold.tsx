import { Box, Typography } from "@mui/material";
import TextInput from "../../components/fields/TextInput";
import DealsTable from "../../components/tables/DealsTable";
import { useStyles } from "./useStyles";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useGetDealsQuery from "../../common/queries/useGetDealsListQuery";

function OnHold() {
  const styles = useStyles();
  const [params, setParams] = useState({
    dealStatuses: ["ON_HOLD"],
    pageNumber: 1,
    pageSize: 10,
    searchText: "",
  });
  const debouncedSearchTerm = useDebounce(params.searchText, 1000);

  const { data: deals, isPending } = useGetDealsQuery({
    ...params,
    searchText: debouncedSearchTerm,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams((prev) => ({
      ...prev,
      searchText: e.target.value,
    }));
  };
  const handlePageChange = (pageNumber: number) => {
    setParams((prev) => ({ ...prev, pageNumber }));
  };

  const handlePerRowsChange = (pageSize: number, pageNumber: number) => {
    setParams((prev) => ({ ...prev, pageSize, pageNumber }));
  };

  return (
    <Box sx={styles.OnHoldMainBoxStyles}>
      <Box sx={styles.OnHoldSecondaryBoxStyles}>
        <Typography variant="h6" sx={styles.OnHoldTypographyStyles}>
          On Hold
        </Typography>
        <Box sx={{ width: "200px" }}>
          <TextInput
            type="text"
            placeholder="Search"
            value={params.searchText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
        </Box>
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

export default OnHold;

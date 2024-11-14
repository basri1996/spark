import { Box, Typography } from "@mui/material";
import TextInput from "../../components/ui/formElements/TextInput";
import DealsTable from "../../components/ui/tables/DealsTable";
import { useStyles } from "./useStyles";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useGetDealsQuery from "../../common/queries/useGetDealsListQuery";

function Archive() {
  const styles = useStyles();
  const [params, setParams] = useState({
    dealStatuses: ["ARCHIVED"],
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
    <Box sx={styles.ArchiveMainBoxStyles}>
      <Box sx={styles.ArchiveSecondaryBoxStyles}>
        <Typography variant="h6" sx={styles.ArchiveTypographyStyles}>
          Archive
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

export default Archive;

import React from "react";
import { Box, Pagination, SelectChangeEvent, Stack } from "@mui/material";
import { PaginationComponentProps } from "react-data-table-component";
import { useSearchParams } from "react-router-dom";
import SingleSelect from "../fields/SingleSelect";
import { pageSize } from "../../data";

const CustomPagination: React.FC<PaginationComponentProps> = ({
  rowsPerPage,
  rowCount,
  currentPage,
  onChangePage,
}) => {
  const totalPages = Math.ceil(rowCount / rowsPerPage);
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePerRowsChange = (pageNumber: number) => (event: SelectChangeEvent<string>) => {
    setSearchParams((searchParams) => {
      searchParams.set("pageNumber", String(pageNumber));
      searchParams.set("pageSize", event.target.value);
      return searchParams;
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}>
        <Box  sx={{ display: "flex",gap:1  }}>
        <Box>
      <SingleSelect
        onChange={handlePerRowsChange(1)}
        value={Number(searchParams.get("pageSize")) || 10}
        options={pageSize}
        label="Per Page"
        width="100px"
        height="35px"
      />
      </Box>
      
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, page) => onChangePage(page, rowCount)}
          variant="outlined"
          color="primary"
        />
      </Stack>
      </Box>
    </Box>
  );
};

export default CustomPagination;

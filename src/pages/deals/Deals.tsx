import { Box, debounce, Typography } from "@mui/material";
import DealsTable from "../../components/tables/DealsTable";
import TextInput from "../../components/fields/TextInput";
import { useStyles } from "./useStyles";
import useGetDealsListQuery from "../../common/queries/useGetDealsListQuery";
import React from "react";
import { useSearchParams } from "react-router-dom";

function Deals() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: deals, isPending } = useGetDealsListQuery({
    dealStatuses: "ACTIVE",
    progressStatuses: "CLIENTS_IN_PROGRESS",
    searchText: searchParams.get("searchText") ?? "",
    pageNumber: Number(searchParams.get("pageNumber")) ?? 1,
    pageSize: Number(searchParams.get("pageSize")) ?? 10,
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
      searchParams.set("pageNumber",String(pageNumber))
      return searchParams
    });
  };

  const handlePerRowsChange = (pageSize: number, pageNumber: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("pageNumber",String(pageNumber))
      searchParams.set("pageSize",String(pageSize))
      return searchParams
    });
  };
  return (
    <Box sx={styles.DealsMainBoxStyles}>
      <Box sx={styles.DealsSecondaryBoxStyles}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={styles.DealsTypographyStyles}>
            Inbox
          </Typography>
        </Box>
        <Box sx={{ width: "200px" }}>
          <TextInput
            type="text"
            placeholder="Search"
            value={searchParams.get("searchText") ?? ""}
            onChange={debounce(handleInputChange, 1000)}
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

export default Deals;

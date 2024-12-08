import { Box, debounce, Typography } from "@mui/material";
import TextInput from "../../components/fields/TextInput";
import DealsTable from "../../components/tables/DealsTable";
import { useStyles } from "./useStyles";
import useGetDealsQuery from "../../common/queries/useGetDealsListQuery";
import { useSearchParams } from "react-router-dom";

function OnHold() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: deals, isPending } = useGetDealsQuery({
    dealStatuses: "ON_HOLD",
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
    <Box sx={styles.OnHoldMainBoxStyles}>
      <Box sx={styles.OnHoldSecondaryBoxStyles}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={styles.OnHoldTypographyStyles}>
            On Hold
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
         type="on-hold"
      />
    </Box>
  );
}

export default OnHold;

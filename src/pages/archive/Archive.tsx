import { Box, debounce, Typography } from "@mui/material";
import { useStyles } from "./useStyles";
import useGetDealsQuery from "../../common/queries/useGetDealsListQuery";
import { useSearchParams } from "react-router-dom";
import { DealsTable, TextInput } from "../../components";

function Archive() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: deals, isPending } = useGetDealsQuery({
    dealStatuses: "ARCHIVED",
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
    <Box sx={styles.ArchiveMainBoxStyles}>
      <Box sx={styles.ArchiveSecondaryBoxStyles}>
        <Box
          sx={styles.ArchiveTypographyBox}
        >
          <Typography variant="h6" sx={styles.ArchiveTypographyStyles}>
            Archive
          </Typography>
        </Box>
        <Box sx={styles.ArchiveInputBox}>
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
        type="archive"
      />
    </Box>
  );
}

export default Archive;

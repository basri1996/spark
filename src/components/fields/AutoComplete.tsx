import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material";
import InfiniteScroll from "../common/InfiniteScroll";



interface AutoCompleteProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isPending: boolean;
  data: any,
  setSearchterm: any;
  searchTerm: string;
  value: string | null;
  setValue: any
}

function AutoComplete({
  fetchNextPage,
  hasNextPage,
  isPending,
  data,
  setSearchterm,
  searchTerm,
  value,
  setValue,
}: AutoCompleteProps) {
  const CustomListbox = (props: any) => (
    <InfiniteScroll
      load={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        <Box
          key="circularProgress"
          sx={{
            scrollbarWidth: "none",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="25px" color="inherit" />
        </Box>
      }
      endMessage={""}
      isLoading={isPending}
    >
      <Box {...props}>{props.children}</Box>
    </InfiniteScroll>
  );

  return (
    <Autocomplete
      value={data ? data.find((option:any) => option.externalId === value) || null : null}
      onChange={(event, newValue) => {
        setValue(newValue ? newValue.externalId : null); // store only externalId
      }}
      inputValue={searchTerm}
      onInputChange={(event, newInputValue) => {
        setSearchterm(newInputValue);
      }}
      id="controllable-states-demo"
      options={data || []} // default to empty array if data is null
      sx={{ width: 300 }}
      getOptionLabel={(option) => option?.fullName || ""} // safely handle undefined option
      renderInput={(params) => <TextField {...params} label="მომხმარებლები" />}
      slotProps={{
        listbox: {
          component: CustomListbox,
        },
      }}
    />
  );
}

export default AutoComplete;

import React, { useRef } from "react";
import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material";
import InfiniteScroll from "../common/InfiniteScroll";

interface User {
  externalId: string;
  fullName: string;
}

interface AutoCompleteProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isPending: boolean;   // Indicates if the next page is being fetched
  data: User[];         // Flattened array of all loaded users
  setSearchterm: (val: string) => void;
  searchTerm: string;
  value: string | null;
  setValue:any;
}

export default function AutoComplete({
  fetchNextPage,
  hasNextPage,
  isPending,
  data,
  setSearchterm,
  searchTerm,
  value,
  setValue,
}: AutoCompleteProps) {

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Custom listbox that uses InfiniteScroll
  const ListboxWithInfiniteScroll = (props: any) => (
    <InfiniteScroll
      load={fetchNextPage}
      hasMore={hasNextPage}
      isLoading={isPending}
      loader={
        <Box
          key="circularProgress"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 1,
          }}
        >
          <CircularProgress size="25px" color="inherit" />
        </Box>
      }
      endMessage={<Box sx={{ textAlign: "center", p: 1 }}>No more data</Box>}
      scrollContainerRef={scrollContainerRef}
    >
      <Box
        ref={scrollContainerRef}
        {...props}
        sx={{
          maxHeight: 200, // Only maxHeight as requested
          overflowY: "auto",
        }}
      >
        {props.children}
      </Box>
    </InfiniteScroll>
  );

  return (
    <Autocomplete
      disablePortal
      value={data.find((option) => option.externalId === value) || null}
      onChange={(event, newValue) => {
        setValue(newValue ? newValue.externalId : null);
      }}
      inputValue={searchTerm}
      onInputChange={(event, newInputValue) => {
        setSearchterm(newInputValue);
      }}
      options={data}
      getOptionLabel={(option) => option?.fullName || ""}
      renderInput={(params) => <TextField {...params} label="Users" />}
      slotProps={{
        listbox: {
          component: ListboxWithInfiniteScroll,
        },
      }}
      sx={{ width: 300 }}
    />
  );
}

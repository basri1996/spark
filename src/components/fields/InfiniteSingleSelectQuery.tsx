import {
  Box,
  CircularProgress,
  FilledInput,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  styled,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import InfiniteScroll from "../common/InfiniteScroll";

function InfiniteSingleSelectQuery({
  label,
  data,
  value,
  setValue,
  fetchNextPage,
  hasNextPage,
  isPending,
  search,
  setSearch,
  disabled = false,
  renderValue = null,
}: any) {
  const [maxWidth, setMaxWidth] = useState(0);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (inputRef.current) {
      setMaxWidth(inputRef?.current?.offsetWidth);
    }
  }, [inputRef.current]);

  const handleChange = (selectedValue: any) => {
    setValue(selectedValue);
    setOpen(false);
  };

  return (
    <StyledFormControl size="small">
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledSelect
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        sx={{ width: "300px" }}
        MenuProps={{
          PaperProps: {
            sx: {
              maxWidth: maxWidth,
              maxHeight: 200,
              scrollbarWidth: "none",
              marginTop: "12px",
              boxShadow:
                "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
              borderRadius: "12px",
            },
          },
        }}
        renderValue={() => {
          return renderValue ? renderValue : <Typography>{value.fullName}</Typography>;
        }}
        disabled={disabled}
        value={value}
        IconComponent={ExpandMoreRoundedIcon}
        input={<OutlinedInput ref={inputRef} label={label} />}
      >
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
          <Box sx={{ marginBottom: "48px", position: "relative" }}>
            <FilledInput
              value={search}
              onChange={setSearch}
              placeholder="Type to search..."
              disableUnderline
              fullWidth
              autoFocus
              style={{
                marginBottom: "10px",
                position: "absolute",
                paddingTop: "10px",
                height: "50px",
              }}
              sx={{
                "& .MuiInputBase-input": {
                  padding: "6px 12px 7px 12px",
                },
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
            />
          </Box>
          {data.map((element: any) => (
            <MenuItem
              key={element?.externalId}
              value={element?.externalId}
              onClick={() => handleChange(element)}
            >
              {element?.fullName}
            </MenuItem>
          ))}
          {!isPending && !data.length && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <h1 className="text-[14px] font-medium">Not Found</h1>
            </Box>
          )}
        </InfiniteScroll>
      </StyledSelect>
    </StyledFormControl>
  );
}

export default InfiniteSingleSelectQuery;

export const StyledSelect = styled(Select)`
  color: #170738 !important;
  & svg {
    fill: #5080ff !important;
  }
  & fieldset {
    border-color: #5080ff !important;
    border-radius: 12px !important;
    border-width: 1px !important;
  }
  &:hover fieldset {
    border-color: #5080ff !important;
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  color: #667085 !important;
`;

export const StyledFormControl = styled(FormControl)`
  & .MuiInputBase-root {
    height: 60px;
    box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    border: 1px solid #d0d5dd;
    border-radius: 12px;
  }
  & .MuiOutlinedInput-root {
    border: none;
  }
  & .MuiInputLabel-root {
    top: 10px;
    &.Mui-focused {
      top: 0;
      border-color: red !important;
    }
  }
`;

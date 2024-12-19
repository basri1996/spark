import { Box, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import useGetLoanProductListQuery from "../../common/queries/useGetLoanProductListQuery";
import { useSearchParams } from "react-router-dom";
import { CustomButton, MultiSelect } from "../../components";
import useGetChannelListQuery from "../../common/queries/useGetChannelListQuery";
import useGetSparkUsersListQuery from "../../common/queries/useGetSparkUsersListQuery";
import InputField from "../../components/fields/InputField";
import DateInput from "../../components/fields/DateInput";

interface Props {
  setExpandedModalVisible: Dispatch<SetStateAction<boolean>>;
}

function DealsFilterModal({ setExpandedModalVisible }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState({
    productCodes: searchParams.getAll("productCodes"),
    channels: searchParams.getAll("channels"),
    users: searchParams.getAll("users"),
    amountFrom: searchParams.get("amountFrom"),
    amountTo: searchParams.get("amountTo"),
    dateFrom: searchParams.get("dateFrom"),
    dateTo: searchParams.get("dateTo"),
  });

  const { data: productList } = useGetLoanProductListQuery();
  const { data: channelList } = useGetChannelListQuery();
  const { data: usersList } = useGetSparkUsersListQuery();

  const handleChangeDirectValue = (field: string) => {
    return function (value: SelectChangeEvent<string[]>) {
      setParams((prev) => ({
        ...prev,
        [field]: value,
      }));
    };
  };

  const handleChangeEvent = (field: string) => {
    return function (event: any) {
      setParams((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };
  };

  const handleApply = () => {
    setExpandedModalVisible(false);
    searchParams.set("dealStatuses", "ACTIVE");
    searchParams.set("progressStatuses", "CLIENTS_IN_PROGRESS");
    const applyHelper = (key: string, value: unknown) => {
      if (Array.isArray(value)) {
        searchParams.delete(key);
        value.forEach((element) => {
          searchParams.append(key, element);
        });
      } else {
        searchParams.set(key, String(value));
      }
    };
    setSearchParams((searchParams) => {
      Object.entries(params).forEach(([key, value]) => {
        if ((Array.isArray(value) && value?.length) || value) {
          applyHelper(key, value);
        }
      });
      return searchParams;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "500px",
      }}
    >
      <MultiSelect
        options={productList || []}
        label="პროდუქტი"
        value={params.productCodes}
        onChange={handleChangeDirectValue("productCodes")}
        inputValueKey="productCode"
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
        }}
      >
        <MultiSelect
          options={channelList || []}
          label="არხები"
          value={params.channels}
          onChange={handleChangeDirectValue("channels")}
        />
        <MultiSelect
          options={usersList || []}
          label="მომხმარებელი"
          inputValueKey="externalId"
          content="fullName"
          value={params.users}
          onChange={handleChangeDirectValue("users")}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <InputField
          label="მინიმალური"
          type="number"
          onChange={handleChangeEvent("amountFrom")}
          value={params.amountFrom}
        />
        <Box
          sx={{
            width: "20px",
            height: "2px",
            backgroundColor: "black",
            opacity: 0.6,
          }}
        ></Box>
        <InputField
          label="მაქსიმალური"
          type="number"
          onChange={handleChangeEvent("amountTo")}
          value={params.amountTo}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <DateInput
          label="დასაწყისი"
          onChange={handleChangeDirectValue("dateFrom")}
          value={params.dateFrom}
        />
        <Box
          sx={{
            width: "20px",
            height: "2px",
            backgroundColor: "black",
            opacity: 0.6,
          }}
        ></Box>
        <DateInput
          label="დასასრული"
          onChange={handleChangeDirectValue("dateTo")}
          value={params.dateTo}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomButton onClick={handleApply}>Apply</CustomButton>
      </Box>
    </Box>
  );
}

export default DealsFilterModal;

import { Box, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import useGetSubStatusListQuery from "../../common/queries/useGetSubStatusListQuery";
import useGetLoanProductListQuery from "../../common/queries/useGetLoanProductListQuery";
import { useSearchParams } from "react-router-dom";
import { useStyles } from "./useStyles";
import { CustomButton, MultiSelect } from "../../components";

interface Props {
  setExpandedModalVisible: Dispatch<SetStateAction<boolean>>;
}

function ActiveFilterModal({ setExpandedModalVisible }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const styles = useStyles();
  const [params, setParams] = useState({
    productCodes: searchParams.getAll("productCodes"),
    progressSubStatuses: searchParams.getAll("progressSubStatuses"),
  });
  const { data: subStatusList } = useGetSubStatusListQuery();
  const { data: productList } = useGetLoanProductListQuery();

  const handleMultiSelectChange = (field: string) => {
    return function (value: SelectChangeEvent<string[]>) {
      setParams((prev) => ({
        ...prev,
        [field]: value,
      }));
    };
  };

  const handleApply = () => {
    setExpandedModalVisible(false);
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
    <Box sx={styles.ActiveFilterMainBox}>
      <Box sx={styles.ActiveFilterSecondaryBox}>
        <MultiSelect
          options={productList || []}
          label="პროდუქტი"
          value={params.productCodes}
          onChange={handleMultiSelectChange("productCodes")}
          inputValueKey="productCode"
        />
        <MultiSelect
          options={subStatusList || []}
          label="საბ სტატუსი"
          inputValueKey="subStatus"
          content="label"
          value={params.progressSubStatuses}
          onChange={handleMultiSelectChange("progressSubStatuses")}
        />
      </Box>
      <Box sx={styles.ActiveFilterButtonBox}>
        <CustomButton onClick={handleApply}>Apply</CustomButton>
      </Box>
    </Box>
  );
}

export default ActiveFilterModal;

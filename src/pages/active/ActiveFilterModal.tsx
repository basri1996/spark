import { Box, Button, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import MultiSelect from "../../components/fields/MultiSelect";
import useGetSubStatusListQuery from "../../common/queries/useGetSubStatusListQuery";
import useGetLoanProductListQuery from "../../common/queries/useGetLoanProductListQuery";
import { useSearchParams } from "react-router-dom";
import { useStyles } from "./useStyles";

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
    setSearchParams((searchParams) => {
      searchParams.delete("progressSubStatuses");
      searchParams.delete("productCodes");
      params.productCodes.forEach((code) => {
        searchParams.append("productCodes", code);
      });
      params.progressSubStatuses.forEach((status) => {
        searchParams.append("progressSubStatuses", status);
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
        <Button
          sx={styles.ActiveFilterButtonStyles}
          onClick={handleApply}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
}

export default ActiveFilterModal;

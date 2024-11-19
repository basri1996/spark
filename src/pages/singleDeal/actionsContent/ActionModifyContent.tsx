import FormComponent from "../../../components/form/FormComponent";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { IModifyData } from "../types";
import ControlledSingleSelect from "../../../components/form/ControlledElements/ControlledSingleSelect";
import useGetLoanProductListQuery from "../../../common/queries/useGetLoanProductListQuery";
import ControlledInput from "../../../components/form/ControlledElements/ControlledInput";
import { Currency } from "../../../dummyData";
import { Box, Button } from "@mui/material";
import useModifyDealMutation from "../mutations/useModifyDealMutation";
import { useParams } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

function ActionModifyContent({
  setActionType,
}: {
  setActionType: Dispatch<SetStateAction<string>>;
}) {
  const methods: UseFormReturn<IModifyData> = useForm<IModifyData>({});
  const { id } = useParams();
  const { data: selectOptions } = useGetLoanProductListQuery();
  const { mutate: ModifyDeal } = useModifyDealMutation();

  const onSubmit: SubmitHandler<IModifyData> = async (
    formData: IModifyData
  ) => {
    ModifyDeal(
      { id, data: formData },
      {
        onSuccess: () => {
          setActionType("");
        },
        onError: (error) => {},
      }
    );
  };

  return (
    <FormComponent methods={methods} onSubmit={onSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <ControlledSingleSelect
          label="Product"
          options={selectOptions || []}
          name="productCode"
          key="productCode"
        />
        <ControlledInput name="amount" label="Amount" type="number" />
        <ControlledSingleSelect
          label="Currency"
          options={Currency}
          name="currency"
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="submit"
            sx={{
              backgroundColor: (theme) => theme.palette.background.default,
              paddingX: "30px",
              border: "1px solid #5080ff",
              borderRadius: "5px",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </FormComponent>
  );
}

export default ActionModifyContent;
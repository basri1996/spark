import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { IModifyData } from "../types";
import useGetLoanProductListQuery from "../../../common/queries/useGetLoanProductListQuery";
import { Box } from "@mui/material";
import useModifyDealMutation from "../mutations/useModifyDealMutation";
import { useParams } from "react-router-dom";
import { useAction } from "../../../context/ActionContext";
import { useQueryClient } from "@tanstack/react-query";
import { ISingleDealResponse } from "../../../common/types";
import { useEffect } from "react";
import { Currency } from "../../../data";
import {
  ControlledInput,
  ControlledSingleSelect,
  CustomButton,
  FormComponent,
} from "../../../components";

function ActionModifyContent() {
  const methods: UseFormReturn<IModifyData> = useForm<IModifyData>({});
  const { id } = useParams();
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData<ISingleDealResponse>([
    "useGetSingleDealQuery",
    id,
  ]);
  const { data: selectOptions } = useGetLoanProductListQuery();
  const { mutate: ModifyDeal } = useModifyDealMutation();
  const { setActionType } = useAction();

  const onSubmit: SubmitHandler<IModifyData> = async (
    formData: IModifyData
  ) => {
    ModifyDeal(
      { id, data: formData },
      {
        onSuccess: () => {
          setActionType({ name: "", id: "" });
        },
        onError: (error) => {},
      }
    );
  };
  useEffect(() => {
    if (cachedData?.deal && selectOptions?.length) {
      const { product, amount, ccy } = cachedData.deal;
      const productCode = selectOptions?.find(
        (el) => el.name === product
      )?.productCode;
      const resetObject = { productCode, amount, currency: ccy };
      methods.reset(resetObject);
    }
  }, [cachedData, selectOptions, methods]);

  return (
    <FormComponent methods={methods} onSubmit={onSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <ControlledSingleSelect
          label="პროდუქტი"
          options={selectOptions || []}
          name="productCode"
          inputValueKey="productCode"
        />
        <ControlledInput name="amount" label="თანხა" type="number" />
        <ControlledSingleSelect
          label="ვალუტა"
          options={Currency}
          name="currency"
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomButton type="submit">Save</CustomButton>
        </Box>
      </Box>
    </FormComponent>
  );
}

export default ActionModifyContent;

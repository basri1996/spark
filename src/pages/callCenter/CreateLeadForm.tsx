import {
  ControlledInput,
  ControlledSingleSelect,
  CustomButton,
  FormComponent,
} from "../../components";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { Box } from "@mui/material";
import useGetLoanProductListQuery from "../../common/queries/useGetLoanProductListQuery";
import { CommunicationMethods } from "../../data";
import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import useCreateLeadMutation from "./mutations/useCreateLeadMutation";
import { Dispatch, SetStateAction } from "react";

function CreateLeadForm({
  setIsCreateModalVisible,
}: {
  setIsCreateModalVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const methods: UseFormReturn<any> = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });
  const { data: selectOptions } = useGetLoanProductListQuery();
  const { mutate: CreateLead } = useCreateLeadMutation();

  const onSubmit: SubmitHandler<any> = async (formData: any) => {
    CreateLead(formData, {
      onSuccess: () => {
        setIsCreateModalVisible(false);
      },
      onError: (error) => {
        methods.setError("name", {
          type: "manual",
          message: "Name is required",
        });
      },
    });
  };
  const HandleInputChange = (onChange: any, e: any) => {
    const regexPattern = new RegExp("^[ა-ჰs]+$");
    if (e.target.value === "" || regexPattern.test(e.target.value)) {
      onChange(e);
    }
  };
  const HandlePersonalNumberChange = (onChange: any, e: any) => {
    if (e.target.value.length < 12 && !e.target.value.includes(e) ) {
      onChange(e);
    }
  };

  return (
    <FormComponent methods={methods} onSubmit={onSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <ControlledInput
          name="full_name"
          label="სახელი და გვარი"
          type="text"
          regex="^[ა-ჰ\s]+$"
          HandleInputChange={HandleInputChange}
        />
        <ControlledInput
          name="personalNumber"
          label="პირადი ნომერი"
          type="number"
          HandleInputChange={HandlePersonalNumberChange}
        />
        <ControlledInput name="phone" label=" ტელეფონის ნომერი" type="number" />
        <ControlledSingleSelect
          label="პროდუქტი"
          options={selectOptions || []}
          name="productCode"
          inputValueKey="productCode"
        />
        <ControlledSingleSelect
          label="მოთხოვნის არხი"
          options={CommunicationMethods || []}
          name="supplier"
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomButton type="submit">Save</CustomButton>
        </Box>
      </Box>
    </FormComponent>
  );
}

export default CreateLeadForm;

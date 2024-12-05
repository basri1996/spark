import {
  ControlledInput,
  ControlledSingleSelect,
  CustomButton,
  FormComponent,
} from "../../components";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { Box } from "@mui/material";
import useGetLoanProductListQuery from "../../common/queries/useGetLoanProductListQuery";
import { CommunicationMethods, Currency } from "../../data";
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
    const regexPattern = new RegExp(/^[ა-ჰ\s]+$/);
    if (e.target.value === "" || regexPattern.test(e.target.value)) {
      onChange(e);
    }
  };
  const HandlePersonalNumberChange = (onChange: any, e: any) => {
    const regexPattern = new RegExp("^[0-9]*$");

    if (e.target.value.length < 12 && regexPattern.test(e.target.value)) {
      onChange(e);
    }
  };
  const HandlePhoneChange = (onChange: any, e: any) => {
    const regexPattern = new RegExp("^[0-9]*$");
    if (e.target.value === "" || regexPattern.test(e.target.value)) {
      onChange(e);
    }
  };

  return (
    <FormComponent methods={methods} onSubmit={onSubmit}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          width: "500px",
        }}
      >
        <ControlledInput
          name="name"
          label="სახელი და გვარი"
          type="text"
          regex="^[ა-ჰ\s]+$"
          HandleInputChange={HandleInputChange}
        />
        <ControlledInput
          name="personalId"
          label="პირადი ნომერი"
          type="text"
          HandleInputChange={HandlePersonalNumberChange}
        />
        <ControlledInput
          name="mobilePhone"
          label=" ტელეფონის ნომერი"
          type="text"
          HandleInputChange={HandlePhoneChange}
        />
        <ControlledInput
          name="amount"
          label="თანხა"
          type="text"
          HandleInputChange={HandlePhoneChange}
        />

        <ControlledSingleSelect
          label="ვალუტა"
          options={Currency || []}
          name="ccy"
        />

        <ControlledSingleSelect
          label="პროდუქტი"
          options={selectOptions || []}
          name="product"
          inputValueKey="productCode"
        />
        <ControlledSingleSelect
          label="მოთხოვნის არხი"
          options={CommunicationMethods || []}
          name="channel"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomButton type="submit">Save</CustomButton>
      </Box>
    </FormComponent>
  );
}

export default CreateLeadForm;

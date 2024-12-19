import { Box } from "@mui/material";
import {
  ControlledCommentInput,
  ControlledInput,
  CustomButton,
  FormComponent,
} from "../../components";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import useCreateGroupMutation from "./mutations/useCreateGroupMutation";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateGroupSchema from "./schema";

function CreateGroup({
  setExpandedModalVisible,
}: {
  setExpandedModalVisible: any;
}) {
  const methods: UseFormReturn<any> = useForm<any>({
    resolver: yupResolver(CreateGroupSchema),
    defaultValues: {},
  });
  const { mutate: createGroup } = useCreateGroupMutation();

  const onSubmit: SubmitHandler<any> = async (formData: any) => {
    createGroup(formData, {
      onSuccess: () => {
        setExpandedModalVisible(false);
      },
      onError: (error) => {
        // methods.setError("name", {
        //   type: "manual",
        //   message: "Name is required",
        // });
      },
    });
  };

  return (
    <FormComponent methods={methods} onSubmit={onSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "350px",
        }}
      >
        <ControlledInput name="name" label="ჯგუფის სახელი" type="text" />
        <ControlledCommentInput name="description" label="აღწერა" />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomButton type="submit">Save</CustomButton>
        </Box>
      </Box>
    </FormComponent>
  );
}

export default CreateGroup;

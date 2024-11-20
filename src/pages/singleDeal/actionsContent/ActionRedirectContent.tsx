import { Box, Button } from "@mui/material";
import useGetBranchesListQuery from "../../../common/queries/useGetBranchesListQuery";
import FormComponent from "../../../components/form/FormComponent";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { IRedirectObject } from "../types";
import useActivitiesMutation from "../mutations/useActivitiesMutation";
import ControlledSingleSelect from "../../../components/form/ControlledElements/ControlledSingleSelect";
import ControlledInput from "../../../components/form/ControlledElements/ControlledInput";
import ControlledCommentInput from "../../../components/form/ControlledElements/ControlledCommentInput";
import { useParams } from "react-router-dom";
import { useAction } from "../../../context/ActionContext";

function ActionRedirectContent() {
  const methods: UseFormReturn<IRedirectObject> = useForm<IRedirectObject>({});
  const { setActionType, callActionStep } = useAction();

  const { mutate: createActivity } = useActivitiesMutation();
  const { id } = useParams();
  const { data: branchList } = useGetBranchesListQuery();
  const isDelay = callActionStep === "COMMUNICATION_RESCHEDULED";
  const alreadySigned = callActionStep === "CLIENT_FILLED_IN_BRANCH";

  const onSubmit: SubmitHandler<IRedirectObject> = async (
    formData: IRedirectObject
  ) => {
    const attributes = Object.entries(formData?.attributes).map(
      ([key, value]) => ({
        key,
        value,
      })
    );
    createActivity(
      {
        id,
        data: {
          activityType: callActionStep,
          attributes,
          comment: formData?.comment,
        },
      },
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
        {!isDelay && (
          <ControlledSingleSelect
            name="attributes.BRANCH_ID"
            options={branchList || []}
            label="Branch"
            inputValueKey="branchId"
            content="branchDesc"
          />
        )}
        <ControlledCommentInput name="comment" label="Comment" />
        {!alreadySigned && (
          <ControlledInput
            shrink={true}
            type="date"
            name="attributes.COMMUNICATION_DATE"
            label="Communication Date"
          />
        )}
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
            Finish
          </Button>
        </Box>
      </Box>
    </FormComponent>
  );
}

export default ActionRedirectContent;

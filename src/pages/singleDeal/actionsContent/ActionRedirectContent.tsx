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
  const { setActionType, callActionStep, setCallActionStep } = useAction();
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
          setActionType({ name: "", id: "" });
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
            label="მისამართი"
            inputValueKey="branchId"
            content="branchDesc"
          />
        )}
        <ControlledCommentInput name="comment" label="კომენტარი" />
        {!alreadySigned && (
          <ControlledInput
            shrink={true}
            type="date"
            name="attributes.COMMUNICATION_DATE"
            label="თარიღი"
          />
        )}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            type="button"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              paddingX: "30px",
              color: (theme) => theme.palette.text.secondary,
              borderRadius: "4px",
            }}
            onClick={() => setCallActionStep("CLIENT_ANSWERED")}
          >
            Back
          </Button>

          <Button
            type="submit"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              paddingX: "30px",
              color: (theme) => theme.palette.text.secondary,
              borderRadius: "4px",
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

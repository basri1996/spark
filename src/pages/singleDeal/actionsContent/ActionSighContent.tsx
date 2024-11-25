import React, { useState } from "react";
import RadioPositionEnd from "../../../components/common/RadioGroupComponent";
import { Box, Button } from "@mui/material";
import { dealAcceptType } from "../../../dummyData";
import { useParams } from "react-router-dom";
import useActivitiesMutation from "../mutations/useActivitiesMutation";
import CommentInput from "../../../components/fields/CommentInput";
import useGetBranchesListQuery from "../../../common/queries/useGetBranchesListQuery";
import SingleSelect from "../../../components/fields/SingleSelect";
import { SelectChangeEvent } from "@mui/material";
import { useAction } from "../../../context/ActionContext";

function ActionSighContent() {
  const { id } = useParams();
  const { setActionType } = useAction();
  const [values, setValues] = useState<{
    radioValue: string;
    nextStep: string;
    comment: string;
    BRANCH_ID: string;
  }>({
    radioValue: dealAcceptType[0].id,
    nextStep: "",
    comment: "",
    BRANCH_ID: "",
  });

  const { data: branchList } = useGetBranchesListQuery();
  const { mutate: createActivity } = useActivitiesMutation();

  const handleFinish = () => {
    const attributes = [
      {
        key: "SIGNATURE_TYPE",
        value: values.nextStep,
      },
    ];
    if (values.BRANCH_ID) {
      attributes.push({
        key: "BRANCH_ID",
        value: values.BRANCH_ID,
      });
    }
    createActivity(
      {
        id,
        data: {
          activityType: "READY_FOR_SIGNATURE",
          comment: values.comment,
          attributes,
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
  const handleClick = () => {
    setValues((prev) => ({ ...prev, nextStep: prev.radioValue }));
  };
  const handleSet = (id: string) => {
    setValues((prev) => ({ ...prev, radioValue: id }));
  };

  return (
    <React.Fragment>
      {values?.nextStep ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {values.nextStep === "BRANCH" && (
            <SingleSelect
              onChange={(event: SelectChangeEvent<string>) =>
                setValues((prev) => ({
                  ...prev,
                  BRANCH_ID: event.target.value,
                }))
              }
              value={values.BRANCH_ID}
              label="Branch"
              options={branchList || []}
              inputValueKey="branchId"
              content="branchDesc"
            />
          )}
          <CommentInput
            onChange={(value: string) =>
              setValues((prev) => ({ ...prev, comment: value }))
            }
            value={values.comment}
            label="Comment"
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                paddingX: "30px",
                color: (theme) => theme.palette.text.secondary,
                borderRadius: "4px",
              }}
              onClick={handleFinish}
            >
              Finish
            </Button>
          </Box>
        </Box>
      ) : (
        <RadioPositionEnd
          list={dealAcceptType}
          setState={handleSet}
          handleClick={handleClick}
          isFinished={false}
          defaultValue={dealAcceptType[0].label}
        />
      )}
    </React.Fragment>
  );
}

export default ActionSighContent;

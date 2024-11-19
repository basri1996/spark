import React, { Dispatch, SetStateAction, useState } from "react";
import RadioPositionEnd from "../../../components/common/RadioGroupComponent";
import { Box, Button } from "@mui/material";
import { dealAcceptType } from "../../../dummyData";
import { useParams } from "react-router-dom";
import useActivitiesMutation from "../mutations/useActivitiesMutation";
import CommentInput from "../../../components/fields/CommentInput";
import useGetBranchesListQuery from "../../../common/queries/useGetBranchesListQuery";
import SingleSelect from "../../../components/fields/SingleSelect";
import { SelectChangeEvent } from "@mui/material";

function ActionSighContent({
  setActionType,
}: {
  setActionType: Dispatch<SetStateAction<string>>;
}) {
  const { id } = useParams();
  const [values, setValues] = useState<{
    radioValue: string;
    nextStep: string;
    comment: string;
    BRANCH_ID: string;
  }>({
    radioValue: "",
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
          setActionType("");
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
              value={values.comment}
              label="Branch"
              options={branchList || []}
              key="branchId"
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
                backgroundColor: (theme) => theme.palette.background.default,
                paddingX: "30px",
                border: "1px solid #5080ff",
                borderRadius: "5px",
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
          state={values.radioValue}
          setState={handleSet}
          handleClick={handleClick}
          isFinished={false}
        />
      )}
    </React.Fragment>
  );
}

export default ActionSighContent;
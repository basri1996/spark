import { Box, Button } from "@mui/material";
import Toggle from "../../../components/fields/Toggle";
import { RiskOptions } from "../../../dummyData";
import useChangeTagsMutation from "../mutations/useChangeTagsMutation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAction } from "../../../context/ActionContext";
import Divider from "@mui/material/Divider";
import { useQueryClient } from "@tanstack/react-query";
import { ISingleDealResponse } from "../../../common/types";

function ActionRiskContent() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData<ISingleDealResponse>([
    "useGetSingleDealQuery",
    id,
  ]);
  const { mutate: changeTags } = useChangeTagsMutation();
  const [toggleState, setToggleState] = useState<{ [key: string]: boolean }>({
    RISK_ASSESSMENT: false,
    SENT_FOR_EVALUATION: false,
    CONSIDERED_FOR_APPROVAL: false,
  });
  const { setActionType } = useAction();

  const handleClick = () => {
    const tags = Object.entries(toggleState)
      .filter(([_, value]) => value)
      .map(([key]) => key);
    changeTags(
      {
        id,
        data: { tags },
      },
      {
        onSuccess: () => {
          setActionType({ name: "", id: "" });
        },
        onError: (error) => {},
      }
    );
  };

  const handleChange = (checked: boolean, id: string) => {
    setToggleState((prev) => ({ ...prev, [id]: checked }));
  };

  useEffect(() => {
    if (cachedData?.deal) {
      const statusChecker = (tag: string) => {
        return cachedData?.deal.tags?.includes(tag) ? true : false;
      };
      setToggleState({
        RISK_ASSESSMENT: statusChecker("RISK_ASSESSMENT"),
        SENT_FOR_EVALUATION: statusChecker("SENT_FOR_EVALUATION"),
        CONSIDERED_FOR_APPROVAL: statusChecker("CONSIDERED_FOR_APPROVAL"),
      });
    }
  }, [cachedData]);
  return (
    <>
      {RiskOptions.map((el) => (
        <>
          <Toggle
            label={el.name}
            checked={toggleState[el.id]}
            onChange={handleChange}
            id={el.id}
          />
          <Divider />
        </>
      ))}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={handleClick}
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            paddingX: "30px",
            border: "1px solid #5080ff",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Save
        </Button>
      </Box>
    </>
  );
}

export default ActionRiskContent;

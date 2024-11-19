import { Box, Button } from "@mui/material";
import Toggle from "../../../components/fields/Toggle";
import { RiskOptions } from "../../../dummyData";
import useChangeTagsMutation from "../mutations/useChangeTagsMutation";
import { useParams } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";

function ActionRiskContent({
  setActionType,
}: {
  setActionType: Dispatch<SetStateAction<string>>;
}) {
  const { id } = useParams();
  const { mutate: changeTags } = useChangeTagsMutation();
  const [toggleState, setToggleState] = useState<{ [key: string]: boolean }>({
    RISK_ASSESSMENT: false,
    SENT_FOR_EVALUATION: false,
    CONSIDERED_FOR_APPROVAL: false,
  });

  const handleClick = () => {
    const tags = Object.entries(toggleState)
      .filter(([key, value]) => value)
      .map(([key]) => key);
    changeTags(
      {
        id,
        data: { tags },
      },
      {
        onSuccess: () => {
          setActionType("");
        },
        onError: (error) => {},
      }
    );
  };

  const handleChange = (checked: boolean, id: string) => {
    setToggleState((prev) => ({ ...prev, [id]: checked }));
  };
  return (
    <>
      {RiskOptions.map((el) => (
        <Toggle
          label={el.name}
          checked={toggleState[el.id]}
          onChange={handleChange}
          id={el.id}
        />
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

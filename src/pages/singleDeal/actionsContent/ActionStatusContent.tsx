import RadioPositionEnd from "../../../components/common/RadioGroupComponent";
import { useState } from "react";
import { statusType } from "../../../dummyData";
import { useParams } from "react-router-dom";
import useChangeStatusMutation from "../mutations/useChangeStatusMutation";
import { useAction } from "../../../context/ActionContext";

function ActionStatusContent() {
  const [selectedValue, setSelectedValue] = useState<string>();
  const { setActionType } = useAction();
  const { id } = useParams();
  const { mutate: changeStatus } = useChangeStatusMutation();

  const handleClick = () => {
    changeStatus(
      {
        id,
        data: {
          status: selectedValue,
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
    <>
      <RadioPositionEnd
        list={statusType}
        state={selectedValue}
        setState={setSelectedValue}
        handleClick={handleClick}
        isFinished={true}
      />
    </>
  );
}

export default ActionStatusContent;

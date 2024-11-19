import RadioPositionEnd from "../../../components/common/RadioGroupComponent";
import { Dispatch, SetStateAction, useState } from "react";
import { statusType } from "../../../dummyData";
import { useParams } from "react-router-dom";
import useChangeStatusMutation from "../mutations/useChangeStatusMutation";

function ActionStatusContent({
  setActionType,
}: {
  setActionType: Dispatch<SetStateAction<string>>;
}) {
  const [selectedValue, setSelectedValue] = useState<string>();
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

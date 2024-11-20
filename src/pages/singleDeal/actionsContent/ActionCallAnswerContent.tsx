import RadioPositionEnd from "../../../components/common/RadioGroupComponent";
import { useState } from "react";
import { responseTypeNext } from "../../../dummyData";
import { useAction } from "../../../context/ActionContext";

function ActionCallAnswerContent() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const { setCallActionStep } = useAction();

  const handleClick = () => {
    setCallActionStep(selectedValue);
  };

  return (
    <RadioPositionEnd
      list={responseTypeNext}
      setState={setSelectedValue}
      handleClick={handleClick}
    />
  );
}

export default ActionCallAnswerContent;

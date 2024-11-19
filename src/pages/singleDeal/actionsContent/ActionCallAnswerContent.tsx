import RadioPositionEnd from "../../../components/common/RadioGroupComponent";
import { useState } from "react";
import { responseTypeNext } from "../../../dummyData";

function ActionCallAnswerContent({ setStep }: any) {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleClick = () => {
    setStep(selectedValue);
  };

  return (
    <RadioPositionEnd
      list={responseTypeNext}
      state={selectedValue}
      setState={setSelectedValue}
      handleClick={handleClick}
    />
  );
}

export default ActionCallAnswerContent;

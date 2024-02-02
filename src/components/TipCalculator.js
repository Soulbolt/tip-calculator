import Reset from "./Reset";
import OutPut from "./OutPut";
import SelectPercentage from "./SelectPercentage";
import BillInput from "./BillInput";
import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);

  const tip = (bill * (percent1 + percent2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercent1(0);
    setPercent2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percent={percent1} onSelect={setPercent1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percent={percent2} onSelect={setPercent2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <OutPut bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

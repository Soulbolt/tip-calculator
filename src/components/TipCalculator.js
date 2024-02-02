import Reset from "./Reset";
import OutPut from "./OutPut";
import SelectPercentage from "./SelectPercentage";
import BillInput from "./BillInput";
import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage> How did you like the service?</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <OutPut bill={bill} />
      <Reset />
    </div>
  );
}

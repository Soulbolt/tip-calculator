import Reset from "./Reset";
import OutPut from "./OutPut";
import SelectPercentage from "./SelectPercentage";
import BillInput from "./BillInput";

export default function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage> How did you like the service?</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <OutPut />
      <Reset />
    </div>
  );
}

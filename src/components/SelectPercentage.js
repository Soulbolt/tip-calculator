export default function SelectPercentage({ children }) {
  return (
    <div>
      {children}
      <select>
        <option value="0">Disatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Amazing! (20%)</option>
      </select>
    </div>
  );
}

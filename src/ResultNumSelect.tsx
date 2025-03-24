type ResultNumSelectProps = {
  value: number;
  onChange: (e: React.SyntheticEvent) => void;
};
export default function ResultNumSelect({
  value,
  onChange,
}: ResultNumSelectProps) {
  return (
    <>
      <label htmlFor="amount" className="mr-2 text-sm font-medium">
        Number of Results
      </label>
      <select
        value={value}
        onChange={onChange}
        id="amount"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-400 focus:border-slate-400 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
      >
        <option value="05">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
      </select>
    </>
  );
}

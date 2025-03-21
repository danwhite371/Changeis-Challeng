import BookItem from "./BookItem";
import { Book } from "./types";
import { useState } from "react";
import ResultNumSelect from "./ResultNumSelect";
import useFakerapiData from "./useFakerapiData";

export default function Main() {
  const [numResults, setNumResults] = useState<number>(10);
  const data = useFakerapiData(numResults);
  return (
    <>
      <div className="flex justify-center items-center h-12 text-2xl font-bold border-b border-b-slate-500 mb-2">
        Dan White's Changeis Challenge
      </div>
      <div className="flex justify-center mb-2">
        <div className="w-64">
          <ResultNumSelect
            value={numResults}
            onChange={(e: React.SyntheticEvent) => {
              const target = e.target as HTMLSelectElement;
              setNumResults(Number(target.value));
            }}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center max-w-5xl gap-1">
          {data &&
            data.length > 0 &&
            data.map((item) => <BookItem key={item.id} item={item as Book} />)}
        </div>
      </div>
    </>
  );
}

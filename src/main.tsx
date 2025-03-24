import BookItem from "./BookItem";
import { Book } from "./types";
import { useEffect, useState, ChangeEvent } from "react";
import ResultNumSelect from "./ResultNumSelect";
import useFakerapiData from "./useFakerapiData";

type DarkModeSelectProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};
function DarkModeSelect({ value, onChange }: DarkModeSelectProps) {
  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-400 focus:border-slate-400 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
      value={value}
      onChange={onChange}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}

const updateDocDarkClass = () =>
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

const updateLocalStorageTheme = (value: string) => {
  if (value === "dark" || value === "light") {
    localStorage.theme = value;
  } else {
    localStorage.removeItem("theme");
  }
};

const getCurrentTheme = () =>
  localStorage.theme == undefined ? "system" : localStorage.theme;

export default function Main() {
  const [numResults, setNumResults] = useState<number>(10);
  const [colorMode, setColorMode] = useState<string>(getCurrentTheme());
  useEffect(() => {
    updateDocDarkClass();
  }, []);
  function colorModeChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    updateLocalStorageTheme(value);
    updateDocDarkClass();
    setColorMode(value);
  }
  const data = useFakerapiData(numResults);
  return (
    <>
      <div className="flex justify-between items-center h-12 text-2xl font-bold border-b border-b-slate-500 mb-2">
        <span>Dan White's Changeis Challenge</span>
        <span>
          <span className="font-medium ml-2">
            <DarkModeSelect value={colorMode} onChange={colorModeChange} />
          </span>
          <div className="w-64">
            <ResultNumSelect
              value={numResults}
              onChange={(e: React.SyntheticEvent) => {
                const target = e.target as HTMLSelectElement;
                setNumResults(Number(target.value));
              }}
            />
          </div>
        </span>
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

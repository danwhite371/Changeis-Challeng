import { Book } from "./types";

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;

type BookProps = { item: Book };
export default function BookItem({ item }: BookProps) {
  return (
    <div className="border border-slate-300 p-2 relative h-[330px] w-[250px]">
      {/* <div className="absolute top-0 left-0 h-[250px] w-[250px] -z-10">
        <img src={`https://picsum.photos/250/250?${getRandomInt(1, 100)}`} />
      </div> */}
      <div className="z-20 bg-white text-black px-1 mb-1 dark:bg-slate-800 dark:text-white">
        {item.title}
      </div>
      <div className="z-20 bg-white/85 text-black italic text-sm px-1 mb-1 dark:bg-slate-800/85 dark:text-white">
        {item.author}
      </div>
      <img src={`https://picsum.photos/250/100?${getRandomInt(1, 10000)}`} />
      <div className="z-20 bg-white/85 px-1 text-black dark:bg-slate-800/85 dark:text-white">
        {item.description}
      </div>
    </div>
  );
}

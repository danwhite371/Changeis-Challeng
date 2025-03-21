import { Book } from "./types";

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;

type BookProps = { item: Book };
export default function BookItem({ item }: BookProps) {
  return (
    <div className="border border-slate-300 p-2 relative h-[250px] w-[250px]">
      <div className="absolute top-0 left-0 h-[250px] w-[250px] -z-10">
        {/* <img src="https://placehold.co/250" /> */}
        <img src={`https://picsum.photos/250/250?${getRandomInt(1, 100)}`} />
        {/* The image coming from fakerapi, from placeimg.com is no longer working */}
      </div>
      <div className="z-20 bg-slate-500 text-white px-1 mb-1">{item.title}</div>
      <div className="z-20 bg-white/85 text-black italic text-sm px-1 mb-1">
        {item.author}
      </div>
      <div className="z-20 bg-white/85 px-1">{item.description}</div>
    </div>
  );
}

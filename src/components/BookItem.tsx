import { Book } from "../types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;

type BookProps = { item: Book; full?: boolean };
export default function BookItem({ item, full = false }: BookProps) {
  return (
    <Card className={`${full ? "w-[350px]" : "h-[350] w-[350px]"}`}>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={`https://picsum.photos/350/100?${getRandomInt(1, 10000)}`} />
        <p>{item.description}</p>
      </CardContent>
      {full && (
        <CardFooter>
          <dl className="grid grid-cols-[90px_auto] gap-1 mt-2">
            <dt className="font-medium">Genre</dt>
            <dd className="font-light">{item.genre}</dd>
            <dt className="font-medium">ISBN</dt>
            <dd className="font-light">{item.isbn}</dd>
            <dt className="font-medium">Publisher</dt>
            <dd className="font-light">{item.publisher}</dd>
            <dt className="font-medium">Published</dt>
            <dd className="font-light">{item.published}</dd>
          </dl>
        </CardFooter>
      )}
    </Card>
  );
}

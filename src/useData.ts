import { useEffect, useState } from "react";
import { Book } from "./types";

export default function useData(quant: number) {
  const makeUrl = (quantity: number) =>
    `https://fakerapi.it/api/v2/books?_quantity=${quantity}`;
  const [data, setData] = useState<Book[]>([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(makeUrl(quant));
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setData(json.data);
        console.log(json);
      } catch (e) {
        console.error(e);
      }
    }
    console.log("Main - useEffect");
    getData();
  }, [quant]);
  console.log("useData", quant);
  console.log(data);
  return data;
}

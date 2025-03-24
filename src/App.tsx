/// <reference types="vite-plugin-svgr/client" />
import "./App.css";
import CcSVG from "./assets/cc.svg?react";
import { ModeToggle } from "./components/mode-toggle";
import useFakerapiData from "./hooks/useFakerapiData";
import BookItem from "./components/BookItem";
import { Book } from "./types";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from "./components/ui/select";
import { Label } from "./components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { HoverCard, HoverCardTrigger } from "./components/ui/hover-card";
import { HoverCardContent } from "@radix-ui/react-hover-card";

const resultValues = [5, 10, 15, 20, 30, 35];
const defaultResultsValue = 10;

function App() {
  const [numResults, setNumResults] = useState<number>(defaultResultsValue);
  const data = useFakerapiData(numResults);
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      <div className="border-grid flex flex-1 flex-col">
        <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container-wrapper">
            <div className="container flex h-14 justify-between items-center gap-2 md:gap-4">
              <a className="mr-4 flex items-center gap-2 lg:mr-6" href="/">
                <CcSVG />
                <span className="hidden font-bold lg:inline-block">
                  Dan's Changeis Challenge
                </span>
              </a>
              <div className="flex items-center">
                <div className="mr-2">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Label className="dark:bg-slate-800 bg-slate-100 p-2 rounded-sm">
                        Info
                      </Label>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="bg-popover border border-dashed border-slate-300 dark:border-slate-500 p-2">
                        <label className="font-bold">Used</label>
                        <ul>
                          <li>Vite</li>
                          <li>TypeScript</li>
                          <li>Tailwind</li>
                          <li>Radix UI</li>
                          <li>shadcn/ui</li>
                        </ul>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <Label className="mr-2">Results</Label>
                <span className="mr-2">
                  <Select
                    onValueChange={(value) => setNumResults(Number(value))}
                  >
                    <SelectTrigger>{`${numResults}`}</SelectTrigger>
                    <SelectContent>
                      {resultValues.map((value) => (
                        <SelectItem value={value.toString()}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </span>
                <ModeToggle />
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="container-wrapper">
            <Tabs
              className="flex justify-center items-center mt-2"
              defaultValue="flex"
            >
              <TabsList>
                <TabsTrigger value="flex">Flex</TabsTrigger>
                <TabsTrigger value="carousel">Carousel</TabsTrigger>
              </TabsList>
              <TabsContent value="flex">
                <div className="mt-2 mb-4 container flex flex-wrap gap-2 justify-center">
                  {data &&
                    data.length > 0 &&
                    data.map((item) => (
                      <BookItem key={item.id} item={item as Book} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="carousel">
                <div className="w-[350px]">
                  <Carousel>
                    <CarouselContent>
                      {data &&
                        data.length > 0 &&
                        data.map((item) => (
                          <CarouselItem>
                            <BookItem item={item as Book} full={true} />
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

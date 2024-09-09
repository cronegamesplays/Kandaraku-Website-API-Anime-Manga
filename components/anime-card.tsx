import { Card, CardContent } from "@/ui/card";
import { Mic, Subtitles } from "lucide-react";

export default function AnimeCard(props: {
  authorName: string;
  authorImageLink?: string;
  animeTitle: string;
  animeDubCount?: number;
  animeSubCount?: number;
  animeImageLink?: string;
}) {
  return (
    <>
      <Card style={{
        backgroundColor: "#2e1065",
        backgroundImage: `linear-gradient(to top, rgba(0 0 0 / .8) 30%, transparent), url("${props.animeImageLink}")`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }} className="bloc max-w-80 aspect-[9/12] rounded-xl">
        <CardContent className="flex flex-col justify-end h-full end p-2 sm:min-w-[20ch]">
          <div>
            <h3 className="text-sm line-clamp-1 mb-1.5">
              {props.animeTitle}
            </h3>
            <div className="flex gap-x-2">
              {props.animeDubCount != undefined && props.animeDubCount > 0 &&
                <span className="flex gap-1 items-center text-sm bg-purple-800 rounded-md px-1 py-0.5">
                  <Mic className="size-3" /> {props.animeDubCount > 1 && props.animeDubCount}
                </span>}
              {props.animeSubCount != undefined && props.animeSubCount > 0 &&
                <span className="flex gap-1 items-center text-sm bg-zinc-800 rounded-md px-1 py-0.5">
                  <Subtitles className="size-3" /> {props.animeSubCount > 1 && props.animeSubCount}
                </span>}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

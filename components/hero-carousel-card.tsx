import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { PlayCircle } from "react-feather";
import Link from "next/link";
import { ChartColumn, EyeIcon, MicIcon, StarIcon, Subtitles, ThumbsUpIcon, VideoIcon } from "lucide-react";

export default function HeroCarouselCard({
  username,
  userImage,
  title,
  description,
  isDubbed,
  upvotes,
  views,
  studio,
  rank,
  image,
  hating,
  link,
  // index,
}: {
  username: string;
  userImage: string;
  title: string;
  description: string;
  isDubbed: boolean;
  upvotes: number;
  views: number;
  studio: string;
  rank: number;
  image: string;
  hating: number;
  link: string;
  index: number;
}) {
  return (
    <>
      <Card style={{
        backgroundImage: `linear-gradient(to bottom, transparent, black), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} className="h-[70vh] w-full overflow-hidden border-none max-h-[520px]">
        <CardContent className="h-full w-full flex flex-col p-2 justify-between sm:p-4 md:p-6">
          <div className="bg-zinc-900 size-fit rounded-xl p-2 pe-4 shadow flex gap-2 items-center">
            <Image
              width={120}
              height={120}
              src={userImage}
              alt={username}
              className="size-6 sm:size-8 rounded-full border-2 border-white"
            />
            <span className="text-sm sm:text-md">
              {username}
            </span>
          </div>
          <div className="mb-4 space-y-3 p-1">
            <h2 className="font-bold text-xl sm:text-2xl">
              {title}
            </h2>
            <div className="flex flex-wrap text-sm items-center gap-1">
              <span className="block bg-purple-700 w-fit p-1 px-2 rounded-sm">
                {isDubbed ? <MicIcon className="size-5" /> : <Subtitles className="size-5" />}
              </span>
              <span className="flex items-center gap-1 bg-purple-700 w-fit p-1 ps-2 rounded-sm pe-2">
                <StarIcon className="size-4" />
                {hating}
              </span>
              <span className="flex items-center gap-1 bg-zinc-700 w-fit p-1 ps-2 rounded-sm pe-2">
                <VideoIcon className="size-4" />
                {studio}
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 w-fit p-1 ps-2 rounded-sm pe-2">
                <ChartColumn className="size-4" />
                #{rank}
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 w-fit p-1 ps-2 rounded-sm pe-2">
                <ThumbsUpIcon className="size-4" />
                {upvotes}
              </span>
              <span className="flex items-center gap-1 bg-zinc-800 w-fit p-1 ps-2 rounded-sm pe-2">
                <EyeIcon className="size-4" />
                {views}
              </span>
            </div>
            <p className="text-sm sm:text-md">
              {description}
            </p>
            <Link href={link} className="block">
              <Button className="flex items-center gap-2 sm:text-lg bg-purple-600 text-white hover:text-black">
                <PlayCircle />
                Assistir agora
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

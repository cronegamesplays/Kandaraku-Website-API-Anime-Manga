import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";
import { Calendar, ChartColumn, Clock, Eye, Mic, Play, StarIcon, Subtitles, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomepageAnimeBanner(props: {
  authorName: string;
  authorImageLink?: string;
  authorProfileLink: string;
  animeTitle: string;
  animeDescription: string;
  animeStudioName: string;
  animeImageLink?: string;
  animeEpisodeDuration: number;
  animeDubCount?: number;
  animeSubCount?: number;
  createdAt: Date;
  animeLink: string;
  likes: number;
  views: number;
  rank: number;
  rate: number;
}) {
  const convertedDuration = convertMilliseconds(props.animeEpisodeDuration);

  return (
    <>
      <Card style={{
        backgroundColor: "#2e1065",
        backgroundImage: `linear-gradient(to top, rgba(0 0 0 / .9) 30%, transparent), url("${props.animeImageLink}")`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }} className="rounded-sm overflow-hidden">
        <CardContent className="h-[85vh] min-h-[360px] max-h-[520px] min-w-32 flex flex-col justify-end p-4 md:p-8 lg:p-12">
          <div className="mb-4">
            <Link href={props.authorProfileLink} className="flex flex-nowrap gap-x-2 items-center text-sm mb-3">
              <div className="bg-orange-500 rounded-full border-2 border-white size-8 grid place-items-center shadow-md">
                {props.authorImageLink ?
                  <Image
                    height={120}
                    width={120}
                    alt="Foto de perfil do usuário."
                    src={props.authorImageLink}
                  /> :
                  <span className="scale-75">
                    {getInitials(props.authorName)}
                  </span>
                }
              </div>
              <span className="underline underline-offset-4 shadow-md">
                {props.authorName}
              </span>
            </Link>
            <h2 className="text-2xl font-bold mb-3">{props.animeTitle}</h2>
            <div className="flex gap-3.5 flex-wrap mb-3">
              <span className="flex gap-1 items-center text-sm">
                <Clock className="size-4" /> {
                  convertedDuration.hours ?
                    `${convertedDuration.hours}h` :
                    convertedDuration.minutes ?
                      `${convertedDuration.minutes}m` :
                      `${convertedDuration.seconds}s`
                }
              </span>
              <span className="flex gap-1 items-center text-sm">
                <Calendar className="size-4" /> {formatBannerDate(props.createdAt)}
              </span>
              <div className="flex gap-x-2">
                {props.animeDubCount != undefined && props.animeDubCount > 0 &&
                  <span className="flex gap-1 items-center text-sm bg-purple-800 rounded-md px-2 py-1">
                    <Mic className="size-4" /> {props.animeDubCount > 1 && props.animeDubCount}
                  </span>}
                {props.animeSubCount != undefined && props.animeSubCount > 0 &&
                  <span className="flex gap-1 items-center text-sm bg-zinc-800 rounded-md px-2 py-1">
                    <Subtitles className="size-4" /> {props.animeSubCount > 1 && props.animeSubCount}
                  </span>}
              </div>
            </div>
            <p className="line-clamp-3 mb-3">{props.animeDescription}</p>
            <div className="flex gap-x-5 gap-y-5 items-center flex-wrap">
              <Link href={props.animeLink} className="block">
                <Button variant="secondary" className="bg-purple-800 hover:bg-purple-900 hover:scale-105 px-4">
                  <Play className="size-6 me-2" /> Assistir agora
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <span className="flex gap-1 items-center text-sm">
                  <ThumbsUp className="size-4" /> {formatShortNumber(props.likes)}
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <Eye className="size-4" /> {formatShortNumber(props.views)}
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <ChartColumn className="size-4" /> #{formatShortNumber(props.rank)}
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <StarIcon className="size-4" /> {props.rate}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card >
    </>
  );
}

function getInitials(name: string): string {
  const names = name.trim().split(/\s+/);
  if (names.length === 1) {
    return names[0].slice(0, 2);
  }

  const firstInitial = names[0][0].toUpperCase();
  const lastInitial = names[names.length - 1][0].toUpperCase();

  return `${firstInitial}${lastInitial}`;
}

function formatShortNumber(num: number): string {
  const units = ["", "K", "M", "B", "T"];
  const magnitude = Math.floor(Math.log10(Math.abs(num)) / 3);

  if (magnitude === 0) {
    return num.toString();
  }

  const shortened = num / Math.pow(10, magnitude * 3);
  return `${shortened.toFixed(1).replace(/\.0$/, "")}${units[magnitude]}`;
}

function convertMilliseconds(ms: number): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours,
    minutes,
    seconds,
  };
}

function formatBannerDate(date: Date): string {
  const year = date.getFullYear();
  const months = [
    "Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.",
    "Oct.", "Nov.", "Dec.",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${year} ${month} ${day}`;
}

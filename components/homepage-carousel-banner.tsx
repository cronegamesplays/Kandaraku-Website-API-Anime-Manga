import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";
import { formatBannerDate, formatInitials, formatMilliseconds, formatShortNumber } from "@/utils/format";
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
  const formatedDuration = formatMilliseconds(props.animeEpisodeDuration);

  return (
    <>
      <Card style={{
        backgroundColor: "#2e1065",
        backgroundImage: `linear-gradient(to top, rgba(0 0 0 / .9) 30%, transparent), url("${props.animeImageLink}")`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }} className="rounded-3xl overflow-hidden">
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
                    {formatInitials(props.authorName)}
                  </span>
                }
              </div>
              <span className="underline underline-offset-4 shadow-md">
                {props.authorName}
              </span>
            </Link>
            <h3 className="text-2xl font-bold mb-3">{props.animeTitle}</h3>
            <div className="flex gap-3.5 flex-wrap mb-3">
              <span className="flex gap-1 items-center text-sm">
                <Clock className="size-4" /> {
                  formatedDuration.hours ?
                    `${formatedDuration.hours}h` :
                    formatedDuration.minutes ?
                      `${formatedDuration.minutes}m` :
                      `${formatedDuration.seconds}s`
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

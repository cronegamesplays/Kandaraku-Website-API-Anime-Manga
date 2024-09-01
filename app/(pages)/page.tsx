import HomepageCarousel from "@/components/homepage-carousel";
import { Card, CardContent } from "@/ui/card";
import { formatInitials } from "@/utils/format";
import { Mic, Subtitles, Tv } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomepageCarousel />
      <div className="space-y-24 mb-24 mt-24">
        <section className="px-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Tv className="size-10" />
            Lançamentos
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(10rem, 45%), 1fr))",
            gap: "1.5rem",
            marginTop: "1.5rem",
          }}>
            {Array.from({ length: 24 }).map((_, key) => (
              <AnimeCard
                key={key}
                authorName="Pedro Gameplays"
                animeTitle="Berserk of Gluttony"
                animeImageLink="https://cdn.noitatnemucod.net/thumbnail/300x400/100/c2197d5d02bb3b238ed3c7c15664659f.jpg"
                animeDubCount={5}
                animeSubCount={12}
              />
            ))}
          </div>
        </section>
        <section className="px-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Tv className="size-10" />
            Animes adicionados recentemente
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(10rem, 45%), 1fr))",
            gap: "1.5rem",
            marginTop: "1.5rem",
          }}>
            {Array.from({ length: 14 }).map((_, key) => (
              <AnimeCard
                key={key}
                authorName="Pedro Gameplays"
                animeTitle="Berserk of Gluttony"
                animeImageLink="https://cdn.noitatnemucod.net/thumbnail/300x400/100/c2197d5d02bb3b238ed3c7c15664659f.jpg"
                animeDubCount={5}
                animeSubCount={12}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function AnimeCard(props: {
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
        backgroundImage: `linear-gradient(to top, rgba(0 0 0 / .9) 30%, transparent), url("${props.animeImageLink}")`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }} className="bloc max-w-40 aspect-[9/12] rounded-xl">
        <CardContent className="flex flex-col justify-end h-full end p-2">
          <div>
            <div className="flex gap-1 items-center mb-2">
              <div className="scale-75 bg-yellow-500 rounded-full border-2 border-white size-8 grid place-items-center shadow-md">
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
              <span className="underline underline-offset-4 shadow-md text-[.75rem]">
                {props.authorName}
              </span>
            </div>
            <h3 className="font-bold text-sm line-clamp-1 mb-1.5">
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

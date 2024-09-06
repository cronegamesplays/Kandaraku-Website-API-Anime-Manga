import HomepageCarousel from "@/components/homepage-carousel";
import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";
import { Mic, PlayCircle, Subtitles, Tv } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <HomepageCarousel />
      <div className="space-y-24 mb-24 mt-24">
        <section>
          <SectionTitle
            title="Lançamentos"
            icon={<Tv className="sm:size-10" />}
            seeMoreLink="#"
          />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(13rem, 45%), 1fr))",
            marginTop: "1.5rem",
          }} className="gap-3 sm:gap-6">
            {Array.from({ length: 5 }).map((_, key) => (
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
        <section>
          <SectionTitle
            title="Recentes"
            icon={<PlayCircle className="sm:size-10" />}
            seeMoreLink="#"
          />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(13rem, 45%), 1fr))",
            marginTop: "1.5rem",
          }} className="gap-3 sm:gap-6">
            {Array.from({ length: 5 }).map((_, key) => (
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

function SectionTitle(props: {
  title: string,
  icon: ReactNode,
  seeMoreLink?: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-3 border-b pb-4">
        <h2 className="flex items-center text-nowrap gap-4 font-black sm:text-2xl text-xl">
          {props.icon} {props.title}
        </h2>
        {props.seeMoreLink && <>
          <Link href={props.seeMoreLink}>
            <Button variant="secondary" className="bg-purple-800 hover:bg-purple-950">
              Ver mais
            </Button>
          </Link>
        </>}
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
        backgroundImage: `linear-gradient(to top, rgba(0 0 0 / .8) 30%, transparent), url("${props.animeImageLink}")`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }} className="bloc max-w-80 aspect-[9/12] rounded-xl">
        <CardContent className="flex flex-col justify-end h-full end p-2">
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

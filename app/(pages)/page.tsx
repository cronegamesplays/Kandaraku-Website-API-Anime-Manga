import AnimeCard from "@/components/anime-card";
import AnimeCarousel from "@/components/anime-carousel";
import HomepageCarousel from "@/components/homepage-carousel";
import SectionTitle from "@/components/section-title";
import { PlayCircle, Tv } from "lucide-react";

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
          <div className="mt-6">
            <AnimeCarousel
              animeCards={Array.from({ length: 10 }).map((_, key) =>
                <>
                  <AnimeCard
                    key={key}
                    authorName="Pedro Gameplays"
                    animeTitle="Berserk of Gluttony"
                    animeImageLink="https://cdn.noitatnemucod.net/thumbnail/300x400/100/c2197d5d02bb3b238ed3c7c15664659f.jpg"
                    animeDubCount={5}
                    animeSubCount={12}
                  />
                </>
              )}
            />
          </div>
        </section>
        <section>
          <SectionTitle
            title="Recentes"
            icon={<PlayCircle className="sm:size-10" />}
            seeMoreLink="#"
          />
          <div className="mt-6">
            <AnimeCarousel
              animeCards={Array.from({ length: 10 }).map((_, key) =>
                <>
                  <AnimeCard
                    key={key}
                    authorName="Pedro Gameplays"
                    animeTitle="Berserk of Gluttony"
                    animeImageLink="https://cdn.noitatnemucod.net/thumbnail/300x400/100/c2197d5d02bb3b238ed3c7c15664659f.jpg"
                    animeDubCount={5}
                    animeSubCount={12}
                  />
                </>
              )}
            />
          </div>
        </section>
      </div>
    </>
  );
}

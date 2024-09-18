'use client'

import AnimeCard from "@/components/anime-card";
import AnimeCarousel from "@/components/anime-carousel";
import HomepageCarousel from "@/components/homepage-carousel";
import SectionTitle from "@/components/section-title";
import { PlayCircle, Tv, DiamondPlus, Clapperboard } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <HomepageCarousel />
      <div className="space-y-16 sm:space-y-24 mb-16 sm:mb-24 mt-16 sm:mt-24">
        <section>
          <SectionTitle
            title={t('lançamentos')}
            icon={<Tv className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
            seeMoreLink="#"
          />
          <div className="mt-4 sm:mt-6">
            <AnimeCarousel
              animeCards={Array.from({ length: 10 }).map((_, key) => (
                <AnimeCard
                  key={key}
                  authorName="Yuzuma"
                  animeTitle="Berserk of Gluttony"
                  animeImageLink="https://cdn.noitatnemucod.net/thumbnail/300x400/100/c2197d5d02bb3b238ed3c7c15664659f.jpg"
                  animeDubCount={5}
                  animeSubCount={12}
                  variant="original"
                />
              ))}
            />
          </div>
        </section>
        <section>
          <SectionTitle
            title={t('episodiosRecentes')}
            icon={<PlayCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
            seeMoreLink="#"
          />
          <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {Array.from({ length: 16 }).map((_, key) => (
              <AnimeCard
                key={key}
                authorName="Yuzuma"
                animeTitle="Berserk of Gluttony"
                animeImageLink="https://cdn.noitatnemucod.net/thumbnail/300x400/100/c2197d5d02bb3b238ed3c7c15664659f.jpg"
                animeDubCount={5}
                animeSubCount={12}
                variant="grid"
              />
            ))}
          </div>
        </section>
        <section>
          <SectionTitle
            title={t('animesAdicionados')}
            icon={<DiamondPlus className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
            seeMoreLink="#"
          />
          <div className="mt-4 sm:mt-6">
            <AnimeCarousel
              animeCards={Array.from({ length: 10 }).map((_, key) => (
                <AnimeCard
                  key={key}
                  authorName="Yuzuma"
                  animeTitle="Novo Anime"
                  animeImageLink="https://cdn.noitatnemucod.net/thumbnail/300x400/100/c2197d5d02bb3b238ed3c7c15664659f.jpg"
                  animeDubCount={5}
                  animeSubCount={12}
                  variant="original"
                />
              ))}
            />
          </div>
        </section>
        <section>
          <SectionTitle
            title={t('filmesAdicionados')}
            icon={<Clapperboard className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
            seeMoreLink="#"
          />
          <div className="mt-4 sm:mt-6">
            <AnimeCarousel
              animeCards={Array.from({ length: 10 }).map((_, key) => (
                <AnimeCard
                  key={key}
                  authorName="Yuzuma"
                  animeTitle="Novo Filme"
                  animeImageLink="https://cdn.noitatnemucod.net/thumbnail/300x400/100/c2197d5d02bb3b238ed3c7c15664659f.jpg"
                  animeDubCount={5}
                  animeSubCount={12}
                  variant="original"
                />
              ))}
            />
          </div>
        </section>
      </div>
    </>
  );
}
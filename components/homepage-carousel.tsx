"use client";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/ui/carousel";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import HomepageAnimeBanner from "./homepage-carousel-banner";

export default function HomepageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const autoplayRef = useRef(Autoplay({
    delay: 12_000,
  }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  function handleNavigationButtonsClick(index: number) {
    api?.scrollTo(index);
    setCurrent(index + 1);
    autoplayRef.current.reset();
  }

  return (
    <>
      <Carousel setApi={setApi} plugins={[autoplayRef.current]} className="overflow-x-hidden">
        <CarouselContent className="gap-8">
          {Array.from({ length: 12 }).map((_, key) => (
            <>
              <CarouselItem key={key} className="min-w-full">
                <HomepageAnimeBanner
                  authorName="Otaku Hero"
                  authorProfileLink="#"
                  animeTitle="Pseudo Harem"
                  animeDescription="Eiji Kitahama, a second year high school student, just wants to be popular. To help him realize this dream, Rin Nanakura, his junior in the drama club, uses her acting skills to create a harem of loving girls for him. Though the various 'girls' all show fondness toward Eiji, the affection of the actress behind them is very real. Rin's colorful acting continuously delights Eiji, but will the starlet herself ever make her way into his heart?"
                  animeImageLink="https://cdn.noitatnemucod.net/thumbnail/1366x768/100/8316ad233cd5b69d864064c84f8ca9f5.jpg"
                  animeStudioName="Nomad"
                  animeEpisodeDuration={1_440_000}
                  createdAt={new Date()}
                  animeLink="#"
                  animeDubCount={2}
                  animeSubCount={14}
                  likes={1900}
                  views={50000}
                  rank={230}
                  rate={4.9}
                />
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-4 justify-center mt-6">
        {Array.from({ length: count }).map((_, index) => (
          <button key={index} onClick={() => { handleNavigationButtonsClick(index); }}>
            {current === index + 1 ?
              <span className="block size-3 bg-purple-600 rounded-full"></span> :
              <span className="block size-3 bg-zinc-900 rounded-full"></span>
            }
          </button>
        ))}
      </div>
    </>
  );
}

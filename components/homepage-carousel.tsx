"use client";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/ui/carousel";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import HomepageAnimeBanner from "./homepage-carousel-banner";

export default function HomepageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const autoplayRef = useRef(Autoplay({ delay: 12000 }));

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

  const carouselItems = [
    {
      authorName: "Otaku Hero",
      authorProfileLink: "#",
      animeTitle: "Pseudo Harem",
      animeDescription: "Eiji Kitahama, a second year high school student, just wants to be popular. To help him realize this dream, Rin Nanakura, his junior in the drama club, uses her acting skills to create a harem of loving girls for him. Though the various 'girls' all show fondness toward Eiji, the affection of the actress behind them is very real. Rin's colorful acting continuously delights Eiji, but will the starlet herself ever make her way into his heart?",
      animeImageLink: "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/8316ad233cd5b69d864064c84f8ca9f5.jpg",
      animeStudioName: "Nomad",
      animeEpisodeDuration: 1440000,
      createdAt: new Date(),
      animeLink: "#",
      animeDubCount: 2,
      animeSubCount: 14,
      likes: 1900,
      views: 50000,
      rank: 230,
      rate: 4.9,
    },
    {
      authorName: "Yugi",
      authorProfileLink: "#",
      animeTitle: "Oshi no Ko",
      animeDescription: "Aqua desire for revenge takes center stage as he navigates the dark underbelly of the entertainment world alongside his twin sister, Ruby. While Ruby follows in their slain mother’s footsteps to become an idol, Aqua joins a famous theater troupe in hopes of uncovering clues to the identity of his father — the man who arranged their mother’s untimely death, and the man who once starred in the same troupe Aqua hopes to infiltrate.",
      animeImageLink: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166531-vUu7iDwUkC67.jpg",
      animeStudioName: "Doga Kobo",
      animeEpisodeDuration: 1440000,
      createdAt: new Date(),
      animeLink: "#",
      animeDubCount: 2,
      animeSubCount: 14,
      likes: 1900,
      views: 50000,
      rank: 230,
      rate: 4.9,
    },
  ];

  return (
    <div className="relative">
      <Carousel setApi={setApi} plugins={[autoplayRef.current]} className="overflow-x-hidden">
        <CarouselContent className="gap-8">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="min-w-full">
              <HomepageAnimeBanner
                authorName={item.authorName}
                authorProfileLink={item.authorProfileLink}
                animeTitle={item.animeTitle}
                animeDescription={item.animeDescription}
                animeImageLink={item.animeImageLink}
                animeStudioName={item.animeStudioName}
                animeEpisodeDuration={item.animeEpisodeDuration}
                createdAt={item.createdAt}
                animeLink={item.animeLink}
                animeDubCount={item.animeDubCount}
                animeSubCount={item.animeSubCount}
                likes={item.likes}
                views={item.views}
                rank={item.rank}
                rate={item.rate}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-4 justify-center mt-6">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavigationButtonsClick(index)}
            className="focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`block w-3 h-3 rounded-full transition-colors ${
                current === index + 1 ? "bg-purple-600" : "bg-zinc-900"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
}
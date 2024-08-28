"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import HeroCarouselCard from "./hero-carousel-card";

// Just for demonstration
const carouselData = [
  {
    username: "AnimeFan123",
    userImage: "https://wallpaperaccess.com/full/4595683.jpg",
    title: "Naruto Shippuden Episode 500",
    isDubbed: true,
    description: "Naruto and his friends celebrate the end of the Great Ninja War.",
    upvotes: 1200,
    views: 15000,
    studio: "Pierrot",
    rank: 1,
    image: "https://wallup.net/wp-content/uploads/2017/10/25/494890-K-ON-Akiyama_Mio-Hirasawa_Yui-Kotobuki_Tsumugi-Nakano_Azusa-Tainaka_Ritsu-thigh-highs.jpg",
    hating: 8.9,
    link: "#",
  },
  {
    username: "OtakuQueen",
    userImage: "https://wallpaperaccess.com/full/4595683.jpg",
    title: "Attack on Titan Season 4 Episode 18",
    isDubbed: false,
    description: "Eren battles the Marleyan forces in a devastating confrontation.",
    upvotes: 950,
    views: 12000,
    studio: "MAPPA",
    rank: 2,
    image: "https://wallup.net/wp-content/uploads/2017/10/25/494890-K-ON-Akiyama_Mio-Hirasawa_Yui-Kotobuki_Tsumugi-Nakano_Azusa-Tainaka_Ritsu-thigh-highs.jpg",
    hating: 9.4,
    link: "#",
  },
  {
    username: "WeebMaster",
    userImage: "https://wallpaperaccess.com/full/4595683.jpg",
    title: "One Piece Episode 1000",
    isDubbed: false,
    description: "Luffy and his crew reach the milestone of 1000 episodes on their journey to the Grand Line.",
    upvotes: 2000,
    views: 18000,
    studio: "Toei Animation",
    rank: 3,
    image: "https://wallup.net/wp-content/uploads/2017/10/25/494890-K-ON-Akiyama_Mio-Hirasawa_Yui-Kotobuki_Tsumugi-Nakano_Azusa-Tainaka_Ritsu-thigh-highs.jpg",
    hating: 9.2,
    link: "#",
  },
  {
    username: "SenpaiLover",
    userImage: "https://wallpaperaccess.com/full/4595683.jpg",
    title: "My Hero Academia Season 5 Episode 25",
    isDubbed: true,
    description: "The Class 1-A students face off in a final battle of the season.",
    upvotes: 800,
    views: 10000,
    studio: "Bones",
    rank: 4,
    image: "https://wallup.net/wp-content/uploads/2017/10/25/494890-K-ON-Akiyama_Mio-Hirasawa_Yui-Kotobuki_Tsumugi-Nakano_Azusa-Tainaka_Ritsu-thigh-highs.jpg",
    hating: 8.3,
    link: "#",
  },
  {
    username: "KawaiiNeko",
    userImage: "https://wallpaperaccess.com/full/4595683.jpg",
    title: "Demon Slayer Mugen Train Arc Episode 7",
    isDubbed: false,
    description: "Tanjiro and his allies face the demon Enmu in a final showdown aboard the Mugen Train.",
    upvotes: 1600,
    views: 17000,
    studio: "Ufotable",
    rank: 5,
    image: "https://wallup.net/wp-content/uploads/2017/10/25/494890-K-ON-Akiyama_Mio-Hirasawa_Yui-Kotobuki_Tsumugi-Nakano_Azusa-Tainaka_Ritsu-thigh-highs.jpg",
    hating: 9.7,
    link: "#",
  },
];

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const autoplayRef = useRef(Autoplay({ delay: 12_000 }));

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
    <div className="mx-auto w-full">
      <Carousel setApi={setApi} plugins={[
        autoplayRef.current,
      ]}>
        <CarouselContent>
          {carouselData.map((banner, index) => (
            <CarouselItem key={index}>
              <HeroCarouselCard
                username={banner.username}
                userImage={banner.userImage}
                title={banner.title}
                isDubbed={banner.isDubbed}
                description={banner.description}
                upvotes={banner.upvotes}
                views={banner.views}
                studio={banner.studio}
                rank={banner.rank}
                image={banner.image}
                hating={banner.hating}
                link={banner.link}
                index={index}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-4 justify-center mt-6">
        {Array.from({ length: count }).map((_, index) => (
          <button key={index} onClick={() => { handleNavigationButtonsClick(index); }}>
            {current === index + 1 ?
              <span className="block size-3 bg-purple-600 rounded-full"></span>
              :
              <span className="block size-3 bg-zinc-900 rounded-full"></span>
            }
          </button>
        ))}
      </div>
    </div>
  );
}

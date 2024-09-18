"use client";

import { Button } from "@/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

export default function AnimeCarousel(props: {
  animeCards: ReactNode[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

  function previewsClickHandler() {
    const next = current - 1;

    if (next < 0) {
      return;
    }

    api?.scrollTo(next);
    setCurrent(next);
  }

  function nextClickHandler() {
    const next = current + 1;

    if (next > count - 1) {
      return;
    }

    api?.scrollTo(next);
    setCurrent(next);
  }

  return (
    <>
      <Carousel setApi={setApi} className="overflow-x-hidden">
        <CarouselContent className="gap-3 sm:gap-6">
          {props.animeCards.map((card, index) => (
            <CarouselItem key={index} className="min-w-fit my-1">
              {card}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-3 sm:mt-5 flex gap-3 max-w-md mx-auto">
          <Button onClick={previewsClickHandler} disabled={current - 1 < 0} variant="outline" className={"w-full " + (current - 1 < 0 && "opacity-50")}>
            <ArrowLeft />
          </Button>
          <Button onClick={nextClickHandler} disabled={current + 1 > count - 1} variant="outline" className={"w-full " + (current + 1 > count - 1 && "opacity-50")}>
            <ArrowRight />
          </Button>
        </div>
      </Carousel>
    </>
  );
}

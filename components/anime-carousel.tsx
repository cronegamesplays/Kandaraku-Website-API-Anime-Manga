"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

export default function AnimeCarousel(props: {
  animeCards: ReactNode[];
}) {
  return (
    <div className="relative group">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {props.animeCards.map((card, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 min-w-fit">
              {card}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-r-full p-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 focus:opacity-100 z-10">
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Slide anterior</span>
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-l-full p-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 focus:opacity-100 z-10">
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Próximo slide</span>
        </CarouselNext>
      </Carousel>
    </div>
  );
}
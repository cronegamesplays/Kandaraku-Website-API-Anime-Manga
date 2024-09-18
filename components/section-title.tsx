'use client'

import { Button } from "@/ui/button";
import Link from "next/link";
import { ReactNode } from "react";
import { useTranslations } from 'next-intl';
import { Plus } from "lucide-react";

export default function SectionTitle(props: {
  title: string,
  icon: ReactNode,
  seeMoreLink?: string;
}) {
  const t = useTranslations('Home');

  return (
    <div className="flex items-center justify-between flex-wrap gap-3 border-b pb-4">
      <h2 className="flex items-center text-nowrap gap-2 sm:gap-4 font-black text-sm sm:text-xl md:text-2xl">
        {props.icon} {props.title}
      </h2>
      {props.seeMoreLink && (
        <Link href={props.seeMoreLink}>
          <Button 
            variant="secondary" 
            className="bg-purple-800 hover:bg-purple-950 font-bold text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap"
          >
            <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 font-bold" />
            <span>{t('vermais')}</span>
          </Button>
        </Link>
      )}
    </div>
  );
}
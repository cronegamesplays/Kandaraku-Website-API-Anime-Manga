import { Button } from "@/ui/button";
import Link from "next/link";
import { ReactNode } from "react";
import { useTranslations } from 'next-intl';
import { MoreVertical, Plus } from "lucide-react";

export default function SectionTitle(props: {
  title: string,
  icon: ReactNode,
  seeMoreLink?: string;
}) {
  const t = useTranslations('Home');

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-3 border-b pb-4">
        <h2 className="flex items-center text-nowrap gap-4 font-black sm:text-2xl text-xl">
          {props.icon} {props.title}
        </h2>
        {props.seeMoreLink && (
          <Link href={props.seeMoreLink}>
            <Button variant="secondary" className="bg-purple-800 hover:bg-purple-950 font-bold">
              <Plus className="w-4 h-4 mr-1 font-bold" /> {t('vermais')}
            </Button>
          </Link>
        )}
      </div>
    </>
  );
}

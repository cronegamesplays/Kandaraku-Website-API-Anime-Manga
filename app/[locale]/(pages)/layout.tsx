'use client'

import { Button } from "@/ui/button";
import { Command, Search, User, List, Settings, LogOut, Heart, BellRing, Megaphone, Gift, Bell, Leaf } from "lucide-react";
import Link from "next/link";
import { Discord, Github } from "react-bootstrap-icons";
import { useTranslations } from "next-intl";
import { ReactNode, useState, useEffect } from "react";
import LangButton from "@/components/LangButton";
import dynamic from 'next/dynamic';
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar";
import Image from "next/image";

export default function PagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations('Home');
  const f = useTranslations('Home.footer');

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-zinc-900 z-50 sticky top-0 shadow-lg">
        <div className="container mx-auto py-2 px-5 flex items-center justify-between relative">
          <LocalHeader t={t} />
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto p-5">
          {children}
        </div>
      </main>
      <footer className="bg-black">
        <div className="container mx-auto px-8 py-6 flex gap-5 flex-wrap">
          <LocalFooter f={f} t={t} />
        </div>
        <div className="text-zinc-500 text-center mb-8 text-sm">
          <p className="font-bold">{t('copyright')} © <span className="font-bold">{t('copyright2')}</span></p>
          <small className="font-bold">{t('direitos')}</small>
        </div>
      </footer>
    </div>
  );
}

function LocalHeader({ t }: { t: (key: string) => string }) {
  return (
    <>
      <div className="flex items-center gap-2 sm:gap-4">
        <Link href="/" className="group flex items-center text-xl sm:text-2xl md:text-3xl font-black text-purple-500 hover:scale-105 transition-transform ease-linear duration-75">
          <Image src="/logo.png" alt="Kandaraku" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h1 className="ml-2 hidden sm:inline">{t('title')}</h1>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="isSearchOpen" className="sm:hidden cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-secondary text-secondary-foreground w-10 h-10 hover:bg-secondary/80">
          <Search className="w-5 h-5" />
        </label>

        <input id="isSearchOpen" className="peer hidden" type="checkbox" />

        <div className="shadow-lg sm:shadow-none peer-checked:block hidden sm:block sm:static absolute top-full -mt-1 start-0 w-full bg-zinc-900 p-3 rounded-b-md sm:m-0 sm:p-0 sm:min-w-[45ch]">
          <form className="rounded-md border border-input bg-background/30 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium flex items-center gap-2 w-full">
            <label htmlFor="search">
              <Search className="w-4 h-4" />
            </label>
            <input
              className="focus:outline-none bg-transparent w-full"
              type="text"
              placeholder={t('pesquisarAnime')}
            />
            <span className="flex items-center gap-1 font-bold text-nowrap">
              <Command className="w-3 h-3" /> + K
            </span>
          </form>
        </div>
        <LangButton />
          <Popover>
            <PopoverTrigger>
              <Button variant="outline" className="inline-flex items-center gap-2 px-3">
                <Bell className="w-5 h-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-zinc-900 border border-zinc-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-3">{t('notificacoes')}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-zinc-100">{t('atualizacao')}</p>
                    <p className="text-sm text-zinc-400">{t('atualizacaoDesc')}</p>
                  </div>
                </div>
              </div>
              <Button variant="link" className="w-full mt-3 text-purple-400 hover:text-purple-300">
                {t('verTodasNotificacoes')}
              </Button>
            </PopoverContent>
          </Popover>
        <Popover>
          <PopoverTrigger>
            <Button variant="outline" className="inline-flex items-center gap-2 px-3">
              <User className="w-5 h-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 bg-zinc-900 border border-zinc-800 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Avatar do usuário" />
                  <AvatarFallback>KA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-zinc-100">Kandaraku</p>
                  <p className="text-sm text-zinc-400">kandaraku@example.com</p>
                </div>
              </div>
              <nav className="flex flex-col gap-2">
                <Button variant="ghost" className="justify-start text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">
                  <List className="mr-2 h-4 w-4" />
                  {t('minhaslista')}
                </Button>
                <Button variant="ghost" className="justify-start text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">
                  <Heart className="mr-2 h-4 w-4" />
                  {t('favoritos')}
                </Button>
                <Button variant="ghost" className="justify-start text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">
                  <Settings className="mr-2 h-4 w-4" />
                  {t('configuracoes')}
                </Button>

                {/* NOTE: Mostrar botão de login se o usuário não estiver logado, caso contrário, mostrar botão de logout */}
                <Button variant="ghost" className="justify-start text-red-400 hover:text-red-300 hover:bg-zinc-800">
                  <LogOut className="mr-2 h-4 w-4" />
                  {t('sair')}
                </Button>
              </nav>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

function LocalFooter({ f, t }: { f: (key: string) => string, t: (key: string) => string }) {
  return (
    <>
      <div className="prose prose-sm prose-zinc prose-invert w-full">
        <h2>{f('title')}</h2>
        <p>{f('sobre')}</p>
        <small>{f('codigo')} <a href="https://github.com/cronegamesplays" target="_blank" rel="noopener noreferrer">&#64;CronesGamesPlays</a></small>
        <div className="no-prose mt-8 flex gap-3 flex-wrap">
          <a href="https://discord.gg/wV2WamExr5" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="inline-flex items-center gap-2 px-3">
              <Discord className="w-5 h-5" />
              {f('servidor')}
            </Button>
          </a>
          <a href="https://github.com/cronegamesplays/Kandaraku-Website-API-Anime-Manga" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="inline-flex items-center gap-2 px-3">
              <Github className="w-5 h-5" />
              {f('fonte')}
            </Button>
          </a>
        </div>
      </div>
      <div className="prose prose-sm prose-zinc prose-invert w-full">
        <h3>{f('parceiros')}</h3>
        <ul>
          <li><a href="https://discord.gg/zgQzcztRXC">ADSS Cloud ({t('hospedagem')})</a></li>
        </ul>
        <h3>{f('colaboradores')}</h3>
        <ul>
          <li><a href="https://github.com/kevinmarquesp">&#64;kevinmarquesp</a></li>
          <li><a href="https://github.com/kx4x">&#64;kx4x</a></li>
        </ul>
      </div>
    </>
  );
}
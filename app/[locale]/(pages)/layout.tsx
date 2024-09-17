import { Button } from "@/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Command, Languages, Search, User, List, Settings, LogOut, Heart } from "lucide-react";
import Link from "next/link";
import { Discord, Github} from "react-bootstrap-icons";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import LangButton from "@/components/LangButton";
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from "@/ui/dropdown-menu";

export default function PagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = useTranslations('Home');
  const f = useTranslations('Home.footer');
  return (
    <div className="flex flex-col flex-grow h-screen">
      <header className="bg-zinc-900 z-50 sticky top-0 shadow-lg">
        <div className="container mx-auto py-2 px-5 flex items-center justify-between relative">
          <LocalHeader t={t} />
        </div>
      </header>
      <main className="grow">
        <div className="container mx-auto p-5">
          {children}
        </div>
      </main>
      <footer className="bg-black">
        <div className="container mx-auto px-8 py-6 flex gap-5 flex-wrap">
          <LocalFooter f={f} t={t} />
        </div>
        <div className="text-zinc-500 text-center mb-8 text-sm">
          <p className="font-bold">{t('copyright')} ©   <span className="font-bold">{t('copyright2')}</span></p>
          <small className="font-bold">{t('direitos')}</small>
        </div>
      </footer>
    </div>
  );
}

function LocalHeader({ t }: { t: (key: string) => string }) {
  return (
    <>
      <div className="flex gap-4">
        <Link href="/" className="group text-2xl font-black md:text-3xl text-purple-500 hover:scale-105 transition-transform ease-linear duration-75 *:transition-colors">
          <h1>
            {t('title')}
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="isSearchOpen" className="sm:hidden cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-secondary text-secondary-foreground size-10 hover:bg-secondary/80">
          <Search className="size-5" />
        </label>

        <input id="isSearchOpen" className="peer hidden" type="checkbox" />

        <div className="shadow-lg sm:shadow-none peer-checked:block hidden sm:block sm:static absolute top-full -mt-1 start-0 w-full bg-zinc-900 p-3 rounded-b-md sm:m-0 sm:p-0 sm:min-w-[45ch]">
          <form className="rounded-md border border-input bg-background/30 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium flex items-center gap-2 w-full">
            <label htmlFor="search">
              <Search className="size-4" />
            </label>
            <input
              className="focus:outline-none bg-transparent w-full"
              type="text"
            />
            <span className="flex items-center gap-1 font-bold text-nowrap">
              <Command className="size-3" /> + K
            </span>
          </form>
        </div>
        {/* NOTE: Aqui seria uma boa usar uma estrategia de parametros de pesquisa, ou coisa assim pra distinguir os idiomas. - kx4x: creio que ja ta feito :) */}
        <LangButton />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>FT</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Rogerinho da dz7</p>
                <p className="text-xs leading-none text-muted-foreground">
                  gmail@exemplo.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
               <User className="size-4 mr-2" /> Perfil
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heart className="size-4 mr-2" /> Favoritos
              </DropdownMenuItem>
              <DropdownMenuItem>
                <List className="size-4 mr-2" /> Lista de Animes
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="size-4 mr-2" /> Configurações
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            {/* NOTE: caso o usuario nao esteja logado, mostrar o item o botao de sair e caso esteja deslogado, mostrar o botao de login */}
            <DropdownMenuItem>
              <LogOut className="size-4 mr-2" /> Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
              <Discord className="size-5" />
              {f('servidor')}
            </Button>
          </a>
          <a href="https://github.com/cronegamesplays/Kandaraku-Website-API-Anime-Manga" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="inline-flex items-center gap-2 px-3">
              <Github className="size-5" />
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
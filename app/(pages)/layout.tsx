import { Button } from "@/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Command, Languages, Search } from "lucide-react";
import Link from "next/link";
import { Discord, Github } from "react-bootstrap-icons";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col flex-grow h-screen">
        <header className="bg-zinc-900 z-50 sticky top-0 shadow-lg">
          <div className="container mx-auto py-2 px-5 flex items-center justify-between relative">
            <LocalHeader />
          </div>
        </header>
        <main className="grow">
          <div className="container mx-auto p-5">
            {children}
          </div>
        </main>
        <footer className="bg-black">
          <div className="container mx-auto px-8 py-6 flex gap-5 flex-wrap">
            <LocalFooter />
          </div>
          <div className="text-zinc-500 text-center mb-8 text-sm">
            <p>Copyright &#169; Kandaraku Studios 2020 - 2024</p>
            <small>Todos os direitos reservados.</small>
          </div>
        </footer>
      </div>
    </>
  );
}

function LocalHeader() {
  return (
    <>
      <div className="flex gap-4">
        <Link href="/" className="group text-2xl font-black md:text-3xl text-purple-500 hover:scale-105 transition-transform ease-linear duration-75 *:transition-colors">
          <h1>
            Kandaraku
          </h1>
        </Link>

      </div>

      <div className="flex items-center gap-3">
        {/* NOTE: Esse input de pesquisa é responsivo, ele usa uma checkbox invisível pra guardar o estado. */}
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

        {/* NOTE: Aqui seria uma boa usar uma estrategia de parametros de pesquisa, ou coisa assim pra distinguir os idiomas. */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary" size="icon" className="p-2">
              <Languages className="size-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-zinc-950 p-2 border rounded-lg mt-2 w-[25ch] mx-3 space-y-2">
            <ul>
              <li>
                <Link href="/" className="block py-2 px-4 hover:bg-zinc-900 rounded-sm">
                  🇧🇷 Português
                </Link>
              </li>
              <li>
                <Link href="/" className="block py-2 px-4 hover:bg-zinc-900 rounded-sm">
                  🇪🇸 Espanhol
                </Link>
              </li>
              <li>
                <Link href="/" className="block py-2 px-4 hover:bg-zinc-900 rounded-sm">
                  🇺🇸 Inglês
                </Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>

        {/* TODO: Esse botão precisa abrir um menu com detalhes da conta do usuário. */}
        <button className="bg-orange-500 rounded-full aspect-square size-8 border border-white grid place-items-center">
          FT
        </button>
      </div >
    </>
  );
}

function LocalFooter() {
  return (
    <>
      <div className="prose prose-sm prose-zinc prose-invert w-full">
        <h2>Kandaraku</h2>
        <p>Uma plataforma da comunidade para acessar informações dos seus animes favoritos, você pode adicionar, editar e publicar.</p>
        <small>Kandaraku Website Project &amp; Kandaraku API Project criado pelo: <a href="https://github.com/cronegamesplays" target="_blank">&#64;CronesGamesPlays</a></small>
        <div className="no-prose mt-8 flex gap-3 flex-wrap">
          <a href="https://discord.gg/wV2WamExr5" target="_blank">
            <Button variant="outline" className="inline-flex items-center gap-2 px-3">
              <Discord className="size-5" />
              Nosso servidor
            </Button>
          </a>
          <a href="https://github.com/cronegamesplays/Kandaraku-Website-API-Anime-Manga" target="_blank">
            <Button variant="outline" className="inline-flex items-center gap-2 px-3">
              <Github className="size-5" />
              Código fonte
            </Button>
          </a>
        </div>
      </div>
      <div className="prose prose-sm prose-zinc prose-invert w-full">
        <h3>Parceiros</h3>
        <ul>
          <li><a href="https://discord.gg/zgQzcztRXC">ADSS Cloud (Hospedagem deste site)</a></li>
        </ul>
        <h3>Colaboradores</h3>
        <ul>
          <li><a href="https://github.com/kevinmarquesp">&#64;kevinmarquesp</a></li>
        </ul>
      </div>
    </>
  );
}

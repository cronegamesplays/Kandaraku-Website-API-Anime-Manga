import ThemeTogglerButton from "@/components/theme-toggler-button";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "react-feather";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="border-b sticky top-0 bg-zinc-900">
        <div className="container mx-auto p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" className="bg-zinc-800 text-white">
              <Menu className="size-[1.2rem]" />
            </Button>
            <h1 className="font-bold text-2xl sm:text-3xl text-purple-600">
              Kandaraku
            </h1>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost" className="bg-zinc-800 text-white">
              <Search className="size-[1.2rem]" />
            </Button>
            <ThemeTogglerButton />
          </div>
        </div>
      </header>
      <main>
        <div className="container p-6 mx-auto">
          {children}
        </div>
      </main>
    </>
  );
}

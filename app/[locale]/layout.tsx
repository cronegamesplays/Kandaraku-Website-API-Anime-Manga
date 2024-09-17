import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kandaraku",
  description: "Um Website/API de database de animes e mangas para aplicações e outros projetos.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  params: {locale},
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider enableSystem attribute="class" defaultTheme="dark">
          <NextIntlClientProvider locale={locale}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

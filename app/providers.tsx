import { ThemeProvider } from "next-themes";

export function NextThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}

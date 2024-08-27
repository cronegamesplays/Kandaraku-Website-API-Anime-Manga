"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "react-feather";

export default function ThemeTogglerButton() {
  const [isMounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Button variant="outline" size="icon"></Button>
    );
  }

  return (
    <Button className="bg-zinc-800 text-white border-zinc-500/20" variant="ghost" size="icon" onClick={() => {
      if (resolvedTheme === "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    }}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

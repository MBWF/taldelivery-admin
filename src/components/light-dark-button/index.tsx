"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SunIcon = () => {
  return <Sun size={32} />;
};
const MoonIcon = () => {
  return <Moon size={32} />;
};

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};

export function LightDarkButton({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const hasMounted = useHasMounted();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="ghost"
      className={cn("", className)}
    >
      {hasMounted && theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}

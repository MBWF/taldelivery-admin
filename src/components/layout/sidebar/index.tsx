"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { sidebarContent } from "./content";
import { usePathname } from "next/navigation";

export function Siderbar() {
  const pathname = usePathname();

  return (
    <div className="flex min-h-[calc(100vh-4rem-1px)]">
      <div className="flex flex-col p-3 bg-white shadow w-60 dark:bg-background">
        <ul className="pt-2 pb-4">
          {sidebarContent.map((item) => (
            <li className="rounded-sm" key={item.title}>
              <Link
                href={item.href}
                className="flex items-center p-1 space-x-3 rounded-md"
              >
                <Button
                  variant="ghost"
                  className={`w-full flex justify-start gap-2 text-md ${
                    pathname === item.href ? "bg-primary text-white" : ""
                  }`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

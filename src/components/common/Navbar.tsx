"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Theme from "../nav/Theme";
import { CommandMenu } from "../nav/CommandMenu";
import { Kbd, KbdGroup } from "../ui/kbd";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import SearchIcon from "../svg/SearchIcon";
import Container from "./Container";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Components", href: "/components" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [openCmd, setOpenCmd] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/projects") {
      return pathname === "/projects" || pathname.startsWith("/project/");
    }

    if (href === "/blog") {
      return pathname === "/blog" || pathname.startsWith("/blog/");
    }

    return pathname === href;
  };

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenCmd((open) => !open);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", down);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", down);
    };
  }, []);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad|iPod/.test(navigator.platform));
  }, []);

  if (!mounted) return null;

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/50"
            : "bg-transparent border-transparent"
        }`}
      >
        <Container className="px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className={`text-xl sm:text-2xl font-extralight font-body text-foreground transition-all duration-500 ${
              scrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            @sagarsaini
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              {links.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-light transition-colors font-mono ${
                    isLinkActive(href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setOpenCmd(true)}
              className="inline-flex items-center justify-center text-sm font-medium whitespace-nowrap transition-[background-color,scale] ease-out outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 h-8 gap-1.5 rounded-full border border-input bg-background px-2.5 text-muted-foreground shadow-xs select-none hover:bg-accent/50 dark:bg-input/30 dark:hover:bg-input/40"
            >
              <SearchIcon />
              <span className="flex sm:hidden text-sm/4 font-medium">
                Search
              </span>

              <KbdGroup className="items-center gap-1 hidden sm:flex">
                <Kbd className="pointer-events-none inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-sm px-1.5 text-[12px] font-normal text-muted-foreground select-none bg-muted shadow-[inset_0_-1px_2px] shadow-black/10 dark:shadow-white/10">
                  {isMac ? "⌘" : "Ctrl"}
                </Kbd>

                <Kbd className="pointer-events-none inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-sm px-1.5 text-[12px] font-normal text-muted-foreground select-none bg-muted shadow-[inset_0_-1px_2px] shadow-black/10 dark:shadow-white/10">
                  K
                </Kbd>
              </KbdGroup>
            </button>

            <div className="h-4 w-px bg-border" />

            <Theme />

            <div className="flex sm:hidden -ml-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="group/toggle flex flex-col gap-1 data-[state=open]:bg-accent"
                    size="icon"
                  >
                    <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:rotate-45" />
                    <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[-3px] group-data-[state=open]/toggle:-rotate-45" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className="w-64 rounded-2xl p-1 border border-border bg-popover/80 backdrop-blur-sm"
                  align="end"
                  sideOffset={8}
                >
                  {links.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="flex w-full items-center px-2 py-1.5"
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Container>
      </nav>
      <CommandMenu open={openCmd} setOpen={setOpenCmd} />
    </>
  );
};

export default Navbar;

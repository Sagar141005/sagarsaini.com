"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useCommandState } from "cmdk";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";
import BlogIcon from "../svg/BlogIcon";
import AboutIcon from "../svg/AboutIcon";
import HomeIcon from "../svg/HomeIcon";
import ProjectIcon from "../svg/ProjectIcon";
import ComponentIcon from "../svg/ComponentIcon";
import TechStackIcon from "../svg/TechStackIcon";
import ResumeIcon from "../svg/ResumeIcon";
import ContactIcon from "../svg/ContactIcon";
import GithubIcon from "../svg/GithubIcon";
import LinkedInIcon from "../svg/LinkedinIcon";
import XIcon from "../svg/XIcon";
import SunIcon from "../svg/SunIcon";
import MoonIcon from "../svg/MoonIcon";
import AutoThemeIcon from "../svg/AutoThemeIcon";
import CornerDownLeftIcon from "../svg/CornerDownLeftIcon";
import EmailIcon from "../svg/EmailIcon";

type CommandKind = "command" | "page" | "link";

interface CommandItemConfig {
  title: string;
  href?: string;
  action?: () => void;
  icon: React.ElementType | React.SVGElementType;
  kind: CommandKind;
}

const MENU_GROUPS = [
  {
    heading: "Portfolio",
    items: [
      { title: "Home", href: "/", icon: HomeIcon, kind: "page" },
      { title: "About", href: "#about", icon: AboutIcon, kind: "page" },
      { title: "Projects", href: "/projects", icon: ProjectIcon, kind: "page" },
      {
        title: "Components",
        href: "/components",
        icon: ComponentIcon,
        kind: "page",
      },
      { title: "Blog", href: "/blog", icon: BlogIcon, kind: "page" },
      { title: "Contact", href: "/contact", icon: ContactIcon, kind: "page" },
    ] as CommandItemConfig[],
  },
  {
    heading: "Tech & Resources",
    items: [
      {
        title: "Tech Stack",
        href: "#tech-stack",
        icon: TechStackIcon,
        kind: "page",
      },
      { title: "Resume", href: "/resume", icon: ResumeIcon, kind: "link" },
    ] as CommandItemConfig[],
  },
  {
    heading: "Social",
    items: [
      {
        title: "GitHub",
        href: "https://github.com/Sagar141005",
        icon: GithubIcon,
        kind: "link",
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/sagar-saini-9b45a52b2/",
        icon: LinkedInIcon,
        kind: "link",
      },
      {
        title: "X",
        href: "https://x.com/not_sagar1410",
        icon: XIcon,
        kind: "link",
      },
      {
        title: "Mail",
        href: "mailto:sagarsaini@gmail.com",
        icon: EmailIcon,
        kind: "link",
      },
    ] as CommandItemConfig[],
  },
];

const COMMAND_META_MAP = new Map<string, CommandKind>();

MENU_GROUPS.forEach((group) => {
  group.items.forEach((item) => {
    COMMAND_META_MAP.set(item.title, item.kind);
  });
});

COMMAND_META_MAP.set("Light", "command");
COMMAND_META_MAP.set("Dark", "command");
COMMAND_META_MAP.set("System", "command");

const ENTER_ACTION_LABELS: Record<CommandKind, string> = {
  command: "Run Command",
  page: "Go to Page",
  link: "Open Link",
};

export const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [searchValue, setSearchValue] = useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const handleSelect = useCallback(
    (item: CommandItemConfig) => {
      setOpen(false);
      if (item.kind === "page" && item.href) router.push(item.href);
      if (item.kind === "link" && item.href) window.open(item.href, "_blank");
      if (item.kind === "command" && item.action) item.action();
    },
    [router, setOpen]
  );

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a command or search..."
        value={searchValue}
        onValueChange={setSearchValue}
      />

      <CommandList className="min-h-[300px]">
        <CommandEmpty>No results found.</CommandEmpty>

        {MENU_GROUPS.map((group, index) => (
          <React.Fragment key={group.heading}>
            <CommandGroup heading={group.heading}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.title}
                  value={item.title}
                  onSelect={() => handleSelect(item)}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            {index < MENU_GROUPS.length - 1 && <CommandSeparator />}
          </React.Fragment>
        ))}

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem
            value="Light"
            onSelect={() => {
              setTheme("light");
              setOpen(false);
            }}
          >
            <SunIcon />
            <span>Light</span>
          </CommandItem>
          <CommandItem
            value="Dark"
            onSelect={() => {
              setTheme("dark");
              setOpen(false);
            }}
          >
            <MoonIcon />
            <span>Dark</span>
          </CommandItem>
          <CommandItem
            value="System"
            onSelect={() => {
              setTheme("system");
              setOpen(false);
            }}
          >
            <AutoThemeIcon />
            <span>System</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>

      <CommandMenuFooter />
    </CommandDialog>
  );
};

function CommandMenuFooter() {
  const value = useCommandState((state) => state.value);

  const match = Array.from(COMMAND_META_MAP.entries()).find(
    ([key]) => key.toLowerCase() === value
  );

  const selectedKind = match ? match[1] : "page";

  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 border-t border-border bg-muted/20 px-4 text-xs font-medium text-muted-foreground">
        <div className="flex font-light items-center gap-2">
          <span>sagarsaini</span>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <div className="flex items-center gap-2">
            <span>{ENTER_ACTION_LABELS[selectedKind]}</span>
            <Kbd>
              <CornerDownLeftIcon />
            </Kbd>
          </div>

          <div className="hidden h-3 w-px bg-border sm:block" />

          <div className="hidden items-center gap-2 sm:flex">
            <span>Navigate</span>
            <Kbd>↓</Kbd>
            <Kbd>↑</Kbd>
          </div>

          <div className="h-3 w-px bg-border" />

          <div className="flex items-center gap-2">
            <span>Exit</span>
            <Kbd>Esc</Kbd>
          </div>
        </div>
      </div>
    </>
  );
}

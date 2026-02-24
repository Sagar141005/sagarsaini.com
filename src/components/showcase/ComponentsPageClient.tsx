"use client";

import React, { useState } from "react";
import Container from "@/components/common/Container";
import ContentHeader from "@/components/common/ContentHeader";
import { ALL_COMPONENTS, ComponentItem } from "@/data/components";
import ComponentCard from "@/components/showcase/ComponentCard";
import ComponentDrawer from "@/components/showcase/ComponentDrawer";
import { motion } from "motion/react";
import ProjectIcon from "@/components/svg/ProjectIcon";
import LayoutIcon from "@/components/svg/LayoutIcon";
import BracesIcon from "@/components/svg/BracesIcon";

const FILTERS = [
  { label: "All", value: "All", icon: LayoutIcon },
  { label: "UI", value: "UI", icon: ProjectIcon },
  { label: "Hooks", value: "Hook", icon: BracesIcon },
] as const;

export default function ComponentsPageClient() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<ComponentItem | null>(null);

  const filteredItems = ALL_COMPONENTS.filter(
    (item) => filter === "All" || item.category === filter
  );

  return (
    <Container className="py-16 min-h-screen">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-border border-dashed">
          <ContentHeader
            heading="Components"
            subHeading="A collection of UI elements, hooks, and utilities I use across projects."
            size="lg"
            as="h1"
          />
          <div className="flex p-1 gap-1 bg-primary-foreground rounded-lg self-start border border-border/50">
            {FILTERS.map((f) => {
              const Icon = f.icon;
              const isActive = filter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`
                    relative flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all z-10
                    ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
                  `}
                  type="button"
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-background rounded-md shadow-sm -z-10"
                    />
                  )}
                  <Icon className="w-3.5 h-3.5" />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <ComponentCard
              key={item.slug}
              item={item}
              onClick={(clickedItem) => setSelectedItem(clickedItem)}
            />
          ))}
        </div>
      </div>

      <ComponentDrawer
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </Container>
  );
}

"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 my-16">
      <div className="flex flex-col justify-between items-center gap-1 border-t border-dashed border-border pt-8 text-sm font-light text-muted-foreground">
        <p>
          Designed & Developed by{" "}
          <span className="font-medium text-foreground">Sagar Saini</span>
        </p>

        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

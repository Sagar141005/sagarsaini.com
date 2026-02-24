"use client";

import React, { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LinkedInIcon from "../svg/LinkedinIcon";
import XIcon from "../svg/XIcon";
import CheckIcon from "../svg/CheckIcon";
import CopyIcon from "../svg/CopyIcon";
import ShareIcon from "../svg/ShareIcon";

interface ShareDialogProps {
  title: string;
  slug: string;
}

export function ShareButton({ title, slug }: ShareDialogProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://sagarsaini.com";
  const url = `${baseUrl}/blog/${slug}`;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Link copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSocialShare = (platform: string) => {
    let shareUrl = "";

    if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <ShareIcon />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share this article</DialogTitle>
          <DialogDescription>
            Share this link via social media or copy it to your clipboard.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={() => handleSocialShare("linkedin")}
            >
              <LinkedInIcon /> LinkedIn
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSocialShare("twitter")}
            >
              <XIcon />X (Twitter)
            </Button>
          </div>

          <div className="relative flex items-center gap-2 pt-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue={url}
                readOnly
                className="text-muted-foreground"
              />
            </div>
            <Button
              size="sm"
              onClick={handleCopy}
              className="px-3"
              type="button"
            >
              {copied ? (
                <>
                  <CheckIcon className="mr-2" />
                  Copied
                </>
              ) : (
                <>
                  <CopyIcon className="mr-2" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

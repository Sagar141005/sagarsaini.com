"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import ChatWidgetButton from "../button/ChatWidgetButton";
import ChatBotIcon from "../svg/animated/ChatBotIcon";
import PlaneIcon from "../svg/PlaneIcon";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: string;
};

const getCurrentTime = () => {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const INITIAL_MESSAGE: Message = {
  id: "1",
  role: "bot",
  content:
    "Hi! I'm **Sagar's AI assistant**. Ask me about his projects, tech stack, or how to get in touch.",
  timestamp: getCurrentTime(),
};

const SUGGESTED_QUESTIONS = [
  "What is your tech stack?",
  "Tell me about your recent projects",
  "How can I contact you?",
  "Do you do freelance?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: data.response,
        timestamp: getCurrentTime(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content:
          "Sorry, I'm having trouble connecting to the server. Please try again later.",
        timestamp: getCurrentTime(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-[90vw] max-w-[380px] overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:w-[380px] origin-bottom-right"
          >
            <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground overflow-hidden relative ring-1 ring-border/10">
                  <ChatBotIcon className="w-full h-full p-1.5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground tracking-tight">
                    Sagar's Assistant
                  </h3>
                  <p className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
                    <span className="block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]" />
                    Online
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="h-[380px] overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-border">
              <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex max-w-[85%] gap-2",
                      msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                    )}
                  >
                    <div
                      className={cn(
                        "group relative rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm transition-all",
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border border-border text-foreground/90 font-light"
                      )}
                    >
                      {msg.role === "bot" ? (
                        <ReactMarkdown
                          components={{
                            a: (props) => (
                              <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="break-words text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
                              />
                            ),
                            p: (props) => (
                              <p {...props} className="m-0 leading-relaxed" />
                            ),
                            strong: (props) => (
                              <strong
                                {...props}
                                className="font-semibold text-foreground"
                              />
                            ),
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      ) : (
                        msg.content
                      )}

                      <span
                        className={cn(
                          "absolute -bottom-5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap",
                          msg.role === "user" ? "right-1" : "left-1"
                        )}
                      >
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex max-w-[85%] gap-2">
                    <div className="bg-muted rounded-2xl px-4 py-3 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {messages.length < 3 && !isTyping && (
                <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 mb-3 ml-1">
                    Suggested
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSendMessage(q)}
                        className="text-xs border border-border bg-background px-3 py-1.5 rounded-full hover:bg-muted hover:border-border-foreground/20 transition-all text-muted-foreground hover:text-foreground text-left font-light"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border p-3 bg-background">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="h-10 rounded-2xl border-border bg-muted/50 px-4 focus-visible:ring-primary/20"
                />
                <Button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="h-10 w-10 shrink-0 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
                >
                  <PlaneIcon />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ChatWidgetButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </div>
  );
}

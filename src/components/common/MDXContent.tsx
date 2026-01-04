import React from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import CodeCopyButton from "../button/CodeCopyButton";

const prettyCodeOptions = {
  theme: "dark-plus",
  keepBackground: true,
  defaultLang: {
    block: "text",
    inline: "text",
  },
};

const getTextContent = (node: React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (React.isValidElement(node) && node.props) {
    return getTextContent(
      (node.props as { children?: React.ReactNode }).children
    );
  }
  if (Array.isArray(node)) {
    return node.map(getTextContent).join("");
  }
  return "";
};

const components = {
  img: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      className="rounded-lg border border-border"
      {...props}
    />
  ),
  h1: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h1
      className="mb-6 mt-6 text-4xl font-bold tracking-tight text-foreground"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h2
      className="mt-10 mb-4 text-3xl font-semibold tracking-tight text-foreground"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h3
      className="mt-8 mb-3 text-2xl font-medium tracking-tight text-foreground"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <p className="text-muted-foreground mb-6 leading-7" {...props}>
      {children}
    </p>
  ),
  ul: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ul
      className="mb-6 ml-6 list-disc space-y-2 text-muted-foreground"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ol
      className="mb-6 ml-6 list-decimal space-y-2 text-muted-foreground"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),
  pre: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    const codeText = getTextContent(children);

    return (
      <div className="group relative mb-6 mt-4">
        <pre
          className="bg-zinc-950 dark:bg-zinc-900 overflow-x-auto rounded-xl border border-border p-4 text-sm text-zinc-50"
          {...props}
        >
          {children}
        </pre>
        <CodeCopyButton
          code={codeText}
          className="bg-neutral-700 text-neutral-300"
        />
      </div>
    );
  },
  code: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown;
  }) => {
    if (className?.includes("language-")) {
      return (
        <code className={`${className} bg-transparent p-0`} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code
        className="text-foreground rounded px-1.5 py-0.5 font-mono text-sm font-semibold"
        {...props}
      >
        {children}
      </code>
    );
  },
  blockquote: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <blockquote
      className="border-l-4 border-primary pl-6 italic text-muted-foreground my-6"
      {...props}
    >
      {children}
    </blockquote>
  ),
};

export function MDXContent(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
        },
      }}
    />
  );
}

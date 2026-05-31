import { PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";

export const RichTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-[400px] my-8">
          {/* Note: In production you should use Sanity image url builder here */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value.asset?.url || "/placeholder-image.jpg"}
            alt={value.alt || "Image"}
            className="w-full h-full object-cover rounded-default"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 list-disc my-4 space-y-2 text-[1.02rem] text-text-primary font-serif leading-[1.75]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="ml-10 list-decimal my-4 space-y-2 text-[1.02rem] text-text-primary font-serif leading-[1.75]">
        {children}
      </ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-serif font-bold text-text-primary my-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-serif font-bold text-text-primary my-6 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-serif font-bold text-text-primary my-5 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-serif font-bold text-text-primary my-4 leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="font-serif text-[1.02rem] text-text-primary leading-[1.75] mb-5 text-justify">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-9 bg-bg-surface border-l-4 border-primary rounded-r-default py-5 px-7 shadow-subtle font-serif italic text-[1.12rem] leading-[1.6] text-text-primary">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-text-primary">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          target={target}
          className="text-primary no-underline font-semibold hover:underline"
        >
          {children}
        </Link>
      );
    },
  },
};

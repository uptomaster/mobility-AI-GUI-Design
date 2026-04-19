"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const spring = {
  type: "spring" as const,
  stiffness: 64,
  damping: 22,
  mass: 0.9,
};

type SectionFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  /** Tailwind aspect class, e.g. aspect-[3/4] */
  aspectClass?: string;
  className?: string;
};

export function SectionFrame({
  src,
  alt,
  priority = false,
  aspectClass = "aspect-[3/4]",
  className = "",
}: SectionFrameProps) {
  const [broken, setBroken] = useState(false);

  return (
    <motion.div
      className={`relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={spring}
    >
      <div
        className={`relative w-full ${aspectClass} select-none overflow-hidden`}
        style={{
          borderRadius: "clamp(22px, 3vw, 32px)",
          boxShadow: `
            0 2px 4px rgba(0,0,0,0.04),
            0 24px 56px -18px rgba(29,29,31,0.26),
            0 0 0 1px rgba(255,255,255,0.7) inset
          `,
        }}
      >
        <div
          className="absolute inset-0 bg-[#f0ebe4]"
          style={{ borderRadius: "inherit" }}
        >
          {!broken ? (
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 92vw, 42vw"
              className="object-cover object-center"
              onError={() => setBroken(true)}
            />
          ) : (
            <Placeholder expectedPath={src} />
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1d1d1f]/[0.12] via-transparent to-[#fffaf0]/[0.1]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]"
            style={{ borderRadius: "inherit" }}
            aria-hidden
          />
        </div>
      </div>
      <div
        className="pointer-events-none mx-auto -mt-1 h-9 max-w-[88%] rounded-[50%] bg-[#1d1d1f]/[0.09] blur-2xl"
        aria-hidden
      />
    </motion.div>
  );
}

function Placeholder({ expectedPath }: { expectedPath: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffe8dc] via-[#fff7ef] to-[#e6eef8]" />
      <div className="absolute inset-0 opacity-35 mix-blend-multiply [background-image:radial-gradient(circle_at_30%_20%,#ff8c69_0%,transparent_50%),radial-gradient(circle_at_70%_75%,#93c5fd_0%,transparent_48%)]" />
      <p className="relative z-[1] text-center text-[0.8125rem] font-medium leading-relaxed text-[var(--text-sub)]">
        <span className="mb-1 block font-semibold text-[var(--text-dark)]">
          {expectedPath}
        </span>
        해당 경로에 이미지를 추가해 주세요.
      </p>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/content";

type Panel = "about" | "contact";

export default function Nav() {
  const [open, setOpen] = useState<Panel | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, []);

  const toggle = (panel: Panel) => setOpen((o) => (o === panel ? null : panel));

  const item = (active: boolean) =>
    `rounded-md px-3 py-1.5 text-sm transition-colors hover:text-neutral-100 ${
      active ? "text-neutral-100" : "text-neutral-400"
    }`;

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#1e1e1e]/80 backdrop-blur"
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-semibold">
          {profile.initials}
        </a>
        <div className="flex items-center gap-1">
          <a href="#work" className={item(false)}>
            Work
          </a>
          <button
            type="button"
            aria-expanded={open === "about"}
            onClick={() => toggle("about")}
            className={item(open === "about")}
          >
            About
          </button>
          <button
            type="button"
            aria-expanded={open === "contact"}
            onClick={() => toggle("contact")}
            className={item(open === "contact")}
          >
            Contact
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full">
          <div className="mx-auto flex max-w-6xl justify-end px-6 pt-2">
            <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#262626] p-5 shadow-xl">
              {open === "about" ? (
                <>
                  <p className="text-sm leading-relaxed text-neutral-300">
                    {profile.about}
                  </p>
                  <p className="mt-3 text-sm text-neutral-500">
                    {profile.tools}
                  </p>
                </>
              ) : (
                <>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-medium text-[#ffd84d] hover:underline"
                  >
                    {profile.email}
                  </a>
                  <ul className="mt-3 space-y-1.5">
                    {profile.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-neutral-300 hover:text-neutral-100"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href={profile.resume}
                        className="text-sm text-neutral-300 hover:text-neutral-100"
                      >
                        Resume (PDF)
                      </a>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

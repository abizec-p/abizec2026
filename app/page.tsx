import Image from "next/image";
import { profile, projects } from "../lib/content";
import Nav from "../components/Nav";

function CardLink({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (!href) return <div>{children}</div>;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section id="top" className="flex min-h-[50svh] items-center">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <p className="text-sm text-neutral-400">{profile.role}</p>
            <h1 className="font-display mt-3 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl md:text-8xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-md text-neutral-400">{profile.intro}</p>
            <div className="mt-7 flex gap-3">
              <a
                href="#work"
                className="rounded-full bg-[#ffd84d] px-5 py-2.5 text-sm font-medium text-[#1e1e1e] transition-colors hover:bg-[#ffe27a]"
              >
                View work
              </a>
              <a
              target="_blank"
                href={profile.resume}
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-neutral-200 transition-colors hover:border-white/40"
              >
                Resume
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-display text-2xl font-medium">Selected work</h2>
          <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="group">
                <CardLink href={p.href}>
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
                    style={{ backgroundColor: p.tint }}
                  >
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <span
                        className="absolute inset-0 grid place-items-center text-sm font-medium"
                        style={{ color: p.ink }}
                      >
                        {p.title}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-base font-medium">
                      {p.title}
                    </h3>
                    <p className="text-sm text-neutral-500">{p.category}</p>
                  </div>
                </CardLink>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

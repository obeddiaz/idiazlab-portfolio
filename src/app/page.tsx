// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


import { Container, Badge, Card, ButtonLink } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { LINKS } from "@/constants/links";
import { PROJECTS } from "@/constants/projects";
import { EXPERIENCE } from "@/constants/experience";
import { Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react";
import ThemeToggle from "@/components/theme/theme-toggle";

const muted = { color: `rgb(var(--muted))` };
const text = { color: `rgb(var(--text))` };
const border = { borderColor: `rgba(var(--border), var(--border-alpha))` };
const glass = {
  border: `1px solid rgba(var(--border), var(--border-alpha))`,
  background: `rgba(var(--card), var(--card-alpha))`,
};


export default function Page() {
  return (
    <main className="pb-16">
    <header
        className="sticky top-0 z-50 backdrop-blur"
        style={{
          borderBottom: `1px solid rgba(var(--border), var(--border-alpha))`,
          background: `rgba(var(--bg), 0.6)`,
        }}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">iDiaz Lab</div>
              <div className="text-xs" style={{ color: `rgba(var(--muted), 0.9)` }}>
                Full-stack Engineer
              </div>
            </div>

            <nav className="hidden items-center gap-2 sm:flex">
              {[
                ["Work", "#work"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm transition"
                  style={{
                    color: `rgba(var(--text), 0.75)`,
                  }}
                >
                  <span className="inline-block rounded-lg px-0 py-0 hover:opacity-100" />
                  <span
                    className="hover:opacity-100"
                    style={{
                      color: `rgba(var(--text), 0.75)`,
                    }}
                  >
                    {label}
                  </span>
                </a>
              ))}

              <ButtonLink href={LINKS.resume} variant="ghost" target="_blank">
                Resume
              </ButtonLink>
              <ThemeToggle />
            </nav>
          </div>
        </Container>
      </header>

      {/* <header className="sticky top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">iDiaz Lab</div>
              <div className="text-xs text-white/60">Full-stack Engineer</div>
            </div>
            <nav className="hidden items-center gap-2 sm:flex">
              <a className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white" href="#work">Work</a>
              <a className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white" href="#projects">Projects</a>
              <a className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white" href="#contact">Contact</a>
              <ButtonLink href={LINKS.resume} variant="ghost" target="_blank">Resume</ButtonLink>
              <ThemeToggle />
            </nav>
          </div>
        </Container>
      </header> */}

      <section className="pt-14 sm:pt-20">
        <Container>
          {/* <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-400/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge><Sparkles className="mr-2 h-3.5 w-3.5 opacity-80" /> Available for roles</Badge>
                  <Badge>US / Remote</Badge>
                  <Badge>Full-stack • Platform</Badge>
                </div>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                  Full-stack engineer building scalable web platforms, developer tooling, and serverless systems.
                </h1>

                <p className="mt-4 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
                  I design and ship production systems end-to-end using React, TypeScript, Node.js and AWS—focused on performance,
                  developer experience, and real business impact.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href={LINKS.resume} target="_blank" variant="ghost"><FileText className="h-4 w-4" /> Resume</ButtonLink>
                  <ButtonLink href={LINKS.github} variant="ghost" external><Github className="h-4 w-4" /> GitHub</ButtonLink>
                  <ButtonLink href={LINKS.linkedin} variant="ghost" external><Linkedin className="h-4 w-4" /> LinkedIn</ButtonLink>
                  <ButtonLink href={LINKS.email} variant="ghost"><Mail className="h-4 w-4" /> Email</ButtonLink>
                </div>
              </div>
            </div>
          </FadeIn> */}

          <FadeIn>
            {/* <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10" style={glass}> */}


             <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03] p-8 sm:p-10">


              {/* background blobs (look good in both themes) */}
              {/* <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-400/10 blur-3xl" />
              </div> */}

              <div className="pointer-events-none absolute inset-0">
                {/* INDIGO */}
                <div
                  className="
                    absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl
                    bg-indigo-500/25 dark:bg-indigo-500/20
                    opacity-40 dark:opacity-100
                  "
                />

                {/* SKY */}
                <div
                  className="
                    absolute -right-28 top-0 h-80 w-80 rounded-full blur-3xl
                    bg-sky-400/25 dark:bg-sky-400/15
                    opacity-30 dark:opacity-100
                  "
                />

                {/* PINK */}
                <div
                  className="
                    absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl
                    bg-pink-400/20 dark:bg-pink-400/10
                    opacity-25 dark:opacity-100
                  "
                />
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>
                    <Sparkles className="mr-2 h-3.5 w-3.5 opacity-80" />
                    Available for roles
                  </Badge>
                  <Badge>US / Remote</Badge>
                  <Badge>Full-stack • Platform</Badge>
                </div>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                  Full-stack engineer building scalable web platforms, developer tooling, and serverless systems.
                </h1>

                <p className="mt-4 max-w-2xl text-pretty text-base sm:text-lg" style={muted}>
                  I design and ship production systems end-to-end using React, TypeScript, Node.js and AWS—focused on performance,
                  developer experience, and real business impact.
                </p>
                 {/* <p className="mt-4 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
                  I design and ship production systems end-to-end using React, TypeScript, Node.js and AWS—focused on performance,
                  developer experience, and real business impact.
                </p> */}

                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href={LINKS.resume} target="_blank" variant="ghost">
                    <FileText className="h-4 w-4" /> Resume
                  </ButtonLink>
                  <ButtonLink href={LINKS.github} variant="ghost" external>
                    <Github className="h-4 w-4" /> GitHub
                  </ButtonLink>
                  <ButtonLink href={LINKS.linkedin} variant="ghost" external>
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </ButtonLink>
                  <ButtonLink href={LINKS.email} variant="ghost">
                    <Mail className="h-4 w-4" /> Email
                  </ButtonLink>
                </div>
              </div>
            </div>
          </FadeIn>

          <section id="work" className="mt-10 scroll-mt-24">
            {/* <FadeIn>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Experience</h2>
              <p className="mt-2 max-w-2xl text-white/65">A quick snapshot of where I’ve built and shipped production features.</p>
            </FadeIn> */}

            <FadeIn>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Experience</h2>
              <p className="mt-2 max-w-2xl" style={muted}>
                A quick snapshot of where I’ve built and shipped production features.
              </p>
            </FadeIn>

            {/* <div className="mt-6 space-y-4">
              {EXPERIENCE.map((e) => (
                <FadeIn key={e.role}>
                  <Card>
                    <div className="text-base font-semibold">{e.role}</div>
                    <div className="text-sm text-white/70">{e.company}</div>
                    <div className="mt-1 text-xs text-white/55">{e.meta}</div>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                      {e.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </Card>
                </FadeIn>
              ))}
            </div> */}

             <div className="mt-6 space-y-4">
              {EXPERIENCE.map((e) => (
                <FadeIn key={e.role}>
                  <Card>
                    <div className="text-base font-semibold">{e.role}</div>
                    <div className="text-sm" style={muted}>
                      {e.company}
                    </div>
                    <div className="mt-1 text-xs" style={{ color: `rgba(var(--muted), 0.85)` }}>
                      {e.meta}
                    </div>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm" style={muted}>
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </section>


          <section id="projects" className="mt-10 scroll-mt-24">
            <FadeIn>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Featured Projects</h2>
              <p className="mt-2 max-w-2xl text-white/65">Projects that show how I think: clean architecture, DX, and shipping.</p>
            </FadeIn>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {PROJECTS.map((p) => (
                <FadeIn key={p.title}>
                  <a href={p.href} target="_blank" rel="noreferrer" className="block h-1/1">
                    <Card>
                      <div className="text-base font-semibold">{p.title}</div>
                      <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 text-sm font-medium text-indigo-300">View repo →</div>
                    </Card>
                  </a>
                </FadeIn>
              ))}
            </div>
          </section>

          <section id="contact" className="mt-10 scroll-mt-24">
            <FadeIn>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Let’s build something useful.</h2>
                <p className="mt-2 max-w-2xl text-black/70 dark:text-white/70">
                  Email is the fastest way to reach me. I’m open to full-time or contract opportunities.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={LINKS.email}><Mail className="h-4 w-4" /> Email me</ButtonLink>
                  <ButtonLink href={LINKS.linkedin} variant="ghost" external><Linkedin className="h-4 w-4" /> LinkedIn</ButtonLink>
                  <ButtonLink href={LINKS.github} variant="ghost" external><Github className="h-4 w-4" /> GitHub</ButtonLink>
                </div>
              </div>
            </FadeIn>
          </section>
        </Container>
      </section>
    </main>
  );
}

/*
import { Container, Badge, Card, ButtonLink } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { LINKS } from "@/data/links";
import { PROJECTS } from "@/data/projects";
import { EXPERIENCE } from "@/data/experience";
import { Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react";
import ThemeToggle from "@/components/theme/theme-toggle";

const muted = { color: `rgb(var(--muted))` };
const text = { color: `rgb(var(--text))` };
const border = { borderColor: `rgba(var(--border), var(--border-alpha))` };
const glass = {
  border: `1px solid rgba(var(--border), var(--border-alpha))`,
  background: `rgba(var(--card), var(--card-alpha))`,
};

export default function Page() {
  return (
    <main className="pb-16" style={text}>
      <header
        className="sticky top-0 z-50 backdrop-blur"
        style={{
          borderBottom: `1px solid rgba(var(--border), var(--border-alpha))`,
          background: `rgba(var(--bg), 0.6)`,
        }}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">iDiaz Lab</div>
              <div className="text-xs" style={{ color: `rgba(var(--muted), 0.9)` }}>
                Full-stack Engineer
              </div>
            </div>

            <nav className="hidden items-center gap-2 sm:flex">
              {[
                ["Work", "#work"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm transition"
                  style={{
                    color: `rgba(var(--text), 0.75)`,
                  }}
                >
                  <span className="inline-block rounded-lg px-0 py-0 hover:opacity-100" />
                  <span
                    className="hover:opacity-100"
                    style={{
                      color: `rgba(var(--text), 0.75)`,
                    }}
                  >
                    {label}
                  </span>
                </a>
              ))}

              <ButtonLink href={LINKS.resume} variant="ghost" target="_blank">
                Resume
              </ButtonLink>
              <ThemeToggle />
            </nav>
          </div>
        </Container>
      </header>

      <section className="pt-14 sm:pt-20">
        <Container>
         <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-400/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge><Sparkles className="mr-2 h-3.5 w-3.5 opacity-80" /> Available for roles</Badge>
                  <Badge>US / Remote</Badge>
                  <Badge>Full-stack • Platform</Badge>
                </div>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                  Full-stack engineer building scalable web platforms, developer tooling, and serverless systems.
                </h1>

                <p className="mt-4 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
                  I design and ship production systems end-to-end using React, TypeScript, Node.js and AWS—focused on performance,
                  developer experience, and real business impact.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href={LINKS.resume} target="_blank" variant="ghost"><FileText className="h-4 w-4" /> Resume</ButtonLink>
                  <ButtonLink href={LINKS.github} variant="ghost" external><Github className="h-4 w-4" /> GitHub</ButtonLink>
                  <ButtonLink href={LINKS.linkedin} variant="ghost" external><Linkedin className="h-4 w-4" /> LinkedIn</ButtonLink>
                  <ButtonLink href={LINKS.email} variant="ghost"><Mail className="h-4 w-4" /> Email</ButtonLink>
                </div>
              </div>
            </div>
          </FadeIn>

          <section id="work" className="mt-10 scroll-mt-24">
            <FadeIn>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Experience</h2>
              <p className="mt-2 max-w-2xl" style={muted}>
                A quick snapshot of where I’ve built and shipped production features.
              </p>
            </FadeIn>

            <div className="mt-6 space-y-4">
              {EXPERIENCE.map((e) => (
                <FadeIn key={e.role}>
                  <Card>
                    <div className="text-base font-semibold">{e.role}</div>
                    <div className="text-sm" style={muted}>
                      {e.company}
                    </div>
                    <div className="mt-1 text-xs" style={{ color: `rgba(var(--muted), 0.85)` }}>
                      {e.meta}
                    </div>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm" style={muted}>
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </section>

          <section id="projects" className="mt-10 scroll-mt-24">
            <FadeIn>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Featured Projects</h2>
              <p className="mt-2 max-w-2xl" style={muted}>
                Projects that show how I think: clean architecture, DX, and shipping.
              </p>
            </FadeIn>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {PROJECTS.map((p) => (
                <FadeIn key={p.title}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block transition"
                    style={text}
                  >
                    <Card>
                      <div className="text-base font-semibold">{p.title}</div>
                      <p className="mt-2 text-sm" style={muted}>
                        {p.desc}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full px-2.5 py-1 text-[11px]"
                            style={{
                              ...border,
                              borderWidth: 1,
                              borderStyle: "solid",
                              background: `rgba(var(--chip), var(--chip-alpha))`,
                              color: `rgba(var(--text), 0.75)`,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 text-sm font-medium" style={{ color: `rgba(var(--accent), 0.9)` }}>
                        View repo →
                      </div>
                    </Card>
                  </a>
                </FadeIn>
              ))}
            </div>
          </section>

          <section id="contact" className="mt-10 scroll-mt-24">
            <FadeIn>
              <div className="rounded-3xl p-8 sm:p-10" style={glass}>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Let’s build something useful.</h2>
                <p className="mt-2 max-w-2xl" style={muted}>
                  Email is the fastest way to reach me. I’m open to full-time or contract opportunities.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={LINKS.email}>
                    <Mail className="h-4 w-4" /> Email me
                  </ButtonLink>
                  <ButtonLink href={LINKS.linkedin} variant="ghost" external>
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </ButtonLink>
                  <ButtonLink href={LINKS.github} variant="ghost" external>
                    <Github className="h-4 w-4" /> GitHub
                  </ButtonLink>
                </div>
              </div>
            </FadeIn>
          </section>
        </Container>
      </section>
    </main>
  );
}
*/
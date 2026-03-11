export default function Home() {
  return (
    <main className="bg-[#f7f9fc] text-[#122033] selection:bg-[rgba(255,138,0,0.22)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(20,87,184,0.10)] bg-[rgba(255,255,255,0.68)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10">
          <a href="#home" className="flex items-center">
            <img
              src="/patentos-logo.png"
              alt="PatentOS logo"
              className="h-9 w-auto object-contain sm:h-10 lg:h-12"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#ff8a00] lg:flex">
  <a href="#platform" className="transition hover:text-[#1457b8]">
    Platform
  </a>
  <a href="#how-it-works" className="transition hover:text-[#1457b8]">
    How It Works
  </a>
  <a href="#why-patentos" className="transition hover:text-[#1457b8]">
    Why PatentOS
  </a>
   <a href="#solutions" className="transition hover:text-[#1457b8]">
    Solutions
  </a>
   <a href="#vision" className="transition hover:text-[#1457b8]">
    Vision
  </a>
  <a href="#founder" className="transition hover:text-[#1457b8]">
    About
  </a>
</nav>

          <a
  href="#contact"
  className="rounded-full border border-[rgba(255,138,0,0.38)] bg-[rgba(255,255,255,0.72)] px-5 py-2.5 text-sm font-medium text-[#1457b8] transition hover:bg-[rgba(255,138,0,0.10)] hover:text-[#ff8a00]"
>
  Request Demo
</a>
        </div>
      </header>

      <section id="home" className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-30 bg-[#0b2f6b]" />
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(11,47,107,0.82)_0%,rgba(20,87,184,0.72)_48%,rgba(255,138,0,0.18)_100%)] md:bg-[linear-gradient(135deg,rgba(11,47,107,0.92)_0%,rgba(20,87,184,0.82)_48%,rgba(255,138,0,0.34)_100%)]" />
        <div className="absolute left-1/2 top-28 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[rgba(255,138,0,0.14)] blur-3xl" />
        <div className="absolute right-[-7rem] top-20 -z-10 h-[24rem] w-[24rem] rounded-full bg-[rgba(20,87,184,0.22)] blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">
          <div className="grid w-full gap-10 lg:gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="relative z-20 max-w-3xl text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.10)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-white">
                India-first patent intelligence platform
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                The operating system for real innovation in India.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white sm:text-lg">
                From first-line idea to protected patent asset, PatentOS helps innovators identify, structure, draft,
                prosecute, and protect what truly matters. Built for startups, enterprises, universities, inventors,
                and law firms.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                PatentOS combines invention mining, invention harnessing, drafting intelligence, prosecution readiness,
                implementation guidance, and law-firm integration into one coordinated innovation workflow.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#ff8a00] px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.01] hover:bg-[#ff5a00]"
                >
                  Request a Demo
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.08)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[rgba(255,255,255,0.14)]"
                >
                  See How PatentOS Works
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  "Invention Mining",
                  "Drafting Intelligence",
                  "Law Firm Integration",
                  "Prosecution Continuity",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.08)] px-4 py-4 text-sm text-white/80 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-[rgba(255,138,0,0.12)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.08)] p-5 shadow-[0_30px_120px_rgba(2,6,23,0.35)] backdrop-blur-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-[#ffd2a1]">PatentOS Workflow</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">Innovation to grant pipeline</h3>
                  </div>
                  <div className="rounded-full border border-[rgba(255,138,0,0.25)] bg-[rgba(255,138,0,0.14)] px-3 py-1 text-xs text-[#ffe1bf]">
                    Live system view
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    ["01", "Idea Input", "Single-line idea, R&D note, feature, concept, or technical challenge."],
                    ["02", "Invention Mapping", "Problem, solution, novelty, embodiments, implementation logic."],
                    ["03", "Draft Build", "Structured disclosure, claim architecture, technical narrative."],
                    ["04", "Counsel Collaboration", "Inventor, in-house team, and law-firm review in one flow."],
                    ["05", "Prosecution Highway", "Filing readiness, tracking, continuity, and grant support."],
                  ].map(([num, title, text]) => (
                    <div
                      key={num}
                      className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(8,20,52,0.55)] p-4 transition hover:bg-[rgba(8,20,52,0.72)]"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(20,87,184,0.32)] bg-[rgba(20,87,184,0.18)] text-sm font-semibold text-[#d7e6ff]">
                          {num}
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-white">{title}</h4>
                          <p className="mt-1 text-sm leading-6 text-white/70">{text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-[rgba(255,138,0,0.18)] bg-[rgba(255,138,0,0.12)] p-4">
                  <p className="text-xs tracking-[0.18em] text-[#ffe0bd]">PatentOS principle</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Built for patent quality, technical depth, and prosecution continuity, not generic text generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(20,87,184,0.08)] bg-[#f7f9fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-x1 font-semibold tracking-[0.04em] text-[#ff8a00] sm:text-2xl">The Problem</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-[#122033] sm:text-4xl">
                India has no shortage of ideas. It needs better innovation infrastructure.
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Too many valuable inventions are never captured properly. Too many patent filings begin too late, are
                drafted inconsistently, or move through fragmented workflows between inventors, internal teams, and
                external counsel. PatentOS is built to solve that gap by creating a connected innovation-to-patent
                pipeline focused on real inventions, stronger prosecution outcomes, and long-term portfolio value.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Ideas are lost before they are documented",
              "Drafting is slow, inconsistent, and expensive",
              "Inventors, teams, and law firms work in disconnected silos",
              "Too many filings optimize for volume, not real defensibility",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-[rgba(20,87,184,0.10)] bg-white p-6 text-base leading-7 text-slate-600 shadow-[0_10px_40px_rgba(20,87,184,0.05)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-x1 font-semibold tracking-[0.04em] text-[#ff8a00] sm:text-2xl">The Platform</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[#122033] sm:text-4xl">
            One platform for the full innovation intelligence workflow
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            PatentOS is not just a drafting assistant. It is a connected platform that helps organizations capture
            inventions earlier, structure them better, prosecute them smarter, and protect innovations that matter.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Invention Mining",
                text: "Surface hidden invention opportunities from technical conversations, product developments, R&D notes, internal documents, and early-stage ideas.",
              },
              {
                title: "Invention Harnessing",
                text: "Convert scattered technical insight into structured invention disclosures with clearer novelty, technical problem framing, and commercial relevance.",
              },
              {
                title: "Patent Drafting Intelligence",
                text: "Generate high-quality support for specifications, claims, figures logic, summaries, and filing-ready technical documentation.",
              },
              {
                title: "Prosecution Readiness",
                text: "Build stronger filings from day one with better support, cleaner claim structure, and more consistent downstream coordination.",
              },
              {
                title: "Law Firm Integration",
                text: "Connect innovators and external patent counsel through a smoother prosecution highway with less friction and better information flow.",
              },
              {
                title: "Innovation Protection Strategy",
                text: "Focus resources on real, defensible, commercially meaningful innovation instead of vanity filings or paper patents.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[1.75rem] border border-[rgba(20,87,184,0.10)] bg-white p-7 shadow-[0_10px_40px_rgba(20,87,184,0.06)] transition hover:-translate-y-1"
              >
                <div className="mb-5 h-1.5 w-12 rounded-full bg-[linear-gradient(90deg,#1457b8_0%,#ff8a00_100%)]" />
                <h3 className="text-xl font-semibold text-[#122033]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-[rgba(20,87,184,0.08)] bg-[#f7f9fc]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-x1 font-semibold tracking-[0.04em] text-[#ff8a00] sm:text-2xl">How it Works?</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[#122033] sm:text-4xl">
            PatentOS transforms innovation into a structured, prosecution-ready workflow
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            {[
              {
                title: "Capture the Idea",
                text: "Input a single-line concept, product feature, technical note, design challenge, or R&D insight.",
              },
              {
                title: "Expand the Invention",
                text: "Map the problem, solution, technical architecture, novelty drivers, implementation details, and embodiments.",
              },
              {
                title: "Build the Patent Asset",
                text: "Generate structured invention disclosures, claim frameworks, and technical documentation designed for real prosecution workflows.",
              },
              {
                title: "Collaborate with Experts",
                text: "Share outputs with inventors, in-house stakeholders, and integrated law-firm partners for review and filing strategy.",
              },
              {
                title: "Move Toward Grant",
                text: "Track prosecution, strengthen filing quality, and support a smoother path from invention capture to enforceable protection.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.75rem] border border-[rgba(20,87,184,0.10)] bg-white p-6 shadow-[0_10px_40px_rgba(20,87,184,0.05)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(20,87,184,0.18)] bg-[rgba(20,87,184,0.08)] text-sm font-semibold text-[#1457b8]">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#122033]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-[rgba(255,138,0,0.18)] bg-[rgba(255,138,0,0.08)] p-6">
            <p className="text-sm leading-7 text-slate-700">
              Built for patent quality, technical depth, and prosecution continuity, not generic AI writing.
            </p>
          </div>
        </div>
      </section>

      <section id="why-patentos" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-x1 font-semibold tracking-[0.04em] text-[#ff8a00] sm:text-2xl">Why PatentOS?</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[#122033] sm:text-4xl">
            Because innovation deserves better infrastructure
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              {
                title: "Real Innovation",
                text: "Built to support meaningful technical progress, not filing vanity metrics.",
              },
              {
                title: "Prosecution Continuity",
                text: "Connect invention capture, drafting, and downstream prosecution into one flow.",
              },
              {
                title: "India-First Design",
                text: "Created for India’s innovation economy and the realities of its IP ecosystem.",
              },
              {
                title: "Ecosystem Integration",
                text: "Designed to work with inventors, institutions, legal teams, and external counsel together.",
              },
              {
                title: "Strategic Defensibility",
                text: "Focused on stronger patent assets, not just a higher number of filings.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-[rgba(20,87,184,0.10)] bg-white p-6 shadow-[0_10px_40px_rgba(20,87,184,0.05)]"
              >
                <h3 className="text-lg font-semibold text-[#122033]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="border-y border-[rgba(20,87,184,0.08)] bg-[#f7f9fc]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-x1 font-semibold tracking-[0.04em] text-[#ff8a00] sm:text-2xl">Solutions</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[#122033] sm:text-4xl">
            Built for every serious innovation stakeholder
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "For Startups",
                text: "PatentOS helps startups capture invention opportunities early, document technical differentiation clearly, and build stronger IP foundations for fundraising, product defensibility, and market entry.",
              },
              {
                title: "For Universities",
                text: "PatentOS helps universities and research teams identify patentable work faster, convert research into structured disclosures, and improve the quality of filings emerging from academic innovation.",
              },
              {
                title: "For Law Firms",
                text: "PatentOS helps law firms receive better-prepared invention inputs, reduce back-and-forth with inventors, standardize early drafting workflows, and collaborate more efficiently with clients.",
              },
              {
                title: "For Enterprises",
                text: "PatentOS helps enterprise R&D, product, and legal teams build internal invention pipelines, spot high-value innovation earlier, and coordinate more effectively across engineering, business, and counsel.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.9rem] border border-[rgba(20,87,184,0.10)] bg-white p-7 shadow-[0_10px_40px_rgba(20,87,184,0.05)]"
              >
                <h3 className="text-2xl font-semibold text-[#122033]">{item.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section id="vision" className="border-y border-[rgba(20,87,184,0.08)] bg-[#f7f9fc]">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
    <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <p className="mb-3 text-xl font-semibold tracking-[0.04em] text-[#ff8a00] sm:text-2xl">
          Vision
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-[#122033] sm:text-4xl">
          Closing India&apos;s patent gap with the world&apos;s leading innovation economies.
        </h2>
      </div>

      <div className="rounded-[2rem] border border-[rgba(20,87,184,0.10)] bg-white p-8 shadow-[0_10px_40px_rgba(20,87,184,0.05)]">
        <p className="text-base leading-8 text-slate-600">
          PatentOS exists to help India close its patent gap with the world&apos;s leading innovation
          economies by leveraging AI to make high-quality patent creation faster, smarter, and more
          accessible. We believe India does not lack ideas. It lacks scalable invention-to-patent
          infrastructure.
        </p>
        <p className="mt-6 text-base leading-8 text-slate-600">
          Our vision is to help transform India from a nation of under-captured innovation into a
          global patent powerhouse by enabling more inventors, startups, universities, MSMEs, and
          enterprises to convert real technical breakthroughs into defensible patent assets.
        </p>
        <p className="mt-6 text-base leading-8 text-slate-600">
          In 2023, applicants based in China filed 1,642,507 patent applications worldwide, the
          United States filed 518,364, and India filed 64,480. PatentOS is being built to help
          narrow that gap with better invention discovery, stronger drafting, and more scalable
          prosecution readiness. 
        </p>
      </div>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[2rem] border border-[rgba(20,87,184,0.10)] bg-white p-8 shadow-[0_10px_40px_rgba(20,87,184,0.05)]">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-[#122033]">
              Global patent applications by origin, 2023
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              A simple snapshot of where India stands today relative to China and the United States.
            </p>
          </div>
          <p className="text-xs tracking-[0.08em] text-slate-400">Source: WIPO Statistics Database</p>
        </div>

        <div className="mt-10">
          {[
            { label: "China", value: 1642507, color: "bg-[#1457b8]" },
            { label: "United States", value: 518364, color: "bg-[#2f6fd1]" },
            { label: "India", value: 64480, color: "bg-[#ff8a00]" },
          ].map((item) => {
            const max = 1642507;
            const width = (item.value / max) * 100;
            return (
              <div key={item.label} className="mb-6 last:mb-0">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-[#122033]">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-600">
                    {item.value.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="h-4 w-full rounded-full bg-[#e9eef7]">
                  <div
                    className={`h-4 rounded-full ${item.color}`}
                    style={{ width: `${width}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-[2rem] border border-[rgba(255,138,0,0.16)] bg-[linear-gradient(135deg,#fff7ef_0%,#ffffff_100%)] p-8 shadow-[0_10px_40px_rgba(255,138,0,0.08)]">
        <p className="text-lg font-semibold text-[#122033]">
          India–China patent gap
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-500">
          Based on 2023 worldwide patent applications by origin.
        </p>

        <div className="mt-8 rounded-[1.5rem] border border-[rgba(20,87,184,0.10)] bg-white p-6">
          <p className="text-sm text-slate-500">China</p>
          <p className="mt-1 text-3xl font-semibold text-[#1457b8]">
            {1642507 .toLocaleString("en-IN")}
          </p>

          <div className="my-6 h-px bg-[rgba(20,87,184,0.10)]" />

          <p className="text-sm text-slate-500">India</p>
          <p className="mt-1 text-3xl font-semibold text-[#ff8a00]">
            {64480 .toLocaleString("en-IN")}
          </p>

          <div className="my-6 h-px bg-[rgba(20,87,184,0.10)]" />

          <p className="text-sm text-slate-500">Gap</p>
          <p className="mt-1 text-4xl font-semibold text-[#122033]">
            {(1642507 - 64480).toLocaleString("en-IN")}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            PatentOS is being built to help India reduce this distance by leveraging AI to improve
            invention capture, drafting quality, and patent readiness at scale.
          </p>
        </div>

        <div className="mt-8">
          <p className="text-sm font-medium text-slate-500">Relative scale</p>
          <div className="mt-3 h-5 w-full rounded-full bg-[#e9eef7]">
            <div
              className="h-5 rounded-full bg-[#1457b8]"
              style={{ width: "100%" }}
            />
          </div>
          <div className="mt-3 h-5 w-full rounded-full bg-[#fff1e2]">
            <div
              className="h-5 rounded-full bg-[#ff8a00]"
              style={{ width: `${(64480 / 1642507) * 100}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
            <span>China = 100%</span>
            <span>India ≈ {((64480 / 1642507) * 100).toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </div>

    <p className="mt-8 text-sm leading-7 text-slate-500">
      PatentOS vision uses WIPO 2023 worldwide patent application figures by origin: China 1,642,507,
      United States 518,364, and India 64,480. India was also one of the fastest-growing major origins
      in 2023. 
    </p>
  </div>
</section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[rgba(20,87,184,0.10)] bg-white p-8 shadow-[0_10px_40px_rgba(20,87,184,0.05)]">
              <p className="text-x1 font-semibold tracking-[0.04em] text-[#ff8a00] sm:text-2xl">A Clear Philosophy</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#122033]">
                Built to protect real innovation, not paper patents
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                PatentOS is founded on a simple principle. Patent systems create the most value when they protect
                genuine technical progress. Our platform is designed to help organizations identify meaningful
                inventions, improve technical articulation, and pursue stronger protection pathways with seriousness and
                discipline.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-[rgba(255,138,0,0.18)] bg-[#fff3e6] p-7">
                <p className="text-x1 font-semibold tracking-[0.04em] text-[#ff8a00] sm:text-2xl">Paper Patents</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Volume without depth, weak technical articulation, fragmented filing workflows, and lower strategic
                  value.
                </p>
              </div>
              <div className="rounded-[2rem] border border-[rgba(20,87,184,0.18)] bg-[#edf4ff] p-7">
                <p className="text-sm uppercase tracking-[0.18em] text-[#1457b8]">Real innovation assets</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Clearer invention capture, stronger technical structure, better prosecution readiness, and higher
                  long-term portfolio value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(20,87,184,0.08)] bg-[#f7f9fc]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="rounded-[2rem] border border-[rgba(20,87,184,0.10)] bg-[linear-gradient(135deg,rgba(237,244,255,1)_0%,rgba(255,243,230,0.92)_100%)] p-8 shadow-[0_16px_50px_rgba(20,87,184,0.08)] lg:p-12">
            <p className="text-x1 font-semibold tracking-[0.04em] text-[#ff8a00] sm:text-2xl">The Ecosystem Model</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[#122033] sm:text-4xl">
              An ecosystem layer for India&apos;s patent future
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              PatentOS is being built as more than a standalone software product. It is an integration layer across
              inventors, startups, research institutions, enterprises, and patent law firms. By improving coordination
              across the ecosystem, PatentOS aims to reduce friction, improve filing quality, and create a smoother
              prosecution highway from invention to grant.
            </p>
            <p className="mt-5 text-sm uppercase tracking-[0.16em] text-slate-500">
              Technology where it matters. Expert judgment where it counts.
            </p>
          </div>
        </div>
      </section>

      <section id="founder" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-x1 font-semibold tracking-[0.04em] text-[#ff8a00] sm:text-2xl">Why we do what we do?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#122033] sm:text-4xl">
                India does not lack innovation. It lacks a connected, high-quality system for capturing and protecting
                it.
              </h2>
            </div>
            <div className="rounded-[2rem] border border-[rgba(20,87,184,0.10)] bg-white p-8 shadow-[0_10px_40px_rgba(20,87,184,0.05)]">
              <p className="text-base leading-8 text-slate-600">
                Across startups, research teams, enterprises, and inventors, valuable technical breakthroughs are often
                lost in translation between idea, documentation, drafting, and prosecution. Too often, promising
                inventions are either never captured, weakly articulated, or pushed through fragmented workflows that
                reduce long-term value.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-600">
                PatentOS was created to change that. The vision is to build an India-first innovation intelligence
                platform that helps serious innovators move from raw technical insight to structured patent assets with
                greater speed, clarity, and strategic quality.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-600">
                The long-term mission is bigger than drafting. It is to strengthen India&apos;s innovation
                infrastructure through better invention mining, better patent preparation, better law-firm
                collaboration, and a sharper focus on real, defensible innovations that deserve protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[linear-gradient(135deg,#0b2f6b_0%,#1457b8_55%,#ff8a00_140%)]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_38%)]" />
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
    <div className="text-center text-white">
      <p className="text-xl font-semibold tracking-[0.04em] text-[#ffd2a1] sm:text-2xl">Contact PatentOS</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
        Let’s build stronger innovation pipelines together
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
        Whether you want to explore a live product demo or discuss a strategic ecosystem partnership, PatentOS is ready to connect.
      </p>
      <p className="mt-4 text-base text-white/95">
        General enquiries:{" "}
        <a href="mailto:hello@patentos.in" className="underline underline-offset-4 hover:text-[#ffd2a1]">
          hello@patentos.in
        </a>
      </p>
    </div>

    <div className="mt-14 grid gap-8 lg:grid-cols-2">
      <div className="rounded-[2rem] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.10)] p-8 backdrop-blur-md">
        <h3 className="text-2xl font-semibold text-white">Book a Demo</h3>
        <p className="mt-3 text-sm leading-7 text-white/80">
          Share a few details so we can tailor the PatentOS demo to your organization, workflow, and innovation needs. Demo requests will be received on hello@patentos.in.
        </p>

        <form
          action="https://formsubmit.co/hello@patentos.in"
          method="POST"
          className="mt-8 space-y-4"
        >
          <input type="hidden" name="_subject" value="New PatentOS Demo Request" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://www.patentos.in/#contact" />

          <input
            type="text"
            name="full_name"
            placeholder="Full name"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <input
            type="email"
            name="work_email"
            placeholder="Work email"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <input
            type="tel"
            name="phone_number"
            placeholder="Phone number"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <input
            type="text"
            name="company_organization"
            placeholder="Company / organization"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <input
            type="text"
            name="role_designation"
            placeholder="Role / designation"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <select
            name="organization_type"
            required
            defaultValue=""
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          >
            <option value="" disabled>
              Organization type
            </option>
            <option value="Individual Inventor">Individual inventor</option>
            <option value="University / College">University / College</option>
            <option value="Startup">Startup</option>
            <option value="MSME">MSME</option>
            <option value="Large Enterprise">Large enterprise</option>
          </select>

          <select
            name="ipr_patent_department"
            required
            defaultValue=""
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          >
            <option value="" disabled>
              Does your organization have an IPR / Patent department?
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Not Sure">Not sure</option>
          </select>

          <textarea
            name="demo_requirements"
            placeholder="Tell us what you would like to explore in the demo"
            rows={5}
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0b2f6b] transition hover:bg-[#fff4eb]"
          >
            Submit Demo Request
          </button>
        </form>
      </div>

      <div className="rounded-[2rem] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.10)] p-8 backdrop-blur-md">
        <h3 className="text-2xl font-semibold text-white">Partner with PatentOS</h3>
        <p className="mt-3 text-sm leading-7 text-white/80">
          This partnership channel is intended for IP law firms and IP KPO companies that want to explore integration, drafting support workflows, prosecution collaboration, and ecosystem enablement with PatentOS. Partnership enquiries will be received on partners@patentos.in.
        </p>

        <form
          action="https://formsubmit.co/partners@patentos.in"
          method="POST"
          className="mt-8 space-y-4"
        >
          <input type="hidden" name="_subject" value="New PatentOS Partnership Enquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://www.patentos.in/#contact" />

          <input
            type="text"
            name="full_name"
            placeholder="Full name"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <input
            type="email"
            name="work_email"
            placeholder="Work email"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <input
            type="tel"
            name="phone_number"
            placeholder="Phone number"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <input
            type="text"
            name="organization_name"
            placeholder="Firm / company name"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <input
            type="text"
            name="role_designation"
            placeholder="Role / designation"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <select
            name="partner_type"
            required
            defaultValue=""
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          >
            <option value="" disabled>
              Type of partner
            </option>
            <option value="IP Law Firm">IP law firm</option>
            <option value="IP KPO Company">IP KPO company</option>
          </select>

          <input
            type="text"
            name="office_locations"
            placeholder="Office location(s)"
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <input
            type="text"
            name="practice_focus"
            placeholder="Primary IP focus areas (for example patents, drafting, prosecution, analytics, paralegal support)"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <input
            type="text"
            name="team_size"
            placeholder="Approximate team size handling patent / IP work"
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <textarea
            name="partnership_interest"
            placeholder="Describe the partnership opportunity and how your firm or company could work with PatentOS"
            rows={5}
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.18)] bg-white/95 px-4 py-3 text-[#122033] outline-none"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.10)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[rgba(255,255,255,0.16)]"
          >
            Submit Partnership Enquiry
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      <footer className="border-t border-[rgba(20,87,184,0.08)] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>PatentOS is building the infrastructure that helps India capture, protect, and scale real innovation.</p>
          <p>© 2026 PatentOS. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
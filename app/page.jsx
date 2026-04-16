import MailerLiteForm from "./components/MailerLiteForm";

export default function Home() {
  const tickerItems = [
    "Workout Partners",
    "Fitness Dates",
    "Real Accountability",
    "Match by Goals",
    "Morning People Only",
    "PR Chasers",
    "Cardio Crew"
  ];

  return (
    <div className="bg-background text-on-background font-body min-h-screen selection:bg-primary selection:text-on-primary">
      <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-center bg-gradient-to-b from-[#131313] to-transparent px-6 backdrop-blur-xl">
        <h1 className="header-logo">GymBuddies</h1>
      </header>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="floating-profile-card left-[4%] top-[28%] hidden rotate-[-8deg] lg:block">
          <div className="floating-profile-media">
            <img src="/emma.png" alt="Sofia in gym" className="floating-profile-image" />
          </div>
          <p className="mt-4 font-headline text-3xl font-black uppercase tracking-tight text-on-surface">
            Sofia, 24
          </p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-xl bg-[#ff5828] px-3 py-1 font-label text-xs font-black uppercase text-[#2b0c00]">
              HIIT
            </span>
            <span className="rounded-xl bg-[#a8f530] px-3 py-1 font-label text-xs font-black uppercase text-[#1f3000]">
              92%
            </span>
          </div>
        </div>

        <div className="floating-profile-card right-[5%] top-[22%] hidden rotate-[8deg] lg:block">
          <div className="floating-profile-media">
            <img src="/alex.png" alt="Alex in gym" className="floating-profile-image" />
          </div>
          <p className="mt-4 font-headline text-3xl font-black uppercase tracking-tight text-on-surface">
            Alex, 29
          </p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-xl bg-[#00d4ec] px-3 py-1 font-label text-xs font-black uppercase text-[#062c33]">
              Running
            </span>
            <span className="rounded-xl bg-[#a8f530] px-3 py-1 font-label text-xs font-black uppercase text-[#1f3000]">
              88%
            </span>
          </div>
        </div>
      </div>

      <main className="relative mx-auto flex min-h-[82vh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-8 pt-24 text-center lg:px-8">
        <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
          The Fitness Matching App
        </p>
        <h2 className="mt-5 font-headline text-5xl font-black uppercase leading-[0.92] tracking-tight text-on-background sm:text-7xl lg:text-8xl">
          Find Your
          <br />
          <span className="text-[#D1FF26]">Perfect</span>
          <br />
          Gym Match
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant sm:text-2xl">
          Workout partners. Fitness dates. People who actually show up. Match by goals,
          schedule, and intensity - not just looks.
        </p>
        <div className="mt-8 w-full max-w-3xl">
          <MailerLiteForm />
        </div>
      </main>

      <section className="relative overflow-hidden border-y border-white/5 bg-gradient-to-r from-[#101010] via-[#1a1a1a] to-[#101010] py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[0, 1].map((group) => (
              <div key={`ticker-group-${group}`} className="marquee-group" aria-hidden={group === 1}>
                {tickerItems.map((item, index) => (
                  <div
                    key={`${group}-${item}-${index}`}
                    className="mx-5 inline-flex items-center gap-2 font-label text-[11px] font-bold uppercase tracking-[0.16em] text-on-surface-variant"
                  >
                    <span>{item}</span>
                    <span className="text-[#D1FF26]">✦</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto w-full max-w-5xl px-4 pb-16 pt-16 lg:px-8 lg:pb-20 lg:pt-20">
        <h3 className="mb-10 text-center font-headline text-4xl font-black tracking-tight text-on-surface sm:text-5xl">
          Why <span className="text-[#D1FF26]">GymBuddies</span> works
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-white/5 bg-gradient-to-b from-[#1a1a1c] to-[#131315] p-7 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
            <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-secondary">
              01
            </p>
            <h3 className="mt-4 font-headline text-3xl font-black tracking-tight text-on-surface">
              Discover
            </h3>
            <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
              Browse athletes near you with fast profile snapshots and training intent.
            </p>
          </article>
          <article className="rounded-3xl border border-white/5 bg-gradient-to-b from-[#1a1a1c] to-[#131315] p-7 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
            <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-secondary">
              02
            </p>
            <h3 className="mt-4 font-headline text-3xl font-black tracking-tight text-on-surface">
              Match
            </h3>
            <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
              Use compatibility scoring to prioritize partners with similar goals.
            </p>
          </article>
          <article className="rounded-3xl border border-white/5 bg-gradient-to-b from-[#1a1a1c] to-[#131315] p-7 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
            <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-secondary">
              03
            </p>
            <h3 className="mt-4 font-headline text-3xl font-black tracking-tight text-on-surface">
              Train
            </h3>
            <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
              Lock in sessions and build consistency with people who push your pace.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 lg:px-8 lg:pb-20 lg:pt-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/5 bg-gradient-to-b from-[#1a1a1c] to-[#131315] p-7 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
            <span className="inline-flex rounded-lg bg-[#a8f530]/90 px-3 py-1 font-label text-[11px] font-black uppercase tracking-[0.16em] text-[#1d2d00]">
              Train Mode
            </span>
            <h3 className="mt-5 font-headline text-5xl font-black uppercase leading-[0.9] tracking-tight text-on-surface">
              Find a
              <br />
              Spotter
            </h3>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-on-surface-variant">
              Match with people who lift the same, train at the same time, and won&apos;t
              bail on leg day.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Powerlifting", "CrossFit", "Bodybuilding", "Running"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-[#ff5828] px-3 py-1 font-label text-[11px] font-black uppercase tracking-[0.14em] text-[#2b0c00]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/5 bg-gradient-to-b from-[#1a1a1c] to-[#131315] p-7 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
            <span className="inline-flex rounded-lg bg-[#00d4ec]/85 px-3 py-1 font-label text-[11px] font-black uppercase tracking-[0.16em] text-[#062c33]">
              Date Mode
            </span>
            <h3 className="mt-5 font-headline text-5xl font-black uppercase leading-[0.9] tracking-tight text-on-surface">
              Meet Your
              <br />
              Match
            </h3>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-on-surface-variant">
              Date someone who shares your lifestyle - not just your Spotify. First date?
              A workout. No awkward dinners.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Shared Goals", "Same Schedule", "Real Lifestyle Fit"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-[#00d4ec]/85 px-3 py-1 font-label text-[11px] font-black uppercase tracking-[0.14em] text-[#062c33]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-24 pt-14 text-center lg:px-8 lg:pb-28 lg:pt-16">
        <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary">
          Early Access
        </p>
        <h2 className="mt-6 font-headline text-5xl font-black uppercase leading-[0.92] tracking-tight text-on-background sm:text-7xl lg:text-8xl">
          Your Gym
          <br />
          <span className="text-[#D1FF26]">Crew</span>
          <br />
          Is Waiting
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-on-surface-variant sm:text-2xl">
          Launching soon in Oslo and London.
          <br />
          Be first in line.
        </p>
        <div className="mx-auto mt-10 w-full max-w-3xl">
          <MailerLiteForm />
        </div>
      </footer>
    </div>
  );
}

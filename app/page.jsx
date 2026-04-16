export default function Home() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen selection:bg-primary selection:text-on-primary overflow-hidden">
      <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-gradient-to-b from-[#131313] to-transparent px-6 backdrop-blur-xl">
        <div className="flex items-center gap-3 transition-transform duration-200 active:scale-95">
          <div className="h-8 w-8 overflow-hidden rounded-full border border-outline-variant/15 bg-surface-container">
            <img
              className="h-full w-full object-cover"
              alt="User profile avatar showing young woman"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT7MtV53GADkEbMr_DFTbbzOWdUEGT4cyYPetn3lVKJTJKG9cZKKgy7QNYvJxtq8J9VLJ3Iw0lsk4jBQp2XRf07430sY-bwgDBxW-nXQBAIl8E4IGNbqWFEJ9XlJr5ZWsmwx78xnERfODV0FuC7cTEXFgHTcxp3zOibCLsRRg5JwEnElALQKDpNAQAHjx2PMWemzPV5SXgiWfDZQNnrVy0GJt1LKULHBCHCG27zQo23GgbUoYBudFJaoSuRo0aJ51JynnaEqSlBcRD"
            />
          </div>
        </div>
        <h1 className="text-2xl font-black italic tracking-tighter text-[#D1FF26]">
          GymBuddies
        </h1>
        <button className="text-gray-400 transition-opacity duration-200 hover:opacity-80 active:scale-95">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pb-24 pt-20 lg:px-8 lg:pb-8">
        <div className="relative flex w-full max-w-6xl items-center justify-center gap-12 lg:justify-between">
          <section
            id="match-card"
            className="relative flex w-full max-w-md flex-col justify-center lg:order-2 lg:mt-6"
          >
            <div className="absolute left-1/2 top-2 z-20 flex w-full -translate-x-1/2 gap-1.5 px-8">
            <div className="h-1 flex-1 rounded-full bg-on-background opacity-100" />
            <div className="h-1 flex-1 rounded-full bg-on-background opacity-30" />
            <div className="h-1 flex-1 rounded-full bg-on-background opacity-30" />
            </div>

            <div className="group relative h-[636px] overflow-hidden rounded-[2rem] bg-surface-container-low shadow-2xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                alt="Athletic man lifting weights in industrial gym"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC33efXiGDPWDIz9_zpMFn_wHI8Wqgnka3PQKBFcC93x0r1liBLdqeScsuCNGD26Lhkf2ojr--uhQD05PhqJeWpJ31bhmlQ1wEUxlSEb4du7SQ81m6UgNpzeUii_TxjSBPC4VxqdaybPsrfOWkzqFQiDaTibetq0JnZoG-6nGFgIRkVpNhWY1wTJjGfEo4rLSj-1oYFlrQngHfFsysRl_V6O7RfIE4RumRCCHF8jikNwtoqyS7AA06z7rD94LVOxBSl1A3LUudhQaLC"
              />
              <div className="glass-gradient pointer-events-none absolute inset-0" />

              <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 p-8">
                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <h2 className="font-headline text-5xl font-black leading-none tracking-tight text-on-background">
                      MARCUS, 26
                    </h2>
                    <div className="mt-2 flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-sm text-secondary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        location_on
                      </span>
                      <span className="text-sm font-medium tracking-wide text-on-surface-variant">
                        2.4 MILES AWAY
                      </span>
                    </div>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-outline-variant/15 bg-surface/40 backdrop-blur-md">
                    <div className="relative flex h-12 w-12 items-center justify-center">
                      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48">
                        <circle
                          className="text-surface-container-high"
                          cx="24"
                          cy="24"
                          r="20"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <defs>
                          <linearGradient id="match-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00e3fd" />
                            <stop offset="100%" stopColor="#f4ffc9" />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          fill="transparent"
                          stroke="url(#match-gradient)"
                          strokeDasharray="125.6"
                          strokeDashoffset="25.1"
                          strokeWidth="4"
                        />
                      </svg>
                      <span className="font-headline text-xs font-bold text-primary">80%</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-tertiary-container px-3 py-1 font-label text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">
                    POWERLIFTING
                  </span>
                  <span className="rounded-md bg-secondary-container px-3 py-1 font-label text-[10px] font-bold uppercase tracking-widest text-on-secondary-container">
                    WORKOUT PARTNER
                  </span>
                </div>

                <p className="max-w-[85%] text-sm font-medium leading-relaxed text-on-surface-variant">
                  Looking for a spotter who doesn&apos;t mind heavy sets and early morning
                  sessions. Focus on hypertrophy.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6">
              <button className="flex h-16 w-16 items-center justify-center rounded-full border border-outline-variant/15 bg-surface-container-high text-error shadow-lg transition-transform duration-150 active:scale-90">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
              <button className="flex h-16 max-w-[180px] flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary-dim to-primary text-on-primary-fixed shadow-[0_10px_30px_rgba(206,252,34,0.3)] transition-transform duration-200 active:scale-95">
                <span className="font-headline text-lg font-extrabold uppercase tracking-tighter">
                  MATCH
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bolt
                </span>
              </button>
              <button className="flex h-16 w-16 items-center justify-center rounded-full border border-outline-variant/15 bg-surface-container-high text-secondary shadow-lg transition-transform duration-150 active:scale-90">
                <span className="material-symbols-outlined text-3xl">star</span>
              </button>
            </div>
          </section>

          <section className="hidden max-w-xl flex-1 lg:order-1 lg:block">
            <p className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Kinetic Editorial Experience
            </p>
            <h2 className="mt-4 font-headline text-6xl font-black leading-[0.95] tracking-tight text-primary">
              Find a Gym Buddy
              <br />
              who matches your
              <br />
              intensity.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-on-surface-variant">
              Swipe through nearby training partners, see compatibility at a glance, and
              lock in sessions faster. Built for lifters, runners, and anyone who trains
              better together.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="#match-card"
                className="rounded-full bg-gradient-to-br from-primary-dim to-primary px-8 py-4 font-headline text-base font-extrabold uppercase tracking-wider text-on-primary-fixed shadow-[0_10px_30px_rgba(206,252,34,0.3)] transition-transform duration-200 hover:scale-[1.02]"
              >
                Start Matching
              </a>
              <a
                href="#how-it-works"
                className="rounded-full bg-surface-container px-8 py-4 font-headline text-base font-bold uppercase tracking-wider text-secondary transition-colors hover:bg-surface-container-high"
              >
                Learn More
              </a>
            </div>
          </section>
        </div>
      </main>

      <section id="how-it-works" className="mx-auto hidden w-full max-w-6xl px-8 pb-14 lg:block">
        <div className="grid grid-cols-3 gap-4">
          <article className="rounded-2xl bg-surface-container p-6">
            <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-secondary">
              01
            </p>
            <h3 className="mt-3 font-headline text-2xl font-extrabold text-on-surface">
              Discover
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
              Browse athletes near you with fast profile snapshots and training intent.
            </p>
          </article>
          <article className="rounded-2xl bg-surface-container p-6">
            <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-secondary">
              02
            </p>
            <h3 className="mt-3 font-headline text-2xl font-extrabold text-on-surface">
              Match
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
              Use compatibility scoring to prioritize partners with similar goals.
            </p>
          </article>
          <article className="rounded-2xl bg-surface-container p-6">
            <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-secondary">
              03
            </p>
            <h3 className="mt-3 font-headline text-2xl font-extrabold text-on-surface">
              Train
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
              Lock in sessions and build consistency with people who push your pace.
            </p>
          </article>
        </div>
      </section>

      <nav className="fixed bottom-0 z-50 flex h-20 w-full items-center justify-around bg-[#0e0e0e]/60 px-4 shadow-[0_-20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl lg:hidden">
        <button className="flex flex-col items-center justify-center rounded-full bg-[#D1FF26]/10 p-3 text-[#D1FF26] transition-transform duration-150 active:scale-90">
          <span className="material-symbols-outlined active-icon">style</span>
        </button>
        <button className="flex flex-col items-center justify-center p-3 text-gray-500 transition-colors duration-150 hover:text-[#f4ffc9] active:scale-90">
          <span className="material-symbols-outlined">bolt</span>
        </button>
        <button className="flex flex-col items-center justify-center p-3 text-gray-500 transition-colors duration-150 hover:text-[#f4ffc9] active:scale-90">
          <span className="material-symbols-outlined">person</span>
        </button>
      </nav>
    </div>
  );
}

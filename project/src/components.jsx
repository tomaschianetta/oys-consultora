/* global React */
const { useState, useEffect, useRef, useMemo } = React;

// ---------- Logo ----------
function Logo({ variant = "monogram", mono = false }) {
  const ink = mono ? "currentColor" : "var(--ink)";
  const accent = mono ? "currentColor" : "var(--accent)";

  if (variant === "wordmark") {
    return (
      <a href="#top" className="logo logo-wordmark" aria-label="Chianetta Consulting">
        <span className="logo-wm-name">Chianetta</span>
        <span className="logo-wm-dot" style={{ background: accent }}></span>
        <span className="logo-wm-sub">Consulting</span>
      </a>
    );
  }

  if (variant === "stacked") {
    return (
      <a href="#top" className="logo logo-stacked" aria-label="Chianetta Consulting">
        <span className="logo-st-rule" style={{ background: accent }}></span>
        <span className="logo-st-text">
          <span className="logo-st-name">Chianetta</span>
          <span className="logo-st-sub">Consulting · Estudio Contable</span>
        </span>
      </a>
    );
  }

  // monogram (default)
  return (
    <a href="#top" className="logo" aria-label="Chianetta Consulting">
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
        <rect x="0.5" y="0.5" width="39" height="39" rx="3" fill="none" stroke={ink} strokeWidth="1"/>
        <path d="M 14 13 Q 9 13 9 20 Q 9 27 14 27" fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M 26 13 Q 21 13 21 20 Q 21 27 26 27" fill="none" stroke={accent} strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="32" cy="14" r="1.4" fill={accent}/>
      </svg>
      <span className="logo-text">
        <span className="logo-name">Chianetta</span>
        <span className="logo-sub">Consulting</span>
      </span>
    </a>
  );
}

// ---------- Hooks ----------
function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

function AnimatedNumber({ value, duration = 1400 }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  // Parse value into prefix/number/suffix
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(target * eased);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);

  if (!match) return <span ref={ref}>{value}</span>;
  const display = target >= 100 ? Math.round(v) : v.toFixed(target % 1 === 0 ? 0 : 1);
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

// ---------- Header ----------
function Header({ t, lang, setLang, onCta, logoVariant }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"site-header " + (scrolled ? "is-scrolled" : "")}>
      <div className="container header-row">
        <Logo variant={logoVariant}/>
        <nav className="nav" aria-label="Primary">
          <a href="#about">{t.nav.home}</a>
          <a href="#services-ar">{t.nav.services}</a>
          <a href="#team">{t.nav.team}</a>
          <a href="#offices">{t.nav.offices}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="header-actions">
          <div className="lang-switch" role="tablist" aria-label="Language">
            <button role="tab" aria-selected={lang === "es"} className={lang === "es" ? "is-active" : ""} onClick={() => setLang("es")}>ES</button>
            <span className="lang-divider" aria-hidden="true"></span>
            <button role="tab" aria-selected={lang === "en"} className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <button className="btn btn-primary btn-sm" onClick={onCta}>{t.nav.cta}</button>
        </div>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero({ t, showDashboard = true }) {
  return (
    <section className="hero" id="top">
      <div className={"container hero-grid " + (showDashboard ? "" : "hero-grid-solo")}>
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"></span>{t.hero.eyebrow}</div>
          <h1 className="display">
            <span>{t.hero.titleA}</span>{" "}
            <em className="display-italic">{t.hero.titleB}</em>
            <br/>
            <span className="display-soft">{t.hero.titleC}</span>
          </h1>
          <p className="lede">{t.hero.lede}</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">{t.hero.ctaPrimary}<ArrowIcon/></a>
            <a href="#services-ar" className="btn btn-ghost">{t.hero.ctaSecondary}</a>
          </div>
        </div>

        {showDashboard && <div className="hero-card" aria-hidden="true">
          <div className="hero-card-head">
            <span className="hc-pill">LIVE · {new Date().toLocaleDateString(undefined, { day: "2-digit", month: "short" })}</span>
            <span className="hc-mono">CC · OPS DASHBOARD</span>
          </div>
          <div className="hero-card-tz">
            <ClockMini city="Rosario" tz="GMT−3" hour="-3"/>
            <div className="hc-divider"></div>
            <ClockMini city="Sydney" tz="GMT+11" hour="11"/>
          </div>
          <div className="hero-card-rows">
            <DashRow label="Tax filings · AR" value="32" trend="+4" tone="ok"/>
            <DashRow label="Bookkeeping · INT" value="187" trend="+12" tone="ok"/>
            <DashRow label="Payroll runs · this week" value="9" trend="—" tone="muted"/>
            <DashRow label="Open queries" value="2" trend="−3" tone="ok"/>
          </div>
          <div className="hero-card-foot">
            <span className="hc-mono hc-foot-label">UPTIME · 24 MOS</span>
            <span className="hc-mono hc-foot-value">99.4%</span>
          </div>
        </div>}
      </div>

      <div className="container hero-stats">
        <Stat n={t.hero.stat1Num} l={t.hero.stat1Label}/>
        <Stat n={t.hero.stat2Num} l={t.hero.stat2Label}/>
        <Stat n={t.hero.stat3Num} l={t.hero.stat3Label}/>
        <Stat n={t.hero.stat4Num} l={t.hero.stat4Label}/>
      </div>
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div className="stat">
      <div className="stat-n"><AnimatedNumber value={n}/></div>
      <div className="stat-l">{l}</div>
    </div>
  );
}

function ClockMini({ city, tz, hour }) {
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utc = now.getUTCHours() + now.getUTCMinutes() / 60;
      let local = utc + Number(hour);
      local = ((local % 24) + 24) % 24;
      setH(Math.floor(local));
      setM(Math.floor((local % 1) * 60));
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [hour]);
  const pad = (x) => String(x).padStart(2, "0");
  return (
    <div className="clock-mini">
      <div className="cm-city">{city}</div>
      <div className="cm-time">{pad(h)}:{pad(m)}</div>
      <div className="cm-tz">{tz}</div>
    </div>
  );
}

function DashRow({ label, value, trend, tone }) {
  return (
    <div className="dash-row">
      <span className="dr-label">{label}</span>
      <span className="dr-value">{value}</span>
      <span className={"dr-trend dr-" + tone}>{trend}</span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ---------- About ----------
function About({ t }) {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-head">
          <div className="eyebrow"><span className="eyebrow-dot"></span>{t.about.eyebrow}</div>
          <h2 className="h-display">{t.about.title}</h2>
        </div>
        <div className="about-body">
          <p className="lede about-lede">{t.about.body}</p>
          <dl className="pillars">
            {t.about.pillars.map((p, i) => (
              <div className="pillar" key={i}>
                <dt>{p.k}</dt>
                <dd>{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

// ---------- Services ----------
function ServicesAR({ t }) {
  return (
    <section className="section services-ar" id="services-ar">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="eyebrow-dot"></span>{t.servicesAR.eyebrow}</div>
          <h2 className="h-display">{t.servicesAR.title}</h2>
          <p className="lede">{t.servicesAR.lede}</p>
        </div>
        <ul className="services-grid">
          {t.servicesAR.items.map((it, i) => (
            <li className="svc" key={i}>
              <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="svc-t">{it.t}</h3>
              <p className="svc-d">{it.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServicesINT({ t }) {
  return (
    <section className="section services-int" id="services-int">
      <div className="container">
        <div className="section-head section-head-light">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot"></span>{t.servicesINT.eyebrow}</div>
          <h2 className="h-display h-display-light">{t.servicesINT.title}</h2>
          <p className="lede lede-light">{t.servicesINT.lede}</p>
        </div>
        <ul className="services-grid services-grid-dark">
          {t.servicesINT.items.map((it, i) => (
            <li className="svc svc-dark" key={i}>
              <span className="svc-num svc-num-dark">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="svc-t svc-t-dark">{it.t}</h3>
              <p className="svc-d svc-d-dark">{it.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------- Team ----------
function Team({ t }) {
  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="eyebrow-dot"></span>{t.team.eyebrow}</div>
          <h2 className="h-display">{t.team.title}</h2>
          <p className="lede">{t.team.lede}</p>
        </div>
        <div className="team-grid">
          {t.team.members.map((m, i) => (
            <article className="member" key={i}>
              <div className="member-portrait" aria-hidden="true">
                <svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id={`stripe-${i}`} patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="4" stroke="var(--ink-soft-20)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="200" height="240" fill="var(--paper-warm)"/>
                  <rect width="200" height="240" fill={`url(#stripe-${i})`}/>
                  <text x="100" y="125" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="var(--ink-60)" letterSpacing="1">PORTRAIT · {m.name.split(" ")[0].toUpperCase()}</text>
                </svg>
              </div>
              <div className="member-body">
                <div className="member-tag">{i === 0 ? "AR" : "INT"}</div>
                <h3 className="member-name">{m.name}</h3>
                <div className="member-role">{m.role}</div>
                <div className="member-city">{m.city}</div>
                <p className="member-bio">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Offices ----------
function Offices({ t }) {
  return (
    <section className="section offices" id="offices">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="eyebrow-dot"></span>{t.offices.eyebrow}</div>
          <h2 className="h-display">{t.offices.title}</h2>
          <p className="lede">{t.offices.lede}</p>
        </div>
        <div className="offices-map">
          <OfficesMap/>
        </div>
        <div className="offices-grid">
          <OfficeCard data={t.offices.ar} flag="AR"/>
          <OfficeCard data={t.offices.au} flag="AU"/>
        </div>
      </div>
    </section>
  );
}

function OfficeCard({ data, flag }) {
  return (
    <div className="office">
      <div className="office-head">
        <span className="office-flag">{flag}</span>
        <div>
          <div className="office-city">{data.city}, <span className="office-country">{data.country}</span></div>
          <div className="office-role">{data.role}</div>
        </div>
      </div>
      <dl className="office-meta">
        <div><dt>Timezone</dt><dd>{data.tz}</dd></div>
        <div><dt>Hours</dt><dd>{data.hours}</dd></div>
      </dl>
    </div>
  );
}

function OfficesMap() {
  // Stylised world map with two pins + connecting arc.
  // Rosario ~ x=305 y=295, Sydney ~ x=820 y=320 on a 960x420 canvas
  return (
    <svg viewBox="0 0 960 420" className="world-map" aria-hidden="true">
      <defs>
        <pattern id="dotsBg" patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="1" cy="1" r="1" fill="var(--ink-soft-20)"/>
        </pattern>
      </defs>
      <rect width="960" height="420" fill="url(#dotsBg)" opacity="0.5"/>
      {/* Continents simplified as soft shapes */}
      <g fill="var(--ink-soft-08)" stroke="var(--ink-soft-30)" strokeWidth="1">
        {/* Americas */}
        <path d="M 220 100 Q 260 90 290 130 Q 330 180 320 240 Q 330 280 305 320 Q 280 350 270 340 Q 250 330 240 290 Q 220 240 220 200 Q 215 150 220 100 Z"/>
        {/* Europe + Africa */}
        <path d="M 460 110 Q 510 105 540 140 Q 560 180 550 220 Q 560 280 540 320 Q 520 350 500 340 Q 470 320 460 280 Q 455 220 458 170 Q 458 130 460 110 Z"/>
        {/* Asia */}
        <path d="M 620 90 Q 700 85 760 120 Q 820 150 830 200 Q 820 240 770 250 Q 700 250 650 220 Q 610 180 605 140 Q 605 110 620 90 Z"/>
        {/* Oceania (Australia) */}
        <path d="M 780 290 Q 820 280 850 295 Q 870 310 855 330 Q 830 345 800 340 Q 775 330 775 310 Q 778 295 780 290 Z"/>
      </g>
      {/* Connecting arc */}
      <path d="M 305 295 Q 600 60 820 320" stroke="var(--accent)" strokeWidth="1.4" strokeDasharray="4 4" fill="none"/>
      {/* Pins */}
      <Pin x="305" y="295" label="ROSARIO"/>
      <Pin x="820" y="320" label="SYDNEY"/>
    </svg>
  );
}

function Pin({ x, y, label }) {
  return (
    <g>
      <circle cx={x} cy={y} r="14" fill="var(--accent)" opacity="0.18">
        <animate attributeName="r" values="10;20;10" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.25;0;0.25" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx={x} cy={y} r="5" fill="var(--accent)"/>
      <circle cx={x} cy={y} r="2" fill="var(--paper)"/>
      <text x={Number(x) + 14} y={Number(y) + 4} fontFamily="ui-monospace, monospace" fontSize="10" fill="var(--ink)" letterSpacing="1">{label}</text>
    </g>
  );
}

// ---------- Process ----------
function Process({ t }) {
  return (
    <section className="section process">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="eyebrow-dot"></span>{t.process.eyebrow}</div>
          <h2 className="h-display">{t.process.title}</h2>
        </div>
        <ol className="steps">
          {t.process.steps.map((s, i) => (
            <li className="step" key={i}>
              <div className="step-n">{s.n}</div>
              <h3 className="step-t">{s.t}</h3>
              <p className="step-d">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ---------- Stack ----------
function Stack({ t }) {
  return (
    <section className="section stack">
      <div className="container">
        <div className="stack-row">
          <div className="stack-head">
            <div className="eyebrow"><span className="eyebrow-dot"></span>{t.stack.eyebrow}</div>
            <h2 className="h-stack">{t.stack.title}</h2>
          </div>
          <ul className="stack-list">
            {t.stack.items.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function Contact({ t, contactRef }) {
  const [sent, setSent] = useState(false);
  const [division, setDivision] = useState("AR");
  function submit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }
  return (
    <section className="section contact" id="contact" ref={contactRef}>
      <div className="container contact-grid">
        <div className="contact-copy">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot"></span>{t.contact.eyebrow}</div>
          <h2 className="h-display h-display-light">{t.contact.title}</h2>
          <p className="lede lede-light">{t.contact.lede}</p>

          <div className="contact-direct">
            <div className="cd-label">{t.contact.directContact}</div>
            <a href="mailto:hola@chianettaconsulting.com" className="cd-link">hola@chianettaconsulting.com</a>
            <div className="cd-phones">
              <div><span className="cd-flag">AR</span> +54 9 341 123-4567</div>
              <div><span className="cd-flag">AU</span> +61 4 1234 5678</div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="cf-row">
            <label className="cf-field">
              <span>{t.contact.formName}</span>
              <input type="text" required placeholder="Juan Pérez"/>
            </label>
            <label className="cf-field">
              <span>{t.contact.formEmail}</span>
              <input type="email" required placeholder="juan@empresa.com"/>
            </label>
          </div>
          <div className="cf-row">
            <label className="cf-field">
              <span>{t.contact.formCompany}</span>
              <input type="text" placeholder="ACME S.A."/>
            </label>
            <label className="cf-field">
              <span>{t.contact.formPhone}</span>
              <input type="tel" placeholder="+54 9 ..."/>
            </label>
          </div>
          <div className="cf-field">
            <span>{t.contact.formDivision}</span>
            <div className="cf-radio">
              <button type="button" className={division === "AR" ? "is-active" : ""} onClick={() => setDivision("AR")}>{t.contact.divAR}</button>
              <button type="button" className={division === "INT" ? "is-active" : ""} onClick={() => setDivision("INT")}>{t.contact.divINT}</button>
            </div>
          </div>
          <label className="cf-field">
            <span>{t.contact.formMsg}</span>
            <textarea rows="4" placeholder="..."></textarea>
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            {sent ? t.contact.sent : t.contact.submit}
            {!sent && <ArrowIcon/>}
          </button>
        </form>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
function FAQ({ t }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="eyebrow-dot"></span>{t.faq.eyebrow}</div>
          <h2 className="h-display">{t.faq.title}</h2>
        </div>
        <ul className="faq-list">
          {t.faq.items.map((it, i) => (
            <li key={i} className={"faq-item " + (open === i ? "is-open" : "")}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="faq-q-text">{it.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq-a-wrap">
                <p className="faq-a">{it.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------- WhatsApp FAB ----------
function WhatsAppFab({ t }) {
  const phone = "5493411234567"; // Reemplazar con número real
  const msg = encodeURIComponent("Hola, me gustaría consultar sobre los servicios de Chianetta Consulting.");
  return (
    <a className="wa-fab" href={`https://wa.me/${phone}?text=${msg}`} target="_blank" rel="noopener" aria-label="WhatsApp">
      <span className="wa-fab-pulse" aria-hidden="true"></span>
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path fill="#fff" d="M16 3C8.82 3 3 8.82 3 16c0 2.42.66 4.7 1.82 6.66L3 29l6.5-1.78A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.6c-1.96 0-3.86-.52-5.5-1.5l-.4-.24-3.86 1.06 1.04-3.76-.26-.4A10.6 10.6 0 1 1 26.6 16 10.6 10.6 0 0 1 16 26.6zm5.86-7.96c-.32-.16-1.9-.94-2.2-1.04-.3-.1-.5-.16-.72.16-.22.32-.82 1.04-1.02 1.26-.18.2-.36.22-.68.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.8-2.24-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.22-.32.32-.52.1-.22.06-.4-.02-.56-.08-.16-.72-1.74-1-2.38-.26-.62-.52-.54-.72-.54l-.62-.02c-.2 0-.54.08-.82.4-.28.32-1.08 1.06-1.08 2.58s1.1 3 1.26 3.2c.16.22 2.18 3.32 5.28 4.66.74.32 1.32.5 1.76.66.74.24 1.42.2 1.96.12.6-.08 1.9-.78 2.18-1.52.28-.74.28-1.38.2-1.52-.08-.14-.3-.22-.62-.38z"/>
      </svg>
      <span className="wa-fab-label">WhatsApp</span>
    </a>
  );
}

// ---------- Footer ----------
function Footer({ t, logoVariant }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo variant={logoVariant}/>
          <p className="footer-tag">{t.footer.tag}</p>
        </div>
        <div className="footer-col">
          <h4>{t.footer.ar}</h4>
          <p>Rosario, Argentina</p>
          <p>+54 9 341 123-4567</p>
          <p>ar@chianettaconsulting.com</p>
        </div>
        <div className="footer-col">
          <h4>{t.footer.au}</h4>
          <p>Sydney, Australia</p>
          <p>+61 4 1234 5678</p>
          <p>intl@chianettaconsulting.com</p>
        </div>
        <div className="footer-col">
          <h4>{t.nav.services}</h4>
          <p><a href="#services-ar">{t.servicesAR.eyebrow.split("·")[1]?.trim() || t.servicesAR.title}</a></p>
          <p><a href="#services-int">{t.servicesINT.eyebrow.split("·")[1]?.trim() || t.servicesINT.title}</a></p>
          <p><a href="#contact">{t.nav.contact}</a></p>
        </div>
      </div>
      <div className="container footer-foot">
        <span>© {new Date().getFullYear()} Chianetta Consulting. {t.footer.rights}</span>
        <span className="hc-mono">CUIT 30-XXXXXXXX-X</span>
      </div>
    </footer>
  );
}

// Expose
Object.assign(window, {
  Logo, Header, Hero, About, ServicesAR, ServicesINT, Team, Offices, Process, Stack, FAQ, Contact, Footer, WhatsAppFab,
});

/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle */
const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "es",
  "palette": "navy",
  "type": "modern",
  "density": "comfortable",
  "showDashboard": true,
  "logoVariant": "monogram",
  "whatsapp": true
}/*EDITMODE-END*/;

const PALETTES = {
  navy:   { ink: "#0A1F3A", inkSoft: "#1E3A5F", accent: "#1E60D6", accentSoft: "#3A7BE0", paper: "#FAFAF7", paperWarm: "#F2EFE8" },
  midnight: { ink: "#0D1B2A", inkSoft: "#1B2C44", accent: "#3A6EA5", accentSoft: "#5C8BC2", paper: "#F5F7FB", paperWarm: "#E9EEF6" },
  oxford: { ink: "#001F3F", inkSoft: "#0B2A4A", accent: "#4A90E2", accentSoft: "#6FA8E8", paper: "#FFFFFF", paperWarm: "#EEF2F7" },
};

const TYPES = {
  modern:    { display: '"Geist", "Inter Tight", system-ui, sans-serif', body: '"Geist", system-ui, sans-serif' },
  editorial: { display: '"Instrument Serif", "EB Garamond", Georgia, serif', body: '"Geist", "Inter Tight", system-ui, sans-serif' },
  classic:   { display: '"Cormorant Garamond", Georgia, serif', body: '"Manrope", system-ui, sans-serif' },
};

function App() {
  const [tweak, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangState] = useState(tweak.lang || "es");
  const t = window.I18N[lang];

  function setLang(l) {
    setLangState(l);
    setTweak("lang", l);
    document.documentElement.lang = l;
  }

  const palette = PALETTES[tweak.palette] || PALETTES.navy;
  const typePair = TYPES[tweak.type] || TYPES.editorial;

  // Apply CSS vars to :root so body{} sees them too
  useEffect(() => {
    const vars = {
      "--ink": palette.ink,
      "--ink-soft": palette.inkSoft,
      "--ink-soft-30": palette.inkSoft + "4D",
      "--ink-soft-20": palette.inkSoft + "33",
      "--ink-soft-08": palette.inkSoft + "14",
      "--ink-60": palette.ink + "99",
      "--ink-40": palette.ink + "66",
      "--ink-15": palette.ink + "26",
      "--accent": palette.accent,
      "--accent-soft": palette.accentSoft,
      "--paper": palette.paper,
      "--paper-warm": palette.paperWarm,
      "--font-display": typePair.display,
      "--font-body": typePair.body,
      "--density": tweak.density === "compact" ? "0.85" : tweak.density === "spacious" ? "1.15" : "1",
    };
    Object.entries(vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  }, [palette, typePair, tweak.density]);

  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="app">
      <Header t={t} lang={lang} setLang={setLang} onCta={scrollToContact} logoVariant={tweak.logoVariant}/>
      <main>
        <Hero t={t} showDashboard={tweak.showDashboard !== false}/>
        <About t={t}/>
        <ServicesAR t={t}/>
        <ServicesINT t={t}/>
        <Process t={t}/>
        <Team t={t}/>
        <Offices t={t}/>
        <Stack t={t}/>
        <FAQ t={t}/>
        <Contact t={t}/>
      </main>
      <Footer t={t} logoVariant={tweak.logoVariant}/>
      {tweak.whatsapp !== false && <WhatsAppFab t={t}/>}

      <TweaksPanel title="Tweaks">
        <TweakSection title="Idioma">
          <TweakRadio label="Idioma" value={lang} onChange={(v) => setLang(v)} options={[{value: "es", label: "ES"}, {value: "en", label: "EN"}]}/>
        </TweakSection>
        <TweakSection title="Paleta">
          <TweakColor
            label="Paleta de azules"
            value={tweak.palette}
            onChange={(v) => setTweak("palette", v)}
            options={[
              { value: "navy",     color: ["#0A1F3A", "#1E60D6", "#FAFAF7"] },
              { value: "midnight", color: ["#0D1B2A", "#3A6EA5", "#F5F7FB"] },
              { value: "oxford",   color: ["#001F3F", "#4A90E2", "#FFFFFF"] },
            ]}
          />
        </TweakSection>
        <TweakSection title="Tipografía">
          <TweakRadio label="Pareja" value={tweak.type} onChange={(v) => setTweak("type", v)} options={[
            { value: "modern",    label: "Moderno" },
            { value: "editorial", label: "Editorial" },
            { value: "classic",   label: "Clásico" },
          ]}/>
        </TweakSection>
        <TweakSection title="Logo">
          <TweakRadio label="Variante" value={tweak.logoVariant || "monogram"} onChange={(v) => setTweak("logoVariant", v)} options={[
            { value: "monogram", label: "Monograma" },
            { value: "wordmark", label: "Wordmark" },
            { value: "stacked",  label: "Stacked" },
          ]}/>
        </TweakSection>
        <TweakSection title="Densidad">
          <TweakRadio label="Espaciado" value={tweak.density} onChange={(v) => setTweak("density", v)} options={[
            { value: "compact",     label: "Compacto" },
            { value: "comfortable", label: "Normal" },
            { value: "spacious",    label: "Amplio" },
          ]}/>
        </TweakSection>
        <TweakSection title="Hero">
          <TweakToggle label="Dashboard ops" value={tweak.showDashboard !== false} onChange={(v) => setTweak("showDashboard", v)}/>
        </TweakSection>
        <TweakSection title="Extras">
          <TweakToggle label="Botón WhatsApp" value={tweak.whatsapp !== false} onChange={(v) => setTweak("whatsapp", v)}/>
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

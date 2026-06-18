"use client";

import { FormEvent, useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "bell"
  | "building"
  | "chart"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "eye"
  | "file"
  | "filter"
  | "gps"
  | "image"
  | "leaf"
  | "mail"
  | "map"
  | "menu"
  | "message"
  | "moon"
  | "pin"
  | "plus"
  | "report"
  | "road"
  | "search"
  | "shield"
  | "spark"
  | "sun"
  | "user"
  | "users";

function Icon({
  name,
  size = 22,
  strokeWidth = 1.8,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    building: <><path d="M3 21h18" /><path d="M6 21V7l6-4 6 4v14" /><path d="M9 10h2m2 0h2M9 14h2m2 0h2M11 21v-3h2v3" /></>,
    chart: <><path d="M4 19V9m6 10V5m6 14v-7m4 7H2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
    file: <><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v5h5M9 12h6m-6 4h6" /></>,
    filter: <path d="M4 5h16l-6 7v5l-4 2v-7Z" />,
    gps: <><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="7" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3" /></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="m4 17 5-5 4 4 2-2 5 5" /></>,
    leaf: <><path d="M20 4C12 4 5 8 5 15c0 3 2 5 5 5 7 0 10-8 10-16Z" /><path d="M4 21c3-6 7-9 12-12" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z" /><path d="M9 3v15m6-12v15" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /><path d="M8 9h8m-8 4h5" /></>,
    moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    report: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 16v-3m4 3V8m4 8v-5" /></>,
    road: <><path d="m8 3-3 18m11-18 3 18M12 5v3m0 4v3m0 4v2" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></>,
    spark: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  };
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name]}
    </svg>
  );
}

const Logo = () => (
  <a className="logo" href="#top" aria-label="Kostrzyn Connect - strona główna">
    <span className="logo-mark">
      <span />
      <span />
      <span />
    </span>
    <span>Kostrzyn <strong>Connect</strong></span>
  </a>
);

const Button = ({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light";
}) => (
  <a className={`button button-${variant}`} href={href}>
    {children}
  </a>
);

function AppMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`app-window ${compact ? "compact" : ""}`}>
      <div className="app-topbar">
        <div className="app-logo"><span className="logo-mark mini"><span /><span /><span /></span> Kostrzyn Connect</div>
        <div className="app-search"><Icon name="search" size={14} /> Szukaj zgłoszenia...</div>
        <div className="app-user"><Icon name="bell" size={17} /><span>AK</span></div>
      </div>
      <div className="app-body">
        <aside className="app-sidebar">
          <div className="active"><Icon name="map" size={17} /> <span>Mapa zgłoszeń</span></div>
          <div><Icon name="file" size={17} /> <span>Zgłoszenia</span></div>
          <div><Icon name="chart" size={17} /> <span>Statystyki</span></div>
          <div><Icon name="users" size={17} /> <span>Mieszkańcy</span></div>
        </aside>
        <div className="map-view">
          <div className="map-lines lines-one" />
          <div className="map-lines lines-two" />
          <div className="map-lines lines-three" />
          <div className="river" />
          <div className="map-controls">
            <button aria-label="Powiększ"><Icon name="plus" size={15} /></button>
            <button aria-label="Pomniejsz">−</button>
          </div>
          <div className="map-chip"><Icon name="filter" size={13} /> Wszystkie zgłoszenia</div>
          <span className="map-label l1">Os. Leśne</span>
          <span className="map-label l2">Centrum</span>
          <span className="map-label l3">Kostrzyn</span>
          <div className="map-pin pin-a red"><Icon name="pin" size={15} /></div>
          <div className="map-pin pin-b green"><Icon name="pin" size={15} /></div>
          <div className="map-pin pin-c amber"><Icon name="pin" size={15} /></div>
          <div className="map-pin pin-d green"><Icon name="pin" size={15} /></div>
          <div className="map-pin pin-e red"><Icon name="pin" size={15} /></div>
          <div className="report-card">
            <div className="report-photo">
              <span className="road-line" />
              <span className="road-hole" />
            </div>
            <div className="report-content">
              <div className="report-top"><span className="status status-progress">W realizacji</span><small>#KC-0218</small></div>
              <strong>Uszkodzona nawierzchnia</strong>
              <p><Icon name="pin" size={12} /> ul. Wodna, Kostrzyn</p>
              <div className="report-foot"><span><Icon name="clock" size={12} /> 2 godz. temu</span><b>Drogi</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SectionHeading = ({
  eyebrow,
  title,
  text,
  center = true,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) => (
  <div className={`section-heading ${center ? "center" : ""}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);

const problems = [
  { icon: "search" as IconName, number: "01", title: "Brak jasnej ścieżki", text: "Mieszkańcy nie wiedzą, gdzie i w jaki sposób skutecznie zgłaszać problemy." },
  { icon: "clock" as IconName, number: "02", title: "Ręczna obsługa spraw", text: "Telefony i wiadomości e-mail zabierają czas, a zgłoszenia łatwo tracą swój bieg." },
  { icon: "message" as IconName, number: "03", title: "Brak informacji zwrotnej", text: "Mieszkańcy nie wiedzą, co dzieje się ze sprawą. Urząd mierzy się z kolejnymi pytaniami." },
];

const modules = [
  { icon: "map" as IconName, title: "Mapa zgłoszeń", text: "Wszystkie sprawy na interaktywnej mapie z filtrowaniem i widokiem szczegółów." },
  { icon: "file" as IconName, title: "Obsługa zgłoszeń", text: "Statusy, priorytety i przypisanie spraw do odpowiednich wydziałów." },
  { icon: "message" as IconName, title: "Komunikacja", text: "Automatyczne powiadomienia i przejrzysty kontakt z mieszkańcami." },
  { icon: "report" as IconName, title: "Raporty i analityka", text: "Czytelne dane, trendy i raporty wspierające decyzje samorządu." },
  { icon: "building" as IconName, title: "Zarządzanie inwestycjami", text: "Lepszy obraz potrzeb i narzędzie do planowania lokalnych działań." },
  { icon: "bell" as IconName, title: "Powiadomienia e-mail", text: "Mieszkaniec zawsze wie, kiedy jego zgłoszenie zmienia status." },
];

const benefits = [
  { icon: "clock" as IconName, title: "Oszczędność czasu", text: "Mniej telefonów i e-maili. Wszystkie sprawy trafiają od razu we właściwe miejsce.", stat: "do 40%", label: "mniej pracy ręcznej" },
  { icon: "eye" as IconName, title: "Większa transparentność", text: "Każdy etap obsługi zgłoszenia jest czytelny dla urzędu i mieszkańca.", stat: "100%", label: "widoczności statusów" },
  { icon: "message" as IconName, title: "Lepsza komunikacja", text: "Mieszkańcy otrzymują informacje bez konieczności ponawiania kontaktu.", stat: "24/7", label: "dostęp do informacji" },
  { icon: "spark" as IconName, title: "Nowoczesny wizerunek", text: "Pokaż, że gmina słucha mieszkańców i korzysta z dobrych technologii.", stat: "+", label: "zaufanie mieszkańców" },
];

const plans = [
  { name: "START", price: "499", range: "do 10 tys. mieszkańców", features: ["Nielimitowane zgłoszenia", "Panel urzędnika", "Mapa zgłoszeń", "Podstawowe statystyki"], cta: "Wybierz START" },
  { name: "STANDARD", price: "999", range: "10–30 tys. mieszkańców", features: ["Wszystko z pakietu START", "Raporty cykliczne", "Zaawansowane statystyki", "Priorytetowe wsparcie"], cta: "Wybierz STANDARD", popular: true },
  { name: "PREMIUM", price: "1999", range: "powyżej 30 tys. mieszkańców", features: ["Wszystko z pakietu STANDARD", "Dedykowany opiekun", "Szkolenie pracowników", "Integracje i SLA"], cta: "Skontaktuj się" },
];

const faqs = [
  ["Czy wdrożenie wymaga instalacji?", "Nie. Kostrzyn Connect działa w przeglądarce, więc urząd i mieszkańcy korzystają z systemu bez instalowania dodatkowego oprogramowania."],
  ["Jak długo trwa uruchomienie platformy?", "Standardowe uruchomienie zajmuje zwykle od 7 do 14 dni, włącznie z konfiguracją, brandingiem i szkoleniem zespołu."],
  ["Czy mieszkańcy muszą zakładać konto?", "Nie muszą. Zgłoszenie może zostać wysłane bez zakładania konta, a jego status można śledzić za pomocą indywidualnego linku."],
  ["Czy można korzystać z systemu na telefonie?", "Tak. Platforma jest w pełni responsywna i wygodnie działa na smartfonach, tabletach oraz komputerach."],
  ["Czy możliwe jest brandowanie pod gminę?", "Tak. Dostosowujemy logo, kolory, domenę oraz wybrane treści do identyfikacji wizualnej samorządu."],
  ["Czy dane mieszkańców są bezpieczne?", "Tak. Stosujemy szyfrowanie, regularne kopie zapasowe, kontrolę dostępu i rozwiązania zgodne z wymaganiami RODO."],
  ["Czy można eksportować dane i raporty?", "Tak. Uprawnieni pracownicy mogą eksportować zestawienia oraz generować raporty pomocne w analizie i planowaniu działań."],
  ["Czy zapewniacie wsparcie i szkolenie?", "Tak. Każde wdrożenie obejmuje szkolenie, materiały dla zespołu oraz bieżące wsparcie techniczne."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main id="top">
      <nav className="navbar">
        <div className="container nav-inner">
          <Logo />
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#funkcje" onClick={() => setMenuOpen(false)}>Funkcje</a>
            <a href="#jak-dziala" onClick={() => setMenuOpen(false)}>Jak to działa</a>
            <a href="#wdrozenie" onClick={() => setMenuOpen(false)}>Wdrożenie</a>
            <a href="#cennik" onClick={() => setMenuOpen(false)}>Cennik</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          </div>
          <div className="nav-actions">
            <button className="theme-button" onClick={() => setDark(!dark)} aria-label="Zmień motyw">
              <Icon name={dark ? "sun" : "moon"} size={19} />
            </button>
            <Button href="#kontakt">Umów prezentację <Icon name="arrow" size={16} /></Button>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy reveal visible">
            <div className="hero-badge"><span><Icon name="spark" size={13} /></span> GovTech, który działa w praktyce</div>
            <h1>Łączymy mieszkańców <span>z samorządem</span></h1>
            <p>Kostrzyn Connect to nowoczesna platforma do zgłaszania i obsługi problemów w gminie. Mieszkańcy zgłaszają, urząd reaguje, gmina działa sprawniej.</p>
            <div className="hero-buttons">
              <Button href="#kontakt">Umów bezpłatną prezentację <Icon name="arrow" size={18} /></Button>
              <Button href="#demo" variant="secondary"><span className="play">▶</span> Zobacz demo</Button>
            </div>
            <div className="trust-row">
              <div className="avatar-stack"><span>MK</span><span>AN</span><span>+8</span></div>
              <div><div className="stars">★★★★★</div><p>Tworzone wspólnie z samorządami</p></div>
            </div>
          </div>
          <div className="hero-visual reveal visible">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <AppMockup />
            <div className="floating-stat stat-one"><span className="stat-icon green"><Icon name="check" size={17} /></span><div><strong>80+</strong><small>rozwiązanych spraw</small></div></div>
            <div className="floating-stat stat-two"><span className="stat-icon blue"><Icon name="users" size={17} /></span><div><strong>Aktywna</strong><small>społeczność</small></div></div>
          </div>
        </div>
        <div className="container metrics-bar reveal">
          <div><strong>200<span>+</span></strong><p>zgłoszeń mieszkańców</p></div>
          <div><strong>80<span>+</span></strong><p>rozwiązanych spraw</p></div>
          <div><strong>24/7</strong><p>dostęp do platformy</p></div>
          <div><strong>&lt; 2 min</strong><p>średni czas zgłoszenia</p></div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="container">
          <SectionHeading eyebrow="Wyzwanie" title="Problemy mieszkańców nie mogą ginąć w skrzynce e-mail" text="Rozproszone kanały komunikacji utrudniają pracę urzędu i budują frustrację mieszkańców." />
          <div className="problem-grid reveal">
            {problems.map((item) => (
              <article className="problem-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <div className="icon-box coral"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section solution-section" id="funkcje">
        <div className="container solution-grid">
          <div className="solution-copy reveal">
            <SectionHeading eyebrow="Rozwiązanie" title="Wszystko w jednym miejscu" text="Od pierwszego zgłoszenia do rozwiązania sprawy. Prosto, przejrzyście i bez zbędnych formalności." center={false} />
            <div className="feature-list">
              {["Interaktywna mapa zgłoszeń", "Zdjęcia i geolokalizacja GPS", "Statusy realizacji w czasie rzeczywistym", "Panel dla urzędników i wydziałów", "Powiadomienia dla mieszkańców", "Statystyki, raporty i eksport danych"].map((feature) => (
                <div key={feature}><span><Icon name="check" size={14} strokeWidth={2.5} /></span>{feature}</div>
              ))}
            </div>
            <Button href="#demo" variant="secondary">Poznaj wszystkie funkcje <Icon name="arrow" size={17} /></Button>
          </div>
          <div className="dashboard-shell reveal" id="demo">
            <AppMockup compact />
            <div className="mini-toast">
              <span><Icon name="check" size={15} /></span>
              <div><strong>Status zaktualizowany</strong><small>Mieszkaniec otrzymał powiadomienie</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section steps-section" id="jak-dziala">
        <div className="container">
          <SectionHeading eyebrow="Prosty proces" title="Od zgłoszenia do rozwiązania w 4 krokach" text="Jasny proces dla mieszkańca i pełna kontrola po stronie urzędu." />
          <div className="steps reveal">
            {[
              ["01", "pin", "Mieszkaniec zgłasza", "Dodaje opis, zdjęcie i lokalizację problemu."],
              ["02", "building", "Urząd otrzymuje sprawę", "Zgłoszenie trafia do panelu odpowiedniego wydziału."],
              ["03", "road", "Pracownik realizuje", "Zespół podejmuje działanie i aktualizuje status."],
              ["04", "bell", "Mieszkaniec wie", "Automatycznie otrzymuje informację o rozwiązaniu."],
            ].map(([num, icon, title, text], index) => (
              <article className="step" key={num}>
                <div className="step-icon"><span>{num}</span><Icon name={icon as IconName} size={27} /></div>
                {index < 3 && <div className="step-line"><Icon name="arrow" size={17} /></div>}
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section modules-section">
        <div className="container">
          <SectionHeading eyebrow="Możliwości" title="Narzędzia stworzone dla nowoczesnego samorządu" text="Jeden system, który porządkuje codzienną pracę i pomaga podejmować lepsze decyzje." />
          <div className="modules-grid reveal">
            {modules.map((item) => (
              <article className="module-card" key={item.title}>
                <div className="icon-box green"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3><p>{item.text}</p>
                <a href="#kontakt" aria-label={`Dowiedz się więcej: ${item.title}`}><Icon name="arrow" size={18} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-section" id="wdrozenie">
        <div className="container case-grid">
          <div className="case-copy reveal">
            <SectionHeading eyebrow="Sprawdzone w praktyce" title="System, z którego mieszkańcy naprawdę korzystają" text="Kostrzyn Connect działa produkcyjnie. Realne zgłoszenia, realne działania i codzienna współpraca mieszkańców z samorządem." center={false} />
            <div className="case-stats">
              <div><strong>200+</strong><span>zgłoszeń</span></div>
              <div><strong>80+</strong><span>rozwiązanych</span></div>
              <div><strong>6</strong><span>kategorii spraw</span></div>
            </div>
            <blockquote>„Wreszcie mamy jedno miejsce, w którym widzimy wszystkie zgłoszenia i możemy sprawnie informować mieszkańców o postępach.”<footer><span>JP</span><div><strong>Jan Pawłowski</strong><small>Koordynator ds. cyfryzacji</small></div></footer></blockquote>
          </div>
          <div className="case-map reveal">
            <AppMockup compact />
            <div className="case-badge"><Icon name="shield" size={19} /><div><strong>Bezpieczne dane</strong><small>Zgodność z RODO</small></div></div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <SectionHeading eyebrow="Korzyści" title="Dobra zmiana dla urzędu i mieszkańców" text="Technologia, która upraszcza codzienność i wzmacnia zaufanie do samorządu." />
          <div className="benefits-grid reveal">
            {benefits.map((item) => (
              <article className="benefit-card" key={item.title}>
                <div className="icon-box soft"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3><p>{item.text}</p>
                <div className="benefit-stat"><strong>{item.stat}</strong><span>{item.label}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="cennik">
        <div className="container">
          <SectionHeading eyebrow="Przejrzysty cennik" title="Wybierz pakiet dopasowany do Twojej gminy" text="Bez opłat za liczbę zgłoszeń. Bez ukrytych kosztów. Wsparcie wdrożeniowe w cenie." />
          <div className="pricing-grid reveal">
            {plans.map((plan) => (
              <article className={`price-card ${plan.popular ? "popular" : ""}`} key={plan.name}>
                {plan.popular && <div className="popular-label"><Icon name="spark" size={13} /> Najpopularniejszy</div>}
                <h3>{plan.name}</h3><p className="range">{plan.range}</p>
                <div className="price"><sup>zł</sup><strong>{plan.price}</strong><span>/ miesiąc<br /><small>netto</small></span></div>
                <div className="price-line" />
                <ul>{plan.features.map((feature) => <li key={feature}><span><Icon name="check" size={13} strokeWidth={2.5} /></span>{feature}</li>)}</ul>
                <Button href="#kontakt" variant={plan.popular ? "primary" : "secondary"}>{plan.cta} <Icon name="arrow" size={16} /></Button>
              </article>
            ))}
          </div>
          <p className="pricing-note"><Icon name="shield" size={16} /> Każdy pakiet obejmuje wdrożenie, aktualizacje i bezpieczny hosting na terenie UE.</p>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro reveal">
            <SectionHeading eyebrow="FAQ" title="Najczęściej zadawane pytania" text="Nie znalazłeś odpowiedzi? Porozmawiajmy o potrzebach Twojej gminy." center={false} />
            <Button href="#kontakt" variant="secondary">Skontaktuj się z nami <Icon name="arrow" size={16} /></Button>
          </div>
          <div className="faq-list reveal">
            {faqs.map(([question, answer], index) => (
              <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                  <span>{question}</span><span className="faq-plus"><Icon name={openFaq === index ? "close" : "plus"} size={18} /></span>
                </button>
                <div className="faq-answer"><p>{answer}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div className="contact-glow" />
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <span className="eyebrow light">Zróbmy pierwszy krok</span>
            <h2>Zobacz, jak Kostrzyn Connect może działać w Twojej gminie</h2>
            <p>Umów bezpłatną, 30-minutową prezentację. Pokażemy system na żywo i odpowiemy na wszystkie pytania.</p>
            <div className="contact-points">
              <span><Icon name="check" size={14} /> Bez zobowiązań</span>
              <span><Icon name="check" size={14} /> Demo na żywo</span>
              <span><Icon name="check" size={14} /> Wycena dla Twojej gminy</span>
            </div>
            <div className="contact-data">
              <a href="mailto:kontakt@kostrzynconnect.pl"><Icon name="mail" size={18} /> kontakt@kostrzynconnect.pl</a>
              <a href="tel:+48500100200"><Icon name="message" size={18} /> +48 500 100 200</a>
            </div>
          </div>
          <form className="lead-form reveal" onSubmit={submit}>
            {sent ? (
              <div className="form-success"><span><Icon name="check" size={28} /></span><h3>Dziękujemy za wiadomość</h3><p>Skontaktujemy się z Tobą w ciągu jednego dnia roboczego.</p><button type="button" onClick={() => setSent(false)}>Wyślij kolejne zgłoszenie</button></div>
            ) : (
              <>
                <h3>Umów bezpłatną prezentację</h3><p>Odezwiemy się w ciągu 1 dnia roboczego.</p>
                <label>Imię i nazwisko<input required type="text" placeholder="Jan Kowalski" /></label>
                <label>Gmina / urząd<input required type="text" placeholder="Urząd Gminy..." /></label>
                <div className="form-row">
                  <label>E-mail służbowy<input required type="email" placeholder="jan@gmina.pl" /></label>
                  <label>Telefon<input required type="tel" placeholder="+48 000 000 000" /></label>
                </div>
                <label className="consent"><input required type="checkbox" /><span>Wyrażam zgodę na kontakt w sprawie prezentacji systemu.</span></label>
                <button className="submit-button" type="submit">Umów bezpłatną prezentację <Icon name="arrow" size={17} /></button>
              </>
            )}
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-top">
          <div className="footer-brand"><Logo /><p>Technologia, która łączy mieszkańców z samorządem.</p></div>
          <div><strong>Produkt</strong><a href="#funkcje">Funkcje</a><a href="#jak-dziala">Jak to działa</a><a href="#cennik">Cennik</a></div>
          <div><strong>Firma</strong><a href="#wdrozenie">O nas</a><a href="#kontakt">Kontakt</a><a href="#kontakt">Dla partnerów</a></div>
          <div><strong>Informacje</strong><a href="#faq">FAQ</a><a href="#">Polityka prywatności</a><a href="#">Regulamin</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Kostrzyn Connect. Wszystkie prawa zastrzeżone.</span><span>Stworzone w Polsce <b>●</b></span></div>
      </footer>
    </main>
  );
}

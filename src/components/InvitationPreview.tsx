"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Music,
  Heart,
  Check,
  X,
  ChevronDown,
  Copy,
  CheckCircle2,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const TARGET_DATE = new Date("2026-08-22T16:00:00");

const HERO_IMAGE = "/demo/hero.jpg";
const STORY_IMAGE = "/demo/story.jpg";
const MAP_IMAGE = "/demo/map.jpg";
const DEMO_MUSIC = "/demo/music-new.mp3";

const GALLERY = [
  { src: "/demo/gallery-1.jpg", className: "inv-gallery-item--hero" },
  { src: "/demo/gallery-2.jpg", className: "inv-gallery-item--tall" },
  { src: "/demo/gallery-3.jpg", className: "" },
  { src: "/demo/gallery-4.jpg", className: "" },
  { src: "/demo/gallery-5.jpg", className: "inv-gallery-item--wide" },
  { src: "/demo/gallery-6.jpg", className: "" },
];

const COPY = {
  sq: {
    gateLabel: "Ftesë Digjitale",
    openHint: "Prek zarfen për ta hapur",
    back: "Kthehu",
    together: "Së bashku me familjet e tyre",
    invite: "kanë kënaqësinë t'ju ftojnë në dasmën e tyre",
    scroll: "Lëviz poshtë",
    countdown: "Deri në ditën tonë të madhe",
    days: "Ditë",
    hours: "Orë",
    minutes: "Min",
    seconds: "Sek",
    navDetails: "Detajet",
    navStory: "Historia",
    navGallery: "Galeri",
    navRsvp: "RSVP",
    timeline: "Agjenda e ditës",
    ceremony: "Ceremonia",
    cocktail: "Koktej",
    reception: "Banketi",
    locCeremony: "Katedralja e Shën Klimentit · Skopje",
    locCocktail: "Tarraca · Hotel Aleksandar",
    locReception: "Salla Grand · Hotel Aleksandar Palace",
    storyTitle: "Historia jonë",
    storyText:
      "U takuam në vitin 2019. Çdo moment i kaluar së bashku na çoi drejt kësaj dite — ditës kur fillojmë jetën tonë si bashkëshortë. Me krenari ju ftojmë të jeni pjesë e saj.",
    storyQuote: "Dashuria është kur dy shpirtër gjejnë shtëpinë e tyre te njëri-tjetri.",
    location: "Lokacionet",
    openMap: "Hap në Google Maps",
    gallery: "Momentet tona",
    dressCode: "Dress Code",
    dressText: "Black Tie Optional · Tonet e buta, ari dhe ngjyra neutrale",
    gifts: "Lista e dhuratave",
    iban: "MK07 2500 0000 1234 5678",
    bank: "NLB Bank",
    copyIban: "Kopjo IBAN",
    copied: "U kopjua!",
    music: "Piano Romantik",
    musicPause: "Ndalo muzikën",
    rsvp: "Konfirmoni praninë",
    rsvpSub: "Ju lutem na njoftoni deri më 1 Gusht 2026",
    rsvpQuestion: "A do të jeni pjesë e ditës sonë?",
    name: "Emri & Mbiemri",
    guests: "Nr. i ftuarve",
    yes: "Po, me krenari!",
    no: "Fatkeqësisht jo",
    rsvpThanks: "Faleminderit! Ju presim me dashuri në ditën tonë të madhe.",
    rsvpSorry: "Faleminderit që na njoftuat. Do t'ju mungojmë shumë!",
    qr: "Skanoni QR kodin",
    qrSub: "Ndani ftesën me miqtë tuaj",
    footer: "Me dashuri,",
    names: "Erion & Sara",
    demoNote: "Demo · Wedding.linkk",
    create: "Krijo ftesën tënde",
  },
  en: {
    gateLabel: "Digital Invitation",
    openHint: "Tap the envelope to open",
    back: "Back",
    together: "Together with their families",
    invite: "request the pleasure of your company at their wedding",
    scroll: "Scroll down",
    countdown: "Until our special day",
    days: "Days",
    hours: "Hours",
    minutes: "Min",
    seconds: "Sec",
    navDetails: "Details",
    navStory: "Story",
    navGallery: "Gallery",
    navRsvp: "RSVP",
    timeline: "Schedule",
    ceremony: "Ceremony",
    cocktail: "Cocktail",
    reception: "Reception",
    locCeremony: "St. Clement Cathedral · Skopje",
    locCocktail: "Terrace · Hotel Aleksandar",
    locReception: "Grand Hall · Hotel Aleksandar Palace",
    storyTitle: "Our love story",
    storyText:
      "We met in 2019. Every moment together led us to this day — the day we begin our life as husband and wife. We joyfully invite you to be part of it.",
    storyQuote: "Love is when two souls find their home in each other.",
    location: "Venues",
    openMap: "Open in Google Maps",
    gallery: "Our moments",
    dressCode: "Dress Code",
    dressText: "Black Tie Optional · Soft tones, gold & neutrals",
    gifts: "Gift registry",
    iban: "MK07 2500 0000 1234 5678",
    bank: "NLB Bank",
    copyIban: "Copy IBAN",
    copied: "Copied!",
    music: "Romantic Piano",
    musicPause: "Pause music",
    rsvp: "RSVP",
    rsvpSub: "Please respond by August 1, 2026",
    rsvpQuestion: "Will you join us on our special day?",
    name: "Full name",
    guests: "Number of guests",
    yes: "Yes, with joy!",
    no: "Unfortunately no",
    rsvpThanks: "Thank you! We can't wait to celebrate with you.",
    rsvpSorry: "Thank you for letting us know. We'll miss you!",
    qr: "Scan QR code",
    qrSub: "Share the invitation with friends",
    footer: "With love,",
    names: "Erion & Sara",
    demoNote: "Demo · Wedding.linkk",
    create: "Create your invitation",
  },
  mk: {
    gateLabel: "Digitalna Pokana",
    openHint: "Doprete ja plikata",
    back: "Nazad",
    together: "Zaedno so nivnite semejstva",
    invite: "so radost ve pokanuvaat na nivnata svadba",
    scroll: "Skrolnajte nadolu",
    countdown: "Do nashiot poseben den",
    days: "Denovi",
    hours: "Casovi",
    minutes: "Min",
    seconds: "Sek",
    navDetails: "Detali",
    navStory: "Prična",
    navGallery: "Galerija",
    navRsvp: "RSVP",
    timeline: "Agenda",
    ceremony: "Ceremonija",
    cocktail: "Koktel",
    reception: "Banket",
    locCeremony: "Katedrala Sveti Kliment · Skopje",
    locCocktail: "Terasa · Hotel Aleksandar",
    locReception: "Grand Sala · Hotel Aleksandar Palace",
    storyTitle: "Nashata ljubovna prikazna",
    storyText:
      "Se zapoznavme vo 2019. Sekoj moment zaedno ne dovede do ovoj den — denot koga pocnuvame nasiot zivot kako brak. So radost ve pokanuvame da bidete del od nego.",
    storyQuote: "Ljubovta e koga dve duši ja naogjaat svojata kukja edna kaj druga.",
    location: "Lokacii",
    openMap: "Otvori vo Google Maps",
    gallery: "Nashite momenti",
    dressCode: "Dress Code",
    dressText: "Black Tie Optional · Meki tonovi, zlatо & neutralni",
    gifts: "Lista na podaroci",
    iban: "MK07 2500 0000 1234 5678",
    bank: "NLB Bank",
    copyIban: "Kopiraj IBAN",
    copied: "Kopirano!",
    music: "Romantično Piano",
    musicPause: "Pauziraj muzika",
    rsvp: "Potvrdete prisustvo",
    rsvpSub: "Ve molime odgovorete do 1 Avgust 2026",
    rsvpQuestion: "Dali ke bidete del od nashiot den?",
    name: "Ime i prezime",
    guests: "Broj na gosti",
    yes: "Da, so radost!",
    no: "Za zal ne",
    rsvpThanks: "Blagodarime! Ne ve ocekuvame so ljubov.",
    rsvpSorry: "Blagodarime sto ni kazavte. Ke ni nedostasuvate!",
    qr: "Skeniraj QR kod",
    qrSub: "Spodelete ja pokanata",
    footer: "So ljubov,",
    names: "Erion & Sara",
    demoNote: "Demo · Wedding.linkk",
    create: "Kreirajte ja vashata pokana",
  },
} as const;

function useCountdown(target: Date) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-35% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [ids]);

  return active;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { ref, visible } = useReveal();
  return (
    <section id={id} className={`inv-reveal ${visible ? "is-visible" : ""} ${className}`}>
      <div ref={ref}>{children}</div>
    </section>
  );
}

export function InvitationPreview() {
  const { locale } = useI18n();
  const L = COPY[locale];
  const countdown = useCountdown(TARGET_DATE);

  const [gateOpen, setGateOpen] = useState(false);
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [rsvpSent, setRsvpSent] = useState(false);
  const [rsvpChoice, setRsvpChoice] = useState<"yes" | "no" | null>(null);
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [ibanCopied, setIbanCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const navIds = ["details", "story", "gallery", "rsvp"];
  const activeNav = useScrollSpy(navIds);

  const setMusic = useCallback(async (play: boolean) => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (play) {
        audio.volume = 0.4;
        await audio.play();
        setMusicPlaying(true);
      } else {
        audio.pause();
        setMusicPlaying(false);
      }
    } catch {
      setMusicPlaying(false);
    }
  }, []);

  const openInvitation = useCallback(() => {
    if (envelopeOpening) return;
    setEnvelopeOpening(true);
    setTimeout(() => {
      setGateOpen(true);
      setTimeout(() => {
        setContentVisible(true);
        void setMusic(true);
      }, 200);
    }, 1200);
  }, [envelopeOpening, setMusic]);

  useEffect(() => {
    document.body.style.overflow = gateOpen ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
      audioRef.current?.pause();
    };
  }, [gateOpen]);

  const timeline = [
    { time: "16:00", title: L.ceremony, place: L.locCeremony },
    { time: "17:30", title: L.cocktail, place: L.locCocktail },
    { time: "19:00", title: L.reception, place: L.locReception },
  ];

  const navItems = [
    { id: "details", label: L.navDetails },
    { id: "story", label: L.navStory },
    { id: "gallery", label: L.navGallery },
    { id: "rsvp", label: L.navRsvp },
  ];

  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(L.iban);
      setIbanCopied(true);
      setTimeout(() => setIbanCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="inv-grain relative">
      <audio ref={audioRef} src={DEMO_MUSIC} loop preload="auto" className="hidden" />
      {/* Gate — envelope intro */}
      <div className={`inv-gate ${gateOpen ? "is-open" : ""}`}>
        <p className="inv-gate__label">{L.gateLabel}</p>

        <button
          type="button"
          className={`inv-envelope ${envelopeOpening ? "is-opening" : ""}`}
          onClick={openInvitation}
          aria-label={L.openHint}
        >
          <div className="inv-envelope__body" />
          <div className="inv-envelope__flap" />
          <div className="inv-envelope__wax">E&amp;S</div>
          <div className="inv-envelope__letter">
            <p className="script-font text-3xl inv-gold-text">Erion</p>
            <p className="script-font text-lg text-[#c9a87c]/50">&amp;</p>
            <p className="script-font text-3xl inv-gold-text">Sara</p>
            <p className="sans-font mt-3 text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a]/40">
              22 · 08 · 2026
            </p>
          </div>
        </button>

        <p className="inv-gate__hint">{L.openHint}</p>
      </div>

      {/* Main invitation */}
      <div className={`inv-main ${contentVisible ? "is-visible" : ""}`}>
        {contentVisible && (
          <nav className="inv-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`inv-nav-pill sans-font ${activeNav === item.id ? "active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <Link
          href="/"
          className="fixed top-4 left-4 z-[95] flex items-center gap-2 rounded-full bg-black/35 px-4 py-2 sans-font text-[11px] uppercase tracking-wider text-white/80 backdrop-blur-md transition-colors hover:bg-black/50"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {L.back}
        </Link>

        {contentVisible && (
          <>
            <button
              type="button"
              onClick={() => void setMusic(!musicPlaying)}
              className={`inv-music-btn ${musicPlaying ? "is-playing" : ""}`}
              aria-label={musicPlaying ? L.musicPause : L.music}
            >
              <Music className={`h-5 w-5 ${musicPlaying ? "text-[#c9a87c]" : "text-[#1a1a1a]/35"}`} />
            </button>
            {musicPlaying && (
              <div className="fixed bottom-[5.5rem] right-6 z-[95] max-w-[200px] rounded-full bg-white/95 px-4 py-2 sans-font text-[11px] text-[#1a1a1a]/55 shadow-lg backdrop-blur-sm">
                ♪ {L.music}
              </div>
            )}
          </>
        )}

        {/* HERO */}
        <section className="inv-hero">
          <Image src={HERO_IMAGE} alt="" fill priority className="inv-hero__image" sizes="100vw" />
          <div className="inv-hero__overlay" />

          {contentVisible &&
            Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className="inv-petal"
                style={{
                  left: `${5 + i * 7}%`,
                  animationDuration: `${10 + (i % 5) * 2}s`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}

          <div className="inv-hero__frame">
            <p className="sans-font mb-5 text-[10px] uppercase tracking-[0.45em] text-white/55">
              {L.together}
            </p>
            <p className="script-font text-[clamp(4rem,14vw,9rem)] leading-[0.95] inv-gold-text">Erion</p>
            <p className="script-font my-1 text-[clamp(2rem,6vw,3.5rem)] text-white/35">&amp;</p>
            <p className="script-font text-[clamp(4rem,14vw,9rem)] leading-[0.95] inv-gold-text">Sara</p>

            <div className="my-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a87c]/50" />
              <Heart className="h-3 w-3 text-[#c9a87c]/70" fill="currentColor" />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a87c]/50" />
            </div>

            <p className="serif-font text-lg text-white/75 sm:text-xl">{L.invite}</p>
            <p className="serif-font mt-8 text-[clamp(1.5rem,4vw,2.5rem)] tracking-[0.2em] text-white">
              22 · 08 · 2026
            </p>
            <p className="sans-font mt-4 text-[10px] uppercase tracking-[0.35em] text-[#c9a87c]/80">
              Skopje · Macedonia
            </p>
          </div>

          <a
            href="#details"
            className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/35 transition-colors hover:text-white/60"
          >
            <span className="sans-font text-[10px] uppercase tracking-[0.3em]">{L.scroll}</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </section>

        {/* COUNTDOWN */}
        <RevealSection id="details" className="bg-[#141012] py-24 px-4 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inv-ornament inv-ornament--light mb-14">{L.countdown}</p>
            <div className="grid grid-cols-4 gap-2 sm:gap-5">
              {[
                { val: countdown.days, label: L.days },
                { val: countdown.hours, label: L.hours },
                { val: countdown.minutes, label: L.minutes },
                { val: countdown.seconds, label: L.seconds },
              ].map((item) => (
                <div key={item.label} className="inv-countdown-box rounded-2xl py-7 px-1 sm:py-9">
                  <p className="serif-font text-[clamp(2rem,8vw,3.75rem)] leading-none inv-gold-text">
                    {String(item.val).padStart(2, "0")}
                  </p>
                  <p className="sans-font mt-3 text-[9px] uppercase tracking-[0.25em] text-white/35 sm:text-[10px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* TIMELINE */}
        <RevealSection className="bg-[#faf6f0] py-24 px-4">
          <div className="mx-auto max-w-xl">
            <p className="inv-ornament mb-16">{L.timeline}</p>
            <div className="relative pl-14">
              <div className="inv-timeline-line" />
              {timeline.map((item, i) => (
                <div key={item.title} className={`relative ${i < timeline.length - 1 ? "pb-12" : ""}`}>
                  <div className="absolute left-[-2.35rem] top-1.5 inv-timeline-dot" />
                  <p className="sans-font text-[11px] uppercase tracking-[0.3em] text-[#c9a87c]">
                    {item.time}
                  </p>
                  <p className="serif-font mt-1 text-2xl text-[#141012] sm:text-3xl">{item.title}</p>
                  <p className="mt-2 text-sm text-[#141012]/45">{item.place}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* STORY */}
        <RevealSection id="story" className="bg-white py-24 px-4">
          <div className="mx-auto max-w-6xl">
            <p className="inv-ornament mb-16">{L.storyTitle}</p>
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_32px_64px_rgba(0,0,0,0.12)]">
                <Image src={STORY_IMAGE} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <p className="script-font absolute bottom-8 left-8 text-4xl text-white/90 sm:text-5xl">
                  E &amp; S
                </p>
              </div>
              <div>
                <blockquote className="serif-font text-[clamp(1.25rem,3vw,1.75rem)] italic leading-relaxed text-[#141012]/65">
                  &ldquo;{L.storyQuote}&rdquo;
                </blockquote>
                <p className="mt-8 text-base leading-[1.85] text-[#141012]/55">{L.storyText}</p>
                <p className="script-font mt-10 text-[clamp(2rem,5vw,3rem)] inv-gold-text">{L.names}</p>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* LOCATIONS */}
        <RevealSection className="bg-[#faf6f0] py-24 px-4">
          <div className="mx-auto max-w-5xl">
            <p className="inv-ornament mb-16">{L.location}</p>
            <div className="grid gap-8 md:grid-cols-3">
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="group border-t border-[#c9a87c]/25 bg-[#fffdf9] p-8 transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                >
                  <p className="sans-font text-[10px] uppercase tracking-[0.35em] text-[#c9a87c]">
                    {item.time}
                  </p>
                  <p className="serif-font mt-3 text-2xl text-[#141012]">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#141012]/45">{item.place}</p>
                  <button
                    type="button"
                    className="sans-font mt-6 text-[11px] uppercase tracking-wider text-[#c9a87c] opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    {L.openMap}
                  </button>
                </div>
              ))}
            </div>
            <div className="relative mt-10 h-64 overflow-hidden rounded-sm sm:h-80">
              <Image
                src={MAP_IMAGE}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-[#141012]/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 sans-font text-xs uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  <MapPin className="h-4 w-4" />
                  {L.openMap}
                </button>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* GALLERY */}
        <RevealSection id="gallery" className="bg-white py-24 px-4">
          <div className="mx-auto max-w-6xl">
            <p className="inv-ornament mb-16">{L.gallery}</p>
            <div className="inv-gallery-grid">
              {GALLERY.map((item) => (
                <div key={item.src} className={`inv-gallery-item ${item.className}`}>
                  <Image src={item.src} alt="" fill className="object-cover" sizes="(max-width:768px) 50vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* DRESS & GIFTS */}
        <RevealSection className="bg-[#faf6f0] py-24 px-4">
          <div className="mx-auto grid max-w-4xl gap-px bg-[#c9a87c]/20 md:grid-cols-2">
            <div className="bg-[#fffdf9] p-12 text-center">
              <p className="sans-font text-[10px] uppercase tracking-[0.4em] text-[#c9a87c]">{L.dressCode}</p>
              <p className="serif-font mt-5 text-xl leading-relaxed text-[#141012]/70">{L.dressText}</p>
            </div>
            <div className="bg-[#fffdf9] p-12 text-center">
              <p className="sans-font text-[10px] uppercase tracking-[0.4em] text-[#c9a87c]">{L.gifts}</p>
              <p className="serif-font mt-5 font-mono text-lg tracking-wide text-[#141012]/80">{L.iban}</p>
              <p className="mt-2 text-sm text-[#141012]/40">{L.bank}</p>
              <button
                type="button"
                onClick={copyIban}
                className="sans-font mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#c9a87c] hover:underline"
              >
                {ibanCopied ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5" /> {L.copied}
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> {L.copyIban}
                  </>
                )}
              </button>
            </div>
          </div>
        </RevealSection>

        {/* RSVP */}
        <RevealSection id="rsvp" className="bg-[#141012] py-24 px-4 text-white">
          <div className="mx-auto max-w-md text-center">
            <Calendar className="mx-auto mb-5 h-5 w-5 text-[#c9a87c]" />
            <p className="serif-font text-[clamp(2rem,5vw,2.75rem)]">{L.rsvp}</p>
            <p className="sans-font mt-3 text-sm text-white/35">{L.rsvpSub}</p>

            <div className="inv-rsvp-card mt-12 rounded-sm p-8 sm:p-10">
              {!rsvpSent ? (
                <div className="space-y-5 text-left">
                  <div>
                    <label className="sans-font mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/35">
                      {L.name}
                    </label>
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="inv-rsvp-input sans-font w-full rounded-sm px-4 py-3.5 text-sm text-[#141012]"
                    />
                  </div>
                  <div>
                    <label className="sans-font mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/35">
                      {L.guests}
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="inv-rsvp-input sans-font w-full rounded-sm px-4 py-3.5 text-sm text-[#141012]"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="serif-font pt-2 text-center text-lg text-white/60">{L.rsvpQuestion}</p>
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => {
                        setRsvpChoice("yes");
                        setRsvpSent(true);
                      }}
                      className="sans-font flex flex-1 items-center justify-center gap-2 rounded-sm bg-[#c9a87c] py-4 text-xs uppercase tracking-wider text-white transition-colors hover:bg-[#b89460]"
                    >
                      <Check className="h-4 w-4" /> {L.yes}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setRsvpChoice("no");
                        setRsvpSent(true);
                      }}
                      className="sans-font flex flex-1 items-center justify-center gap-2 rounded-sm border border-white/15 py-4 text-xs uppercase tracking-wider text-white/60 transition-colors hover:bg-white/5"
                    >
                      <X className="h-4 w-4" /> {L.no}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-4 text-center">
                  <Heart className="mx-auto mb-5 h-8 w-8 text-[#c9a87c]" fill="currentColor" />
                  <p className="serif-font text-lg leading-relaxed text-white/75">
                    {rsvpChoice === "yes" ? L.rsvpThanks : L.rsvpSorry}
                  </p>
                </div>
              )}
            </div>
          </div>
        </RevealSection>

        {/* QR */}
        <RevealSection className="bg-[#faf6f0] py-20 px-4 text-center">
          <p className="inv-ornament mb-10">{L.qr}</p>
          <p className="sans-font mb-8 text-sm text-[#141012]/40">{L.qrSub}</p>
          <div className="mx-auto inline-block rounded-sm border border-[#c9a87c]/20 bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&bgcolor=fffdf9&color=141012&data=https://wedding.linkk/demo/preview"
              alt="QR"
              width={140}
              height={140}
              className="mx-auto"
            />
          </div>
        </RevealSection>

        {/* Footer */}
        <footer className="bg-[#0a0708] py-20 px-4 text-center text-white">
          <p className="script-font text-[clamp(3rem,10vw,5rem)] inv-gold-text">E &amp; S</p>
          <p className="serif-font mt-4 text-lg text-white/50">{L.footer}</p>
          <p className="script-font mt-1 text-3xl text-white/90">{L.names}</p>

          <div className="my-12 flex items-center justify-center gap-4">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a87c]/30" />
            <span className="sans-font text-[9px] uppercase tracking-[0.4em] text-[#c9a87c]/40">
              {L.demoNote}
            </span>
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a87c]/30" />
          </div>

          <Link
            href="/#pricing"
            className="sans-font inline-block border border-[#c9a87c]/30 px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] text-[#c9a87c] transition-colors hover:bg-[#c9a87c]/10"
          >
            {L.create}
          </Link>
        </footer>
      </div>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { VibrantVowsGate } from "@/components/VibrantVowsGate";

const TARGET_DATE = new Date("2026-08-22T16:00:00");
const DEMO_MUSIC = "/demo/wedding-music.mp3";

const GALLERY = [
  "/demo/gallery-1.jpg",
  "/demo/gallery-2.jpg",
  "/demo/gallery-3.jpg",
  "/demo/gallery-4.jpg",
  "/demo/gallery-5.jpg",
  "/demo/gallery-6.jpg",
];

const COPY = {
  openHint: "Prek qirin për ta hapur",
  weddingDay: "Dita e Dasmës",
  tagline: "Dy zemra, një premtim, një festë e paharrueshme",
  names: "Erion & Sara",
  date: "22 · 08 · 2026",
  dearTitle: "Të dashur miq dhe familje",
  dearText:
    "Me gëzim të madh ju ftojmë të festoni dashurinë tonë — një mbrëmje plot buzëqeshje, valle dhe kujtime që do të mbajnë përgjithmonë.",
  scroll: "Zbulo festën",
  countdownLabel: "Deri te dita e madhe",
  days: "Ditë",
  hours: "Orë",
  minutes: "Minuta",
  seconds: "Sekonda",
  schedule: "Agjenda e Ditës",
  events: [
    { title: "Ardhja e të ftuarve", time: "16:00" },
    { title: "Ceremonia", time: "16:30" },
    { title: "Koktej & Foto", time: "17:30" },
    { title: "Darka", time: "19:00" },
    { title: "Valle & Festë", time: "21:00" },
  ],
  galleryTitle: "Momente të Bukura",
  venueTitle: "Vendi i Festës",
  venue: "Hotel Aleksandar Palace",
  address: "Bul. Ilindenska 15, Skopje",
  location: "Shiko në hartë",
  dressTitle: "Dress Code",
  dressText: "Elegancë në nuanca rozë, kremi dhe burgundy të lehtë — shmangni të kuqen e errët.",
  rsvpTitle: "Konfirmoni Praninë",
  rsvpSub: "Na ndihmoni të planifikojmë një festë të mrekullueshme.",
  rsvpOpen: "Konfirmo",
  rsvpDeadline: "Ju lutemi konfirmoni deri më 1 Gusht 2026",
  name: "Emri juaj",
  attending: "A do të jeni me ne?",
  yes: "Po, me krenari!",
  no: "Fatkeqësisht jo",
  guests: "Numri i ftuarve",
  song: "Kënga juaj e preferuar",
  submit: "Dërgo",
  rsvpThanks: "Faleminderit! Do të na bëni ditën edhe më të veçantë.",
  rsvpSorry: "Faleminderit që na njoftuat. Do t'ju mungojmë!",
  closing: "Me dashuri, ju presim",
  footerNames: "Erion & Sara",
};

function useCountdown(target: Date) {
  const calc = useCallback(() => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [target]);

  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);
  return time;
}

export function VibrantVowsInvitation() {
  const L = COPY;
  const countdown = useCountdown(TARGET_DATE);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [gateOpen, setGateOpen] = useState(false);
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [rsvpSent, setRsvpSent] = useState<"yes" | "no" | null>(null);
  const [form, setForm] = useState({ name: "", attending: "", guests: "1", song: "" });

  const handleOpenStart = () => setEnvelopeOpening(true);

  const handleSequenceComplete = () => {
    setGateOpen(true);
    setContentVisible(true);
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.volume = 0.8;
      audio.play().then(() => setMusicPlaying(true)).catch(() => {});
    }
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      audio.play().then(() => setMusicPlaying(true)).catch(() => {});
    }
  };

  const handleRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSent(form.attending === "yes" ? "yes" : "no");
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="vv-inv">
      <audio ref={audioRef} src={DEMO_MUSIC} loop preload="auto" className="hidden" />

      <VibrantVowsGate
        gateOpen={gateOpen}
        envelopeOpening={envelopeOpening}
        openHint={L.openHint}
        onOpen={handleOpenStart}
        onSequenceComplete={handleSequenceComplete}
      />

      <div className={`vv-inv__content ${contentVisible ? "vv-inv__content--visible" : ""}`}>
        {/* Hero */}
        <section className="vv-inv__hero">
          <div className="vv-inv__hero-bg" aria-hidden />
          <Image src="/demo/hero.jpg" alt="" fill className="vv-inv__hero-img" priority />
          <div className="vv-inv__hero-overlay" aria-hidden />
          <div className="vv-inv__hero-petals" aria-hidden>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className={`vv-inv__petal vv-inv__petal--${i}`} />
            ))}
          </div>
          <div className="vv-inv__hero-text">
            <p className="vv-inv__eyebrow playfair-font">{L.weddingDay}</p>
            <h1 className="vv-inv__names great-vibes-font">{L.names}</h1>
            <div className="vv-inv__hero-line" aria-hidden />
            <p className="vv-inv__tagline playfair-font">{L.tagline}</p>
            <p className="vv-inv__date playfair-font">{L.date}</p>
          </div>
          <div className="vv-inv__scroll playfair-font">
            <span>{L.scroll}</span>
            <span className="vv-inv__scroll-icon" aria-hidden />
          </div>
        </section>

        {/* Dear */}
        <section className="vv-inv__block">
          <h2 className="vv-inv__title playfair-font">{L.dearTitle}</h2>
          <div className="vv-inv__story-img-wrap">
            <Image src="/demo/story.jpg" alt="" width={600} height={380} className="vv-inv__story-img" />
          </div>
          <p className="vv-inv__text playfair-font">{L.dearText}</p>
        </section>

        {/* Countdown */}
        <section className="vv-inv__block vv-inv__block--countdown">
          <h2 className="vv-inv__title playfair-font">{L.countdownLabel}</h2>
          <div className="vv-inv__timer playfair-font">
            <div className="vv-inv__timer-unit">
              <span className="vv-inv__timer-num">{pad(countdown.days)}</span>
              <span className="vv-inv__timer-lbl">{L.days}</span>
            </div>
            <span className="vv-inv__timer-sep">:</span>
            <div className="vv-inv__timer-unit">
              <span className="vv-inv__timer-num">{pad(countdown.hours)}</span>
              <span className="vv-inv__timer-lbl">{L.hours}</span>
            </div>
            <span className="vv-inv__timer-sep">:</span>
            <div className="vv-inv__timer-unit">
              <span className="vv-inv__timer-num">{pad(countdown.minutes)}</span>
              <span className="vv-inv__timer-lbl">{L.minutes}</span>
            </div>
            <span className="vv-inv__timer-sep">:</span>
            <div className="vv-inv__timer-unit">
              <span className="vv-inv__timer-num">{pad(countdown.seconds)}</span>
              <span className="vv-inv__timer-lbl">{L.seconds}</span>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="vv-inv__block">
          <h2 className="vv-inv__title playfair-font">{L.schedule}</h2>
          <ul className="vv-inv__schedule playfair-font">
            {L.events.map((ev) => (
              <li key={ev.title} className="vv-inv__schedule-item">
                <span className="vv-inv__schedule-time">{ev.time}</span>
                <span className="vv-inv__schedule-dot" aria-hidden />
                <span className="vv-inv__schedule-title">{ev.title}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        <section className="vv-inv__block vv-inv__block--gallery">
          <h2 className="vv-inv__title playfair-font">{L.galleryTitle}</h2>
          <div className="vv-inv__gallery">
            {GALLERY.map((src, i) => (
              <div key={src} className={`vv-inv__gallery-item vv-inv__gallery-item--${i % 3}`}>
                <Image src={src} alt="" width={400} height={500} className="vv-inv__gallery-img" />
              </div>
            ))}
          </div>
        </section>

        {/* Venue */}
        <section className="vv-inv__block">
          <h2 className="vv-inv__title playfair-font">{L.venueTitle}</h2>
          <div className="vv-inv__venue-card playfair-font">
            <p className="vv-inv__venue-name">{L.venue}</p>
            <p className="vv-inv__venue-addr">{L.address}</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="vv-inv__venue-link"
            >
              {L.location}
            </a>
          </div>
          <div className="vv-inv__map-wrap">
            <Image src="/demo/map.jpg" alt="" width={600} height={300} className="vv-inv__map" />
          </div>
        </section>

        {/* Dress code */}
        <section className="vv-inv__block vv-inv__block--dress">
          <h2 className="vv-inv__title playfair-font">{L.dressTitle}</h2>
          <p className="vv-inv__text playfair-font">{L.dressText}</p>
          <div className="vv-inv__swatches" aria-hidden>
            <span className="vv-inv__swatch" style={{ background: "#f0a8c8" }} />
            <span className="vv-inv__swatch" style={{ background: "#c76b98" }} />
            <span className="vv-inv__swatch" style={{ background: "#fdf4ff" }} />
            <span className="vv-inv__swatch" style={{ background: "#803860" }} />
          </div>
        </section>

        {/* RSVP */}
        <section className="vv-inv__block vv-inv__block--rsvp">
          <h2 className="vv-inv__title playfair-font">{L.rsvpTitle}</h2>
          <p className="vv-inv__text playfair-font">{L.rsvpSub}</p>

          {!rsvpOpen && !rsvpSent && (
            <button type="button" className="vv-inv__rsvp-btn playfair-font" onClick={() => setRsvpOpen(true)}>
              {L.rsvpOpen}
            </button>
          )}

          {rsvpOpen && !rsvpSent && (
            <form className="vv-inv__form playfair-font" onSubmit={handleRsvp}>
              <label className="vv-inv__label">
                {L.name}
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="vv-inv__input"
                />
              </label>
              <fieldset className="vv-inv__fieldset">
                <legend>{L.attending}</legend>
                <label className="vv-inv__radio">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    required
                    onChange={(e) => setForm((f) => ({ ...f, attending: e.target.value }))}
                  />
                  {L.yes}
                </label>
                <label className="vv-inv__radio">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    onChange={(e) => setForm((f) => ({ ...f, attending: e.target.value }))}
                  />
                  {L.no}
                </label>
              </fieldset>
              {form.attending === "yes" && (
                <>
                  <label className="vv-inv__label">
                    {L.guests}
                    <select
                      value={form.guests}
                      onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
                      className="vv-inv__input"
                    >
                      {["1", "2", "3", "4", "5"].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="vv-inv__label">
                    {L.song}
                    <input
                      type="text"
                      value={form.song}
                      onChange={(e) => setForm((f) => ({ ...f, song: e.target.value }))}
                      className="vv-inv__input"
                    />
                  </label>
                </>
              )}
              <button type="submit" className="vv-inv__submit playfair-font">
                {L.submit}
              </button>
              <p className="vv-inv__deadline">{L.rsvpDeadline}</p>
            </form>
          )}

          {rsvpSent === "yes" && <p className="vv-inv__thanks playfair-font">{L.rsvpThanks}</p>}
          {rsvpSent === "no" && <p className="vv-inv__thanks playfair-font">{L.rsvpSorry}</p>}
        </section>

        {/* Footer */}
        <footer className="vv-inv__footer">
          <p className="vv-inv__closing playfair-font">{L.closing}</p>
          <p className="vv-inv__footer-names great-vibes-font">{L.footerNames}</p>
        </footer>
      </div>

      {contentVisible && (
        <button
          type="button"
          className={`vv-inv__music ${musicPlaying ? "vv-inv__music--on" : ""}`}
          onClick={toggleMusic}
          aria-label={musicPlaying ? "Pause music" : "Play music"}
        >
          {musicPlaying ? "♫" : "♪"}
        </button>
      )}
    </div>
  );
}

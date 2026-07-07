"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CelestialEngagementGate } from "@/components/CelestialEngagementGate";
import { CelestialStarfield } from "@/components/CelestialStarfield";

const TARGET_DATE = new Date("2026-10-18T19:00:00");
const DEMO_MUSIC = "/demo/celestial-engagement/music.mp3";

const COPY = {
  openHint: "Prek yllin për ta hapur",
  tagline: "Një premtim i artë nën qiellin e yjeve",
  names: "Elira & Arben",
  engagement: "Fejesa Jonë",
  date: "18 · 10 · 2026",
  ringReveal: "Prek unazën për të zbuluar datën",
  ringDate: "18 Tetor 2026",
  storyTitle: "Historia Jonë",
  storyText:
    "U takuam si dy yje në të njëjtin qiell — ndriçuan veç e veç, por bashkë shkëlqen më fort. Sot, me zemër të mbushur me dashuri, ju ftojmë të festoni fillimin e përgjithmonshmit tonë.",
  countdownLabel: "Deri te dita e fejesës",
  days: "Ditë",
  hours: "Orë",
  minutes: "Minuta",
  seconds: "Sekonda",
  timeline: "Udhëtimi Ynë",
  timelineItems: [
    { year: "2020", title: "Takimi i parë", text: "Një kafe, një bisedë, një buzëqeshje që ndryshoi gjithçka." },
    { year: "2024", title: "Propozimi", text: "Nën dritën e hënës, me një unazë dhe një po të qartë." },
    { year: "2026", title: "Fejesa", text: "Dita kur familja dhe miqtë bashkohen për të festuar dashurinë tonë." },
  ],
  venueTitle: "Vendi i Festës",
  venue: "Terraca e Artë",
  address: "Rruga e Yjeve 7, Tiranë",
  dressTitle: "Dress Code",
  dressText: "Elegancë në nuanca të arta, kremi dhe blu të errët — si qielli i mbrëmjes.",
  rsvpTitle: "Konfirmoni Praninë",
  rsvpSub: "Na ndihmoni të planifikojmë një mbrëmje magjike duke konfirmuar praninë.",
  rsvpOpen: "Konfirmo",
  rsvpDeadline: "Ju lutemi konfirmoni deri më 1 Tetor 2026",
  name: "Emri juaj",
  attending: "A do të jeni me ne?",
  yes: "Po, me krenari!",
  no: "Fatkeqësisht jo",
  wishes: "Urimi juaj për çiftin",
  submit: "Dërgo",
  rsvpThanks: "Faleminderit! Do të na bëni ditën edhe më të veçantë.",
  closing: "Me dashuri, ju presim nën yjet",
  footerNames: "Elira & Arben",
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

export function CelestialEngagementInvitation() {
  const L = COPY;
  const countdown = useCountdown(TARGET_DATE);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [gateOpen, setGateOpen] = useState(false);
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [ringRevealed, setRingRevealed] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [rsvpSent, setRsvpSent] = useState(false);
  const [form, setForm] = useState({ name: "", attending: "", wishes: "" });

  const handleOpenStart = () => setEnvelopeOpening(true);

  const handleSequenceComplete = () => {
    setGateOpen(true);
    setContentVisible(true);
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.volume = 0.85;
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
    setRsvpSent(true);
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="cel-inv">
      <audio ref={audioRef} src={DEMO_MUSIC} loop preload="auto" className="hidden" />

      <CelestialEngagementGate
        gateOpen={gateOpen}
        envelopeOpening={envelopeOpening}
        openHint={L.openHint}
        onOpen={handleOpenStart}
        onSequenceComplete={handleSequenceComplete}
      />

      <div className={`cel-inv__content ${contentVisible ? "cel-inv__content--visible" : ""}`}>
        {/* Hero */}
        <section className="cel-inv__hero">
          <CelestialStarfield className="cel-inv__hero-stars" density={0.6} />
          <div className="cel-inv__hero-overlay" aria-hidden />
          <Image
            src="/demo/celestial-engagement/hero.jpg"
            alt=""
            fill
            className="cel-inv__hero-img"
            priority
          />
          <div className="cel-inv__hero-text">
            <p className="cel-inv__tagline playfair-font">{L.tagline}</p>
            <h1 className="cel-inv__names great-vibes-font">{L.names}</h1>
            <p className="cel-inv__engagement playfair-font">{L.engagement}</p>
            <div className="cel-inv__hero-line" aria-hidden />
            <p className="cel-inv__date playfair-font">{L.date}</p>
          </div>
        </section>

        {/* Ring reveal */}
        <section className="cel-inv__block cel-inv__block--ring">
          <button
            type="button"
            className={`cel-inv__ring-btn ${ringRevealed ? "cel-inv__ring-btn--revealed" : ""}`}
            onClick={() => setRingRevealed(true)}
            aria-label={L.ringReveal}
          >
            <div className="cel-inv__ring-glow" aria-hidden />
            <svg className="cel-inv__ring-svg" viewBox="0 0 120 120" aria-hidden>
              <circle cx="60" cy="72" r="28" fill="none" stroke="currentColor" strokeWidth="3" />
              <polygon
                points="60,18 68,42 92,42 72,56 80,80 60,66 40,80 48,56 28,42 52,42"
                fill="currentColor"
                opacity="0.9"
              />
            </svg>
            <span className="cel-inv__ring-hint playfair-font">
              {ringRevealed ? L.ringDate : L.ringReveal}
            </span>
          </button>
        </section>

        {/* Story */}
        <section className="cel-inv__block">
          <h2 className="cel-inv__title playfair-font">{L.storyTitle}</h2>
          <div className="cel-inv__story-img-wrap">
            <Image
              src="/demo/celestial-engagement/story.jpg"
              alt=""
              width={600}
              height={400}
              className="cel-inv__story-img"
            />
          </div>
          <p className="cel-inv__text playfair-font">{L.storyText}</p>
        </section>

        {/* Countdown */}
        <section className="cel-inv__block cel-inv__block--countdown">
          <h2 className="cel-inv__title playfair-font">{L.countdownLabel}</h2>
          <div className="cel-inv__timer playfair-font">
            <div className="cel-inv__timer-unit">
              <span className="cel-inv__timer-num">{pad(countdown.days)}</span>
              <span className="cel-inv__timer-lbl">{L.days}</span>
            </div>
            <span className="cel-inv__timer-sep">:</span>
            <div className="cel-inv__timer-unit">
              <span className="cel-inv__timer-num">{pad(countdown.hours)}</span>
              <span className="cel-inv__timer-lbl">{L.hours}</span>
            </div>
            <span className="cel-inv__timer-sep">:</span>
            <div className="cel-inv__timer-unit">
              <span className="cel-inv__timer-num">{pad(countdown.minutes)}</span>
              <span className="cel-inv__timer-lbl">{L.minutes}</span>
            </div>
            <span className="cel-inv__timer-sep">:</span>
            <div className="cel-inv__timer-unit">
              <span className="cel-inv__timer-num">{pad(countdown.seconds)}</span>
              <span className="cel-inv__timer-lbl">{L.seconds}</span>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="cel-inv__block cel-inv__block--timeline">
          <h2 className="cel-inv__title playfair-font">{L.timeline}</h2>
          <ul className="cel-inv__timeline">
            {L.timelineItems.map((item) => (
              <li key={item.year} className="cel-inv__timeline-item">
                <span className="cel-inv__timeline-year playfair-font">{item.year}</span>
                <div className="cel-inv__timeline-dot" aria-hidden />
                <div className="cel-inv__timeline-body">
                  <h3 className="cel-inv__timeline-title playfair-font">{item.title}</h3>
                  <p className="cel-inv__timeline-text playfair-font">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        <section className="cel-inv__gallery">
          {["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "ring.jpg"].map((img) => (
            <div key={img} className="cel-inv__gallery-item">
              <Image
                src={`/demo/celestial-engagement/${img}`}
                alt=""
                width={400}
                height={500}
                className="cel-inv__gallery-img"
              />
            </div>
          ))}
        </section>

        {/* Venue */}
        <section className="cel-inv__block">
          <h2 className="cel-inv__title playfair-font">{L.venueTitle}</h2>
          <p className="cel-inv__venue playfair-font">{L.venue}</p>
          <p className="cel-inv__address playfair-font">{L.address}</p>
          <div className="cel-inv__venue-img-wrap">
            <Image
              src="/demo/celestial-engagement/venue.jpg"
              alt=""
              width={700}
              height={420}
              className="cel-inv__venue-img"
            />
          </div>
        </section>

        {/* Dress code */}
        <section className="cel-inv__block cel-inv__block--dress">
          <h2 className="cel-inv__title playfair-font">{L.dressTitle}</h2>
          <p className="cel-inv__text playfair-font">{L.dressText}</p>
        </section>

        {/* RSVP */}
        <section className="cel-inv__block cel-inv__block--rsvp">
          <p className="cel-inv__text playfair-font">{L.rsvpSub}</p>
          <h2 className="cel-inv__title playfair-font">{L.rsvpTitle}</h2>

          {!rsvpOpen && !rsvpSent && (
            <button
              type="button"
              className="cel-inv__rsvp-btn playfair-font"
              onClick={() => setRsvpOpen(true)}
            >
              {L.rsvpOpen}
            </button>
          )}

          {rsvpOpen && !rsvpSent && (
            <div className="cel-inv__rsvp-panel">
              <p className="cel-inv__rsvp-deadline playfair-font">{L.rsvpDeadline}</p>
              <form className="cel-inv__form" onSubmit={handleRsvp}>
                <label className="cel-inv__field">
                  <span>{L.name}</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <fieldset className="cel-inv__field">
                  <legend>{L.attending}</legend>
                  <label className="cel-inv__radio">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      required
                      checked={form.attending === "yes"}
                      onChange={() => setForm({ ...form, attending: "yes" })}
                    />
                    {L.yes}
                  </label>
                  <label className="cel-inv__radio">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={form.attending === "no"}
                      onChange={() => setForm({ ...form, attending: "no" })}
                    />
                    {L.no}
                  </label>
                </fieldset>
                <label className="cel-inv__field">
                  <span>{L.wishes}</span>
                  <input
                    type="text"
                    value={form.wishes}
                    onChange={(e) => setForm({ ...form, wishes: e.target.value })}
                  />
                </label>
                <button type="submit" className="cel-inv__submit playfair-font">
                  {L.submit}
                </button>
              </form>
            </div>
          )}

          {rsvpSent && <p className="cel-inv__thanks playfair-font">{L.rsvpThanks}</p>}
        </section>

        <footer className="cel-inv__footer">
          <p className="cel-inv__closing playfair-font">{L.closing}</p>
          <p className="cel-inv__footer-names great-vibes-font">{L.footerNames}</p>
        </footer>
      </div>

      {contentVisible && (
        <button
          type="button"
          className="cel-inv__audio-btn"
          onClick={toggleMusic}
          aria-label={musicPlaying ? "Ndalo muzikën" : "Luaj muzikën"}
        >
          {musicPlaying ? (
            <svg viewBox="0 0 24 24" aria-hidden>
              <rect x="6" y="5" width="4" height="14" rx="1" fill="white" />
              <rect x="14" y="5" width="4" height="14" rx="1" fill="white" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden>
              <polygon points="5,3 19,12 5,21" fill="white" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}

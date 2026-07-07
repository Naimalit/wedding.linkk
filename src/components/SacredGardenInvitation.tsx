"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SacredGardenGate } from "@/components/SacredGardenGate";

const TARGET_DATE = new Date("2026-08-22T16:00:00");
const DEMO_MUSIC = "/demo/music-new.mp3";

const COPY = {
  openHint: "Prek për ta hapur",
  weddingDay: "Dita e Dasmës",
  date: "22.08.26",
  taglineLines: ["Dy shpirtër", "Një fat", "Një jetë e shkruar me dashuri"],
  dearTitle: "Të dashur miq dhe familje",
  dearText:
    "Ju ftojmë në një mbrëmje dashurie, gëzimi, lutjesh dhe kujtimesh të paharrueshme, ndërsa fillojmë përgjithmonë tonën.",
  scroll: "Lëviz poshtë",
  countdownLabel: "Countdown Timer",
  countdownSub: "Festimi fillon pas",
  days: "Ditë",
  hours: "Orë",
  minutes: "Minuta",
  seconds: "Sekonda",
  schedule: "Agjenda e Ditës",
  events: [
    { title: "Ardhja e të ftuarve", time: "16:00" },
    { title: "Ceremonia", time: "16:30" },
    { title: "Koktej", time: "17:30" },
    { title: "Darka", time: "19:00" },
    { title: "Valle", time: "21:00" },
  ],
  venue: "Hotel Aleksandar Palace",
  addressLabel: "Adresa:",
  address: "Bul. Ilindenska 15, Skopje, Maqedoni e Veriut",
  location: "Lokacioni",
  giftText: "Ju lutemi, pa dhurata të embaluara.",
  giftTitle: "Preferenca e Dhuratave",
  dressText:
    "Ju kërkojmë miqësisht të shmangni veshjet në ngjyrë të kuqe të errët dhe burgundy për këtë festë.",
  dressTitle: "Dress Code",
  rsvpTitle: "Konfirmoni Praninë",
  rsvpSub:
    "Për të na ndihmuar të organizojmë një festë të mrekullueshme, ju lutemi konfirmoni praninë.",
  rsvpOpen: "Kliko për të hapur",
  rsvpDeadline: "Ju lutemi konfirmoni deri më 1 Gusht 2026",
  name: "Emri juaj",
  attending: "A do të jeni pjesë e ditës sonë?",
  yes: "Po, me krenari",
  no: "Fatkeqësisht jo",
  guests: "Numri i ftuarve",
  song: "Kënga që ju bën të kërceni",
  children: "Fëmijë që do të marrin pjesë",
  childrenHint: "Ju lutemi përfshini emrat dhe moshat.",
  submit: "Dërgo",
  rsvpThanks: "Faleminderit! Ju presim me dashuri në ditën tonë të madhe.",
  rsvpSorry: "Faleminderit që na njoftuat. Do t'ju mungojmë shumë!",
  closing: "Shpresojmë t'ju shohim aty!",
  footerNames: "Erion dhe Sara",
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

export function SacredGardenInvitation() {
  const L = COPY;
  const countdown = useCountdown(TARGET_DATE);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [gateOpen, setGateOpen] = useState(false);
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [rsvpSent, setRsvpSent] = useState<"yes" | "no" | null>(null);
  const [form, setForm] = useState({
    name: "",
    guests: "1",
    song: "",
    children: "",
    attending: "",
  });

  const handleOpenStart = () => setEnvelopeOpening(true);

  const handleSequenceComplete = () => {
    setGateOpen(true);
    setContentVisible(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 1;
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
    <div className="sg-inv">
      <audio ref={audioRef} src={DEMO_MUSIC} loop preload="auto" className="hidden" />

      <SacredGardenGate
        gateOpen={gateOpen}
        envelopeOpening={envelopeOpening}
        openHint={L.openHint}
        onOpen={handleOpenStart}
        onSequenceComplete={handleSequenceComplete}
      />

      <div className={`sg-inv__content ${contentVisible ? "sg-inv__content--visible" : ""}`}>
        {/* Hero section — Webgency layout */}
        <section className="sg-inv__hero">
          <div className="sg-inv__hero-glow" aria-hidden />
          <Image
            src="/demo/sacred-garden/floral-left.png"
            alt=""
            width={120}
            height={400}
            className="sg-inv__side sg-inv__side--left"
            aria-hidden
          />
          <Image
            src="/demo/sacred-garden/floral-right.png"
            alt=""
            width={120}
            height={400}
            className="sg-inv__side sg-inv__side--right"
            aria-hidden
          />

          <div className="sg-inv__names">
            <p className="sg-inv__name script-font">Erion</p>
            <p className="sg-inv__name script-font">Sara</p>
          </div>

          <p className="sg-inv__wedding-day ovo-font">{L.weddingDay}</p>
          <p className="sg-inv__date ovo-font">{L.date}</p>
          <p className="sg-inv__amp script-font">&amp;</p>

          <div className="sg-inv__tagline ovo-font">
            {L.taglineLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="sg-inv__dear ovo-font">
            <p className="sg-inv__dear-title">{L.dearTitle}</p>
            <p>{L.dearText}</p>
          </div>

          <div className="sg-inv__scroll cinzel-font">
            <span>{L.scroll}</span>
            <span className="sg-inv__scroll-icon" aria-hidden />
          </div>

          <Image
            src="/demo/sacred-garden/hero-botanical.png"
            alt=""
            width={744}
            height={487}
            className="sg-inv__hero-botanical"
            aria-hidden
          />
        </section>

        {/* Countdown */}
        <section className="sg-inv__block">
          <h2 className="sg-inv__label cinzel-font">{L.countdownLabel}</h2>
          <div className="sg-inv__timer ovo-font">
            <div className="sg-inv__timer-unit">
              <span className="sg-inv__timer-num">{pad(countdown.days)}</span>
              <span className="sg-inv__timer-lbl">{L.days}</span>
            </div>
            <span className="sg-inv__timer-colon">:</span>
            <div className="sg-inv__timer-unit">
              <span className="sg-inv__timer-num">{pad(countdown.hours)}</span>
              <span className="sg-inv__timer-lbl">{L.hours}</span>
            </div>
            <span className="sg-inv__timer-colon">:</span>
            <div className="sg-inv__timer-unit">
              <span className="sg-inv__timer-num">{pad(countdown.minutes)}</span>
              <span className="sg-inv__timer-lbl">{L.minutes}</span>
            </div>
            <span className="sg-inv__timer-colon">:</span>
            <div className="sg-inv__timer-unit">
              <span className="sg-inv__timer-num">{pad(countdown.seconds)}</span>
              <span className="sg-inv__timer-lbl">{L.seconds}</span>
            </div>
          </div>
          <p className="sg-inv__countdown-sub ovo-font">{L.countdownSub}</p>
        </section>

        {/* Schedule */}
        <section className="sg-inv__block">
          <h2 className="sg-inv__label cinzel-font">{L.schedule}</h2>
          <ul className="sg-inv__schedule ovo-font">
            {L.events.map((ev) => (
              <li key={ev.title} className="sg-inv__schedule-row">
                <span className="sg-inv__schedule-title">{ev.title}</span>
                <span className="sg-inv__schedule-time">{ev.time}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Location */}
        <section className="sg-inv__block sg-inv__block--location">
          <p className="sg-inv__venue-name ovo-font">{L.venue}</p>
          <p className="sg-inv__address ovo-font">
            <span className="sg-inv__address-label">{L.addressLabel}</span> {L.address}
          </p>
          <h2 className="sg-inv__label cinzel-font">{L.location}</h2>
        </section>

        {/* Gift */}
        <section className="sg-inv__block sg-inv__block--simple">
          <p className="sg-inv__simple-text ovo-font">{L.giftText}</p>
          <h2 className="sg-inv__label cinzel-font">{L.giftTitle}</h2>
        </section>

        {/* Dress code */}
        <section className="sg-inv__block sg-inv__block--simple">
          <p className="sg-inv__simple-text ovo-font">{L.dressText}</p>
          <h2 className="sg-inv__label cinzel-font">{L.dressTitle}</h2>
        </section>

        {/* RSVP */}
        <section className="sg-inv__block sg-inv__block--rsvp">
          <p className="sg-inv__rsvp-intro ovo-font">{L.rsvpSub}</p>
          <h2 className="sg-inv__label cinzel-font">{L.rsvpTitle}</h2>

          {!rsvpOpen && rsvpSent === null && (
            <button
              type="button"
              className="sg-inv__rsvp-btn cinzel-font"
              onClick={() => setRsvpOpen(true)}
            >
              {L.rsvpOpen}
            </button>
          )}

          {rsvpOpen && rsvpSent === null && (
            <div className="sg-inv__rsvp-panel">
              <h3 className="sg-inv__rsvp-panel-title cinzel-font">{L.rsvpTitle}</h3>
              <p className="sg-inv__rsvp-deadline ovo-font">{L.rsvpDeadline}</p>
              <form className="sg-inv__form ovo-font" onSubmit={handleRsvp}>
                <label className="sg-inv__form-field">
                  <span>{L.name}</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>

                <fieldset className="sg-inv__form-field">
                  <legend>{L.attending}</legend>
                  <label className="sg-inv__form-radio">
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
                  <label className="sg-inv__form-radio">
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

                <label className="sg-inv__form-field">
                  <span>{L.guests}</span>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  />
                </label>

                <label className="sg-inv__form-field">
                  <span>{L.song}</span>
                  <input
                    type="text"
                    value={form.song}
                    onChange={(e) => setForm({ ...form, song: e.target.value })}
                  />
                </label>

                <label className="sg-inv__form-field">
                  <span>{L.children}</span>
                  <span className="sg-inv__form-hint">{L.childrenHint}</span>
                  <input
                    type="text"
                    value={form.children}
                    onChange={(e) => setForm({ ...form, children: e.target.value })}
                  />
                </label>

                <button type="submit" className="sg-inv__form-submit cinzel-font">
                  {L.submit}
                </button>
              </form>
            </div>
          )}

          {rsvpSent === "yes" && <p className="sg-inv__rsvp-msg ovo-font">{L.rsvpThanks}</p>}
          {rsvpSent === "no" && <p className="sg-inv__rsvp-msg ovo-font">{L.rsvpSorry}</p>}
        </section>

        {/* Footer */}
        <footer className="sg-inv__footer">
          <p className="sg-inv__closing ovo-font">{L.closing}</p>
          <p className="sg-inv__footer-names script-font">{L.footerNames}</p>
        </footer>
      </div>

      {/* Floating audio button — Webgency style */}
      {contentVisible && (
        <button
          type="button"
          className="sg-inv__audio-btn"
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

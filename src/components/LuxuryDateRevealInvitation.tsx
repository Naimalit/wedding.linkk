"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LuxuryDateRevealGate } from "@/components/LuxuryDateRevealGate";
import { DateRevealScratch } from "@/components/DateRevealScratch";

const DEMO_MUSIC = "/demo/luxury-date-reveal/music.mp3";

const GALLERY = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-7.jpg",
  "gallery-8.jpg",
  "gallery-9.jpg",
  "gallery-10.jpg",
];

const COPY = {
  openHint: "Kliko për ta hapur",
  gettingMarried: "po martohen!",
  names: "Alexa & Richard",
  theDate: "Data",
  dateReveal: "Zbulimi i Datës",
  scratchHint: "✦ Fërgoje për të zbuluar datën ✦",
  invited: "Jeni të ftuar!",
  dearTitle: "Të dashur miq dhe familje,",
  dearText:
    "Ndërsa përgatitemi të themi \"Po\", ndjehemi mirënjohës për njerëzit e mrekullueshëm në jetën tonë. Mbështetja juaj na vlen shumë, dhe do të ishim të nderuar t'ju kemi pranë ndërsa fillojmë jetën tonë së bashku.",
  schedule: "Agjenda e Eventeve",
  events: [
    { title: "Hapja e dyerve", time: "16:30" },
    { title: "Ceremonia", time: "17:00" },
    { title: "Koktej dhe valle", time: "18:00" },
    { title: "Darka", time: "20:00" },
    { title: "Festë dhe Open Bar", time: "21:00" },
    { title: "Fundi i festës", time: "23:00" },
  ],
  venueTitle: "Vendi i Dasmës",
  venue: "Villa Borghese",
  addressLabel: "Adresa:",
  address: "Puerto Vallarta, MX",
  dressTitle: "Dress Code",
  dressIntro:
    "Do të ishim shumë të lumtur nëse veshja juaj është në ngjyrat e temës së dasmës.",
  dressColours: "Ngjyrat:",
  dressLadies:
    "Damat: Fustane elegante verore në tone pastel. Rekomandojmë të sillni një kapelë dhe syze dielli për komoditet.",
  dressGents:
    "Zotërinjtë: Kostume ose këmisha në nuanca klasike. Gri, blu, kafe, bezhë janë zgjedhje të shkëlqyera!",
  rsvpIntro:
    "Për të na ndihmuar të organizojmë një festë të gëzueshme, ju lutemi konfirmoni praninë.",
  rsvpTitle: "Konfirmoni Praninë",
  rsvpOpen: "RSVP",
  rsvpPanelTitle: "Konfirmoni Praninë!",
  rsvpDeadline: "Ju lutemi konfirmoni deri më 30 Shtator",
  name: "Emri juaj",
  attending: "A do të vini?",
  yes: "Po, do të vij",
  no: "Fatkeqësisht, nuk mund :(",
  later: "Do t'ju them pak më vonë",
  intolerances: "A keni ndonjë intolerancë ushqimore?",
  submit: "Dërgo",
  rsvpThanks: "Faleminderit! Shpresojmë t'ju shohim aty!",
  closing: "Shpresojmë t'ju shohim aty!",
  footerNames: "Alexa & Richard",
  day: "Dita",
  month: "Muaji",
  year: "Viti",
};

export function LuxuryDateRevealInvitation() {
  const L = COPY;
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [gateOpen, setGateOpen] = useState(false);
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [rsvpSent, setRsvpSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    attending: "",
    intolerances: "",
  });

  const handleOpenStart = () => setEnvelopeOpening(true);

  const handleSequenceComplete = () => {
    setGateOpen(true);
    setContentVisible(true);
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.volume = 1;
      audio.play().then(() => setMusicPlaying(true)).catch(() => {});
    }
    const video = videoRef.current;
    if (video) video.play().catch(() => {});
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

  useEffect(() => {
    if (!contentVisible) return;
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
    const onTouch = () => {
      if (video.paused) video.play().catch(() => {});
    };
    document.addEventListener("touchstart", onTouch, { once: true });
    return () => document.removeEventListener("touchstart", onTouch);
  }, [contentVisible]);

  return (
    <div className="ldr-inv">
      <audio ref={audioRef} src={DEMO_MUSIC} loop preload="auto" className="hidden" />

      <LuxuryDateRevealGate
        gateOpen={gateOpen}
        envelopeOpening={envelopeOpening}
        openHint={L.openHint}
        onOpen={handleOpenStart}
        onSequenceComplete={handleSequenceComplete}
      />

      <div className={`ldr-inv__content ${contentVisible ? "ldr-inv__content--visible" : ""}`}>
        {/* Hero with video */}
        <section className="ldr-inv__hero">
          <video
            ref={videoRef}
            className="ldr-inv__hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/demo/luxury-date-reveal/hero.mp4" type="video/mp4" />
          </video>
          <div className="ldr-inv__hero-overlay" aria-hidden />
          <div className="ldr-inv__hero-inner">
            <p className="ldr-inv__hero-sub imperial-font">{L.gettingMarried}</p>
            <h1 className="ldr-inv__hero-names imperial-font">{L.names}</h1>
          </div>
        </section>

        {/* Date reveal scratch */}
        <section className="ldr-inv__block ldr-inv__block--date">
          <p className="ldr-inv__section-label rufina-font">{L.theDate}</p>
          <h2 className="ldr-inv__section-title rufina-font">{L.dateReveal}</h2>
          <p className="ldr-inv__scratch-hint rufina-font">{L.scratchHint}</p>
          <DateRevealScratch
            invitedText={L.invited}
            labels={{ day: L.day, month: L.month, year: L.year }}
          />
        </section>

        {/* Dear friends */}
        <section className="ldr-inv__block ldr-inv__block--dear">
          <Image
            src="/demo/luxury-date-reveal/deco-left.png"
            alt=""
            width={200}
            height={300}
            className="ldr-inv__deco ldr-inv__deco--left ldr-inv__float"
            aria-hidden
          />
          <Image
            src="/demo/luxury-date-reveal/deco-right.png"
            alt=""
            width={200}
            height={300}
            className="ldr-inv__deco ldr-inv__deco--right ldr-inv__float ldr-inv__float--delay"
            aria-hidden
          />
          <p className="ldr-inv__dear-title rufina-font">{L.dearTitle}</p>
          <p className="ldr-inv__dear-text georgia-font">{L.dearText}</p>
        </section>

        {/* Schedule */}
        <section className="ldr-inv__block ldr-inv__block--schedule">
          <h2 className="ldr-inv__section-title rufina-font">{L.schedule}</h2>
          <Image
            src="/demo/luxury-date-reveal/schedule-deco.png"
            alt=""
            width={400}
            height={200}
            className="ldr-inv__schedule-deco"
            aria-hidden
          />
          <ul className="ldr-inv__schedule georgia-font">
            {L.events.map((ev) => (
              <li key={ev.title} className="ldr-inv__schedule-row">
                <span className="ldr-inv__schedule-title">{ev.title}</span>
                <span className="ldr-inv__schedule-time">{ev.time}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Venue */}
        <section className="ldr-inv__block ldr-inv__block--venue">
          <h2 className="ldr-inv__section-title rufina-font">{L.venueTitle}</h2>
          <p className="ldr-inv__venue-name rufina-font">{L.venue}</p>
          <p className="ldr-inv__venue-address georgia-font">
            <span>{L.addressLabel}</span> {L.address}
          </p>
          <div className="ldr-inv__venue-img-wrap">
            <Image
              src="/demo/luxury-date-reveal/venue.jpg"
              alt={L.venue}
              width={800}
              height={500}
              className="ldr-inv__venue-img"
            />
          </div>
        </section>

        {/* Gallery */}
        <section className="ldr-inv__gallery">
          <div className="ldr-inv__gallery-track">
            {[...GALLERY, ...GALLERY].map((img, i) => (
              <div key={`${img}-${i}`} className="ldr-inv__gallery-item">
                <Image
                  src={`/demo/luxury-date-reveal/${img}`}
                  alt=""
                  width={400}
                  height={500}
                  className="ldr-inv__gallery-img"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Dress code */}
        <section className="ldr-inv__block ldr-inv__block--dress">
          <h2 className="ldr-inv__section-title rufina-font">{L.dressTitle}</h2>
          <p className="ldr-inv__dress-intro georgia-font">{L.dressIntro}</p>
          <p className="ldr-inv__dress-colours rufina-font">{L.dressColours}</p>
          <Image
            src="/demo/luxury-date-reveal/dress-swatches.png"
            alt=""
            width={300}
            height={80}
            className="ldr-inv__dress-swatches"
            aria-hidden
          />
          <p className="ldr-inv__dress-text georgia-font">{L.dressLadies}</p>
          <p className="ldr-inv__dress-text georgia-font">{L.dressGents}</p>
        </section>

        {/* RSVP */}
        <section className="ldr-inv__block ldr-inv__block--rsvp">
          <p className="ldr-inv__rsvp-intro georgia-font">{L.rsvpIntro}</p>
          <h2 className="ldr-inv__section-title rufina-font">{L.rsvpTitle}</h2>

          {!rsvpOpen && !rsvpSent && (
            <button
              type="button"
              className="ldr-inv__rsvp-btn rufina-font"
              onClick={() => setRsvpOpen(true)}
            >
              {L.rsvpOpen}
            </button>
          )}

          {rsvpOpen && !rsvpSent && (
            <div className="ldr-inv__rsvp-panel">
              <h3 className="ldr-inv__rsvp-panel-title rufina-font">{L.rsvpPanelTitle}</h3>
              <p className="ldr-inv__rsvp-deadline georgia-font">{L.rsvpDeadline}</p>
              <form className="ldr-inv__form georgia-font" onSubmit={handleRsvp}>
                <label className="ldr-inv__form-field">
                  <span>{L.name}</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>

                <fieldset className="ldr-inv__form-field">
                  <legend>{L.attending}</legend>
                  <label className="ldr-inv__form-radio">
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
                  <label className="ldr-inv__form-radio">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={form.attending === "no"}
                      onChange={() => setForm({ ...form, attending: "no" })}
                    />
                    {L.no}
                  </label>
                  <label className="ldr-inv__form-radio">
                    <input
                      type="radio"
                      name="attending"
                      value="later"
                      checked={form.attending === "later"}
                      onChange={() => setForm({ ...form, attending: "later" })}
                    />
                    {L.later}
                  </label>
                </fieldset>

                <label className="ldr-inv__form-field">
                  <span>{L.intolerances}</span>
                  <input
                    type="text"
                    value={form.intolerances}
                    onChange={(e) => setForm({ ...form, intolerances: e.target.value })}
                  />
                </label>

                <button type="submit" className="ldr-inv__form-submit georgia-font">
                  {L.submit}
                </button>
              </form>
            </div>
          )}

          {rsvpSent && <p className="ldr-inv__rsvp-msg georgia-font">{L.rsvpThanks}</p>}
        </section>

        {/* Footer */}
        <footer className="ldr-inv__footer">
          <p className="ldr-inv__closing rufina-font">{L.closing}</p>
          <p className="ldr-inv__footer-names imperial-font">{L.footerNames}</p>
        </footer>
      </div>

      {contentVisible && (
        <button
          type="button"
          className="ldr-inv__audio-btn"
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

import type { Translations } from "./types";

const sq: Translations = {
  meta: {
    title: "Wedding.linkk — Ftesa Digjitale Luksoze",
    description:
      "Krijoni ftesën tuaj të dasmës si link elegant. RSVP, countdown, galeri & më shumë. Dorëzim në 24 orë.",
  },
  nav: {
    themes: "Temat",
    pricing: "Çmimet",
    howItWorks: "Si funksionon",
    faq: "FAQ",
    order: "Porosit",
  },
  hero: {
    badge: "Ftesa Digjitale Premium",
    title: "Ftesa juaj digjitale,\ne bukur dhe elegante.",
    subtitle:
      "Mënyra moderne për t'i ftuar mysafirët, mbledhur RSVP dhe menaxhuar ditën tuaj të veçantë — pa stres.",
    ctaPrimary: "Porosit via WhatsApp",
    ctaSecondary: "Shiko demo",
    saveTheDate: "Event më i vogël? Save the Date — €15",
  },
  benefits: {
    title: "Pse Wedding.linkk?",
    items: [
      { title: "Ndarje instant", desc: "Një link — ndani kudo, në çdo sekondë." },
      { title: "RSVP tracking", desc: "Dini saktësisht kush po vjen." },
      { title: "Dizajne premium", desc: "Tema luksoze për çdo stil." },
      { title: "Kurseni para", desc: "Pa printim, pa dërgesa, pa stres." },
    ],
  },
  howItWorks: {
    title: "Si funksionon",
    subtitle: "Nga ideja te ftesa e gatshme — në 4 hapa të thjeshtë",
    steps: [
      { title: "Zgjidhni temën", desc: "Shfletoni temat tona elegante dhe zgjidhni atë që ju përshtatet." },
      { title: "Na dërgoni detajet", desc: "Emra, datë, lokacion dhe muzika — via WhatsApp." },
      { title: "Paguani & ndani", desc: "Pagesë e shpejtë. Pastaj ndani linkun ose QR kodin." },
      { title: "Menaxhoni RSVP", desc: "Shihni konfirmimet në kohë reale — gjithmonë në kontroll." },
    ],
  },
  features: {
    title: "Gjithçka që ju nevojitet",
    items: [
      { title: "Ftesa të bukura", desc: "Një link. Pa printim." },
      { title: "RSVP i lehtë", desc: "Mysafirët përgjigjen. Ju kontrolloni." },
      { title: "Tema elegante", desc: "Dasma, fejesa, henna & më shumë." },
      { title: "Guest list & QR", desc: "Shihni kush vjen. Ndani me një klik." },
    ],
  },
  themes: {
    title: "Temat tona",
    subtitle: "Zgjidhni stilin tuaj — secila temë e krijuar me kujdes",
    explore: "Explore",
    categories: {
      wedding: "Dasmë",
      engagement: "Fejesë",
      henna: "Henna Night",
      event: "Event",
    },
    items: {
      "classic-elegance": "Classic Elegance",
      "elegant-wedding": "Elegant Wedding",
      "romantic-garden": "Romantic Garden",
      "rustic-charm": "Rustic Charm",
      "royal-gold": "Royal Gold",
      "ethereal-swan": "Ethereal Swan Romance",
      "day-night": "Day & Night",
      "green-minimalist": "Green Minimalist",
      "royal-prince": "Royal Prince",
      "pastel-garden": "Pastel Garden",
      "old-money": "Old Money",
      "swan-garden": "Swan Garden",
      "henna-night": "Henna Night",
      "golden-engagement": "Golden Engagement",
    },
  },
  comparison: {
    title: "Tradicionale vs Digjitale",
    subtitle: "Eleganca mbetet — kompleksiteti zhduket",
    traditional: "Ftesa Tradicionale",
    digital: "Wedding.linkk",
    traditionalItems: [
      "Kosto printimi & dërgese",
      "Ditë për prodhim & dërgim",
      "E bukur por e shtrenjtë",
      "RSVP manual",
      "Ndryshime = riprintim",
      "Përdorim letre & burimesh",
    ],
    digitalItems: [
      "Zgjidhje ekonomike",
      "Ndarje instant me link",
      "Dizajne moderne elegante",
      "RSVP automatik",
      "Ndryshime të lehta",
      "Eco-friendly",
    ],
    quote:
      "Ftesat me letër janë të përjetshme. Wedding.linkk është mënyra moderne për të mbajtur elegancën, pa kompleksitet.",
  },
  pricing: {
    title: "Paketat & Çmimet",
    subtitle: "Një pagesë — pa abonime, pa surpriza",
    oneTime: "një herë",
    popular: "Më e preferuara",
    getStarted: "Fillo tani",
    choosePremium: "Zgjidh Premium",
    chooseUnlimited: "Zgjidh Unlimited",
    customTitle: "Custom Design",
    customDesc: "Ftesë unike e dizajnuar vetëm për ju.",
    customCta: "Kërko ofertë",
    packages: {
      base: {
        name: "Base",
        desc: "Gjithçka që ju nevojitet për të filluar",
        features: [
          "Ftesë e animuar digjitale",
          "Të gjitha temat premium",
          "Menaxhim RSVP",
          "Lista e ftuarve",
          "Link i ndarëshëm",
          "Hapje të pakufizuara",
          "Countdown, harta, timeline, muzikë",
          "Dorëzim brenda 24 orëve",
          "2 rishikime · max 10 foto",
        ],
      },
      premium: {
        name: "Premium",
        desc: "Gjithçka nga Base, plus:",
        features: [
          "QR Code për sharing",
          "Njoftime email (RSVP)",
          "Story Gallery e çiftit",
          "Dress code + IBAN",
          "Dizajn i personalizuar",
          "Prioritet dorëzimi",
          "Më shumë rishikime",
        ],
      },
      unlimited: {
        name: "Unlimited",
        desc: "Gjithçka nga Premium, plus:",
        features: [
          "Custom Audio",
          "Guest Photo Upload",
          "Multilingual (SQ/EN/MK+)",
          "Ftuarë të pakufizuar",
          "Video në ftesë",
          "Animacione speciale",
          "Rishikime pa limit",
        ],
      },
      custom: {
        name: "Custom",
        desc: "Dizajn 100% unik",
        features: [
          "Ilustrime & layout unik",
          "Designer i dedikuar",
          "Gjithçka nga Unlimited",
        ],
      },
      saveTheDate: {
        name: "Save the Date",
        desc: "Ideal për evente të vogla",
        features: ["Datë + emra + link", "Ndarje instant", "Dorëzim 24h"],
      },
    },
  },
  builder: {
    title: "Ndërto paketën tënde",
    subtitle: "Fillo nga Base dhe shto vetëm çfarë të duhet",
    orBuild: "Ose ndërto paketën tënde",
    baseLabel: "Base Invitation",
    total: "Totali",
    oneTimePayment: "pagesë një herë",
    alwaysIncluded: "Gjithmonë të përfshira",
    alwaysIncludedItems: [
      "Ftesë e animuar digjitale",
      "Të gjitha temat premium",
      "Menaxhim RSVP",
      "Lista e ftuarve",
      "Link i ndarëshëm",
      "Hapje të pakufizuara",
    ],
    addons: {
      qr: { name: "QR Code", desc: "Ndani ftesën me QR code" },
      email: { name: "Njoftime Email", desc: "Njoftim kur mysafirët RSVP" },
      gallery: { name: "Story Gallery", desc: "Galeri e historisë suaj" },
      audio: { name: "Custom Audio", desc: "Kënga juaj e preferuar" },
      photos: { name: "Guest Photo Upload", desc: "Mysafirët ngarkojnë foto" },
      multilingual: { name: "Multilingual", desc: "Ftesë në shumë gjuhë" },
      dressIban: { name: "Dress Code + IBAN", desc: "Udhëzime & lista dhuratash" },
      video: { name: "Video në ftesë", desc: "Video e personalizuar" },
    },
  },
  faq: {
    title: "Pyetje të shpeshta",
    items: [
      {
        q: "A i duhet ftuarit app për ta hapur ftesën?",
        a: "Jo. Ftesa hapet direkt në shfletues — telefon, tablet ose kompjuter.",
      },
      {
        q: "Çfarë ndodh me ftesën pas eventit?",
        a: "Linku mbetet aktiv si kujtesë e bukur e ditës suaj të veçantë.",
      },
      {
        q: "A mund ta ndryshoj pas dërgimit?",
        a: "Po, brenda numrit të rishikimeve të paketës suaj.",
      },
      {
        q: "Sa kohë merr krijimi?",
        a: "Deri në 24 orë pas konfirmimit të detajeve dhe pagesës.",
      },
      {
        q: "Si paguaj?",
        a: "Via PayPal — pas konfirmimit në WhatsApp. Do t'ju dërgojmë linkun.",
      },
      {
        q: "A funksionon edhe për të moshuar?",
        a: "Po. Dizajni është i thjeshtë dhe i lexueshëm — vetëm klikoni linkun.",
      },
      {
        q: "A mund ta dërgoj jashtë vendit?",
        a: "Po. Linku funksionon kudo në botë — ideal për diasporën.",
      },
      {
        q: "A mund ta shoh para se të paguaj?",
        a: "Po. Shikoni temat tona demo, pastaj na kontaktoni për preview personalizuar.",
      },
    ],
  },
  testimonials: {
    title: "Çfarë thonë klientët",
    items: [
      {
        quote:
          "Ftesa digjitale ishte eksaktësisht ajo që kërkonim — elegante, e thjeshtë dhe shumë e bukur. Çdo mysafir na complimentoi.",
        name: "Denisa & Amir",
        event: "Dasmë · Tetovë · Qershor 2025",
      },
      {
        quote:
          "Për ditën e fejesës donim diçka moderne. Wedding.linkk na dha ftesë të shkëlqyer brenda 24 orëve!",
        name: "Ledina & Artan",
        event: "Fejesë · Gostivar · Korrik 2025",
      },
      {
        quote:
          "QR code na ndihmoi shumë — e printuam dhe e vendosëm në tavolinë. Mysafirët e hapën lehtë, super praktike!",
        name: "Mergime & Besnik",
        event: "Henna Night · Shkup · Maj 2025",
      },
    ],
  },
  cta: {
    title: "Gati për ftesën tuaj?",
    subtitle: "Gjithçka që ju nevojitet — asgjë që nuk ju duhet.",
    button: "Porosit via WhatsApp",
  },
  footer: {
    tagline: "Ftesa digjitale luksoze për çdo moment të veçantë.",
    rights: "Të gjitha të drejtat e rezervuara.",
  },
};

export default sq;

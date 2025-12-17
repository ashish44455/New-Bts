// Centralized **mock** data (no backend yet). Replace later with API calls if needed.

export const TRUST = {
  name: "Sri Bala Tripura Sundari Seva Sadan",
  moto: "Ashtadasa Shakti Peetha Seva Sankalpa",
  progressCompleted: 7,
  progressTotal: 18,
  whatsappNumber: "+919676040411",
  whatsappMessage:
    "Namaskaram 🙏 I would like to enquire about your services. Kindly guide me on the process.",
  addressLines: [
    "9-5-21/3, Pitapuram Colony,",
    "Maddipalem, Visakhapatnam,",
    "Andhra Pradesh, India",
  ],
  phoneDisplay: "+91 96760 40411",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=9-5-21/3%20Pitapuram%20Colony%20Maddipalem%20Visakhapatnam%20Andhra%20Pradesh%20India&output=embed",
};

export const buildWaMeLink = () => {
  const digits = TRUST.whatsappNumber.replace(/[^0-9]/g, "");
  const text = encodeURIComponent(TRUST.whatsappMessage);
  return `https://wa.me/${digits}?text=${text}`;
};

// Deity hero placeholder: Wikimedia Commons file-path (replace with official photo later)
export const HERO = {
  image:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Goddess_Lalita_Tripura_Sundari.jpg",
  imageAlt: "Sri Lalita Tripura Sundari (placeholder image)",
};

// Carousel + gallery placeholders (replaceable later)
export const IMAGES = {
  slider: [
    "https://images.unsplash.com/photo-1565195161077-f5c5f61f9ea2?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1715876722520-02ccc9248dab?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1573352763925-82bd5dfc31d1?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1700403455026-3559b076ff03?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?auto=format&fit=crop&w=2400&q=80",
  ],
  featuredGallery: [
    {
      id: "g1",
      category: "Deity & Temple",
      title: "Temple Sanctum (placeholder)",
      url: "https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "g2",
      category: "Pujas & Rituals",
      title: "Diya Deepam (placeholder)",
      url: "https://images.unsplash.com/photo-1602305361939-806b254e9f47?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "g3",
      category: "Festivals",
      title: "Festival Lights (placeholder)",
      url: "https://images.unsplash.com/photo-1574266742257-41460b7992ee?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "g4",
      category: "Events & Seva",
      title: "Temple Corridor (placeholder)",
      url: "https://images.unsplash.com/photo-1565195161077-f5c5f61f9ea2?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "g5",
      category: "Pujas & Rituals",
      title: "Aarti Flame (placeholder)",
      url: "https://images.unsplash.com/photo-1700403455026-3559b076ff03?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "g6",
      category: "Deity & Temple",
      title: "Temple Gopuram (placeholder)",
      url: "https://images.unsplash.com/photo-1715876722520-02ccc9248dab?auto=format&fit=crop&w=1800&q=80",
    },
  ],
};

export const SERVICES = {
  pujas: [
    {
      id: "puja-bala",
      name: "Bala Tripura Sundari Puja",
      desc: "Traditional puja performed with sankalpa, mantras, and archana — guided personally.",
    },
    {
      id: "puja-lalitha",
      name: "Lalitha Sahasranama Puja",
      desc: "A sacred offering through Lalitha Sahasranama parayana and archana.",
    },
    {
      id: "puja-ganapathi",
      name: "Ganapathi Puja",
      desc: "For auspicious beginnings and removal of obstacles — performed as per shastra.",
    },
    {
      id: "puja-satyanarayana",
      name: "Satyanarayana Puja",
      desc: "A vrata-style puja for wellbeing, family harmony, and gratitude.",
    },
    {
      id: "puja-navagraha",
      name: "Navagraha Puja",
      desc: "For graha shanti, clarity, and balance — with traditional procedures.",
    },
  ],
  vrathams: [
    {
      id: "vrat-varalakshmi",
      name: "Varalakshmi Vratham",
      desc: "A sacred vrata for Lakshmi anugraha, prosperity, and family wellbeing.",
    },
    {
      id: "vrat-satyanarayana",
      name: "Satyanarayana Vratham",
      desc: "Vratham with katha, sankalpa and prasad — guided personally.",
    },
    {
      id: "vrat-navaratri",
      name: "Navaratri Vrathams",
      desc: "Devi upasana across Navaratri — with daily guidance and ritual support.",
    },
    {
      id: "vrat-sankatahara",
      name: "Sankatahara Chaturthi",
      desc: "For Sri Ganapathi anugraha — vrata and puja as per tradition.",
    },
  ],
  homams: [
    {
      id: "homam-ganapathi",
      name: "Ganapathi Homam",
      desc: "A powerful homam for removing obstacles and inviting auspiciousness.",
    },
    {
      id: "homam-navagraha",
      name: "Navagraha Homam",
      desc: "For graha shanti and alignment — performed with proper sankalpa.",
    },
    {
      id: "homam-sudarshana",
      name: "Sudarshana Homam",
      desc: "For protection, clarity and spiritual strength — with traditional procedures.",
    },
    {
      id: "homam-ayushya",
      name: "Ayushya Homam",
      desc: "For health and longevity — performed with shastra-based sankalpa.",
    },
  ],
  events: [
    {
      id: "evt-gruhapravesam",
      name: "Gruhapravesam",
      desc: "Vastu, muhurtham, puja and homam support — coordinated via WhatsApp.",
    },
    {
      id: "evt-namakaranam",
      name: "Namakaranam",
      desc: "Baby naming ceremony guidance including muhurtham and rituals.",
    },
    {
      id: "evt-annaprasana",
      name: "Annaprasana",
      desc: "First feeding ceremony rituals — arranged with traditional care.",
    },
    {
      id: "evt-marriage",
      name: "Marriage Muhurtham Support",
      desc: "Muhurtham fixing + ritual guidance to support families respectfully.",
    },
  ],
};

export const ASTROLOGY = {
  heading: "Astrology & Muhurtham Services",
  subheading: "Personal guidance rooted in Sanatana Dharma",
  intro:
    "Astrology is not automation. It requires dialogue, clarity, and trust. To preserve traditional authenticity, all consultations are handled personally via WhatsApp.",
  items: [
    "Horoscope / Kundali Reading",
    "Muhurtham Fixing",
    "Dosha Nivarana",
    "Marriage Compatibility",
    "Career & Education Guidance",
  ],
};

// --- Add-on content (static, manual update only) ---

export const FOUNDER = {
  headingEn: "Founder & Spiritual Guide",
  name: "Akkajosyula Ramesh Sarma",
  descEn:
    "A humble spiritual founder and guiding force of Sri Bala Tripura Sundari Seva Sadan. His guidance is rooted in traditional upasana, seva, and the living continuity of Sanatana Dharma — offered with devotion and reverence.",
  descTe:
    "శ్రీ బాల త్రిపుర సుందరి సేవ సదన్‌కు ఆధ్యాత్మిక స్థాపకుడిగా మరియు మార్గదర్శకుడిగా ఆక్కజోస్యుల రమేష్ శర్మ గారు భక్తిపూర్వకంగా సేవ చేస్తున్నారు. సంప్రదాయ ఉపాసన, సేవా భావం, సనాతన ధర్మ పరంపరపై ఆధారపడి ఆయన మార్గదర్శనం వినయంతో, భక్తితో అందించబడుతుంది.",
};

export const ZODIAC_2026_2027 = {
  yearLabel: "2026–2027",
  titleEn: "Yearly Rasi Phalalu",
  titleTe: "వార్షిక రాశి ఫలాలు",
  authorityEn:
    "Guided traditionally by Sri Akkajosyula Ramesh Sarma, following Vedic Astrology.",
  authorityTe:
    "వేద జ్యోతిష్య పద్ధతిని అనుసరించి శ్రీ ఆక్కజోస్యుల రమేష్ శర్మ గారి సంప్రదాయ మార్గదర్శనంతో.",
  disclaimerEn:
    "Astrological guidance is shared as per traditional understanding. Outcomes depend on karma, effort, and divine grace.",
  disclaimerTe:
    "జ్యోతిష్య మార్గదర్శనం సంప్రదాయ అవగాహన ప్రకారం అందించబడుతుంది. ఫలితాలు కర్మ, ప్రయత్నం, దైవ కృపపై ఆధారపడి ఉంటాయి.",
  // 12 Rasi cards (Mesham → Meenam). English first, Telugu below.
  rasis: [
    {
      key: "mesham",
      en: "Mesham (Aries)",
      te: "మేషం",
      textEn:
        "Career: Steady responsibilities and new initiatives grow through patience. Health: Maintain discipline in sleep and food. Family: Gentle speech brings harmony. Finance: Avoid hurried decisions; save consistently. Spiritual: Regular prayer and gratitude keep the mind calm.",
      textTe:
        "వృత్తి: బాధ్యతలు పెరిగినా ఓర్పుతో ముందుకు వెళ్తే పురోగతి ఉంటుంది. ఆరోగ్యం: నిద్ర, ఆహారంలో క్రమశిక్షణ అవసరం. కుటుంబం: మృదువైన మాటలతో సౌహార్దం పెరుగుతుంది. ఆర్థికం: తొందర నిర్ణయాలు వద్దు; క్రమంగా పొదుపు చేయండి. ఆధ్యాత్మికం: నిత్య ప్రార్థన, కృతజ్ఞత మనసుకు శాంతి ఇస్తాయి.",
    },
    {
      key: "vrishabham",
      en: "Vrishabham (Taurus)",
      te: "వృషభం",
      textEn:
        "Career: Progress comes through consistency and skill refinement. Health: Care for throat and digestion; keep routine. Family: Support elders with patience. Finance: Prefer stable planning over risk. Spiritual: Offer simple seva; recite sacred names with faith.",
      textTe:
        "వృత్తి: నిరంతర ప్రయత్నం, నైపుణ్య మెరుగుదల వల్ల పురోగతి. ఆరోగ్యం: గొంతు, జీర్ణ సమస్యలపై శ్రద్ధ; నియమిత జీవనం. కుటుంబం: పెద్దల పట్ల సహనం, ఆదరణ చూపండి. ఆర్థికం: అధిక రిస్క్ కంటే స్థిర ప్రణాళిక మంచిది. ఆధ్యాత్మికం: చిన్న సేవలు, నామస్మరణ భక్తితో చేయండి.",
    },
    {
      key: "mithunam",
      en: "Mithunam (Gemini)",
      te: "మిథునం",
      textEn:
        "Career: Communication helps; avoid scattering efforts. Health: Reduce mental overwork; take short breaks. Family: Listen fully before responding. Finance: Track expenses; avoid impulse buys. Spiritual: Study a small portion of scripture daily.",
      textTe:
        "వృత్తి: సంభాషణ నైపుణ్యం ఉపకరిస్తుంది; పనులను విస్తరించి అలసిపోకండి. ఆరోగ్యం: మానసిక అలసట తగ్గించండి; చిన్న విరామాలు తీసుకోండి. కుటుంబం: స్పందించే ముందు పూర్తిగా వినండి. ఆర్థికం: ఖర్చులను గమనించండి; ఆకస్మిక కొనుగోళ్లు తగ్గించండి. ఆధ్యాత్మికం: రోజుకు కొద్దిగా శాస్త్ర పఠనం చేయండి.",
    },
    {
      key: "karkatakam",
      en: "Karkatakam (Cancer)",
      te: "కర్కాటకం",
      textEn:
        "Career: Slow and steady effort brings recognition. Health: Focus on hydration and emotional balance. Family: Care and warmth strengthen bonds. Finance: Plan for household needs; avoid lending without clarity. Spiritual: Devi upasana brings inner strength.",
      textTe:
        "వృత్తి: నెమ్మదిగా అయినా స్థిరమైన ప్రయత్నం గౌరవం తెస్తుంది. ఆరోగ్యం: నీరు ఎక్కువగా తీసుకోండి; భావోద్వేగ సమతౌల్యం ముఖ్యం. కుటుంబం: ప్రేమతో చూసుకోవడం బంధాలను బలపరుస్తుంది. ఆర్థికం: గృహ అవసరాలకు ప్రణాళిక; స్పష్టత లేకుండా అప్పు ఇవ్వకండి. ఆధ్యాత్మికం: దేవి ఉపాసన అంతర బలం ఇస్తుంది.",
    },
    {
      key: "simham",
      en: "Simham (Leo)",
      te: "సింహం",
      textEn:
        "Career: Leadership chances arise; stay humble and fair. Health: Watch heat and stress; keep moderation. Family: Respectful guidance improves unity. Finance: Prefer orderly budgeting; avoid showy spending. Spiritual: Offer prayers with discipline and sincerity.",
      textTe:
        "వృత్తి: నాయకత్వ అవకాశాలు వస్తాయి; వినయం, న్యాయం పాటించండి. ఆరోగ్యం: వేడి, ఒత్తిడి తగ్గించండి; మితంగా ఉండండి. కుటుంబం: గౌరవంతో మార్గదర్శనం unity పెంచుతుంది. ఆర్థికం: క్రమబద్ధమైన బడ్జెట్; ఆడంబర ఖర్చులు తగ్గించండి. ఆధ్యాత్మికం: నియమితంగా, హృదయపూర్వకంగా ప్రార్థించండి.",
    },
    {
      key: "kanya",
      en: "Kanya (Virgo)",
      te: "కన్య",
      textEn:
        "Career: Attention to detail supports steady advancement. Health: Maintain digestion and posture; keep routine. Family: Small acts of care reduce misunderstandings. Finance: Good year for careful saving. Spiritual: Keep a simple daily discipline of japa.",
      textTe:
        "వృత్తి: సూక్ష్మ శ్రద్ధ వల్ల స్థిరమైన ఎదుగుదల. ఆరోగ్యం: జీర్ణం, శరీర ధోరణి (posture) పై శ్రద్ధ; నియమిత జీవనం. కుటుంబం: చిన్న శ్రద్ధాకార్యాలు అపోహలు తగ్గిస్తాయి. ఆర్థికం: పొదుపును క్రమంగా పెంచుకోవడానికి మంచి సంవత్సరం. ఆధ్యాత్మికం: ప్రతిరోజూ సులభమైన జప నియమం పాటించండి.",
    },
    {
      key: "tula",
      en: "Tula (Libra)",
      te: "తుల",
      textEn:
        "Career: Partnerships work well when agreements are clear. Health: Balance work and rest. Family: Maintain harmony through patience. Finance: Avoid indecision; make calm plans. Spiritual: Light a lamp and offer prayers regularly.",
      textTe:
        "వృత్తి: ఒప్పందాలు స్పష్టంగా ఉంటే భాగస్వామ్య పనులు మెరుగ్గా సాగుతాయి. ఆరోగ్యం: పని-విశ్రాంతి సమతౌల్యం అవసరం. కుటుంబం: సహనంతో సౌహార్దం నిలబెట్టండి. ఆర్థికం: తడబాటు తగ్గించి ప్రశాంతంగా ప్రణాళిక చేయండి. ఆధ్యాత్మికం: దీపారాధన, నియమిత ప్రార్థన మంచిది.",
    },
    {
      key: "vrischikam",
      en: "Vrischikam (Scorpio)",
      te: "వృశ్చికం",
      textEn:
        "Career: Focused effort helps overcome obstacles. Health: Keep calm mind; avoid extremes. Family: Honest, gentle talk brings closeness. Finance: Be cautious with commitments; prefer clarity. Spiritual: Meditation and Devi stotra bring steadiness.",
      textTe:
        "వృత్తి: ఏకాగ్ర ప్రయత్నం అడ్డంకులు దాటిస్తుంది. ఆరోగ్యం: మనశ్శాంతి అవసరం; అతిగా చేసే పనులు తగ్గించండి. కుటుంబం: నిజాయితీతో, మృదువుగా మాట్లాడితే సాన్నిహిత్యం పెరుగుతుంది. ఆర్థికం: బాధ్యతలు తీసుకునే ముందు స్పష్టత చూసుకోండి. ఆధ్యాత్మికం: ధ్యానం, దేవి స్తోత్ర పఠనం స్థిరత ఇస్తాయి.",
    },
    {
      key: "dhanussu",
      en: "Dhanussu (Sagittarius)",
      te: "ధనుస్సు",
      textEn:
        "Career: Learning and travel-related tasks may increase; stay grounded. Health: Keep regular exercise. Family: Encourage unity through shared time. Finance: Avoid overconfidence; maintain savings. Spiritual: Guru smarana and charity help.",
      textTe:
        "వృత్తి: నేర్చుకోవడం, ప్రయాణ సంబంధ పనులు పెరిగే సూచనలు; నేల మీద నిలకడగా ఉండండి. ఆరోగ్యం: వ్యాయామం క్రమంగా చేయండి. కుటుంబం: కలిసి గడిపే సమయం ఏకతాటిపై ఉంచుతుంది. ఆర్థికం: అతిశయ నమ్మకం వద్దు; పొదుపు కొనసాగించండి. ఆధ్యాత్మికం: గురు స్మరణ, దానం ఉపకరిస్తాయి.",
    },
    {
      key: "makaram",
      en: "Makaram (Capricorn)",
      te: "మకరం",
      textEn:
        "Career: Duty and discipline yield results; be patient with timing. Health: Care for bones and joints; avoid strain. Family: Responsibility with warmth strengthens trust. Finance: Good for long-term planning. Spiritual: Regular temple visits or home puja help.",
      textTe:
        "వృత్తి: కర్తవ్యనిష్ఠ, క్రమశిక్షణ ఫలితాలు ఇస్తాయి; సమయం మీద ఓర్పు. ఆరోగ్యం: ఎముకలు, సంధులు పై శ్రద్ధ; అతిగా శ్రమ వద్దు. కుటుంబం: బాధ్యతను ప్రేమతో నిర్వహిస్తే విశ్వాసం పెరుగుతుంది. ఆర్థికం: దీర్ఘకాల ప్రణాళికలకు అనుకూలం. ఆధ్యాత్మికం: ఆలయ దర్శనం లేదా ఇంటి పూజ నియమితం చేయండి.",
    },
    {
      key: "kumbham",
      en: "Kumbham (Aquarius)",
      te: "కుంభం",
      textEn:
        "Career: Collaboration brings gains; keep clarity in roles. Health: Maintain nervous balance; reduce screen strain. Family: Be present; avoid distance. Finance: Budget for essentials; keep steady contributions. Spiritual: Seva to elders and satsang are helpful.",
      textTe:
        "వృత్తి: సహకారంతో లాభం; పాత్రలు స్పష్టంగా ఉంచండి. ఆరోగ్యం: నరాల ఒత్తిడి తగ్గించండి; స్క్రీన్ అలసట తగ్గించండి. కుటుంబం: సమీపంగా ఉండండి; దూరంగా భావించకుండా చూసుకోండి. ఆర్థికం: అవసరాలకు బడ్జెట్; క్రమంగా పొదుపు/సహాయం. ఆధ్యాత్మికం: పెద్దలకు సేవ, సత్సంగం మేలు చేస్తాయి.",
    },
    {
      key: "meenam",
      en: "Meenam (Pisces)",
      te: "మీనం",
      textEn:
        "Career: Creative work increases; keep boundaries and timelines. Health: Prioritize rest and calmness. Family: Compassion heals misunderstandings. Finance: Avoid emotional spending; keep simple plans. Spiritual: Bhakti and nama-sankirtana bring peace.",
      textTe:
        "వృత్తి: సృజనాత్మక పనులు పెరుగుతాయి; సమయం, పరిమితులు పాటించండి. ఆరోగ్యం: విశ్రాంతి, శాంతి ప్రధానము. కుటుంబం: కరుణతో అపోహలు తగ్గుతాయి. ఆర్థికం: భావోద్వేగ ఖర్చులు తగ్గించండి; సులభమైన ప్రణాళికలు. ఆధ్యాత్మికం: భక్తి, నామ సంకీర్తన మనసుకు శాంతి ఇస్తాయి.",
    },
  ],
};

export const PANCHANGAM_PDF = {
  titleEn: "Andhra Panchangam",
  titleTe: "ఆంధ్ర పంచాంగం",
  yearLabel: "2026–2027",
  noteEn:
    "Traditional Andhra Panchangam (Andhra Pradesh, IST). This is shared as a public reference and is view-only.",
  noteTe:
    "సంప్రదాయ ఆంధ్ర పంచాంగం (ఆంధ్రప్రదేశ్, IST). ప్రజా సూచన కోసం అందించబడింది — వీక్షణ మాత్రమే.",
  // Placeholder file in /public
  pdfUrl: "/panchangam/andhra-panchangam-2026-2027.pdf",
  // HTML wrapper that tries to show PDF inline (best-effort)
  viewerUrl: "/panchangam/view-2026-2027.html",
};

export const STORE = {
  items: [
    {
      id: "st-samagri",
      name: "Puja Samagri Sets",
      desc: "Curated puja items set (catalog only). Availability confirmed on WhatsApp.",
      image:
        "https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "st-idols",
      name: "Idols & Yantras",
      desc: "Traditional idols, Sri Chakra / yantra items (catalog only).",
      image:
        "https://images.unsplash.com/photo-1574266742257-41460b7992ee?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "st-sacred",
      name: "Sacred Items",
      desc: "Vibhuti, oils, rudraksha and more (catalog only).",
      image:
        "https://images.unsplash.com/photo-1700403455026-3559b076ff03?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "st-books",
      name: "Spiritual Books",
      desc: "Selected devotional texts (catalog only).",
      image:
        "https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?auto=format&fit=crop&w=1800&q=80",
    },
  ],
};

export const GALLERY = {
  categories: ["All", "Deity & Temple", "Pujas & Rituals", "Festivals", "Events & Seva"],
  items: [
    ...IMAGES.featuredGallery,
    {
      id: "g7",
      category: "Festivals",
      title: "Golden Lamps (placeholder)",
      url: "https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "g8",
      category: "Pujas & Rituals",
      title: "Ritual Firelight (placeholder)",
      url: "https://images.unsplash.com/photo-1602305361939-806b254e9f47?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "g9",
      category: "Deity & Temple",
      title: "Temple Architecture (placeholder)",
      url: "https://images.pexels.com/photos/1583244/pexels-photo-1583244.jpeg?auto=compress&cs=tinysrgb&w=1800",
    },
    {
      id: "g10",
      category: "Deity & Temple",
      title: "White Temple (placeholder)",
      url: "https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&w=1800",
    },
    {
      id: "g11",
      category: "Events & Seva",
      title: "Temple Pathway (placeholder)",
      url: "https://images.unsplash.com/photo-1573352763925-82bd5dfc31d1?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "g12",
      category: "Festivals",
      title: "Festival Glow (placeholder)",
      url: "https://images.pexels.com/photos/783200/pexels-photo-783200.jpeg?auto=compress&cs=tinysrgb&w=1800",
    },
    {
      id: "g13",
      category: "Pujas & Rituals",
      title: "Deepam Closeup (placeholder)",
      url: "https://images.pexels.com/photos/3135235/pexels-photo-3135235.jpeg?auto=compress&cs=tinysrgb&w=1800",
    },
    {
      id: "g14",
      category: "Events & Seva",
      title: "Temple Gathering (placeholder)",
      url: "https://images.unsplash.com/photo-1715876722520-02ccc9248dab?auto=format&fit=crop&w=1800&q=80",
    },
    {
      id: "g15",
      category: "Deity & Temple",
      title: "Temple at Dusk (placeholder)",
      url: "https://images.unsplash.com/photo-1565195161077-f5c5f61f9ea2?auto=format&fit=crop&w=1800&q=80",
    },
  ],
};

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

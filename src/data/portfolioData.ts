export interface Experience {
  title: string;
  company: string;
  date: string;
  icon: string;
  align: 'left' | 'right';
  description?: string;
}

export interface Project {
  name: string;
  type: string;
  desc: string;
  img: string;
  link: string;
  align: 'start' | 'end';
  featured?: boolean;
  tags?: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { label: 'ROLES HELD', value: '10 ACROSS 8 ORGS' },
  { label: 'PROJECTS SHIPPED', value: '15+ LIVE' },
  { label: 'ON-TIME DELIVERY', value: '90%+ SPRINTS' },
  { label: 'PAGE LOAD', value: '−40% ONJI' },
];

export const experiences: Experience[] = [
  {
    title: 'Chief Operating Officer',
    company: '@ ONJI',
    date: 'AUG 2026 — PRESENT · REMOTE',
    icon: 'rocket_launch',
    align: 'right',
    description: 'Lead delivery for an 8-person engineering team at 90%+ on-time sprints and run technical hiring; hired 3 engineers. Built the intern management portal on Next.js 14 and Firebase.'
  },
  {
    title: 'Machine Learning Intern',
    company: '@ FLYRANK AI',
    date: 'JUL 2026 — SEP 2026 · REMOTE',
    icon: 'psychology',
    align: 'left',
    description: 'Built and evaluated LLM agent workflows for search-intelligence products — prompt design, retrieval tuning and evaluation.'
  },
  {
    title: 'Program Committee Head',
    company: '@ IEEE FCRIT',
    date: 'JUL 2026 — PRESENT · ON-SITE',
    icon: 'workspace_premium',
    align: 'right',
    description: 'Leading the student IEEE chapter programming committee at FCRIT, Navi Mumbai.'
  },
  {
    title: 'Jt. Technical Head',
    company: '@ AI & DEEP LEARNING CLUB, FCRIT',
    date: 'JUN 2026 — PRESENT · ON-SITE',
    icon: 'network_intelligence',
    align: 'left',
    description: 'Co-leading technical programming for the AI & Deep Learning student club. Built the website for Hack on Track 2026, a 24-hour national hackathon.'
  },
  {
    title: 'Full-stack Developer (Intern)',
    company: '@ AWAKENIQ',
    date: 'JUN 2026 — JUL 2026 · 2 MOS',
    icon: 'developer_mode',
    align: 'right',
    description: 'Built the student and parent portal for 200+ students as sole developer on a Node.js/Express API — auth, enrollment, attendance, feedback and Razorpay checkout. ~30% faster page response, weekly releases, zero critical regressions.'
  },
  {
    title: 'Scrum Master',
    company: '@ ONJI',
    date: 'DEC 2025 — SEP 2026 · REMOTE',
    icon: 'groups',
    align: 'left',
    description: 'End-to-end technical recruitment, standups, sprint planning, retrospectives. KPI tracking and structured feedback for a distributed eng team.'
  },
  {
    title: 'AI Intern',
    company: '@ INTERACTO AI SOLUTIONS',
    date: 'DEC 2025 — FEB 2026 · 3 MOS · PUNE',
    icon: 'smart_toy',
    align: 'right',
    description: 'Integrated core ML features into active production pipelines. Stack: Python, Git.'
  },
  {
    title: 'NSS Volunteer',
    company: '@ NSS FCRIT',
    date: 'JUL 2025 — PRESENT · 1 YR 4 MOS',
    icon: 'volunteer_activism',
    align: 'left',
    description: 'National Service Scheme community engagement at FCRIT.'
  },
  {
    title: 'Web Developer (Intern)',
    company: '@ ONJI',
    date: 'MAY 2025 — AUG 2025 · 4 MOS · REMOTE',
    icon: 'code',
    align: 'right',
    description: 'Built responsive React interfaces (+22% mobile engagement). Lazy loading + code-splitting cut page load −40%. Figma handoff workflow cut design→dev time −35%.'
  },
  {
    title: 'Finance & Sponsorship Head',
    company: '@ AGNEL CYBER CELL',
    date: 'JUN 2025 — JUN 2026 · 1 YR 1 MO · ON-SITE',
    icon: 'account_balance',
    align: 'left',
    description: 'Owned sponsorship outreach and finance for the student cybersecurity cell.'
  },
];

export const projects: Project[] = [
  // ─── TIER 2 FEATURED (lead with the strongest new reveal) ────────────────
  {
    name: 'TRADELINE',
    type: 'FORENSICS / 3D',
    desc: 'Air-gapped Bitcoin forensics workstation, built solo for a Smart India Hackathon problem — a 120-tree Isolation Forest and 6 behavioral detectors in pure TypeScript, rendered as a WebGL 3D entity graph with zero outbound network calls.',
    img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&q=80&auto=format&fit=crop',
    link: 'https://tradeline-psi.vercel.app/',
    align: 'start',
    featured: true,
    tags: ['TypeScript', 'React', 'Three.js', 'Isolation Forest', 'Air-gapped']
  },
  {
    name: 'Rocket-Land',
    type: 'DEEP RL',
    desc: 'Self-landing rocket trained with deep RL — a 17-stage PPO curriculum, then SAC. 97% precise and 98.5% safe landings under sensor noise, observation delay, actuator lag and variable gravity. 2-person team.',
    img: '/rocket-land.jpg',
    link: 'https://github.com/rajivagarwal221/Rocket-Land',
    align: 'end',
    featured: true,
    tags: ['PyTorch', 'Stable-Baselines3', 'PPO → SAC', 'Blender']
  },

  // ─── TIER 1: ON-SITE, KEEP + IMPROVE ─────────────────────────────────────
  {
    name: 'PacPay',
    type: 'FINTECH / PWA',
    desc: 'Gamified financial PWA with an AI coach — XP system, real-time analytics, Gemini AI integration. Strongest product narrative.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5EaU1wpVLyx6dfGkz7PWbYKaIGQqafqJF6isCAxcghlmZsPyIOw30jczDMLFsHV4em-pYIzYqnQKEV-3uIUVxECujqvS5dspnsBh6Kh5PVFlu6ZWSZ3bJ7Xy82I0t94mABhOU0I2vspnzhYyavrMQp3DOLRq-uWr917DVheiE77AyUoe17pOjGTJgLwl5Q_AvOwH6_TccyNFnNs9Xp6pyax6SrJ0nzfAgGkWle6OUhVAN_y8Or2lIhGyry42edwz389q_kZZE7xc',
    link: 'https://pacpay.vercel.app/',
    align: 'end',
    featured: true,
    tags: ['Next.js', 'Gemini AI', 'PWA', 'Gamification']
  },
  {
    name: 'Nagrik Sahayata / Yojana-Sarthi',
    type: 'CIVIC / RAG',
    desc: 'Civic platform in English, Hindi and Marathi — photo and location complaint filing, status tracking, a staff triage queue, and a RAG scheme finder with source-cited eligibility answers over 85 Maharashtra schemes.',
    img: '/yojana-sarthi.png',
    link: 'https://citizen-app-xi.vercel.app/',
    align: 'start',
    featured: true,
    tags: ['React', 'Supabase', 'FastAPI', 'FAISS', 'Gemini']
  },
  {
    name: 'Aakash Enterprises',
    type: 'ERP',
    desc: 'Sales and inventory platform that replaced a business\'s spreadsheet workflow. Most-iterated codebase — 85 commits, 8 normalized Postgres tables, an OpenAPI spec that generates typed React Query hooks.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCjTwbWGqamPAgaAeMlOumlU6TFBZRx-eH4zyGwW2j8M_HjqRBCcWjdfW2icWyy5FvmqT3pyp29c2JaxAVy1JG-okZQ-8js4U9IKydVHU6MzG-BdwBHpg_UIFXJP--K6PgozqOMtXATt4Bg80YulDpFbQHXTt-slk2l2UeEV89v13RJI0B1b_sXwtMrQY6ZGfSq0gxMuQfUVa6ny7Pg2Eo10hmUDA_Of57ecaZ-4KcFOA8Q5KWVv6TlgcAAjVCt_zKK78wzwY23z4',
    link: 'https://aakash-enterprises-frontend.vercel.app/',
    align: 'end',
    tags: ['Express 5', 'PostgreSQL', '85 commits', '8 PG tables']
  },
  {
    name: 'Aquapure',
    type: 'IOT / DATA',
    desc: 'Intelligent water management + conservation. Pulls live USGS + EPA datasets for real-time quality tracking.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDubbBplN-Ggsr9R4wfWe4EdsPOgazVzNmszAfWCiq_-EAjJ4NZ2Tvy7Gd9hig9RkWEXFX4XQRnILumNmH54Adr-abr28OasvMXUvBRqiEPPeH_nguSkcBpMmrOj0dJbXTtugnYAm23vy-gC-mNU_v7FiAhG0PrL3moAh7rhF8kCgPg_qQkeU11E2xtZg6g1glqotLxScbJSZVoaolptaifZ4e_t0dlRkDjp4hr2T1VWFJH9jLH2oe0w8rf6mxQX4z4PLlW9MBeqqY',
    link: 'https://aquacare-final.vercel.app/',
    align: 'start',
    tags: ['IoT', 'USGS', 'EPA', 'React']
  },

  // ─── TIER 2: STRONG, DEPLOYED, NEW TO THE SITE ───────────────────────────
  {
    name: 'Vocalize (ASL)',
    type: 'CV / CNN',
    desc: '29-class ASL sign recognition — CNN at 94%+ validation accuracy and under 50 ms per frame with MediaPipe hand landmarks, running in-browser on TensorFlow.js with a sentence-building chatbot.',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80&auto=format&fit=crop',
    link: 'https://asl-sign-recognition-alpha.vercel.app/',
    align: 'end',
    tags: ['CNN', 'MediaPipe', '94% acc', 'sub-50ms']
  },
  {
    name: 'Smart Agri IoT',
    type: 'IOT / AGTECH',
    desc: 'IoT-based agricultural monitoring — sensor telemetry, dashboarding, and automated advisories for small-plot farming.',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format&fit=crop',
    link: 'https://smart-iot-agricultural-system.vercel.app/',
    align: 'start',
    tags: ['IoT', 'Agriculture', 'Sensors']
  },
  {
    name: 'AHAAR',
    type: 'CV / FOOD',
    desc: 'Fridge-to-recipe food assistant — a YOLOv11 ingredient detector trained on a 218-class Indian food manifest (0.96 validation mAP50), served by FastAPI behind an 8-page React app. 3-person academic project.',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80&auto=format&fit=crop',
    link: 'https://aahar-six.vercel.app/',
    align: 'end',
    tags: ['YOLOv11', 'FastAPI', 'React', 'TypeScript']
  },

  // ─── TIER 3: AI / AGENTS — "AI engineer" narrative ──────────────────────
  {
    name: 'Jarvis AI',
    type: 'AI AGENTS',
    desc: 'Multi-agent AI dev system targeted at above-average PCs. Companion to the FlyRank AI role.',
    img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1600&q=80&auto=format&fit=crop',
    link: 'https://github.com/rajivagarwal221/Jarvis-ai',
    align: 'start',
    tags: ['Multi-agent', 'LLM', 'Local']
  },
  {
    name: 'Attention Is All You Need',
    type: 'ML FUNDAMENTALS',
    desc: 'Transformer architecture implemented from scratch — not an API wrapper, actual ML fundamentals. Great AI/ML credibility signal.',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80&auto=format&fit=crop',
    link: 'https://github.com/rajivagarwal221/Attention-Is-All-You-Need-Implementation',
    align: 'end',
    tags: ['Transformer', 'From scratch', 'NumPy']
  },
];

export const techStack: string[] = [
  // Core web
  'REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'VITE',
  // Backend
  'NODE.JS', 'EXPRESS', 'FASTAPI', 'FLASK', 'PYTHON',
  // Data
  'POSTGRESQL', 'SUPABASE', 'FIREBASE',
  // ML / AI
  'PYTORCH', 'TENSORFLOW', 'KERAS', 'YOLO', 'STABLE-BASELINES3',
  'SCIKIT-LEARN', 'OPENCV', 'MEDIAPIPE',
  'GEMINI API', 'FAISS', 'RAG', 'LANGGRAPH',
  // 3D / mobile
  'THREE.JS', 'FLUTTER', 'DART', 'PWA',
  // Workflow
  'DOCKER', 'FIGMA', 'GIT', 'VERCEL', 'POWER BI', 'BLADE / PHP', 'AGILE',
];

export const narrativePillars = {
  tagline: 'Full-stack + AI, not AI on top of full-stack.',
  threads: [
    'Shipping cadence > perfection — 15+ live deployments, sub-month build-ship cycles.',
    'Range — web, mobile, reinforcement learning, computer vision, RAG, agents, forensics.',
    'From-scratch literacy — Transformer impl + CNN from scratch, not just an API-glue dev.',
  ],
};

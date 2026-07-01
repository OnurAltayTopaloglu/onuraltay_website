// Centralized site content. Edit values here to update the website.

export const profile = {
  name: "Onur Altay Topaloğlu",
  shortName: "Onur Altay",
  title: "Machine Learning Engineer & AI Researcher",
  tagline:
    "Computer Engineering graduate from METU building trustworthy, multimodal AI systems — from medical vision-language models to large-scale computer vision research.",
  location: "Istanbul, Türkiye",
  email: "hello@onuraltay.dev",
  phone: "+90 532 612 3601",
  cv: "/Resume.pdf",
  socials: {
    github: "https://github.com/OnurAltayTopaloglu",
    linkedin: "https://www.linkedin.com/in/onur-altay-topaloglu/",
    scholar:
      "https://scholar.google.com/citations?hl=en&view_op=list_works&user=tWDgSbcAAAAJ",
  },
};

export const about = {
  // Industry-leaning summary, with research as a credibility anchor.
  paragraphs: [
    "I'm a Computer Engineering graduate from Middle East Technical University (METU) with a CGPA of 3.65/4.00, focused on building machine learning systems that are reliable, fair, and ready for the real world.",
    "My work spans applied research and shipped products: I design evaluation frameworks and retrieval systems, train and benchmark deep learning models, and turn research ideas into working pipelines — including ÜSTAT, an AI-native workspace I'm building for lawyers. I care most about the parts of ML that decide whether a system can actually be trusted in production — robustness, fairness, and rigorous evaluation.",
    "Currently I'm a co-first author on a CVPR 2026 workshop paper and an undergraduate researcher in a Harvard–MIT × METU collaboration on trustworthy multimodal AI for healthcare.",
  ],
};

export type Publication = {
  title: string;
  // Badges shown above the title, in order. Keep them consistent across
  // entries: a venue/status first, then the institution ("org").
  badges: { label: string; variant: "venue" | "org" | "role" | "status" }[];
  description: string;
  links: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    title:
      "LuMon: A Comprehensive Benchmark and Development Suite with Novel Datasets for Lunar Monocular Depth Estimation",
    badges: [
      { label: "CVPR 2026 — AI4Space Workshop", variant: "venue" },
      { label: "ROMER, METU", variant: "org" },
      { label: "Co-First Author", variant: "role" },
    ],
    description:
      "A benchmark and development suite for lunar monocular depth estimation. Built an evaluation suite with affine alignment and dynamic masking for robust metric analysis, used Spearman rank correlations to quantify the impact of training scale and metric supervision on zero-shot domain adaptation, and engineered a ground-truth depth generation pipeline for real Chang'e-3 lunar imagery.",
    links: [
      {
        label: "Paper",
        url: "https://openaccess.thecvf.com/content/CVPR2026W/AI4Space/papers/Sekmen_LuMon_A_Comprehensive_Benchmark_and_Development_Suite_with_Novel_Datasets_CVPRW_2026_paper.pdf",
      },
      { label: "Project Page", url: "https://metulumon.github.io" },
      { label: "GitHub", url: "https://github.com/MetuLuMon/LuMon-depth" },
      { label: "Hugging Face", url: "https://huggingface.co/LuMonDepth" },
    ],
  },
  {
    title:
      "Fairness Evaluation of Medical Vision-Language Models against Demographic Biases",
    badges: [
      { label: "In final revisions for submission", variant: "status" },
      { label: "Harvard–MIT × METU", variant: "org" },
      { label: "Co-Author", variant: "role" },
    ],
    description:
      "Trustworthy multimodal AI for healthcare, with a focus on evaluating the fairness of medical vision-language models against demographic biases, and developing evaluation frameworks to analyze bias within medical imaging contexts.",
    links: [],
  },
];

export type Experience = {
  org: string;
  role: string;
  location: string;
  period: string;
  advisors?: { name: string; url?: string }[];
  logo?: string; // single raster logo shown on a white tile (e.g. "/logos/romer.jpeg")
  orgUrl?: string; // org website, opened when the logo is clicked
  // Multiple transparent (SVG) logos. `src` is the default/light-mode image;
  // `srcDark` is an optional variant shown in dark mode.
  logos?: { src: string; srcDark?: string; alt: string; url?: string }[];
  points: string[];
};

export const experiences: Experience[] = [
  {
    org: "Harvard–MIT & METU",
    role: "Undergraduate Researcher",
    location: "Remote",
    period: "Sep 2025 – Present",
    advisors: [
      {
        name: "Dr. Jiaee Cheong",
        url: "https://www.linkedin.com/in/jiaee-cheong-289830300/",
      },
      { name: "Prof. Dr. Sinan Kalkan", url: "https://avesis.metu.edu.tr/skalkan" },
    ],
    logos: [
      { src: "/logos/metu_logo.svg", alt: "METU", url: "https://www.metu.edu.tr/" },
      {
        src: "/logos/harvard_logo.svg",
        srcDark: "/logos/harvard_logo_dark.svg",
        alt: "Harvard University",
        url: "https://www.harvard.edu/",
      },
      { src: "/logos/mit_logo.svg", alt: "MIT", url: "https://www.mit.edu/" },
    ],
    points: [
      "Co-authoring a paper (in final revisions) on the fairness of medical vision-language models against demographic biases.",
      "Building evaluation frameworks to surface bias in medical imaging contexts.",
    ],
  },
  {
    org: "KUIS AI Center, Koç University",
    role: "Computer Vision Intern",
    location: "Istanbul, Türkiye",
    period: "Jul 2025 – Aug 2025",
    orgUrl: "https://ai.ku.edu.tr/",
    logos: [
      {
        src: "/logos/kuis_logo.svg",
        srcDark: "/logos/kuis_logo_dark.svg",
        alt: "KUIS AI Center",
        url: "https://ai.ku.edu.tr/",
      },
    ],
    advisors: [
      { name: "Asst. Prof. Fatma Güney", url: "https://mysite.ku.edu.tr/fguney/" },
    ],
    points: [
      "Studied flow matching and diffusion models for point tracking on objects with ambiguous motion.",
    ],
  },
  {
    org: "ROMER, METU",
    role: "Undergraduate Researcher",
    location: "Ankara, Türkiye",
    period: "Nov 2024 – Mar 2026",
    orgUrl: "https://romer.metu.edu.tr/",
    logos: [
      {
        src: "/logos/romer_logo.svg",
        srcDark: "/logos/romer_logo_dark.svg",
        alt: "ROMER, METU",
        url: "https://romer.metu.edu.tr/",
      },
    ],
    advisors: [
      {
        name: "Assoc. Prof. Gökberk Cinbiş",
        url: "https://user.ceng.metu.edu.tr/~gcinbis/",
      },
      { name: "Prof. Dr. Sinan Kalkan", url: "https://avesis.metu.edu.tr/skalkan" },
    ],
    points: [
      "Co-first author of LuMon (CVPR 2026 AI4Space).",
      "Built the evaluation suite — affine alignment, dynamic masking, and Spearman-based analysis of how training scale drives zero-shot transfer.",
      "Engineered a ground-truth depth pipeline for real Chang'e-3 lunar imagery and released the datasets on Hugging Face.",
    ],
  },
  {
    org: "Computer Engineering Department, METU",
    role: "Undergraduate Teaching Assistant",
    location: "Ankara, Türkiye",
    period: "Sep 2024 – Jun 2025",
    orgUrl: "https://ceng.metu.edu.tr/",
    logos: [
      {
        src: "/logos/metu_logo.svg",
        alt: "METU",
        url: "https://ceng.metu.edu.tr/",
      },
    ],
    points: [
      "Led labs for CENG213 Data Structures (C++) and CENG232 Logic Design.",
    ],
  },
  {
    org: "KKB — Kredi Kayıt Bürosu",
    role: "Artificial Intelligence Intern",
    location: "Istanbul, Türkiye",
    period: "Jun 2024 – Jul 2024",
    orgUrl: "https://www.kkb.com.tr/en",
    logos: [
      {
        src: "/logos/kkb-logo.svg",
        srcDark: "/logos/kkb-logo-dark.svg",
        alt: "KKB — Kredi Kayıt Bürosu",
        url: "https://www.kkb.com.tr/en",
      },
    ],
    points: [
      "Built a hybrid RAG system (PyTorch) fusing vector and keyword search to improve relevance ranking over a keyword baseline.",
      "Generated privacy-safe synthetic datasets with SDV for financial applications.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
  status?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "ÜSTAT",
    subtitle: "AI-native workspace for lawyers",
    description:
      "From filing a case to the appeal deadline, ÜSTAT brings a lawyer's entire day into a single workspace — cases, clients, documents, and deadline tracking, all in one source of truth, paired with a document-aware AI assistant that understands the files it works with.",
    tags: ["Legal Tech", "AI Assistant", "RAG", "Document Intelligence"],
    links: [],
    status: "In development · Private",
    featured: true,
  },
  {
    title: "Capture & Cook",
    subtitle: "Fridge photo → recipe suggestions · Senior Design Project",
    description:
      "An app that turns a photo of your fridge into recipe suggestions. Built a search engine ranking recipes by fusing TF-IDF with dense semantic vector search using FAISS, optimized rankings via a custom cross-scoring algorithm trained on a human-preference dataset, and integrated the Alibaba Qwen VLM for automated ingredient detection.",
    tags: ["FAISS", "TF-IDF", "Semantic Search", "VLM", "Python"],
    links: [
      { label: "Website", url: "https://senior.ceng.metu.edu.tr/2026/CandC/" },
    ],
    featured: true,
  },
  // TODO: Add your second project here, following the same shape.
  // {
  //   title: "Project Name",
  //   subtitle: "Short one-line description",
  //   description: "What it does and what you built.",
  //   tags: ["Tag1", "Tag2"],
  //   links: [{ label: "GitHub", url: "https://..." }],
  // },
];

// Education as a vertical timeline (top → bottom): schools use their logo as the
// marker, exams are dot milestones. Kadıköy sits between its two exam bookends.
export type EduNode =
  | {
      type: "school";
      school: string;
      degree: string;
      note?: string;
      period: string;
      logo: string;
      url?: string;
    }
  | {
      type: "exam";
      year: string;
      name: string;
      percent: string;
      suffix?: string;
    };

export const educationTimeline: EduNode[] = [
  {
    type: "school",
    school: "Middle East Technical University (METU)",
    degree: "B.S. in Computer Engineering (English)",
    note: "CGPA: 3.61 / 4.00",
    period: "2021 – 2026",
    logo: "/logos/metu_logo.svg",
    url: "https://en.wikipedia.org/wiki/Middle_East_Technical_University",
  },
  {
    type: "exam",
    year: "2021",
    name: "University entrance exam",
    percent: "0.02%",
    suffix: "(544th of 2.4M)",
  },
  {
    type: "school",
    school: "Kadıköy Anatolian High School (Kadıköy Maarif College)",
    degree: "High School Diploma (STEM)",
    period: "2016 – 2021",
    logo: "/logos/kadikoy_logo.jpeg",
    url: "https://en.wikipedia.org/wiki/Kad%C4%B1k%C3%B6y_Anatolian_High_School",
  },
  {
    type: "exam",
    year: "2016",
    name: "High-school entrance exam",
    percent: "0.7%",
    suffix: "nationwide",
  },
];

export const spokenLanguages = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "TOEFL 94/120" },
  { name: "German", level: "B2 (OnSET, Oct 2025)" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

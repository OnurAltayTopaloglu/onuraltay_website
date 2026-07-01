// Centralized site content. `*Tr` fields hold the Turkish variant; language-
// invariant data (URLs, logos, tags, dates, proper names) is shared.

export const profile = {
  name: "Onur Altay Topaloğlu",
  shortName: "Onur Altay",
  title: "Machine Learning Engineer & AI Researcher",
  titleTr: "Makine Öğrenmesi Mühendisi & YZ Araştırmacısı",
  tagline:
    "Computer Engineering graduate from METU building trustworthy, multimodal AI systems — from medical vision-language models to large-scale computer vision research.",
  taglineTr:
    "ODTÜ Bilgisayar Mühendisliği mezunu; güvenilir, çok kipli yapay zekâ sistemleri geliştiriyorum — tıbbi görü-dil modellerinden büyük ölçekli bilgisayarlı görü araştırmalarına.",
  location: "Istanbul, Türkiye",
  locationTr: "İstanbul, Türkiye",
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
  paragraphs: [
    "I'm a Computer Engineering graduate from Middle East Technical University (METU) with a CGPA of 3.61/4.00, focused on building machine learning systems that are reliable, fair, and ready for the real world.",
    "My work spans applied research and shipped products: I design evaluation frameworks and retrieval systems, train and benchmark deep learning models, and turn research ideas into working pipelines — including ÜSTAT, an AI-native workspace I'm building for lawyers. I care most about the parts of ML that decide whether a system can actually be trusted in production — robustness, fairness, and rigorous evaluation.",
    "Currently I'm a co-first author on a CVPR 2026 workshop paper and an undergraduate researcher in a Harvard–MIT × METU collaboration on trustworthy multimodal AI for healthcare.",
  ],
  paragraphsTr: [
    "Orta Doğu Teknik Üniversitesi (ODTÜ) Bilgisayar Mühendisliği mezunuyum (GNO 3.61/4.00); güvenilir, adil ve gerçek dünyaya hazır makine öğrenmesi sistemleri kurmaya odaklanıyorum.",
    "Çalışmalarım hem uygulamalı araştırmayı hem de yayımlanan ürünleri kapsıyor: değerlendirme çerçeveleri ve erişim (retrieval) sistemleri tasarlıyor, derin öğrenme modellerini eğitip kıyaslıyor ve araştırma fikirlerini çalışan sistemlere dönüştürüyorum — avukatlar için geliştirdiğim yapay zekâ tabanlı çalışma alanı ÜSTAT da bunlardan biri. Bir sistemin üretimde gerçekten güvenilir olup olmadığını belirleyen kısımlar en çok ilgimi çekenler: dayanıklılık, adalet ve titiz değerlendirme.",
    "Şu anda bir CVPR 2026 çalıştay makalesinde eş-ilk yazarım ve sağlıkta güvenilir çok kipli yapay zekâ üzerine bir Harvard–MIT × ODTÜ iş birliğinde lisans araştırmacısıyım.",
  ],
};

export type Badge = {
  label: string;
  labelTr?: string;
  variant: "venue" | "org" | "role" | "status";
};

export type Publication = {
  title: string;
  badges: Badge[];
  description: string;
  descriptionTr?: string;
  links: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    title:
      "LuMon: A Comprehensive Benchmark and Development Suite with Novel Datasets for Lunar Monocular Depth Estimation",
    badges: [
      { label: "CVPR 2026 — AI4Space Workshop", variant: "venue" },
      { label: "ROMER, METU", variant: "org" },
      { label: "Co-First Author", labelTr: "Eş-İlk Yazar", variant: "role" },
    ],
    description:
      "A benchmark and development suite for lunar monocular depth estimation. Built an evaluation suite with affine alignment and dynamic masking for robust metric analysis, used Spearman rank correlations to quantify the impact of training scale and metric supervision on zero-shot domain adaptation, and engineered a ground-truth depth generation pipeline for real Chang'e-3 lunar imagery.",
    descriptionTr:
      "Ay tek-kameralı derinlik kestirimi için bir kıyaslama ve geliştirme paketi. Sağlam metrik analizi için afin hizalama ve dinamik maskeleme içeren bir değerlendirme paketi geliştirdim; eğitim ölçeği ve metrik denetiminin sıfır-atış (zero-shot) alan uyarlamasına etkisini ölçmek için Spearman sıra korelasyonları kullandım ve gerçek Chang'e-3 ay görüntüleri için referans derinlik üretim hattı kurdum.",
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
      {
        label: "In final revisions for submission",
        labelTr: "Gönderim için son revizyonda",
        variant: "status",
      },
      { label: "Harvard–MIT × METU", variant: "org" },
      { label: "Co-Author", labelTr: "Ortak Yazar", variant: "role" },
    ],
    description:
      "Trustworthy multimodal AI for healthcare, with a focus on evaluating the fairness of medical vision-language models against demographic biases, and developing evaluation frameworks to analyze bias within medical imaging contexts.",
    descriptionTr:
      "Sağlıkta güvenilir çok kipli yapay zekâ; tıbbi görü-dil modellerinin demografik önyargılara karşı adaletini değerlendirmeye ve tıbbi görüntüleme bağlamlarında önyargıyı analiz eden değerlendirme çerçeveleri geliştirmeye odaklanıyor.",
    links: [],
  },
];

export type Experience = {
  org: string;
  role: string;
  roleTr?: string;
  location: string;
  locationTr?: string;
  period: string;
  advisors?: { name: string; url?: string }[];
  logo?: string;
  orgUrl?: string;
  logos?: { src: string; srcDark?: string; alt: string; url?: string }[];
  points: string[];
  pointsTr?: string[];
};

export const experiences: Experience[] = [
  {
    org: "Harvard–MIT & METU",
    role: "Undergraduate Researcher",
    roleTr: "Lisans Araştırmacısı",
    location: "Remote",
    locationTr: "Uzaktan",
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
    pointsTr: [
      "Tıbbi görü-dil modellerinin demografik önyargılara karşı adaleti üzerine bir makalede (son revizyonda) eş-yazarlık yapıyorum.",
      "Tıbbi görüntüleme bağlamlarında önyargıyı ortaya çıkaran değerlendirme çerçeveleri geliştiriyorum.",
    ],
  },
  {
    org: "KUIS AI Center, Koç University",
    role: "Computer Vision Intern",
    roleTr: "Bilgisayarlı Görü Stajyeri",
    location: "Istanbul, Türkiye",
    locationTr: "İstanbul, Türkiye",
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
    pointsTr: [
      "Belirsiz hareketli nesnelerde nokta takibi için akış eşleştirme (flow matching) ve difüzyon modellerini inceledim.",
    ],
  },
  {
    org: "ROMER, METU",
    role: "Undergraduate Researcher",
    roleTr: "Lisans Araştırmacısı",
    location: "Ankara, Türkiye",
    locationTr: "Ankara, Türkiye",
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
    pointsTr: [
      "LuMon'un eş-ilk yazarı (CVPR 2026 AI4Space).",
      "Değerlendirme paketini geliştirdim — afin hizalama, dinamik maskeleme ve eğitim ölçeğinin sıfır-atış (zero-shot) aktarımı nasıl etkilediğine dair Spearman tabanlı analiz.",
      "Gerçek Chang'e-3 ay görüntüleri için referans derinlik üretim hattı kurdum ve veri kümelerini Hugging Face'te yayımladım.",
    ],
  },
  {
    org: "Computer Engineering Department, METU",
    role: "Undergraduate Teaching Assistant",
    roleTr: "Lisans Öğrenci Asistanı",
    location: "Ankara, Türkiye",
    locationTr: "Ankara, Türkiye",
    period: "Sep 2024 – Jun 2025",
    orgUrl: "https://ceng.metu.edu.tr/",
    logos: [
      { src: "/logos/metu_logo.svg", alt: "METU", url: "https://ceng.metu.edu.tr/" },
    ],
    points: [
      "Led labs for CENG213 Data Structures (C++) and CENG232 Logic Design.",
    ],
    pointsTr: [
      "CENG213 Veri Yapıları (C++) ve CENG232 Sayısal Tasarım laboratuvarlarını yürüttüm.",
    ],
  },
  {
    org: "KKB — Kredi Kayıt Bürosu",
    role: "Artificial Intelligence Intern",
    roleTr: "Yapay Zekâ Stajyeri",
    location: "Istanbul, Türkiye",
    locationTr: "İstanbul, Türkiye",
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
    pointsTr: [
      "Anahtar kelime temeline göre ilgi sıralamasını iyileştirmek için vektör ve anahtar kelime aramasını birleştiren hibrit bir RAG sistemi (PyTorch) geliştirdim.",
      "Finansal uygulamalar için SDV ile gizlilik-korumalı sentetik veri kümeleri ürettim.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  subtitleTr?: string;
  period: string;
  description: string;
  descriptionTr?: string;
  tags: string[];
  links: { label: string; url: string }[];
  video?: string;
  status?: string;
  statusTr?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "ÜSTAT",
    subtitle: "AI-native workspace for lawyers",
    subtitleTr: "Avukatlar için yapay zekâ tabanlı çalışma alanı",
    period: "Feb 2026 – Present",
    description:
      "From filing a case to the appeal deadline, ÜSTAT brings a lawyer's entire day into a single workspace — cases, clients, documents, and deadline tracking, all in one source of truth, paired with a document-aware AI assistant that understands the files it works with.",
    descriptionTr:
      "Bir davanın açılışından temyiz süresine kadar, ÜSTAT bir avukatın tüm gününü tek bir çalışma alanında toplar — davalar, müvekkiller, belgeler ve süre takibi, hepsi tek doğru kaynakta; üzerinde çalıştığı dosyaları anlayan, belge farkındalıklı bir yapay zekâ asistanıyla birlikte.",
    tags: ["Legal Tech", "AI Assistant", "RAG", "Document Intelligence"],
    links: [],
    status: "In development · Private",
    statusTr: "Geliştiriliyor · Özel",
    featured: true,
  },
  {
    title: "Capture & Cook",
    subtitle: "Fridge photo → recipe suggestions · Senior Design Project",
    subtitleTr: "Buzdolabı fotoğrafı → tarif önerileri · Bitirme Projesi",
    period: "Sep 2025 – Jun 2026",
    description:
      "An app that turns a photo of your fridge into recipe suggestions — it detects the ingredients you have from a single photo, then finds and ranks the recipes you can cook with them.",
    descriptionTr:
      "Buzdolabınızın fotoğrafını tarif önerilerine dönüştüren bir uygulama — tek bir fotoğraftan sahip olduğunuz malzemeleri algılar, ardından onlarla pişirebileceğiniz tarifleri bulup sıralar.",
    tags: ["FAISS", "TF-IDF", "Semantic Search", "VLM", "Python"],
    links: [
      { label: "Website", url: "https://senior.ceng.metu.edu.tr/2026/CandC/" },
    ],
    video: "_GyfF4FKdns",
    featured: true,
  },
];

export const athletics = {
  intro:
    "Away from the screen, I train seriously in calisthenics and strength sports — six years in the gym, and a competitive streak that follows me onto campus.",
  introTr:
    "Ekrandan uzaktayken kalistenik ve kuvvet sporlarıyla ciddi şekilde ilgileniyorum — altı yıldır spor salonundayım ve bu rekabetçi yön kampüse de taşınıyor.",
  achievements: [
    {
      place: "2× Runner-up",
      placeTr: "2× İkincilik",
      title: "En Fit ODTÜlü / The Fittest METU Student (2024 & 2026)",
      detail:
        "METU's campus-wide fitness competition — calisthenics (pull-ups, push-ups, crunches) combined with track events (100m / 400m / 1500m).",
      detailTr:
        "ODTÜ genelindeki fitness yarışması — kalistenik (barfiks, şınav, mekik) ve atletizm etkinliklerinin (100m / 400m / 1500m) birleşimi.",
      url: "https://genclikoyunlari.metu.edu.tr/tr/enfitodtulu",
    },
    {
      place: "4th nationally",
      placeTr: "Türkiye 4.'sü",
      title: "Inter-University Calisthenics Competition (2026)",
      detail: "Calisthenics competition among universities across Türkiye.",
      detailTr: "Türkiye genelindeki üniversiteler arası kalistenik yarışması.",
      url: "https://genclikoyunlari.metu.edu.tr/tr/kalisteniks",
    },
  ],
  disciplines: ["Calisthenics", "Running", "Boxing", "Powerbuilding"],
  disciplinesTr: ["Kalistenik", "Koşu", "Boks", "Powerbuilding"],
  muscleUpMax: 15,
  sprintPb: 12.73,
};

export type EduNode =
  | {
      type: "school";
      school: string;
      schoolTr?: string;
      degree: string;
      degreeTr?: string;
      note?: string;
      noteTr?: string;
      period: string;
      logo: string;
      url?: string;
    }
  | {
      type: "exam";
      year: string;
      name: string;
      nameTr?: string;
      percent: string;
      suffix?: string;
      suffixTr?: string;
    };

export const educationTimeline: EduNode[] = [
  {
    type: "school",
    school: "Middle East Technical University (METU)",
    schoolTr: "Orta Doğu Teknik Üniversitesi (ODTÜ)",
    degree: "B.S. in Computer Engineering (English)",
    degreeTr: "Bilgisayar Mühendisliği, Lisans (İngilizce)",
    note: "CGPA: 3.61 / 4.00",
    noteTr: "GNO: 3.61 / 4.00",
    period: "2021 – 2026",
    logo: "/logos/metu_logo.svg",
    url: "https://en.wikipedia.org/wiki/Middle_East_Technical_University",
  },
  {
    type: "exam",
    year: "2021",
    name: "University entrance exam",
    nameTr: "Üniversite sınavı",
    percent: "0.02%",
    suffix: "(544th of 2.4M)",
    suffixTr: "(2.4M'de 544.)",
  },
  {
    type: "school",
    school: "Kadıköy Anatolian High School (Kadıköy Maarif College)",
    schoolTr: "Kadıköy Anadolu Lisesi (Kadıköy Maarif Koleji)",
    degree: "High School Diploma (STEM)",
    degreeTr: "Lise Diploması (Sayısal)",
    period: "2016 – 2021",
    logo: "/logos/kadikoy_logo.jpeg",
    url: "https://en.wikipedia.org/wiki/Kad%C4%B1k%C3%B6y_Anatolian_High_School",
  },
  {
    type: "exam",
    year: "2016",
    name: "High-school entrance exam",
    nameTr: "Lise giriş sınavı",
    percent: "0.7%",
    suffix: "nationwide",
    suffixTr: "Türkiye geneli",
  },
];

export const navLinks = [
  { key: "about", href: "#about" },
  { key: "research", href: "#research" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "beyond", href: "#beyond" },
  { key: "contact", href: "#contact" },
] as const;

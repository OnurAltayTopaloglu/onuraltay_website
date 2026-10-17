// Centralized site content. `*Tr` fields hold the Turkish variant; language-
// invariant data (URLs, logos, tags, dates, proper names) is shared.

export const profile = {
  name: "Onur Altay Topaloğlu",
  shortName: "Onur Altay",
  title: "Machine Learning & AI Engineer",
  titleTr: "Makine Öğrenmesi & Yapay Zekâ Mühendisi",
  titleDe: "Machine-Learning- & KI-Engineer",
  tagline:
    "M.Sc. Informatics student at TUM working across computer vision research and applied AI engineering — a CVPR 2026 workshop paper on lunar depth estimation, fairness evaluation of vision-language models, and LLM-powered products shipped end to end.",
  taglineTr:
    "TUM'da Informatics yüksek lisans öğrencisiyim; bilgisayarlı görü araştırması ile uygulamalı yapay zekâ mühendisliği arasında çalışıyorum — ay yüzeyi derinlik kestirimi üzerine bir CVPR 2026 workshop makalesi, görü-dil modellerinin adalet değerlendirmesi ve uçtan uca geliştirdiğim LLM tabanlı ürünler.",
  taglineDe:
    "M.Sc.-Informatik-Student an der TUM zwischen Computer-Vision-Forschung und angewandtem KI-Engineering — ein CVPR-2026-Workshop-Paper zur Tiefenschätzung auf dem Mond, Fairness-Evaluation von Vision-Language-Modellen und LLM-basierte Produkte, die ich Ende-zu-Ende umgesetzt habe.",
  location: "Munich, Germany",
  locationTr: "Münih, Almanya",
  locationDe: "München, Deutschland",
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
    "I'm an M.Sc. Informatics student at TUM and a Computer Engineering graduate of Middle East Technical University (METU, CGPA 3.61/4.00), with two years of research across three labs (depth estimation, point tracking and optical flow, fairness evaluation of vision-language models on GPU clusters) and hands-on experience building LLM-powered products end to end.",
    "My work spans applied research and shipped products: I design evaluation frameworks and retrieval systems, train and benchmark deep learning models, and turn research ideas into working pipelines — including LawPal, an AI-native workspace I'm building for lawyers. I care most about the parts of ML that decide whether a system can actually be trusted in production — robustness, fairness, and rigorous evaluation.",
    "I'm a co-first author of LuMon at the CVPR 2026 AI4Space workshop, and I ran the fairness study of vision-language models in a Harvard–MIT × METU collaboration on trustworthy multimodal AI.",
  ],
  paragraphsTr: [
    "TUM'da Informatics yüksek lisans öğrencisiyim ve Orta Doğu Teknik Üniversitesi (ODTÜ) Bilgisayar Mühendisliği mezunuyum (GNO 3.61/4.00); üç laboratuvarda iki yıllık araştırma deneyimim (derinlik kestirimi, nokta takibi ve optik akış, GPU kümelerinde görü-dil modellerinin adalet değerlendirmesi) ve LLM tabanlı ürünleri uçtan uca geliştirme tecrübem var.",
    "Çalışmalarım hem uygulamalı araştırmayı hem de yayımlanan ürünleri kapsıyor: değerlendirme çerçeveleri ve erişim (retrieval) sistemleri tasarlıyor, derin öğrenme modellerini eğitip kıyaslıyor ve araştırma fikirlerini çalışan sistemlere dönüştürüyorum — avukatlar için geliştirdiğim yapay zekâ tabanlı çalışma alanı LawPal da bunlardan biri. Bir sistemin üretimde gerçekten güvenilir olup olmadığını belirleyen kısımlar en çok ilgimi çekenler: dayanıklılık, adalet ve titiz değerlendirme.",
    "CVPR 2026 AI4Space çalıştayında LuMon makalesinin eş-ilk yazarıyım; ayrıca güvenilir çok kipli yapay zekâ üzerine bir Harvard–MIT × ODTÜ iş birliğinde görü-dil modellerinin adalet çalışmasını yürüttüm.",
  ],
  paragraphsDe: [
    "Ich bin M.Sc.-Informatik-Student an der TUM und Absolvent der Technischen Informatik an der Middle East Technical University (METU, Notendurchschnitt 3,61/4,00) mit zwei Jahren Forschung in drei Laboren (Tiefenschätzung, Punkt-Tracking und optischer Fluss, Fairness-Evaluation von Vision-Language-Modellen auf GPU-Clustern) und praktischer Erfahrung im Ende-zu-Ende-Bau LLM-basierter Produkte.",
    "Meine Arbeit umfasst sowohl angewandte Forschung als auch ausgelieferte Produkte: Ich entwerfe Evaluations-Frameworks und Retrieval-Systeme, trainiere und benchmarke Deep-Learning-Modelle und verwandle Forschungsideen in funktionierende Pipelines — darunter LawPal, ein KI-basierter Arbeitsbereich, den ich für Anwälte entwickle. Am meisten interessieren mich die Teile des ML, die darüber entscheiden, ob einem System in der Produktion tatsächlich vertraut werden kann — Robustheit, Fairness und rigorose Evaluation.",
    "Ich bin Co-Erstautor von LuMon beim CVPR-2026-AI4Space-Workshop und habe in einer Harvard–MIT × METU-Kooperation zu vertrauenswürdiger multimodaler KI die Fairness-Studie zu Vision-Language-Modellen durchgeführt.",
  ],
};

export type Badge = {
  label: string;
  labelTr?: string;
  labelDe?: string;
  variant: "venue" | "org" | "role" | "status";
};

export type Publication = {
  title: string;
  badges: Badge[];
  description: string;
  descriptionTr?: string;
  descriptionDe?: string;
  links: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    title:
      "LuMon: A Comprehensive Benchmark and Development Suite with Novel Datasets for Lunar Monocular Depth Estimation",
    badges: [
      { label: "CVPR 2026 — AI4Space Workshop", variant: "venue" },
      { label: "ROMER, METU", variant: "org" },
      {
        label: "Co-First Author",
        labelTr: "Eş-İlk Yazar",
        labelDe: "Co-Erstautor",
        variant: "role",
      },
    ],
    description:
      "A benchmark and development suite for lunar monocular depth estimation. Built an evaluation suite with affine alignment and dynamic masking for robust metric analysis, used Spearman rank correlations to quantify the impact of training scale and metric supervision on zero-shot domain adaptation, and engineered a ground-truth depth generation pipeline for real Chang'e-3 lunar imagery.",
    descriptionTr:
      "Ay tek-kameralı derinlik kestirimi için bir kıyaslama ve geliştirme paketi. Sağlam metrik analizi için afin hizalama ve dinamik maskeleme içeren bir değerlendirme paketi geliştirdim; eğitim ölçeği ve metrik denetiminin sıfır-atış (zero-shot) alan uyarlamasına etkisini ölçmek için Spearman sıra korelasyonları kullandım ve gerçek Chang'e-3 ay görüntüleri için referans derinlik üretim hattı kurdum.",
    descriptionDe:
      "Ein Benchmark und Entwicklungspaket für die monokulare Tiefenschätzung auf dem Mond. Ich habe eine Evaluations-Suite mit affiner Ausrichtung und dynamischer Maskierung für robuste Metrikanalysen entwickelt, Spearman-Rangkorrelationen genutzt, um den Einfluss von Trainingsumfang und Metrik-Supervision auf die Zero-Shot-Domänenanpassung zu quantifizieren, und eine Ground-Truth-Tiefen-Pipeline für echte Chang'e-3-Mondaufnahmen erstellt.",
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
        labelDe: "In finaler Überarbeitung zur Einreichung",
        variant: "status",
      },
      { label: "Harvard–MIT × METU", variant: "org" },
      {
        label: "Co-Author",
        labelTr: "Ortak Yazar",
        labelDe: "Co-Autor",
        variant: "role",
      },
    ],
    description:
      "Trustworthy multimodal AI for healthcare, with a focus on evaluating the fairness of medical vision-language models against demographic biases, and developing evaluation frameworks to analyze bias within medical imaging contexts.",
    descriptionTr:
      "Sağlıkta güvenilir çok kipli yapay zekâ; tıbbi görü-dil modellerinin demografik önyargılara karşı adaletini değerlendirmeye ve tıbbi görüntüleme bağlamlarında önyargıyı analiz eden değerlendirme çerçeveleri geliştirmeye odaklanıyor.",
    descriptionDe:
      "Vertrauenswürdige multimodale KI im Gesundheitswesen, mit Fokus auf die Bewertung der Fairness medizinischer Vision-Language-Modelle gegenüber demografischen Verzerrungen und die Entwicklung von Evaluations-Frameworks zur Analyse von Verzerrungen in medizinischen Bildgebungskontexten.",
    links: [],
  },
];

export type Experience = {
  org: string;
  role: string;
  roleTr?: string;
  roleDe?: string;
  location: string;
  locationTr?: string;
  locationDe?: string;
  period: string;
  advisors?: { name: string; url?: string }[];
  logo?: string;
  orgUrl?: string;
  logos?: { src: string; srcDark?: string; alt: string; url?: string }[];
  points: string[];
  pointsTr?: string[];
  pointsDe?: string[];
};

export const experiences: Experience[] = [
  {
    org: "Harvard–MIT & METU",
    role: "Undergraduate Researcher",
    roleTr: "Lisans Araştırmacısı",
    roleDe: "Studentischer Forscher",
    location: "Remote",
    locationTr: "Uzaktan",
    locationDe: "Remote",
    period: "Sep 2025 – Jul 2026",
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
    pointsDe: [
      "Co-Autor eines Papers (in finaler Überarbeitung) zur Fairness medizinischer Vision-Language-Modelle gegenüber demografischen Verzerrungen.",
      "Entwicklung von Evaluations-Frameworks, um Verzerrungen in medizinischen Bildgebungskontexten aufzudecken.",
    ],
  },
  {
    org: "KUIS AI Center, Koç University",
    role: "Computer Vision Intern",
    roleTr: "Bilgisayarlı Görü Stajyeri",
    roleDe: "Praktikant Computer Vision",
    location: "Istanbul, Türkiye",
    locationTr: "İstanbul, Türkiye",
    locationDe: "Istanbul, Türkei",
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
    pointsDe: [
      "Untersuchung von Flow Matching und Diffusionsmodellen für das Punkt-Tracking bei Objekten mit mehrdeutiger Bewegung.",
    ],
  },
  {
    org: "ROMER, METU",
    role: "Undergraduate Researcher",
    roleTr: "Lisans Araştırmacısı",
    roleDe: "Studentischer Forscher",
    location: "Ankara, Türkiye",
    locationTr: "Ankara, Türkiye",
    locationDe: "Ankara, Türkei",
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
    pointsDe: [
      "Co-Erstautor von LuMon (CVPR 2026 AI4Space).",
      "Aufbau der Evaluations-Suite — affine Ausrichtung, dynamische Maskierung und Spearman-basierte Analyse, wie der Trainingsumfang den Zero-Shot-Transfer beeinflusst.",
      "Entwicklung einer Ground-Truth-Tiefen-Pipeline für echte Chang'e-3-Mondaufnahmen und Veröffentlichung der Datensätze auf Hugging Face.",
    ],
  },
  {
    org: "Computer Engineering Department, METU",
    role: "Undergraduate Teaching Assistant",
    roleTr: "Lisans Öğrenci Asistanı",
    roleDe: "Studentische Hilfskraft (Lehre)",
    location: "Ankara, Türkiye",
    locationTr: "Ankara, Türkiye",
    locationDe: "Ankara, Türkei",
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
    pointsDe: [
      "Leitung der Übungen für CENG213 Datenstrukturen (C++) und CENG232 Logikdesign.",
    ],
  },
  {
    org: "KKB — Kredi Kayıt Bürosu",
    role: "Artificial Intelligence Intern",
    roleTr: "Yapay Zekâ Stajyeri",
    roleDe: "Praktikant Künstliche Intelligenz",
    location: "Istanbul, Türkiye",
    locationTr: "İstanbul, Türkiye",
    locationDe: "Istanbul, Türkei",
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
    pointsDe: [
      "Aufbau eines hybriden RAG-Systems (PyTorch), das Vektor- und Stichwortsuche kombiniert, um das Relevanz-Ranking gegenüber einer Stichwort-Baseline zu verbessern.",
      "Erzeugung datenschutzkonformer synthetischer Datensätze mit SDV für Finanzanwendungen.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  subtitleTr?: string;
  subtitleDe?: string;
  period: string;
  description: string;
  descriptionTr?: string;
  descriptionDe?: string;
  tags: string[];
  links: { label: string; url: string }[];
  video?: string;
  status?: string;
  statusTr?: string;
  statusDe?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "LawPal",
    subtitle: "AI-native workspace for lawyers",
    subtitleTr: "Avukatlar için yapay zekâ tabanlı çalışma alanı",
    subtitleDe: "KI-basierter Arbeitsbereich für Anwälte",
    period: "Feb 2026 – Aug 2026",
    description:
      "From filing a case to the appeal deadline, LawPal brings a lawyer's entire day into a single workspace — cases, clients, documents, and deadline tracking, all in one source of truth, paired with a document-aware AI assistant that understands the files it works with.",
    descriptionTr:
      "Bir davanın açılışından temyiz süresine kadar, LawPal bir avukatın tüm gününü tek bir çalışma alanında toplar — davalar, müvekkiller, belgeler ve süre takibi, hepsi tek doğru kaynakta; üzerinde çalıştığı dosyaları anlayan, belge farkındalıklı bir yapay zekâ asistanıyla birlikte.",
    descriptionDe:
      "Von der Klageeinreichung bis zur Berufungsfrist bündelt LawPal den gesamten Arbeitstag eines Anwalts in einem einzigen Arbeitsbereich — Fälle, Mandanten, Dokumente und Fristenkontrolle, alles an einer verlässlichen Quelle, gepaart mit einem dokumentenbewussten KI-Assistenten, der die bearbeiteten Dateien versteht.",
    tags: ["Legal Tech", "AI Assistant", "RAG", "Document Intelligence"],
    links: [],
    status: "In development · Private",
    statusTr: "Geliştiriliyor · Özel",
    statusDe: "In Entwicklung · Privat",
    featured: true,
  },
  {
    title: "Capture & Cook",
    subtitle: "Fridge photo → recipe suggestions · Senior Design Project",
    subtitleTr: "Buzdolabı fotoğrafı → tarif önerileri · Bitirme Projesi",
    subtitleDe: "Kühlschrank-Foto → Rezeptvorschläge · Abschlussprojekt",
    period: "Sep 2025 – Jun 2026",
    description:
      "An app that turns a photo of your fridge into recipe suggestions — it detects the ingredients you have from a single photo, then finds and ranks the recipes you can cook with them.",
    descriptionTr:
      "Buzdolabınızın fotoğrafını tarif önerilerine dönüştüren bir uygulama — tek bir fotoğraftan sahip olduğunuz malzemeleri algılar, ardından onlarla pişirebileceğiniz tarifleri bulup sıralar.",
    descriptionDe:
      "Eine App, die ein Foto deines Kühlschranks in Rezeptvorschläge verwandelt — sie erkennt die vorhandenen Zutaten aus einem einzigen Foto und findet und sortiert dann die Rezepte, die du damit kochen kannst.",
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
  introDe:
    "Abseits des Bildschirms trainiere ich ernsthaft Calisthenics und Kraftsport — sechs Jahre im Fitnessstudio, und dieser Wettkampfgeist begleitet mich auch auf den Campus.",
  achievements: [
    {
      place: "2× Runner-up",
      placeTr: "2× İkincilik",
      placeDe: "2× Vizemeister",
      title: "En Fit ODTÜlü / The Fittest METU Student (2024 & 2026)",
      titleTr: "En Fit ODTÜlü (2024 & 2026)",
      titleDe: "En Fit ODTÜlü (2024 & 2026)",
      detail:
        "METU's campus-wide fitness competition — calisthenics (pull-ups, push-ups, crunches) combined with track events (100m / 400m / 1500m).",
      detailTr:
        "ODTÜ genelindeki fitness yarışması — kalistenik (barfiks, şınav, mekik) ve atletizm etkinliklerinin (100m / 400m / 1500m) birleşimi.",
      detailDe:
        "Campusweiter Fitnesswettbewerb der METU — Calisthenics (Klimmzüge, Liegestütze, Crunches) kombiniert mit Leichtathletik (100m / 400m / 1500m).",
      url: "https://genclikoyunlari.metu.edu.tr/tr/enfitodtulu",
    },
    {
      place: "4th place",
      placeTr: "4.'lük",
      placeDe: "4. Platz",
      title: "Calisthenics Competition – METU Youth Games (2026)",
      titleTr: "Kalistenik Müsabakası – ODTÜ Gençlik Oyunları (2026)",
      titleDe: "Calisthenics-Wettbewerb – METU Youth Games (2026)",
      detail:
        "Inter-university calisthenics competition organized by METU Youth Games.",
      detailTr:
        "ODTÜ Gençlik Oyunları tarafından düzenlenen üniversiteler arası kalistenik yarışması.",
      detailDe:
        "Hochschulübergreifender Calisthenics-Wettbewerb, organisiert von den METU Youth Games.",
      url: "https://genclikoyunlari.metu.edu.tr/tr/kalisteniks",
    },
  ],
  disciplines: ["Calisthenics", "Running", "Boxing", "Powerbuilding"],
  disciplinesTr: ["Kalistenik", "Koşu", "Boks", "Powerbuilding"],
  disciplinesDe: ["Calisthenics", "Laufen", "Boxen", "Powerbuilding"],
  muscleUpMax: 15,
  sprintPb: 12.73,
};

export type EduNode =
  | {
      type: "school";
      school: string;
      schoolTr?: string;
      schoolDe?: string;
      degree: string;
      degreeTr?: string;
      degreeDe?: string;
      note?: string;
      noteTr?: string;
      noteDe?: string;
      period: string;
      logo: string;
      url?: string;
    }
  | {
      type: "exam";
      year: string;
      name: string;
      nameTr?: string;
      nameDe?: string;
      percent: string;
      suffix?: string;
      suffixTr?: string;
      suffixDe?: string;
    };

export const educationTimeline: EduNode[] = [
  {
    type: "school",
    school: "Technical University of Munich (TUM)",
    schoolTr: "Münih Teknik Üniversitesi (TUM)",
    schoolDe: "Technische Universität München (TUM)",
    degree: "M.Sc. in Informatics",
    degreeTr: "Bilişim (Informatics), Yüksek Lisans",
    degreeDe: "M.Sc. Informatik",
    period: "2026 – Present",
    logo: "/logos/tum_logo.svg",
    url: "https://www.tum.de/en/",
  },
  {
    type: "school",
    school: "Middle East Technical University (METU)",
    schoolTr: "Orta Doğu Teknik Üniversitesi (ODTÜ)",
    degree: "B.S. in Computer Engineering (English)",
    degreeTr: "Bilgisayar Mühendisliği, Lisans (İngilizce)",
    degreeDe: "B.Sc. Technische Informatik (Englisch)",
    note: "CGPA: 3.61 / 4.00",
    noteTr: "GNO: 3.61 / 4.00",
    noteDe: "Notendurchschnitt: 3,61 / 4,00",
    period: "2021 – 2026",
    logo: "/logos/metu_logo.svg",
    url: "https://en.wikipedia.org/wiki/Middle_East_Technical_University",
  },
  {
    type: "exam",
    year: "2021",
    name: "University entrance exam",
    nameTr: "Üniversite sınavı",
    nameDe: "Universitätsaufnahmeprüfung",
    percent: "0.02%",
    suffix: "(544th of 2.4M)",
    suffixTr: "(2.4M'de 544.)",
    suffixDe: "(544. von 2,4 Mio.)",
  },
  {
    type: "school",
    school: "Kadıköy Anatolian High School (Kadıköy Maarif College)",
    schoolTr: "Kadıköy Anadolu Lisesi (Kadıköy Maarif Koleji)",
    degree: "High School Diploma (STEM)",
    degreeTr: "Lise Diploması (Sayısal)",
    degreeDe: "Abitur (MINT)",
    period: "2016 – 2021",
    logo: "/logos/kadikoy_logo.jpeg",
    url: "https://en.wikipedia.org/wiki/Kad%C4%B1k%C3%B6y_Anatolian_High_School",
  },
  {
    type: "exam",
    year: "2016",
    name: "High-school entrance exam",
    nameTr: "Lise giriş sınavı",
    nameDe: "Aufnahmeprüfung Gymnasium",
    percent: "0.7%",
    suffix: "nationwide",
    suffixTr: "Türkiye geneli",
    suffixDe: "landesweit",
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

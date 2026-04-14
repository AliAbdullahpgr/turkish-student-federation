export type NavItem = {
  label: string;
  href: string;
};

export type ActionItem = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type StatItem = {
  value: string;
  label: string;
  detail?: string;
};

export type Department = {
  slug: string;
  title: string;
  lead: string;
  summary: string;
  focus: string[];
  status: string;
  icon: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  region: string;
  summary: string;
  biography: string[];
  focus: string[];
  quote: string;
  initials: string;
};

export type PostItem = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  language: "English" | "Urdu";
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  body: string[];
};

export type EventItem = {
  slug: string;
  title: string;
  status: "Upcoming" | "Ongoing" | "Recent";
  date: string;
  location: string;
  audience: string;
  summary: string;
};

export type ProductItem = {
  slug: string;
  title: string;
  price: string;
  format: string;
  badge: string;
  image: string;
  description: string;
  details: string[];
};

export type CourseItem = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  format: string;
  duration: string;
  outcomes: string[];
};

export type LegalSection = {
  title: string;
  points: string[];
};

export type ArchiveDefinition = {
  slug: string;
  title: string;
  description: string;
  robots?: {
    index: boolean;
    follow: boolean;
  };
};

export type LegacyPage =
  | { kind: "team"; member: TeamMember }
  | { kind: "department"; department: Department }
  | { kind: "post"; post: PostItem }
  | {
      kind: "page";
      slug: string;
      title: string;
      description: string;
      body: string[];
    };

export const siteMeta = {
  name: "Muslim Students League Pakistan",
  shortName: "MSL Pakistan",
  description:
    "MSL Pakistan is a student-led platform focused on identity, leadership, service, publications, and campus organizing across Pakistan.",
  url: "https://mslpakistan.org",
  contactEmail: "connect@mslpakistan.org",
  contactPhone: "+92 300 000 0000",
  address: "Islamabad, Pakistan",
};

export const media = {
  hero: "https://mslpakistan.org/wp-content/uploads/2025/11/a-6.png",
  community: "https://mslpakistan.org/wp-content/uploads/2025/11/a-2.jpg",
  nation: "https://mslpakistan.org/wp-content/uploads/2025/11/Untitled-design-1.jpg",
  activity: "https://mslpakistan.org/wp-content/uploads/2025/11/a-1.jpg",
  workshop: "https://mslpakistan.org/wp-content/uploads/2025/11/a-4.png",
  gathering: "https://mslpakistan.org/wp-content/uploads/2025/11/a.jpg",
  magazine: "https://mslpakistan.org/wp-content/uploads/2025/12/The-Students-times-8.3-10.5-in-2.png",
  program: "https://mslpakistan.org/wp-content/uploads/2025/12/609468928_17992372445895140_7601641468971262549_n.jpg",
  islamicMatters:
    "https://mslpakistan.org/wp-content/uploads/2025/12/Islamic-Matters-e1766597535207.jpg",
  videoThumb: "https://img.youtube.com/vi/BYHooU-NXts/maxresdefault.jpg",
  book: "https://mslpakistan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-24-at-10.14.30-PM.jpeg",
  hoodie:
    "https://mslpakistan.org/wp-content/uploads/2025/12/unisex-heavy-blend-hoodie-black-front-624234351d96d.webp",
};

export const siteNav: NavItem[] = [
  { label: "About", href: "/about-us" },
  { label: "Departments", href: "/our-departments" },
  { label: "Team", href: "/meet-our-team" },
  { label: "Activities", href: "/our-activities" },
  { label: "Events", href: "/all-events" },
  { label: "News", href: "/news-blogs" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact-us" },
];

export const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Departments", href: "/our-departments" },
      { label: "Meet Our Team", href: "/meet-our-team" },
      { label: "Activities", href: "/our-activities" },
      { label: "Events", href: "/all-events" },
    ],
  },
  {
    title: "Participation",
    links: [
      { label: "Join the Movement", href: "/join" },
      { label: "Get Involved", href: "/get-involved" },
      { label: "Verify Membership", href: "/verify-membership" },
      { label: "Generate Membership Card", href: "/generate-membership-card" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Publishing",
    links: [
      { label: "News & Blogs", href: "/news-blogs" },
      { label: "The Student Time", href: "/the-student-time" },
      { label: "Online Store", href: "/online-store" },
      { label: "Shop", href: "/shop" },
    ],
  },
  {
    title: "Policy",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy-2" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Register", href: "/register" },
      { label: "My Account", href: "/my-account" },
    ],
  },
];

export const heroActions: ActionItem[] = [
  { label: "Join the Movement", href: "/join", variant: "primary" },
  { label: "Explore Departments", href: "/our-departments", variant: "secondary" },
];

export const impactStats: StatItem[] = [
  { value: "4+", label: "Provinces and territories engaged" },
  { value: "8", label: "Visible departments and organizing tracks" },
  { value: "12+", label: "Leadership, media, and service campaigns in motion" },
  { value: "1", label: "Unified student platform for identity and action" },
];

export const spotlightLinks = [
  {
    title: "Identity-led organizing",
    summary:
      "Campus work rooted in ideology, service, leadership, and disciplined student development.",
    href: "/about-us",
    icon: "sparkles",
  },
  {
    title: "Department-led execution",
    summary:
      "Media, literature, universities, kids, scout, welfare, IT, and outreach tracks under one frontend system.",
    href: "/our-departments",
    icon: "layers",
  },
  {
    title: "Public communication",
    summary:
      "News, blogs, student publication, announcements, and event coverage presented as an editorial platform.",
    href: "/news-blogs",
    icon: "newspaper",
  },
];

export const departments: Department[] = [
  {
    slug: "muslim-kids",
    title: "Muslim Kids",
    lead: "A. R. Hashim",
    summary:
      "A youth-focused stream designed to build early confidence, values, and belonging through age-appropriate sessions and community activities.",
    focus: ["Foundational tarbiyah", "Family-linked programming", "Junior leadership"],
    status: "Frontend ready, backend details pending",
    icon: "sparkles",
  },
  {
    slug: "universities-department",
    title: "Universities Department",
    lead: "Regional campus leads",
    summary:
      "The core university organizing layer for campus circles, student representation, seminar delivery, and membership growth.",
    focus: ["Campus chapters", "Orientation presence", "Organizing systems"],
    status: "Frontend ready, backend details pending",
    icon: "graduation-cap",
  },
  {
    slug: "madadgar-team",
    title: "Madadgar Team",
    lead: "Volunteer coordination desk",
    summary:
      "Mutual support and relief coordination for students and communities through service campaigns, welfare drives, and responsive assistance.",
    focus: ["Support drives", "Volunteer logistics", "Relief activation"],
    status: "Frontend ready, backend details pending",
    icon: "heart-handshake",
  },
  {
    slug: "media-department",
    title: "Media Department",
    lead: "Asad Baig",
    summary:
      "A public communication unit responsible for message discipline, campaign storytelling, interviews, design assets, and digital visibility.",
    focus: ["Campaign media", "Press assets", "Story-led publishing"],
    status: "Frontend ready, backend details pending",
    icon: "camera",
  },
  {
    slug: "it-department",
    title: "IT Department",
    lead: "Digital operations team",
    summary:
      "The technical layer for forms, systems, websites, membership utilities, dashboards, and communication infrastructure.",
    focus: ["Web operations", "Membership systems", "Internal tooling"],
    status: "Frontend ready, backend details pending",
    icon: "monitor-smartphone",
  },
  {
    slug: "literacture",
    title: "Literature Department",
    lead: "Talha Ilyas",
    summary:
      "Publishing and reading culture focused on essays, ideological clarity, student writing, and disciplined intellectual engagement.",
    focus: ["Reading circles", "Essay campaigns", "Publication support"],
    status: "Frontend ready, backend details pending",
    icon: "book-open-text",
  },
  {
    slug: "scout",
    title: "Scout",
    lead: "Field activity coordinators",
    summary:
      "A structure for discipline, field readiness, event operations, service teamwork, and high-visibility participation in national programs.",
    focus: ["Field training", "Event discipline", "Volunteer readiness"],
    status: "Frontend ready, backend details pending",
    icon: "shield",
  },
  {
    slug: "dawah-squad",
    title: "Dawah Squad",
    lead: "Outreach mentors",
    summary:
      "A focused outreach stream for dialogue, student engagement, moral clarity, and purposeful invitation across campus spaces.",
    focus: ["Peer outreach", "Discussion circles", "Campus engagement"],
    status: "Frontend ready, backend details pending",
    icon: "megaphone",
  },
];

export const teamMembers: TeamMember[] = [
  {
    slug: "umer-abbas",
    name: "Umer Abbas",
    role: "President, MSL Pakistan",
    region: "National leadership",
    summary:
      "Guides national direction, public positioning, and organizational alignment across campaigns, student engagement, and growth.",
    biography: [
      "Umer Abbas represents the public face of the current MSL Pakistan frontend. His role in this rebuild is framed around clarity, national direction, and visible student presence.",
      "The profile page is designed as a reusable leadership template that can later be connected to a CMS without changing the page architecture.",
    ],
    focus: ["National narrative", "Leadership discipline", "Student mobilization"],
    quote:
      "A student platform only matters when it converts conviction into visible, disciplined work.",
    initials: "UA",
  },
  {
    slug: "muhammad-hammad",
    name: "Muhammad Hammad",
    role: "Vice President, MSL Pakistan",
    region: "Operations and internal coordination",
    summary:
      "Supports internal delivery, inter-department flow, and execution quality across campaigns, events, and organizational planning.",
    biography: [
      "This profile structure supports longer biographies, achievements, and linked responsibilities once live editorial data is available.",
      "For now, it presents a strong frontend profile view consistent with the rest of the rebuilt organization site.",
    ],
    focus: ["Operations cadence", "Internal systems", "Execution support"],
    quote:
      "Strong organization is less about noise and more about the reliability of every working part.",
    initials: "MH",
  },
  {
    slug: "abdul-rehman-hashim",
    name: "Abdul Rehman Hashim",
    role: "President, Muslim Kids",
    region: "Youth development",
    summary:
      "Leads early-stage community programming designed to develop confidence, belonging, and values among younger participants.",
    biography: [
      "The Muslim Kids stream introduces a softer but still structured expression of the wider MSL Pakistan mission.",
      "This page is intentionally reusable for future department-level leadership profiles.",
    ],
    focus: ["Youth pathways", "Family engagement", "Character formation"],
    quote:
      "The strongest movements invest early in the habits and imagination of their youngest members.",
    initials: "AH",
  },
  {
    slug: "asad-baig",
    name: "Asad Baig",
    role: "President, MSL Islamabad",
    region: "Islamabad chapter and media visibility",
    summary:
      "Represents chapter leadership with a focus on communication quality, public presence, and disciplined regional execution.",
    biography: [
      "This route also demonstrates how chapter-level leadership pages can sit beside national roles inside the same frontend system.",
      "The layout can later accommodate chapter-specific metrics, campaigns, and related posts.",
    ],
    focus: ["Chapter leadership", "Public presence", "Media coordination"],
    quote:
      "Visibility only matters when it reflects structure, clarity, and serious work on the ground.",
    initials: "AB",
  },
  {
    slug: "habib-anwer",
    name: "Habib Anwer",
    role: "Leadership Team Member",
    region: "Programs and community execution",
    summary:
      "Supports programming, community linkage, and the practical shaping of public-facing student initiatives.",
    biography: [
      "The live site currently presents multiple leadership profiles with inconsistent metadata. This rebuild normalizes them into one frontend model.",
      "Each profile can later be enriched with media, achievements, and related department associations.",
    ],
    focus: ["Programs", "Community linkage", "Leadership support"],
    quote:
      "The most convincing organizations make their values visible in how they run every initiative.",
    initials: "HA",
  },
];

export const posts: PostItem[] = [
  {
    slug: "طلباء-پر-بڑھتی-قیمتوں-کا-بوجھ-فوری-سبسڈ",
    title: "طلباء پر بڑھتی قیمتوں کا بوجھ فوری سبسڈی کا مطالبہ",
    category: "Press Release",
    categorySlug: "press-release",
    language: "Urdu",
    date: "2026-04-03",
    excerpt:
      "طلبہ پر مہنگائی کے اثرات، سفری اور تعلیمی اخراجات، اور ریاستی ذمہ داری کے سوالات پر مبنی بیان۔",
    image: media.gathering,
    tags: ["petrol-price", "مسلم-سٹوڈنٹس-لیگ-پاکستان"],
    body: [
      "یہ فرنٹ اینڈ آرٹیکل پیج اس مقصد سے بنایا گیا ہے کہ پریس ریلیز، بیانات، اور پالیسی سے متعلق تحریریں ایک معیاری اور قابل اعتماد انداز میں پیش کی جا سکیں۔",
      "مستقبل میں یہی ٹیمپلیٹ اصل CMS مواد، مصنف، متعلقہ ٹیگز، اور شریک کرنے کے آپشنز کے ساتھ جوڑا جا سکتا ہے۔",
    ],
  },
  {
    slug: "مسلم-سٹوڈنٹس-لیگ-ہی-طلبہ-کی-امیدوں-کا-مح",
    title: "مسلم سٹوڈنٹس لیگ ہی طلبہ کی امیدوں کا محور",
    category: "Blogs",
    categorySlug: "blogs",
    language: "Urdu",
    date: "2026-03-25",
    excerpt:
      "طلبہ کی نمائندگی، تنظیمی کردار، اور نظریاتی وابستگی کو بیان کرنے والا اردو فیچر مضمون۔",
    image: media.community,
    tags: ["mslpakistan", "مسلم-سٹوڈنٹس-لیگ-پاکستان"],
    body: [
      "یہ پیج بلاگ اسٹوری ٹیلنگ کے لئے تیار کیا گیا ہے، تاکہ اردو اور انگریزی دونوں زبانوں میں مواد ایک ہی ڈیزائن سسٹم میں شائع ہو سکے۔",
      "نئے فرنٹ اینڈ میں پڑھنے کی سہولت، صاف ٹائپوگرافی، اور متعلقہ مضامین کی پیشکش بنیادی ترجیح رکھی گئی ہے۔",
    ],
  },
  {
    slug: "umer-abbas-president-msl-pakistan",
    title: "Umer Abbas President MSL Pakistan",
    category: "News",
    categorySlug: "blogs",
    language: "English",
    date: "2026-03-25",
    excerpt:
      "A profile-style announcement highlighting current national leadership, direction, and public student messaging.",
    image: media.hero,
    tags: ["student-organization-of-pakistan", "muslim-student-league-pakistan"],
    body: [
      "This rebuilt article template gives leadership news a more deliberate editorial treatment, with clear rhythm, structured paragraphs, and stronger visual hierarchy.",
      "It is designed to scale from short announcements to fuller feature pieces without needing a separate presentation layer.",
    ],
  },
  {
    slug: "تعلیم-القران",
    title: "تعلیم القران",
    category: "The Students Times",
    categorySlug: "the-students-times",
    language: "Urdu",
    date: "2025-12-22",
    excerpt:
      "مطالعہ، فہم، اور دینی تربیت کے تناظر میں قرآنی تعلیم پر مبنی خصوصی تحریر۔",
    image: media.islamicMatters,
    tags: ["mslpakistan"],
    body: [
      "اس رُوٹ کو فرنٹ اینڈ سطح پر اس طرح ڈیزائن کیا گیا ہے کہ میگزین، بلاگ، اور خصوصی فیچر آرٹیکلز سب ایک ہی اظہار میں آسکیں۔",
      "بعد میں طالب علموں کی اشاعت، شمارہ نمبر، اور متعلقہ مواد کے روابط بھی یہاں شامل کئے جا سکتے ہیں۔",
    ],
  },
  {
    slug: "الوداع-انس-محصی-بھائی",
    title: "الوداع انس محصی بھائی",
    category: "Blogs",
    categorySlug: "blogs",
    language: "Urdu",
    date: "2025-12-22",
    excerpt:
      "خراج اور یادداشت پر مبنی ایک جذباتی تحریر جو تنظیمی تعلق اور احترام کو ظاہر کرتی ہے۔",
    image: media.activity,
    tags: ["mslpakistan"],
    body: [
      "یادگاری اور خراجی تحریروں کے لئے بھی یہی ٹیمپلیٹ استعمال کیا جا سکتا ہے، تاکہ سائٹ صرف اطلاع نہیں بلکہ احساس اور تنظیمی ثقافت بھی منتقل کرے۔",
      "فرنٹ اینڈ فی الحال جامد ہے، لیکن سٹرکچر مکمل طور پر حقیقی ایڈیٹوریل ورک فلو کے لئے تیار کیا گیا ہے۔",
    ],
  },
  {
    slug: "ex-president-ans-muhsi",
    title: "Ex President Ans Muhsi",
    category: "Blogs",
    categorySlug: "blogs",
    language: "English",
    date: "2025-12-22",
    excerpt:
      "A tribute-style story page for honoring past leadership, continuity, and organizational memory.",
    image: media.nation,
    tags: ["muslim-student-league-pakistan"],
    body: [
      "Legacy posts need a cleaner, less improvised presentation than the current live site offers.",
      "This page keeps the tone ceremonial while still fitting the broader editorial system of the rebuild.",
    ],
  },
  {
    slug: "hello-world",
    title: "Hello World",
    category: "Uncategorised",
    categorySlug: "uncategorised",
    language: "English",
    date: "2025-11-13",
    excerpt:
      "This legacy placeholder is included only to mirror the live public surface during the frontend rebuild phase.",
    image: media.workshop,
    tags: [],
    body: [
      "The live site still exposes the default WordPress hello world post. It should not survive the final migration.",
      "For now, this route exists only so the rebuilt frontend covers the full public surface area requested.",
    ],
  },
];

export const events: EventItem[] = [
  {
    slug: "campus-organizers-huddle",
    title: "Campus Organizers Huddle",
    status: "Upcoming",
    date: "May 04, 2026",
    location: "Islamabad",
    audience: "Chapter leads and university teams",
    summary:
      "A planning day for local organizers focused on membership, campaigns, and semester execution.",
  },
  {
    slug: "student-leadership-summit",
    title: "Student Leadership Summit",
    status: "Upcoming",
    date: "May 18, 2026",
    location: "Lahore",
    audience: "Cross-campus delegates",
    summary:
      "A flagship gathering for movement strategy, student development, and national message alignment.",
  },
  {
    slug: "publication-room",
    title: "The Student Time Editorial Room",
    status: "Ongoing",
    date: "Weekly cycle",
    location: "Hybrid",
    audience: "Writers and editors",
    summary:
      "An ongoing editorial workflow for issue planning, student essays, and publication coordination.",
  },
  {
    slug: "service-campaign-drive",
    title: "Madadgar Service Campaign",
    status: "Recent",
    date: "March 26, 2026",
    location: "Rawalpindi",
    audience: "Volunteers and partner chapters",
    summary:
      "A service-oriented mobilization combining welfare support, volunteer management, and public visibility.",
  },
  {
    slug: "media-briefing-session",
    title: "Media Briefing Session",
    status: "Recent",
    date: "March 15, 2026",
    location: "Online",
    audience: "Media and design teams",
    summary:
      "A coordination session for press assets, campaign visuals, and structured messaging standards.",
  },
];

export const products: ProductItem[] = [
  {
    slug: "allah-is-calling-volume-ii",
    title: "Allah is Calling Volume II",
    price: "PKR 1,850",
    format: "Print edition",
    badge: "Featured publication",
    image: media.book,
    description:
      "A publication-led product page designed to feel more editorial than transactional, suitable for books, journals, and signature releases.",
    details: ["Limited print run", "Publication-led merchandising", "Frontend-only cart flow"],
  },
  {
    slug: "msl-hoddies",
    title: "MSL Hoddies",
    price: "PKR 4,200",
    format: "Apparel",
    badge: "Community merchandise",
    image: media.hoodie,
    description:
      "Merchandise presentation for community identity products, sized for future stock, size, and fulfillment integrations.",
    details: ["Black edition", "Community branding", "Frontend-only checkout"],
  },
];

export const courses: CourseItem[] = [
  {
    slug: "islamic-matters",
    title: "Islamic Matters",
    summary:
      "A structured program page for faith, worldview, and student development content under a calmer academic presentation.",
    image: media.islamicMatters,
    format: "Hybrid sessions",
    duration: "6-week cycle",
    outcomes: ["Core discussion modules", "Reading prompts", "Facilitator-led sessions"],
  },
];

export const studentTimeIssues = [
  {
    title: "Issue 01: Direction",
    summary:
      "A sample editorial issue frame showing how publication covers, essays, and archive cards can live inside the rebuilt experience.",
  },
  {
    title: "Issue 02: Campus & Character",
    summary:
      "A second issue concept focused on student habits, service, and ideological clarity in university life.",
  },
  {
    title: "Archive Room",
    summary:
      "A browsable archive layer for PDFs, essays, interviews, and themed publication collections.",
  },
];

export const categoryArchives: ArchiveDefinition[] = [
  {
    slug: "uncategorised",
    title: "Uncategorised",
    description:
      "Legacy default archive retained only for frontend coverage. This should be removed or redirected in the final migration.",
    robots: { index: false, follow: false },
  },
  {
    slug: "press-release",
    title: "Press Release",
    description:
      "Official statements, issue responses, and public-facing organizational communications.",
  },
  {
    slug: "blogs",
    title: "Blogs",
    description:
      "Editorial essays, opinion pieces, commentary, and student-facing organizational writing.",
  },
  {
    slug: "the-students-times",
    title: "The Students Times",
    description:
      "Publication archive entries connected to the Student Time editorial stream.",
  },
];

export const tagArchives: ArchiveDefinition[] = [
  {
    slug: "student-organization-of-pakistan",
    title: "Student Organization of Pakistan",
    description: "Legacy tag archive currently covered on the frontend only.",
    robots: { index: false, follow: false },
  },
  {
    slug: "muslim-student-league-pakistan",
    title: "Muslim Student League Pakistan",
    description: "Legacy tag archive currently covered on the frontend only.",
    robots: { index: false, follow: false },
  },
  {
    slug: "مسلم-سٹوڈنٹس-لیگ-پاکستان",
    title: "مسلم سٹوڈنٹس لیگ پاکستان",
    description: "Legacy Urdu tag archive currently covered on the frontend only.",
    robots: { index: false, follow: false },
  },
  {
    slug: "mslpakistan",
    title: "mslpakistan",
    description: "Legacy tag archive currently covered on the frontend only.",
    robots: { index: false, follow: false },
  },
  {
    slug: "petrol-price",
    title: "Petrol Price",
    description: "Legacy issue-specific tag archive currently covered on the frontend only.",
    robots: { index: false, follow: false },
  },
];

export const productCategoryArchives: ArchiveDefinition[] = [
  {
    slug: "uncategorised",
    title: "Uncategorised Products",
    description:
      "Default commerce taxonomy retained only for frontend coverage. It should be removed or merged later.",
    robots: { index: false, follow: false },
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "Use of Website",
    points: [
      "This frontend preview represents the public structure of the MSL Pakistan website and is designed for informational and participation-oriented use.",
      "Users should not rely on the preview forms as live submission or payment systems until backend integrations are connected.",
      "MSL Pakistan may revise public content, organizational pages, and membership flows as internal processes mature.",
    ],
  },
  {
    title: "Membership and Participation",
    points: [
      "Join flows, verification, and membership card generation are presented here as frontend-only interfaces.",
      "Any future live membership workflow must be backed by an approved data source, audit trail, and privacy-aware storage layer.",
      "The organization reserves the right to update participation criteria, review processes, and approval paths.",
    ],
  },
  {
    title: "Public Content",
    points: [
      "Articles, team profiles, and departmental content are organizational communications and may be edited for accuracy, clarity, and relevance.",
      "Legacy placeholder pages currently mirrored from the live site should be removed, redirected, or noindexed at final launch.",
      "Merchandise and publication pages shown here are presentational until commerce infrastructure is activated.",
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    title: "Information Collected",
    points: [
      "This frontend preview contains form interfaces for contact, membership, registration, and commerce-related actions.",
      "In the current static state, those forms are not connected to live processing or storage.",
      "When backend services are added, MSL Pakistan should publish explicit details for data collected, retention, access, and deletion requests.",
    ],
  },
  {
    title: "Use of Data",
    points: [
      "Any future collected data should be limited to operational needs such as participation, communication, membership validation, and fulfillment.",
      "Sensitive information should not be requested unless there is a clear operational justification and secure handling path.",
      "Analytics, account systems, and membership records should be documented transparently before launch.",
    ],
  },
  {
    title: "Publishing and Contact",
    points: [
      "Public-facing team, publication, and event pages may include editorial content and contact pathways controlled by the organization.",
      "If live integrations are added later, consent language and submission confirmations should be updated accordingly.",
      "Questions about the site, submissions, or privacy should route through the organization contact page.",
    ],
  },
];

export const samplePageContent = {
  slug: "sample-page",
  title: "Sample Page",
  description:
    "A legacy placeholder page preserved only so the rebuilt frontend covers the full public surface currently exposed on the live site.",
  body: [
    "This page should not remain part of the final information architecture.",
    "It is present now only because the request for this phase was to rebuild the full public frontend surface first.",
  ],
};

export function getDepartment(slug: string) {
  return departments.find((item) => item.slug === slug);
}

export function getTeamMember(slug: string) {
  return teamMembers.find((item) => item.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((item) => item.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function getCourse(slug: string) {
  return courses.find((item) => item.slug === slug);
}

export function getCategoryArchive(slug: string) {
  return categoryArchives.find((item) => item.slug === slug);
}

export function getTagArchive(slug: string) {
  return tagArchives.find((item) => item.slug === slug);
}

export function getProductCategoryArchive(slug: string) {
  return productCategoryArchives.find((item) => item.slug === slug);
}

export function getLegacyPage(slug: string): LegacyPage | undefined {
  const member = getTeamMember(slug);
  if (member) {
    return { kind: "team", member };
  }

  const department = getDepartment(slug);
  if (department) {
    return { kind: "department", department };
  }

  const post = getPost(slug);
  if (post) {
    return { kind: "post", post };
  }

  if (slug === samplePageContent.slug) {
    return {
      kind: "page",
      slug: samplePageContent.slug,
      title: samplePageContent.title,
      description: samplePageContent.description,
      body: samplePageContent.body,
    };
  }

  return undefined;
}

export const legacySlugs = [
  ...teamMembers.map((item) => item.slug),
  ...departments.map((item) => item.slug),
  ...posts.map((item) => item.slug),
  samplePageContent.slug,
];

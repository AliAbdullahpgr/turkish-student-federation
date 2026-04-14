export type HomeNavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export type HomeImage = {
  src: string;
  alt: string;
};

export type HeroAction = {
  label: string;
  href?: string;
  variant: "primary" | "secondary";
};

export type HeroActivity = {
  label: string;
};

export type PillarItem = {
  icon: string;
  title: string;
  description: string;
};

export type StatItem = {
  icon: string;
  value: string;
  label: string;
};

export type CredibilityItem = {
  value: string;
  label: string;
  detail: string;
};

export type WhyJoinItem = {
  icon: string;
  title: string;
  description: string;
};

export type StoryItem = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: HomeImage;
  promoText?: string;
};

export type CourseItem = {
  image: HomeImage;
  title: string;
  description: string;
};

export type FooterGroup = {
  title: string;
  links: string[];
};

export type LeadershipItem = {
  name: string;
  title: string;
  description: string;
  image: HomeImage;
};

export type HomePageContent = {
  announcement: {
    text: string;
    ctaLabel: string;
  };
  brand: {
    name: string;
    shortName: string;
    ctaLabel: string;
  };
  navigation: HomeNavItem[];
  hero: {
    eyebrow: string;
    headlineStart: string;
    headlineAccent: string;
    headlineEnd: string;
    description: string;
    actions: HeroAction[];
    activities: HeroActivity[];
    images: HomeImage[];
    statValue: string;
    statLabel: string;
    dateLine: string;
  };
  credibility: {
    eyebrow: string;
    title: string;
    items: CredibilityItem[];
    quote: string;
    quoteAttribution: string;
  };
  mission: {
    eyebrow: string;
    emphasisA: string;
    emphasisB: string;
    paragraphs: string[];
    image: HomeImage;
  };
  leadership: {
    id: string;
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    leader: LeadershipItem;
  };
  pillars: {
    title: string;
    items: PillarItem[];
  };
  whyJoin: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: WhyJoinItem[];
    highlightTitle: string;
    highlightText: string;
    chips: string[];
  };
  impact: {
    id: string;
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    items: StatItem[];
  };
  featuredVideo: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    image: HomeImage;
    ctaLabel: string;
    tags: string[];
  };
  updates: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    items: StoryItem[];
  };
  curriculum: {
    id: string;
    title: string;
    description: string;
    instructor: string;
    highlights: string[];
    ctaLabel: string;
    items: CourseItem[];
  };
  newsletter: {
    id: string;
    title: string;
    description: string;
    placeholder: string;
    ctaLabel: string;
    disclaimer: string;
  };
  footer: {
    description: string;
    socialIcons: string[];
    groups: FooterGroup[];
    copyright: string;
    location: string;
  };
};

export const homePageContent: HomePageContent = {
  announcement: {
    text: "Join the movement \u2014 Turkish Student Federation",
    ctaLabel: "JOIN US",
  },
  brand: {
    name: "Turkish Student Federation",
    shortName: "TSF",
    ctaLabel: "Join Us",
  },
  navigation: [
    { label: "Home", href: "#top" },
    { label: "About Us", href: "#leadership", hasDropdown: true },
    { label: "Events", href: "#community" },
    { label: "Get Involved", href: "#why-join", hasDropdown: true },
    { label: "News & Blogs", href: "#community" },
    { label: "Literature", href: "#resources", hasDropdown: true },
    { label: "Contact US", href: "#join" },
  ],
  hero: {
    eyebrow: "Students, Culture, Leadership",
    headlineStart: "Building a",
    headlineAccent: "Stronger",
    headlineEnd: "Community",
    description:
      "Turn your campus years into an adventure of leadership, learning, and lasting friendships. The Turkish Student Federation connects you to a powerful student network.",
    actions: [
      { label: "Explore Programs", href: "#curriculum", variant: "primary" },
      { label: "See Our Impact", href: "#impact", variant: "secondary" },
    ],
    activities: [
      { label: "Seminars" },
      { label: "Leadership" },
      { label: "Community" },
      { label: "Mentorship" },
      { label: "Workshops" },
      { label: "Advocacy" },
    ],
    images: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDITwyjDQCGI1TqgrNqO8RklWIpmaLkhS6LqL9VqHkE3t1YBITn0DF8Gv-Gvxc4HryjgyloJiCCOF7ZXHdWcO1iAc8SxswA58Ie6IOMMNqk8-ywxkXbdB-JFyb8pNyMuj3E07qddM9qlidi4fnZN3pzdbAqtptoWbQ5rvaQWoBLG3x7KMbbfek95ESgdWVhVs_khEfd8T7boHUFc7COjzVMGAvYsZaNwgCnQPe7dnIj6U9DWEeevQZA7ULmFcRTO-HBDyO3XrS1xQ",
        alt: "Academic leadership conference with students attending a seminar in a modern hall.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIzu76_U9WWpm_MbssbQxKfoR7FgqgdJhfQzw-G-SdvXyYFYq2BYYq_7iAu4GCM5L3F4hkmDNW3Bcniak0LMbR0J73fEPe5DH3ehQoKn1xg1tvacu1QRn1oLZ-lz17hUBOYvNoZ2jyS1tCtzc5ZgPAVS3zlO6ZDs38SudBuiPdYFe0Hmub__O6uJoWYQf7GOV1xlWKdzqvLibrAUo_YBz5VYJ8kpUoWudOpsbjHSoH-lS5Q0lYyiad9JHydj8LZTpxWVI6FLKzkg",
        alt: "Community volunteers collaborating on a social impact initiative.",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ss4dLkcYvG7JBUCPIq1A_9lx1IrbYsnFcQUP81JN23DxWHo6NjPGq4LLU8WRd6W8k66xTpnTeW3y-s8thyncbKt3UaaIGVkoaP3-i_CIPSYiJd0HeXDS00ftZLznZm3lVmGLZkSvdPiCHix41Q99wWLlox1Lqr18KCuR9NyFqi-O1YFslSdU__Iss2momwK1wxzsw9yyeUlo2UOk_9NrjTLm6Zx4hsvTeSi2sv11VS3U0pGcndz3vxePlx63BfRnZjHuKP5wUQ",
        alt: "Students in a university lecture hall engaged in discussion.",
      },
    ],
    statValue: "12k+",
    statLabel: "Students and Alumni Reached",
    dateLine: "Est. 2018",
  },
  credibility: {
    eyebrow: "Why Students Trust Us",
    title: "A federation shaped around belonging, growth, and visible student outcomes.",
    items: [
      {
        value: "35+",
        label: "Active student circles",
        detail: "Campus-based communities that keep members connected year-round.",
      },
      {
        value: "120+",
        label: "Mentors and organizers",
        detail: "Students, alumni, and volunteers helping members navigate academics and leadership.",
      },
      {
        value: "18",
        label: "Flagship events yearly",
        detail: "Summits, socials, workshops, and service initiatives across the calendar.",
      },
    ],
    quote:
      "Students do not join only for events. They stay because the federation gives them people, direction, and a place to belong.",
    quoteAttribution: "Community-led, student-first model",
  },
  mission: {
    eyebrow: "Our Mission & Vision",
    emphasisA: "identity",
    emphasisB: "opportunity",
    paragraphs: [
      "The Turkish Student Federation exists to create a confident, connected, and capable student body. We help students build friendships, strengthen leadership skills, and stay rooted in a shared cultural identity while pursuing academic excellence.",
      "Through events, mentorship, advocacy, and practical student services, we create an environment where Turkish students can grow, contribute, and represent their community with clarity and purpose.",
    ],
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIzu76_U9WWpm_MbssbQxKfoR7FgqgdJhfQzw-G-SdvXyYFYq2BYYq_7iAu4GCM5L3F4hkmDNW3Bcniak0LMbR0J73fEPe5DH3ehQoKn1xg1tvacu1QRn1oLZ-lz17hUBOYvNoZ2jyS1tCtzc5ZgPAVS3zlO6ZDs38SudBuiPdYFe0Hmub__O6uJoWYQf7GOV1xlWKdzqvLibrAUo_YBz5VYJ8kpUoWudOpsbjHSoH-lS5Q0lYyiad9JHydj8LZTpxWVI6FLKzkg",
      alt: "Community volunteers collaborating on a social impact initiative.",
    },
  },
  leadership: {
    id: "leadership",
    eyebrow: "Leadership",
    titleStart: "Our",
    titleAccent: "President",
    leader: {
      name: "Ahmet Yilmaz",
      title: "President, Turkish Student Federation",
      description:
        "Ahmet Yilmaz has served as President of the Turkish Student Federation since 2023. A graduate student in Political Science, Ahmet is known for his active role in student leadership, community service, and fostering youth engagement through the Federation\u2019s programs and initiatives across campuses nationwide.",
      image: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBITqocON7c0fCeyQI1HhIa2gCUm0tJwYsfIrrz2jcsQiqjcHCgxCCaGkv2_k6ZQNQbOgESWb7M9ps7z6vHWrPF-ZMi7ouKbz_XxWddebIgEM8qnPV4_0sFve9IRpmuoYfmAiHcihgIvPf5DR5dRQxIBhgugrZ9v07BKrt2OkL6mgLEBENvinX2rmitr-1qpharV55DX8y0GGGCU5-c_hJuHdM4-ge8NyzvZIDXaU0ATAqwMm6lRVzSmdKLB_fk5RLtTtQzFMra6A",
        alt: "Portrait of President Ahmet Yilmaz speaking at a federation event.",
      },
    },
  },
  pillars: {
    title: "Pillars of Engagement",
    items: [
      {
        icon: "movie",
        title: "Media & Storytelling",
        description:
          "Creating student-focused media, interviews, campaigns, and digital stories that highlight Turkish student voices, campus life, and community achievements.",
      },
      {
        icon: "groups",
        title: "Seminars & Workshops",
        description:
          "Hosting leadership sessions, career talks, and practical workshops led by mentors, alumni, and professionals who understand student ambitions.",
      },
      {
        icon: "auto_stories",
        title: "Academic Support",
        description:
          "Providing study circles, peer guidance, and academic resources that help members stay consistent, prepared, and connected throughout the year.",
      },
      {
        icon: "sports_soccer",
        title: "Sports & Campus Life",
        description:
          "Encouraging teamwork, health, and belonging through tournaments, outings, and student activities that strengthen campus friendships.",
      },
      {
        icon: "balance",
        title: "Student Advocacy",
        description:
          "Representing student concerns, strengthening campus participation, and making sure Turkish students have a visible and constructive voice.",
      },
      {
        icon: "volunteer_activism",
        title: "Community Service",
        description:
          "Organizing service initiatives, support drives, and collaborative volunteering that turn student energy into visible benefit for the wider community.",
      },
    ],
  },
  whyJoin: {
    id: "why-join",
    eyebrow: "Why Join",
    title: "More than a student club. A network that helps members find footing fast.",
    description:
      "The federation should make student life easier, more ambitious, and more connected. These are the outcomes people should feel after joining.",
    items: [
      {
        icon: "groups",
        title: "Find your people quickly",
        description:
          "Join a community that makes it easier to build friendships, integrate into campus life, and feel represented from the beginning.",
      },
      {
        icon: "school",
        title: "Grow beyond the classroom",
        description:
          "Access mentorship, workshops, and peer guidance that help you develop leadership confidence and practical direction.",
      },
      {
        icon: "award",
        title: "Be part of visible work",
        description:
          "Contribute to events, media, service, and student initiatives that create tangible impact and strengthen your experience.",
      },
    ],
    highlightTitle: "A stronger student story",
    highlightText:
      "When the frontend communicates value clearly, the federation stops feeling like a generic organization page and starts feeling like an active student home base.",
    chips: ["Mentorship", "Events", "Representation", "Community"],
  },
  impact: {
    id: "impact",
    eyebrow: "Our Reach",
    titleStart: "Impact",
    titleAccent: "Highlights",
    items: [
      { icon: "auto_stories", value: "200+", label: "Weekly Study Sessions" },
      { icon: "groups", value: "100,000+", label: "Attendees in Seminars" },
      { icon: "hand_coins", value: "5,000+", label: "Students Supported" },
      { icon: "volunteer_activism", value: "20+", label: "Community Campaigns" },
      { icon: "building", value: "130+", label: "Universities Engaged" },
      { icon: "award", value: "12,000+", label: "Active Volunteers" },
    ],
  },
  featuredVideo: {
    id: "resources",
    eyebrow: "Latest Release",
    title: "Inside the Turkish Student Federation",
    description:
      "A closer look at the students, mentors, events, and initiatives shaping the Turkish Student Federation across campuses and communities.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBITqocON7c0fCeyQI1HhIa2gCUm0tJwYsfIrrz2jcsQiqjcHCgxCCaGkv2_k6ZQNQbOgESWb7M9ps7z6vHWrPF-ZMi7ouKbz_XxWddebIgEM8qnPV4_0sFve9IRpmuoYfmAiHcihgIvPf5DR5dRQxIBhgugrZ9v07BKrt2OkL6mgLEBENvinX2rmitr-1qpharV55DX8y0GGGCU5-c_hJuHdM4-ge8NyzvZIDXaU0ATAqwMm6lRVzSmdKLB_fk5RLtTtQzFMra6A",
      alt: "Scholar speaking in a cinematic studio setting for the federation story series.",
    },
    ctaLabel: "Follow Youtube Channel",
    tags: ["Student Voices", "Seminar", "Youth Impact"],
  },
  updates: {
    id: "community",
    eyebrow: "Media & News",
    title: "Read Our Latest Updates",
    description: "News, events, and highlights from the federation community.",
    ctaLabel: "View More Updates",
    items: [
      {
        category: "Community News",
        title: "How Student Leadership Strengthens Turkish Communities Abroad",
        excerpt:
          "Federation members are creating stronger campus networks, better support systems, and more confident student leadership pipelines.",
        date: "Nov 24, 2024",
        readTime: "5 min read",
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ss4dLkcYvG7JBUCPIq1A_9lx1IrbYsnFcQUP81JN23DxWHo6NjPGq4LLU8WRd6W8k66xTpnTeW3y-s8thyncbKt3UaaIGVkoaP3-i_CIPSYiJd0HeXDS00ftZLznZm3lVmGLZkSvdPiCHix41Q99wWLlox1Lqr18KCuR9NyFqi-O1YFslSdU__Iss2momwK1wxzsw9yyeUlo2UOk_9NrjTLm6Zx4hsvTeSi2sv11VS3U0pGcndz3vxePlx63BfRnZjHuKP5wUQ",
          alt: "Students in a university lecture hall engaged in discussion.",
        },
      },
      {
        category: "Events",
        title: "Annual Turkish Student Leadership Summit Highlights",
        excerpt:
          "Students, alumni, and guest speakers gathered to discuss mentorship, representation, professional growth, and campus organizing.",
        date: "Nov 18, 2024",
        readTime: "8 min read",
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcXVkRANJ2Y1_0FkPYQL_wDpJm-tBnMHjNbLf72cjcqRv_zA4RotG15vZI19ZEBBx1GZMgaArzT3X7qsnUA8Rl6RL-t6E_HIshXeLXpQPFqiuX2aUPgEc9uWYcNETJ8Uraa1ZFzNF21kY9rLNSbvz681tGlCUAr4P6H43lTiAInuFIb22a62U6jaqHonCqW_JjggFACvBZNaz2DHP3VHjVMT8nNs9HrbVIJmNjXQ4s0EJ01w2HOjoPZfTE0YLwitDyQqtInoxvGw",
          alt: "Large festive community gathering with green and white decorations.",
        },
      },
      {
        category: "Programs",
        title: "Mentorship Applications Open for New Members",
        excerpt:
          "Join a structured network of senior students and alumni offering guidance on academics, campus life, and career direction.",
        date: "Nov 12, 2024",
        readTime: "3 min read",
        promoText: "Apply for the Upcoming Federation Mentorship Program",
      },
    ],
  },
  curriculum: {
    id: "curriculum",
    title: "Student Programs",
    description:
      "Explore practical programs built around leadership, academic growth, mentorship, and community participation.",
    instructor: "Federation Mentors",
    highlights: [
      "Leadership Development",
      "Mentorship Network",
      "Campus-to-Career Support",
    ],
    ctaLabel: "Join a Program",
    items: [
      {
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqxanbn1F212GF5nTylnBBhOqi718yquiIUn68fQNnFKmqcNaKLehySHHjCuB_l2nSleKkXsKQCDZSyEN9MlMZhB3ajmaqffbOuWZvXi9z0C8FQtH-AhwkrjZLFINg9JjYiYzaWLgOjWI5VQOM4rGB-xmEGzntrm3AEE2eKKpeXgMqI6FXRhNRRNy4xoN3D8o5bIiHYNhDpbZNjtHI-RzFNV3clVYRKcz12ZUb5EsgZGFsECPSXP6kD_dJYDPFq2SzLGkb2YeXNQ",
          alt: "Books and a laptop arranged on a desk for course study.",
        },
        title: "Mentorship for Students",
        description:
          "Connect with senior students and alumni for guidance on academics, confidence, and student life.",
      },
      {
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_1dcrcfWxy42nx01U2zxUhWDTn6b4RdbRBSi1IDtf2BsNcKrbAGOoxwEA_hpoC2DTxfFt2QnMqGoCNIzYVdqCu3jqUngShNf0Vuhm-L-r7dv2hcG0_bt0XI_JTS9Mw9Stltq8mhyWdCxOBLayD_MkTKFE9Ig_SCGNWifiCugnH5tElR4KRsGc7C04Ge3S-QiwCEs7o88cKKRbq6hTd5XH1q5YBjULqst303zLIGk5TThsxnNDscu6VMI5g1hg2Tt03ykJPzw_CA",
          alt: "A study group collaborating in a modern library setting.",
        },
        title: "Leadership & Representation",
        description:
          "Develop practical leadership skills for organizing events, representing students, and building lasting community impact.",
      },
    ],
  },
  newsletter: {
    id: "join",
    title: "Join the Federation",
    description:
      "Receive event announcements, mentorship opportunities, student resources, and federation updates directly in your inbox.",
    placeholder: "Your student email",
    ctaLabel: "Join Now",
    disclaimer: "We respect your privacy. No spam, only useful updates.",
  },
  footer: {
    description:
      "The Turkish Student Federation is a student-centered organization focused on leadership, belonging, academic growth, and meaningful community life.",
    socialIcons: ["public", "alternate_email", "call"],
    groups: [
      {
        title: "Governance",
        links: ["Academic Integrity", "Privacy Policy", "Terms of Service"],
      },
      {
        title: "Community",
        links: ["Faculty Portal", "Alumni Network", "Donation Transparency"],
      },
    ],
    copyright:
      "\u00A9 2024 Turkish Student Federation. Built for student leadership and community.",
    location: "Built for Turkish students everywhere",
  },
};

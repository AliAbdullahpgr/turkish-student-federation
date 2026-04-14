export type HomeNavItem = {
  label: string;
  href: string;
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

export type PillarItem = {
  icon: string;
  title: string;
  description: string;
};

export type StatItem = {
  value: string;
  label: string;
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

export type HomePageContent = {
  brand: {
    name: string;
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
    image: HomeImage;
    statValue: string;
    statLabel: string;
  };
  mission: {
    eyebrow: string;
    emphasisA: string;
    emphasisB: string;
    paragraphs: string[];
    image: HomeImage;
  };
  pillars: {
    title: string;
    items: PillarItem[];
  };
  impact: {
    id: string;
    items: StatItem[];
  };
  featuredVideo: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    image: HomeImage;
    ctaLabel: string;
  };
  updates: {
    id: string;
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
  brand: {
    name: "Turkish Student Federation",
    ctaLabel: "Join the Federation",
  },
  navigation: [
    { label: "Programs", href: "#curriculum" },
    { label: "Impact", href: "#impact" },
    { label: "Community", href: "#community" },
    { label: "Resources", href: "#resources" },
  ],
  hero: {
    eyebrow: "Students, Culture, Leadership",
    headlineStart: "Building a stronger",
    headlineAccent: "Turkish Student",
    headlineEnd: "community.",
    description:
      "The Turkish Student Federation connects students through academic support, leadership development, cultural programs, and a strong community network designed to help members thrive on campus and beyond.",
    actions: [
      { label: "Explore Programs", href: "#curriculum", variant: "primary" },
      { label: "See Our Impact", href: "#impact", variant: "secondary" },
    ],
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDITwyjDQCGI1TqgrNqO8RklWIpmaLkhS6LqL9VqHkE3t1YBITn0DF8Gv-Gvxc4HryjgyloJiCCOF7ZXHdWcO1iAc8SxswA58Ie6IOMMNqk8-ywxkXbdB-JFyb8pNyMuj3E07qddM9qlidi4fnZN3pzdbAqtptoWbQ5rvaQWoBLG3x7KMbbfek95ESgdWVhVs_khEfd8T7boHUFc7COjzVMGAvYsZaNwgCnQPe7dnIj6U9DWEeevQZA7ULmFcRTO-HBDyO3XrS1xQ",
      alt: "Academic leadership conference with students attending a seminar in a modern hall.",
    },
    statValue: "12k+",
    statLabel: "Students and Alumni Reached",
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
  impact: {
    id: "impact",
    items: [
      { value: "200+", label: "Student Sessions Hosted" },
      { value: "100k+", label: "Event Reach" },
      { value: "5k+", label: "Students Supported" },
      { value: "20+", label: "Community Campaigns" },
      { value: "130+", label: "Campus Partnerships" },
      { value: "12k+", label: "Federation Network" },
    ],
  },
  featuredVideo: {
    id: "resources",
    eyebrow: "Featured Federation Story",
    title: "Inside the Turkish Student Federation",
    description:
      "A closer look at the students, mentors, events, and initiatives shaping the Turkish Student Federation across campuses and communities.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBITqocON7c0fCeyQI1HhIa2gCUm0tJwYsfIrrz2jcsQiqjcHCgxCCaGkv2_k6ZQNQbOgESWb7M9ps7z6vHWrPF-ZMi7ouKbz_XxWddebIgEM8qnPV4_0sFve9IRpmuoYfmAiHcihgIvPf5DR5dRQxIBhgugrZ9v07BKrt2OkL6mgLEBENvinX2rmitr-1qpharV55DX8y0GGGCU5-c_hJuHdM4-ge8NyzvZIDXaU0ATAqwMm6lRVzSmdKLB_fk5RLtTtQzFMra6A",
      alt: "Scholar speaking in a cinematic studio setting for the Taleem Se Takmeel series.",
    },
    ctaLabel: "Watch the Story",
  },
  updates: {
    id: "community",
    title: "Latest Updates",
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

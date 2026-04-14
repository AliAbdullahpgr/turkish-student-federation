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
    name: "MSL Pakistan",
    ctaLabel: "Join Leadership",
  },
  navigation: [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Impact", href: "#impact" },
    { label: "Community", href: "#community" },
    { label: "Resources", href: "#resources" },
  ],
  hero: {
    eyebrow: "A Decade of Excellence",
    headlineStart: "Empowering the",
    headlineAccent: "Next Generation",
    headlineEnd: "of Leaders.",
    description:
      "For over 10 years, MSL Pakistan has stood at the intersection of academic rigor and spiritual integrity, fostering a community dedicated to excellence, social welfare, and profound intellectual growth.",
    actions: [
      { label: "Explore Programs", href: "#curriculum", variant: "primary" },
      { label: "Our 10-Year Journey", href: "#impact", variant: "secondary" },
    ],
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDITwyjDQCGI1TqgrNqO8RklWIpmaLkhS6LqL9VqHkE3t1YBITn0DF8Gv-Gvxc4HryjgyloJiCCOF7ZXHdWcO1iAc8SxswA58Ie6IOMMNqk8-ywxkXbdB-JFyb8pNyMuj3E07qddM9qlidi4fnZN3pzdbAqtptoWbQ5rvaQWoBLG3x7KMbbfek95ESgdWVhVs_khEfd8T7boHUFc7COjzVMGAvYsZaNwgCnQPe7dnIj6U9DWEeevQZA7ULmFcRTO-HBDyO3XrS1xQ",
      alt: "Academic leadership conference with students attending a seminar in a modern hall.",
    },
    statValue: "12k+",
    statLabel: "Active Volunteers Nationwide",
  },
  mission: {
    eyebrow: "Our Mission & Vision",
    emphasisA: "wisdom",
    emphasisB: "faith",
    paragraphs: [
      "MSL Pakistan was founded on the belief that true leadership is rooted in a holistic understanding of one's heritage and a proactive commitment to societal betterment. We do not just educate; we cultivate character.",
      "By integrating academic excellence with the timeless values of Islamic heritage, we provide a platform where students and professionals alike can find their voice and contribute meaningfully to the progress of Pakistan.",
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
        title: "Multimedia production",
        description:
          "Producing high-quality educational content, documentaries, and digital campaigns that challenge narratives and inspire change across digital platforms.",
      },
      {
        icon: "groups",
        title: "Seminars & Workshops",
        description:
          "Hosting intellectual discourses and skill-building workshops led by industry leaders and scholars to prepare youth for global challenges.",
      },
      {
        icon: "auto_stories",
        title: "Quranic Foundations",
        description:
          "Weekly interactive sessions focusing on the practical application of Quranic wisdom in contemporary professional and personal life.",
      },
      {
        icon: "sports_soccer",
        title: "Youth Athletics",
        description:
          "Promoting physical well-being and teamwork through organized sports tournaments and competitive athletic programs across universities.",
      },
      {
        icon: "balance",
        title: "Advocacy & Rights",
        description:
          "Protecting the interests and rights of students within academic institutions, ensuring a fair and equitable learning environment for all.",
      },
      {
        icon: "volunteer_activism",
        title: "Social Welfare",
        description:
          "Extensive humanitarian efforts ranging from blood donation camps to disaster relief and supporting underprivileged communities nationwide.",
      },
    ],
  },
  impact: {
    id: "impact",
    items: [
      { value: "200+", label: "Weekly Quran Classes" },
      { value: "100k+", label: "Seminar Attendees" },
      { value: "5k+", label: "Blood Bags Donated" },
      { value: "20+", label: "Donation Drives" },
      { value: "130+", label: "Universities Engaged" },
      { value: "12k+", label: "Active Volunteers" },
    ],
  },
  featuredVideo: {
    id: "resources",
    eyebrow: "Featured Video Series",
    title: "Taleem Se Takmeel: Journey to Mastery",
    description:
      "Join our flagship digital series exploring the depths of knowledge, ethics, and leadership in the modern world. We bridge the gap between academic theory and spiritual fulfillment.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBITqocON7c0fCeyQI1HhIa2gCUm0tJwYsfIrrz2jcsQiqjcHCgxCCaGkv2_k6ZQNQbOgESWb7M9ps7z6vHWrPF-ZMi7ouKbz_XxWddebIgEM8qnPV4_0sFve9IRpmuoYfmAiHcihgIvPf5DR5dRQxIBhgugrZ9v07BKrt2OkL6mgLEBENvinX2rmitr-1qpharV55DX8y0GGGCU5-c_hJuHdM4-ge8NyzvZIDXaU0ATAqwMm6lRVzSmdKLB_fk5RLtTtQzFMra6A",
      alt: "Scholar speaking in a cinematic studio setting for the Taleem Se Takmeel series.",
    },
    ctaLabel: "Follow Youtube Channel",
  },
  updates: {
    id: "community",
    title: "Latest Updates",
    description: "Insights and news from our community hub.",
    ctaLabel: "View All Stories",
    items: [
      {
        category: "Community News",
        title: "The Role of Youth in Pakistan's Economic Stability",
        excerpt:
          "ہمیں اپنی ذمہ داریوں کا احساس کرنا ہوگا، ملک کی تقدیر ہمارے ہاتھوں میں ہے۔",
        date: "Nov 24, 2024",
        readTime: "5 min read",
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ss4dLkcYvG7JBUCPIq1A_9lx1IrbYsnFcQUP81JN23DxWHo6NjPGq4LLU8WRd6W8k66xTpnTeW3y-s8thyncbKt3UaaIGVkoaP3-i_CIPSYiJd0HeXDS00ftZLznZm3lVmGLZkSvdPiCHix41Q99wWLlox1Lqr18KCuR9NyFqi-O1YFslSdU__Iss2momwK1wxzsw9yyeUlo2UOk_9NrjTLm6Zx4hsvTeSi2sv11VS3U0pGcndz3vxePlx63BfRnZjHuKP5wUQ",
          alt: "Students in a university lecture hall engaged in discussion.",
        },
      },
      {
        category: "Events",
        title: "Annual Leadership Summit 2024 Highlights",
        excerpt:
          "A gathering of 500+ leaders across various sectors discussing the future of ethical leadership in South Asia.",
        date: "Nov 18, 2024",
        readTime: "8 min read",
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcXVkRANJ2Y1_0FkPYQL_wDpJm-tBnMHjNbLf72cjcqRv_zA4RotG15vZI19ZEBBx1GZMgaArzT3X7qsnUA8Rl6RL-t6E_HIshXeLXpQPFqiuX2aUPgEc9uWYcNETJ8Uraa1ZFzNF21kY9rLNSbvz681tGlCUAr4P6H43lTiAInuFIb22a62U6jaqHonCqW_JjggFACvBZNaz2DHP3VHjVMT8nNs9HrbVIJmNjXQ4s0EJ01w2HOjoPZfTE0YLwitDyQqtInoxvGw",
          alt: "Large festive community gathering with green and white decorations.",
        },
      },
      {
        category: "Education",
        title: "Transform Your Professional Ethics",
        excerpt: "علم صرف کتابوں تک محدود نہیں، بلکہ یہ عمل کا دوسرا نام ہے۔",
        date: "Nov 12, 2024",
        readTime: "3 min read",
        promoText: "Register for the Upcoming Quranic Wisdom Workshop",
      },
    ],
  },
  curriculum: {
    id: "curriculum",
    title: "Islamic Matters",
    description: "Dive deep into the nuances of faith, jurisprudence, and contemporary ethics.",
    instructor: "Mufti Yousaf Taibi",
    highlights: [
      "Expert Led Curriculum",
      "Certification Provided",
      "Hybrid Learning Models",
    ],
    ctaLabel: "Enroll Now",
    items: [
      {
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqxanbn1F212GF5nTylnBBhOqi718yquiIUn68fQNnFKmqcNaKLehySHHjCuB_l2nSleKkXsKQCDZSyEN9MlMZhB3ajmaqffbOuWZvXi9z0C8FQtH-AhwkrjZLFINg9JjYiYzaWLgOjWI5VQOM4rGB-xmEGzntrm3AEE2eKKpeXgMqI6FXRhNRRNy4xoN3D8o5bIiHYNhDpbZNjtHI-RzFNV3clVYRKcz12ZUb5EsgZGFsECPSXP6kD_dJYDPFq2SzLGkb2YeXNQ",
          alt: "Books and a laptop arranged on a desk for course study.",
        },
        title: "Fiqh for Professionals",
        description:
          "Navigating modern finance and ethics in the light of Islamic jurisprudence.",
      },
      {
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_1dcrcfWxy42nx01U2zxUhWDTn6b4RdbRBSi1IDtf2BsNcKrbAGOoxwEA_hpoC2DTxfFt2QnMqGoCNIzYVdqCu3jqUngShNf0Vuhm-L-r7dv2hcG0_bt0XI_JTS9Mw9Stltq8mhyWdCxOBLayD_MkTKFE9Ig_SCGNWifiCugnH5tElR4KRsGc7C04Ge3S-QiwCEs7o88cKKRbq6hTd5XH1q5YBjULqst303zLIGk5TThsxnNDscu6VMI5g1hg2Tt03ykJPzw_CA",
          alt: "A study group collaborating in a modern library setting.",
        },
        title: "History of Islamic Leadership",
        description:
          "An in-depth look at the governance models of the early centuries.",
      },
    ],
  },
  newsletter: {
    id: "join",
    title: "Join Our Community",
    description:
      "Receive weekly scholarly insights, event invitations, and volunteer opportunities directly in your inbox.",
    placeholder: "Your academic or professional email",
    ctaLabel: "Subscribe Now",
    disclaimer: "We respect your privacy. No spam, only substance.",
  },
  footer: {
    description:
      "MSL Pakistan is a non-profit organization dedicated to fostering leadership, academic excellence, and social welfare among the youth of Pakistan through values-based education.",
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
      "\u00A9 2024 MSL Pakistan. Editorial Excellence in Community Leadership.",
    location: "Made with purpose in Lahore, Pakistan",
  },
};

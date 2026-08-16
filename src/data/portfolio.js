// Central content store
// Edit your portfolio content from this file.

export const profile = {
  name: "Sudarsan B.",
  role: "CSE Student — Full Stack Developer — AI/ML Builder",
  location: "Chennai, India",

  statement:
    "I build intelligent systems, full-stack products, and data-driven tools.",

  status: "OPEN TO BUILD",

  email: "sudarsanb293@gmail.com",

  github: "https://github.com/sudarsanb18",

  linkedin: "https://www.linkedin.com/in/sudarsanb143/",

  resumeUrl: "/My_Resume.pdf",
};


// ============================================================
// 01 / ABOUT
// ============================================================

export const about = {
  eyebrow: "01 / ABOUT",

  statement: "I build ideas into systems that actually work.",

  body: [
    "I'm a Computer Science undergraduate at Chennai Institute of Technology, focused on building full-stack applications and exploring AI, machine learning, and data-driven systems.",

    "I enjoy taking a problem from an idea or challenge statement to a working product — designing the logic, building the system, and refining it until it becomes something people can actually use.",
  ],

  profilePanel: [
    {
      label: "Location",
      value: "Chennai, India",
    },
    {
      label: "Education",
      value: "B.E. Computer Science & Engineering",
    },
    {
      label: "Institution",
      value: "Chennai Institute of Technology",
    },
    {
      label: "Focus",
      value: "Full Stack · AI/ML · Data",
    },
    {
      label: "Stage",
      value: "Undergraduate Developer",
    },
  ],
};


// ============================================================
// 02 / WORK
// ============================================================

export const projects = [
  {
    id: "resume-screening",

    tag: "AI / MACHINE LEARNING",

    featured: true,

    name: "Resume Screening",

    oneLiner:
      "An AI-powered resume screening system that analyzes candidate profiles and helps identify relevant applicants.",

    problem:
      "Recruiters often spend significant time manually reviewing resumes, comparing skills, experience, certifications, and projects across large numbers of candidates.",

    solution:
      "Built a machine learning based screening system that processes candidate information and evaluates profiles using relevant features to assist with recruitment decisions.",

    tech: [
      "Python",
      "Pandas",
      "scikit-learn",
      "Machine Learning",
    ],

    result:
      "A working resume screening model designed to automate initial candidate evaluation and provide a consistent screening process.",

    status: "COMPLETE",

    github: "https://github.com/sudarsanb18/ML-Project",

    demo: "",
  },
];


// ============================================================
// 03 / STACK
// ============================================================

export const stack = {
  Languages: [
    "Python",
    "Java",
    "C",
    "C++",
    "JavaScript",
  ],

  Frontend: [
    "React",
    "HTML",
    "CSS",
  ],

  Backend: [
    "Node.js",
    "Express",
    "Django",
    "Flask",
    "FastAPI",
  ],

  Database: [
    "MongoDB",
    "MySQL",
    "SQL",
  ],

  "AI / Data": [
    "Pandas",
    "Matplotlib",
    "scikit-learn",
    "OpenCV",
    "NLTK",
  ],

  Tools: [
    "Git",
    "GitHub",
    "VS Code",
  ],
};


// ============================================================
// 04 / JOURNEY
// ============================================================

export const buildLog = [
  {
    date: "2026",

    title: "AI Kavach — Phase 1",

    tag: "BUILD",

    detail:
      "Built the foundation for an autonomous vulnerability detection backend, including the SQL injection detector, scan state machine, and ORM layer.",
  },

  {
    date: "2026",

    title: "JPMorgan Chase Forage",

    tag: "PROGRAM",

    detail:
      "Completed the JPMorgan Chase software engineering virtual experience program.",
  },

  {
    date: "Earlier",

    title: "AIM ICDK Water Innovation Challenge 6.0",

    tag: "COMPETITION",

    detail:
      "Built NeerAI / Jal Rakshak — a bilingual smart irrigation and crop-health platform — as part of Team Jal Rakshak.",
  },
];


// ============================================================
// 05 / PRESENCE
// ============================================================

export const presence = [
  {
    label: "GitHub",
    url: profile.github,
    note: "Source and project history",
  },

  {
    label: "LinkedIn",
    url: profile.linkedin,
    note: "Professional profile",
  },

  {
    label: "LeetCode",
    url: "https://leetcode.com/u/sudarsanb1804/",
    note: "Problem solving & DSA",
  },

  {
    label: "CodeChef",
    url: "https://www.codechef.com/users/sudarsanb18",
    note: "Competitive programming",
  },
];


// ============================================================
// OPTIONAL CERTIFICATIONS
// ============================================================

export const certifications = [
  {
    name: "Cisco Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
  },

  {
    name: "MongoDB Certification",
    issuer: "ICT Academy",
  },

  {
    name: "JPMorgan Chase — Software Engineering",
    issuer: "Forage Virtual Experience",
  },
];
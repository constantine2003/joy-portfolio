// ============================================================
// 🌟 REALLY JOY — Portfolio Data
// Edit this file to update all content on the site
// ============================================================

export const profile = {
  name: 'Really Joy',
  title: 'Mathematics Educator & Statistician',
  tagline: 'Making Math Joyful.',
  bio: [
    "I'm Really Joy, a mathematics educator specializing in statistics, calculus, and applied mathematics. My approach bridges the gap between abstract theory and real-world application.",
    "Whether you're a student struggling with your first statistics course or a professional needing to interpret data, I believe everyone has the capacity to understand and appreciate mathematics."
  ],
  location: 'Philippines · Available Online Worldwide',
  email: 'reallyjoy@email.com',
  linkedin: 'linkedin.com/in/reallyjoy',
  stats: [
    { num: '8+', label: 'Years Teaching' },
    { num: '500+', label: 'Students Guided' },
    { num: '98%', label: 'Pass Rate' },
  ]
};

// ─── SKILLS ────────────────────────────────────────────────
export const skills = [
  {
    category: 'Mathematics',
    icon: '∑',
    items: [
      { name: 'Statistics & Probability', level: 98 },
      { name: 'Calculus (Differential & Integral)', level: 95 },
      { name: 'Linear Algebra', level: 90 },
      { name: 'Discrete Mathematics', level: 88 },
      { name: 'Number Theory', level: 82 },
    ]
  },
  {
    category: 'Teaching & Pedagogy',
    icon: '📚',
    items: [
      { name: 'Curriculum Design', level: 95 },
      { name: 'Differentiated Instruction', level: 92 },
      { name: 'Board Exam Preparation', level: 97 },
      { name: 'Online / Hybrid Teaching', level: 90 },
      { name: 'Classroom Management', level: 93 },
    ]
  },
  {
    category: 'Tools & Software',
    icon: '🖥️',
    items: [
      { name: 'SPSS', level: 92 },
      { name: 'R / R Studio', level: 85 },
      { name: 'Microsoft Excel (Advanced)', level: 95 },
      { name: 'GeoGebra', level: 88 },
      { name: 'Desmos', level: 90 },
    ]
  }
];

// ─── EXPERIENCE ────────────────────────────────────────────
export const experience = [
  {
    role: 'Mathematics Lecturer',
    org: 'State University',
    period: '2020 — Present',
    type: 'Full-time',
    desc: 'Teaching undergraduate statistics, calculus, and applied mathematics. Developed new curriculum modules with a 98% board exam passing rate.',
    highlights: ['Led 4 courses per semester averaging 45 students each', 'Designed blended learning modules adopted university-wide', 'Mentored 12 thesis students in quantitative research methods']
  },
  {
    role: 'Senior Math Tutor',
    org: 'Bright Minds Learning Center',
    period: '2018 — 2020',
    type: 'Part-time',
    desc: 'Provided intensive 1-on-1 and group tutoring for high school and college students preparing for entrance and board examinations.',
    highlights: ['100% of board exam students passed on first take', 'Specialized in LET (Licensure Exam for Teachers) Math review', 'Built a community of 200+ students through referrals alone']
  },
  {
    role: 'Mathematics Teacher',
    org: 'St. Mary\'s High School',
    period: '2016 — 2018',
    type: 'Full-time',
    desc: 'Taught Junior and Senior High School mathematics including General Math, Statistics & Probability, and Pre-Calculus.',
    highlights: ['Top performing section in regional math competition 2017', 'Introduced real-world data projects into the curriculum', 'Awarded Best Teacher by student council 2 consecutive years']
  }
];

// ─── PROJECTS ──────────────────────────────────────────────
export const projects = [
  {
    title: 'StatBridge Learning Platform',
    tag: 'Web App',
    year: '2024',
    desc: 'An interactive statistics learning platform with visual explainers, live quizzes, and step-by-step problem solvers for college students.',
    stack: ['Figma', 'Google Sites', 'SPSS', 'Google Sheets'],
    emoji: '📊',
    featured: true,
    link: '#'
  },
  {
    title: 'LET Math Reviewer (E-Book)',
    tag: 'Publication',
    year: '2023',
    desc: 'A comprehensive digital reviewer for the Licensure Examination for Teachers (Mathematics major) — 300 pages covering all competencies.',
    stack: ['Canva', 'Google Docs', 'Desmos', 'GeoGebra'],
    emoji: '📖',
    featured: true,
    link: '#'
  },
  {
    title: 'Data Literacy for Educators',
    tag: 'Workshop Series',
    year: '2023',
    desc: 'A 6-module workshop series helping non-math teachers understand and use data in their classrooms. Facilitated for 3 schools.',
    stack: ['Excel', 'Google Slides', 'R', 'Zoom'],
    emoji: '🎓',
    featured: false,
    link: '#'
  },
  {
    title: 'Statistics Anxiety Research',
    tag: 'Research Paper',
    year: '2022',
    desc: 'Co-authored study on the correlation between statistics anxiety and academic performance in Philippine higher education institutions.',
    stack: ['SPSS', 'Survey Tools', 'Academic Writing'],
    emoji: '📄',
    featured: false,
    link: '#'
  }
];

// ─── CERTIFICATES ──────────────────────────────────────────
export const certificates = [
  {
    title: 'Registered Professional Teacher (LET)',
    issuer: 'Professional Regulation Commission',
    year: '2016',
    emoji: '🏛️',
    credential: 'PRC License No. XXXXXXX'
  },
  {
    title: 'Teaching Statistics Online',
    issuer: 'Coursera — Johns Hopkins University',
    year: '2022',
    emoji: '🎓',
    credential: 'Certificate of Completion'
  },
  {
    title: 'Data Analysis with R',
    issuer: 'DataCamp',
    year: '2023',
    emoji: '📊',
    credential: 'Verified Certificate'
  },
  {
    title: 'Google Certified Educator Level 2',
    issuer: 'Google for Education',
    year: '2022',
    emoji: '🔵',
    credential: 'GCE-L2-XXXXXXX'
  },
  {
    title: 'Inclusive Teaching for Diverse Learners',
    issuer: 'CHED — Commission on Higher Education',
    year: '2021',
    emoji: '🌱',
    credential: 'Certificate of Training'
  },
  {
    title: 'Advanced Excel for Data Analysis',
    issuer: 'Microsoft Learn',
    year: '2023',
    emoji: '📗',
    credential: 'Microsoft Verified'
  }
];

// ─── TESTIMONIALS ──────────────────────────────────────────
export const testimonials = [
  {
    name: 'Mark R.',
    role: 'Engineering Student',
    text: "Ma'am Joy made calculus feel like solving puzzles instead of a nightmare. Her way of explaining derivatives visually completely changed how I see math.",
    rating: 5
  },
  {
    name: 'Ana L.',
    role: 'LET Passer, 2023',
    text: "I failed the LET twice before enrolling in her review program. Third take — I passed with flying colors. She breaks everything down perfectly.",
    rating: 5
  },
  {
    name: 'Prof. Santos',
    role: 'Department Chair, State University',
    text: "Joy is one of the most dedicated educators I've worked with. Her students consistently outperform other sections and she's always innovating.",
    rating: 5
  }
];
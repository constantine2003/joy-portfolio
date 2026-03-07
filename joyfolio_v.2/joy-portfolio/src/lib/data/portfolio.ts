// ============================================================
// REALLY JOY ARENAS — Portfolio Data
// This is the ONLY file you need to edit to update the site!
// ============================================================

// ─── PROFILE ───────────────────────────────────────────────
export const profile = {
  name: 'Really Joy Arenas',
  pronoun: 'She/Her',
  title: 'BS Mathematics Graduate, Cum Laude | DPE Student',
  location: 'San Fernando, Central Visayas, Philippines',
  email: 'reallyjoyarenas@gmail.com',
  linkedin: 'https://linkedin.com/in/really-joy-arenas',
  photo: '/images/reallyjoy.png',
  available: true,
  tagline: 'Making Math Joyful.',
  about: [
    'I am a BS Mathematics graduate (cum laude) from the University of the Philippines Cebu, with a strong foundation in analytical problem-solving, quantitative reasoning, and data-driven decision-making. My academic training has equipped me to approach complex problems with structure, logic, and precision—skills I actively apply in finance, data handling, and educational settings.',
    'I am currently pursuing a Diploma in Professional Education, where I am developing competencies in pedagogy, curriculum design, and learner-centered instruction. This allows me to bridge strong technical expertise with effective communication and teaching practices.',
    'My professional experience includes roles in finance and operations, where I handled payroll processing, HRIS data management, and financial documentation, as well as a finance internship that strengthened my exposure to investments and financial planning. I am proficient in Microsoft Excel, data management, and LaTeX, and I work comfortably in both collaborative and independent environments.',
  ],
  stats: [
    { num: '4', label: 'Years in UP Cebu' },
    { num: '6+', label: 'Organizations' },
    { num: '5+', label: 'Projects' },
  ],
};

// ─── SKILLS ────────────────────────────────────────────────
export const skills = [
  {
    category: 'Mathematics',
    items: [
      { name: 'Statistics & Probability',    level: 96 },
      { name: 'Calculus & Analysis',          level: 93 },
      { name: 'Linear & Abstract Algebra',    level: 90 },
      { name: 'Fuzzy Set Theory',             level: 88 },
      { name: 'Numerical Methods',            level: 85 },
    ],
  },
  {
    category: 'Tech & Data',
    items: [
      { name: 'Microsoft Excel (Advanced)',   level: 95 },
      { name: 'LaTeX',                        level: 90 },
      { name: 'SPSS',                         level: 88 },
      { name: 'Python',                       level: 82 },
      { name: 'C++ / C#',                     level: 78 },
    ],
  },
  {
    category: 'Education & Soft Skills',
    items: [
      { name: 'Lesson Planning',              level: 92 },
      { name: 'Curriculum Design',            level: 90 },
      { name: 'Data Analysis',                level: 91 },
      { name: 'HRIS & Payroll Processing',    level: 85 },
      { name: 'Leadership & Facilitation',    level: 88 },
    ],
  },
];

// ─── EXPERIENCE ────────────────────────────────────────────
export const experience = [
  {
    role: 'Student Teacher',
    org: 'Cebu Technological University',
    type: 'Internship · On-site',
    location: 'Cebu, Central Visayas, Philippines',
    period: 'Feb 2026 – Present',
    bullets: [
      'Assisted mentor in preparing and organizing learning materials, including lesson plans, presentations, and classroom resources.',
      'Supported the implementation of classroom activities and helped facilitate student participation during discussions and exercises.',
      'Provided general classroom support, including monitoring student progress and assisting with instructional and administrative tasks.',
    ],
    skills: ['Lesson Planning', 'Classroom Management', 'Facilitation'],
  },
  {
    role: 'Student Intern — Finance Department',
    org: 'AJ Financial Planning',
    type: 'Internship · Remote',
    location: '401/130 Little Collins St, Melbourne VIC, Australia',
    period: 'Jan 2026 – Feb 2026',
    bullets: [
      'Gained exposure to investments, financial planning, and data analysis within an international finance environment.',
    ],
    skills: ['Data Analysis', 'Investments', 'Financial Planning'],
  },
  {
    role: 'Internship Trainee',
    org: 'ANSECA Development Corporation',
    type: 'Internship · On-site',
    location: 'M. Selma Street Lower Calajoan, Minglanilla, Cebu',
    period: 'Jul 2024 – Aug 2024',
    bullets: [
      'Responsible for managing the encoding of personal data to update the HRIS.',
      'Processed payroll to maintain financial transparency and ensure accurate financial reporting.',
    ],
    skills: ['HRIS', 'Payroll Processing', 'Attention to Detail', 'Financial Reporting'],
  },
  {
    role: 'Peer Facilitator — UP Cebu Office of Student Affairs (OSA)',
    org: 'University of the Philippines Cebu',
    type: 'Volunteer',
    location: 'Cebu, Philippines',
    period: 'Jan 2023 – Feb 2023',
    bullets: [
      'Participated in regular planning meetings with OSA staff and student leaders to discuss student programs and initiatives.',
      'Assisted in coordinating schedules and communication between OSA members and student groups.',
      'Supported organizational planning efforts through collaborative discussion and idea-sharing.',
    ],
    skills: ['Facilitation', 'Communication', 'Coordination'],
  },
];

// ─── EDUCATION ─────────────────────────────────────────────
export const education = [
  {
    school: 'Cebu Technological University',
    degree: 'Certificate / Diploma of Professional Education',
    period: 'Sep 2025 – Apr 2026',
    honor: 'DPE Student',
    desc: 'Completed a Certificate in Professional Education, gaining foundational competencies in teaching methodologies, curriculum development, assessment strategies, and classroom management.',
    activities: '',
    skills: ['Higher Education', 'Educational Leadership', 'Curriculum Design', 'Assessment', 'Classroom Management'],
    // To add images: uncomment and set the filename from static/images/
    images: [
      // { src: '/images/citu-photo1.jpg', alt: 'CIT-U' },
      // { src: '/images/citu-cert1.jpg',  alt: 'CIT-U Certificate' },
    ],
  },
  {
    school: 'University of the Philippines Cebu',
    degree: 'Bachelor of Science in Mathematics',
    period: 'Sep 2021 – Jul 2025',
    honor: 'Cum Laude',
    desc: 'Graduated with Latin honors with a strong foundation in pure and applied mathematics, statistics, numerical methods, and mathematical research.',
    activities: "Former member of UPSTAGE, volunteer at Angat Kabataan-Cebu, and marketing secretary for UPC Sciences Federation, Math Major's Circle, and UP Cebu Iskultura Dance Ensemble. Experienced in marketing, leadership, and community service, with a passion for arts, education, and youth empowerment.",
    skills: ['Count Data Analysis', 'C#', 'Python', 'LaTeX', 'Statistics', 'Pure Mathematics'],
    images: [
      // { src: '/images/upc-grad.jpg',   alt: 'Graduation' },
      // { src: '/images/upc-photo1.jpg', alt: 'UP Cebu' },
      // { src: '/images/upc-cert1.jpg',  alt: 'UP Certificate' },
    ],
  },
  {
    school: 'Minglanilla Science High School',
    degree: 'Science, Technology, Engineering and Mathematics (STEM)',
    period: 'Jun 2019 – Mar 2021',
    honor: 'High Honors · Rank 11',
    desc: 'Ranked 11th in the Graduating Batch of 2021 and graduated with high honors.',
    activities: '',
    skills: [],
    images: [],
  },
  {
    school: 'Minglanilla Science High School',
    degree: 'Junior High School',
    period: 'Jun 2015 – Mar 2019',
    honor: 'With Honors',
    desc: 'Graduated with honors and served as the Division Level ASEAN Quiz 2018 Representative.',
    activities: '',
    skills: ['AutoCAD', 'Manual Drafting'],
    images: [],
  },
];

// ─── PROJECTS ──────────────────────────────────────────────
export const projects = [
  {
    title: 'On Properties of Intuitionistic Fuzzy Sets in Hilbert Algebras',
    tag: 'Undergraduate Thesis',
    period: 'Aug 2024 – May 2025',
    org: 'University of the Philippines Cebu',
    desc: 'Explored mathematical foundations of intuitionistic fuzzy sets and their algebraic structures. Analyzed implications of these properties in Hilbert algebras. Communicated research findings through a formal thesis, academic defense, and presentation at a Mathematical Sciences Conference.',
    skills: ['Pure Mathematics', 'Python', 'LaTeX', 'Research'],
    images: [
      // { src: '/images/thesis-poster.jpg',  alt: 'Thesis Poster' },
      // { src: '/images/thesis-defense.jpg', alt: 'Thesis Defense' },
    ],
  },
  {
    title: 'Numerical Computation Software',
    tag: 'Final Project · Math 173 Numerical Methods',
    period: 'Jan 2024 – Jun 2024',
    org: 'University of the Philippines Cebu',
    desc: 'Collaborated in a 4-person team to build a numerical computation software. Designed the user interface for intuitive user interaction. Programmed the back-end logic using C++ for efficient performance. Applied numerical analysis techniques to solve mathematical problems.',
    skills: ['C++', 'Numerical Methods', 'UI Design', 'Microsoft Project'],
    images: [
      // { src: '/images/numsoft-ui.jpg', alt: 'Software UI' },
    ],
  },
  {
    title: '1081 Performance by UPSTAGE',
    tag: 'Theater Production',
    period: 'Sep 2023',
    org: 'University of the Philippines Cebu',
    desc: "Reenacted the harrowing experiences of Martial Law victims. Co-wrote the script for the performance. Collaborated with the stage managers to ensure a smooth and coherent flow throughout the presentation.",
    skills: ['Creative Writing', 'Leadership', 'Collaboration'],
    images: [
      // { src: '/images/upstage-1081.jpg', alt: 'UPSTAGE 1081' },
    ],
  },
  {
    title: 'Capstone Project — Interactive Game',
    tag: 'Capstone · CMSC 21 Fundamentals of Programming',
    period: 'Jan 2023 – Jun 2023',
    org: 'University of the Philippines Cebu',
    desc: 'Worked in a 12-person team to develop an interactive game from scratch. Designed game mechanics and contributed to user experience design. Implemented game logic and visuals using C++. Participated in iterative testing and debugging to ensure game stability.',
    skills: ['C++', 'Game Design', 'UX', 'Team Collaboration'],
    images: [
      // { src: '/images/game-screenshot.jpg', alt: 'Game Screenshot' },
    ],
  },
  {
    title: 'WGNRR Webinar — PH Adolescent Pregnancy & SRHR',
    tag: 'NSTP CWTS Project',
    period: 'Dec 2021 – Aug 2022',
    org: 'University of the Philippines Cebu',
    desc: 'Represented the class and facilitated group discussions and class activities. Coordinated and led the final project, a webinar in collaboration with the Women\'s Global Network for Reproductive Rights (WGNRR) on "Philippine Adolescent Pregnancy and Sexual and Reproductive Health and Rights (SRHR)".',
    skills: ['Leadership', 'Project Management', 'Event Coordination', 'Communication'],
    images: [
      // { src: '/images/wgnrr-cert-participation.jpg', alt: 'Certificate of Participation' },
      // { src: '/images/wgnrr-cert-appreciation.jpg',  alt: 'Certificate of Appreciation' },
    ],
  },
];

// ─── CERTIFICATES ──────────────────────────────────────────
// To add a certificate image:
// 1. Put the image in static/images/
// 2. Set image: '/images/your-filename.jpg'
export const certificates = [
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    issued: 'Feb 2026',
    credentialId: '',
    image: '', // e.g. '/images/cert-cisco-ds.jpg'
  },
  {
    title: 'Intermediate Python',
    issuer: 'DataCamp',
    issued: 'Feb 2026',
    credentialId: '#46,309,651',
    image: '', // e.g. '/images/cert-datacamp-intermediate-python.jpg'
  },
  {
    title: 'Introduction to Python',
    issuer: 'DataCamp',
    issued: 'Feb 2026',
    credentialId: '#46,276,248',
    image: '', // e.g. '/images/cert-datacamp-intro-python.jpg'
  },
  {
    title: 'Data Analytics Fluency Pathway',
    issuer: 'IBM',
    issued: 'Feb 2026',
    credentialId: 'PLAN-E76CA96A8C45',
    image: '', // e.g. '/images/cert-ibm-data-analytics.jpg'
  },
  {
    title: 'Integrating Technology in Education',
    issuer: 'Cebu Technological University',
    issued: '2025',
    credentialId: '',
    image: '', // e.g. '/images/cert-citu-tech-edu.jpg'
  },
  {
    title: 'Mastering the Art of Demo Teaching for Teacher I Applicants',
    issuer: 'Cebu Technological University',
    issued: '2025',
    credentialId: '',
    image: '', // e.g. '/images/cert-citu-demo-teaching.jpg'
  },
];

// ─── ORGANIZATIONS ─────────────────────────────────────────
export const organizations = [
  {
    name: 'UP Cebu Iskultura Dance Ensemble',
    role: 'Treasurer (2023–2024) · Member',
    period: 'Jan 2022 – Jun 2025',
    org: 'University of the Philippines Cebu',
    bullets: [
      "Manages the organization's budget allocation and expenditure to ensure transparency of funds and accurate financial reports.",
      'Competed as one of the indigenous dancers of PASUC 2023 in Dumaguete, Negros Oriental.',
      'Participated in paid cultural performances for external clients and invited events.',
    ],
  },
  {
    name: "UP Cebu Math Majors' Circle",
    role: 'Marketing Secretary (2023–2024) · Member',
    period: 'Jan 2021 – Jun 2025',
    org: 'University of the Philippines Cebu',
    bullets: [
      'Coordinated with several suppliers and business owners, resulting in additional event profit through negotiations and cost-saving measures.',
      "Developed and implemented new marketing strategies to expand the organization's network of partners and collaborators.",
      'Organized and managed all the logistics for all the events.',
    ],
  },
  {
    name: 'UP Cebu Sciences Federation (UPCSF)',
    role: 'Secretary for Logistics (2023–2024) · Member',
    period: '2021 – 2025',
    org: 'University of the Philippines Cebu',
    bullets: [
      'Organized and managed logistic works for college events ensuring proper administrative processes and timely delivery of resources.',
      'Coordinated with suppliers, student leaders, and event teams to ensure smooth preparation and execution of activities.',
    ],
  },
  {
    name: "UP Students' Theater Arts Guild for Education (UPSTAGE)",
    role: 'Member',
    period: '2023 – 2024',
    org: 'University of the Philippines Cebu',
    bullets: [
      'Engages in stage productions, outreach shows, and collaborative projects.',
      'Aims to educate audiences, amplify marginalized voices, and inspire social dialogue through the arts.',
      'Produces performances that promote cultural appreciation, critical thinking, and social responsibility.',
    ],
  },
  {
    name: 'DOST sa UP Cebu',
    role: 'Member',
    period: 'Nov 2023 – Jul 2025',
    org: 'University of the Philippines Cebu',
    bullets: [
      'Participated in seminars, workshops, and academic activities organized for DOST scholars.',
      'Engaged in meetings and discussions to stay informed on scholarship programs, opportunities, and community projects.',
    ],
  },
  {
    name: 'Angat Kabataan Cebu',
    role: 'Volunteer',
    period: 'Jan 2022 – Jun 2023',
    org: '',
    bullets: [
      'Facilitated educational workshops for underprivileged youth through art.',
      'Collaborated with local communities and other organizations to organize several charity events and donation drives around Cebu City.',
    ],
  },
  {
    name: 'MSHS Youth for Environment School Organization (YES-O)',
    role: 'Peace Officer',
    period: '2020 – 2021',
    org: 'Minglanilla Science High School',
    bullets: [
      'Assisted in maintaining order during activities and provided general support to the organization.',
      'Contributed by creating captions for official social media postings.',
    ],
  },
];

// ─── LANGUAGES ─────────────────────────────────────────────
export const languages = [
  { name: 'Cebuano', level: 'Native or Bilingual Proficiency', note: '' },
  { name: 'English',  level: 'Native or Bilingual Proficiency', note: '' },
  { name: 'Filipino', level: 'Native or Bilingual Proficiency', note: '' },
  { name: 'Korean',   level: 'Limited Working Proficiency',     note: 'Duolingo Score 65 · Mar 2026' },
];
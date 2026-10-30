export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Darshan Sreenam Jawalkar',
  displayName: 'Darshan',
  firstName: 'DARSHAN',
  seriesTag: 'DARSHAN.FLIX',
  originalLabel: 'A DARSHAN ORIGINAL',
  role: 'Software Engineer & Backend Specialist',
  tagline: ['Software Engineer', 'Low-Latency Microservices', 'GenAI Automation'],
  intro:
    'Software Engineer with Cognizant experience and a B.Tech in CSE (CGPA 9.14), specializing in robust Java backends, high-performance REST APIs, and production-grade GenAI systems. Recognized as a Top Performer, I enjoy designing modular service frameworks and distributed architectures that drive measurable efficiency gains. Actively seeking full-time SDE and backend roles.',
  location: 'Tirupati, India',
  email: 'darshanj590@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/sreenamdarshanjawalkar-48021a283',
    github: 'https://github.com/JSREENAMDARSHAN',
  },
  resumePdf: '/assets/darshan_amazon_sde1_resume.pdf',
  portrait: {
    src: '/assets/profile.png',
    srcSet: '/assets/profile.png 1100w',
    alt: 'Portrait of Darshan Jawalkar',
  },
  interests: ['Backend Engineering', 'Distributed Systems', 'GenAI Automation'],
};

export const education = [
  {
    school: 'Sree Vidyanikethan Engineering College',
    place: 'Tirupati, India',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2020 – 2024',
    score: 'CGPA 9.14 / 10.0',
  },
];

export const experience = [
  {
    company: 'Cognizant Technology Solutions',
    role: 'Software Engineer',
    place: 'Chennai, India',
    period: 'Oct 2024 – Jul 10, 2026',
    points: [
      'Built 2 production GenAI tools using Python and LLM APIs, automating complex test case scenarios and cutting manual creation effort by 40–50%.',
      'Engineered a modular Java service framework from scratch featuring ThreadLocal parallel execution context isolation, driving 100+ production workflows with ~40% efficiency gains.',
      'Optimized data pipelines and caching across PostgreSQL and Couchbase databases, eliminating sync discrepancies.',
      'Awarded Top Performer Recognition for contributions to backend frameworks and production GenAI tool deployment.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  image?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'react-product-dashboard',
    title: 'React Product Dashboard',
    year: '2026',
    genre: 'Frontend • REST APIs • CI/CD',
    logline: 'High-performance responsive dashboard consuming RESTful backend services with real-time state filtering.',
    stack: ['React.js', 'REST APIs', 'Netlify', 'GitHub Actions'],
    build: [
      'Engineered a high-performance reactive frontend consuming RESTful backend services with real-time state filtering.',
      'Implemented automated CI/CD deployment via GitHub Actions and Netlify integration.',
    ],
    features: [
      'Real-time state filtering',
      'REST API integration',
      'Modular component architecture',
      'Automated CI/CD pipeline',
    ],
    metrics: [
      { value: 'Sub-second', label: 'product filtering' },
      { value: 'Responsive', label: 'desktop and mobile layouts' },
      { value: 'CI/CD', label: 'automated Netlify deployments' },
    ],
    github: 'https://github.com/JSREENAMDARSHAN/react-product-dashboard',
    live: 'https://leafy-klepon-fcb0ed.netlify.app/',
    image: '/assets/React%20Dashboard%20Showcase.png',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'task-manager-microservice',
    title: 'Task Manager Microservice API',
    year: '2026',
    genre: 'Backend • Spring Boot • Security',
    logline: 'Robust Spring Boot backend featuring JWT authentication, role-based access control, and robust testing.',
    stack: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'Spring Security', 'JUnit 5'],
    build: [
      'Developed a scalable Spring Boot backend with Spring Security JWT authentication and RBAC.',
      'Configured database indexing and comprehensive unit testing coverage using JUnit and Mockito.',
    ],
    features: [
      'JWT Authentication & RBAC',
      'PostgreSQL database integration',
      'RESTful endpoints with validation',
      'Comprehensive unit testing',
    ],
    metrics: [
      { value: 'JWT + RBAC', label: 'secured API access' },
      { value: 'JUnit 5', label: 'unit testing' },
    ],
    github: 'https://github.com/JSREENAMDARSHAN/taskmanager_api',
    image: '/assets/Task%20Manager%20API%20Showcase.png',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'top-performer',
    title: 'Top Performer Recognition',
    org: 'Cognizant Technology Solutions',
    detail: 'Awarded for exceptional contributions to backend frameworks and production GenAI tool deployment.',
    laurel: 'Award',
  },
  {
    id: 'cgpa',
    title: 'B.Tech CSE Graduate',
    org: 'Computer Science & Engineering',
    detail: 'Graduated with a strong 9.14 CGPA.',
    laurel: 'Academic Excellence',
  },
  {
    id: 'genai-tools',
    title: '2 Production GenAI Tools',
    org: 'Cognizant Enterprise Systems',
    detail: 'Automated test scenario generation cutting manual effort by 40–50%.',
    laurel: 'Innovation',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Oracle / Java', name: 'Java Certified Foundations Associate' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    subtitle: 'Java & Microservices',
    skills: [
      { name: 'Java 17', mono: 'Jv', note: 'Core' },
      { name: 'Spring Boot 3', mono: 'Sb' },
      { name: 'RESTful APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'ThreadLocal Concurrency', mono: 'Th' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    subtitle: 'Python & LLM Orchestration',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'GenAI & LLMs', mono: 'Ai' },
      { name: 'Prompt Engineering', mono: 'Pr' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Caching',
    subtitle: 'Databases & Performance',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Couchbase', mono: 'Cb' },
      { name: 'Redis Caching', mono: 'Rd' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Quality',
    subtitle: 'Shipping & Testing',
    skills: [
      { name: 'Azure DevOps CI/CD', mono: 'Az' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'JUnit 5 & Mockito', mono: 'Ut' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Java 17': ['Cognizant Framework Development', 'ThreadLocal Concurrency'],
  'Spring Boot 3': ['Microservices & Enterprise APIs'],
  'Python': ['Production GenAI Tools & LLM Automation'],
  PostgreSQL: ['Data Pipeline Optimization'],
  Couchbase: ['Database Caching & Sync'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#e50914' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Academic Foundation',
    period: '2020 – 2024',
    synopsis: 'Computer Science and Engineering at Sree Vidyanikethan Engineering College, completed with a 9.14 CGPA.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'B.Tech in CSE',
        description: 'Completed a Bachelor of Technology in Computer Science and Engineering at Sree Vidyanikethan Engineering College with a 9.14 CGPA.',
        tags: ['CSE', '9.14 CGPA'],
        runtime: '2020 – 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enterprise Impact',
    period: '2024 – 2026',
    synopsis: 'Software engineering at Cognizant, delivering Java frameworks, production GenAI tools, and measurable workflow improvements.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Software Engineer',
        description: 'Built two production GenAI tools, engineered a modular Java framework serving over 100 workflows, and earned Top Performer Recognition.',
        tags: ['GenAI', 'Java Framework', 'Top Performer'],
        runtime: 'Oct 2024 – Jul 10, 2026',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Experience', title: 'Software Engineer', detail: 'Cognizant · Oct 2024–Jul 2026', palette: crimson },
  { label: 'Core Expertise', title: 'Java & Spring Boot', detail: 'High-throughput microservices', palette: amber },
  { label: 'AI Automation', title: '2 GenAI Tools', detail: '40–50% reduction in manual effort', palette: ocean },
  { label: 'Academic Standing', title: '9.14 CGPA', detail: 'B.Tech Computer Science · SVEC', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export type ProfileId = 'darshan' | 'recruiter' | 'developer';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export type ProfileView = {
  tagline: string;
  summary: string;
  highlightsTitle: string;
  highlightsKicker: string;
  highlights: TopPick[];
  introSlides: IntroSlide[];
};

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
  view: ProfileView;
}[] = [
  {
    id: 'darshan',
    name: 'Darshan',
    blurb: 'The complete portfolio series',
    color: '#e50914',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
    view: {
      tagline: 'Software Engineer · Backend Specialist · GenAI Automation',
      summary: profile.intro,
      highlightsTitle: 'Career Highlights',
      highlightsKicker: 'The complete portfolio',
      highlights: topPicks,
      introSlides: [
        {
          kicker: 'The Engineer',
          title: 'Darshan Sreenam Jawalkar',
          lines: ['Software Engineer & Backend Specialist', 'Building Java backends, high-performance APIs, and GenAI systems'],
          chips: ['Java 17', 'Spring Boot 3', 'Python'],
        },
        {
          kicker: 'The Impact',
          title: 'Built for Production',
          lines: ['2 production GenAI tools', '100+ workflows powered by a modular Java framework', 'Top Performer Recognition'],
        },
      ],
    },
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, metrics & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
    view: {
      tagline: 'Open to SDE roles · Proven production impact',
      summary:
        'Software Engineer with measurable enterprise results: automated test-case creation by 40–50%, enabled 100+ production workflows, and earned Cognizant Top Performer Recognition. Now pursuing full-time SDE and backend opportunities.',
      highlightsTitle: 'Proof of Impact',
      highlightsKicker: 'Recruiter view · outcomes first',
      highlights: [
        { label: 'Automation', title: '40–50%', detail: 'Less manual test-case creation', palette: ocean },
        { label: 'Production Scale', title: '100+ Workflows', detail: 'Powered by a modular Java framework', palette: crimson },
        { label: 'Recognition', title: 'Top Performer', detail: 'Cognizant Technology Solutions', palette: amber },
        { label: 'Education', title: '9.14 CGPA', detail: 'B.Tech Computer Science · SVEC', palette: jade },
      ],
      introSlides: [
        {
          kicker: 'Candidate Snapshot',
          title: 'Software Engineer',
          lines: ['Backend engineering and GenAI automation experience', 'Seeking full-time SDE and backend roles'],
          chips: ['Java', 'Spring Boot', 'Python'],
        },
        {
          kicker: 'Measured Outcomes',
          title: 'Enterprise Impact',
          lines: ['40–50% less manual test-case creation', '100+ production workflows supported', 'Cognizant Top Performer Recognition'],
        },
      ],
    },
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Systems, architecture & code first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
    view: {
      tagline: 'Java 17 · Spring Boot · Distributed systems',
      summary:
        'Backend-focused engineer who builds modular Java services, secure Spring Boot APIs, and data workflows. Explore the implementation details across a ThreadLocal-isolated framework, a JWT-protected task API, and a responsive REST-powered dashboard.',
      highlightsTitle: 'Systems & Builds',
      highlightsKicker: 'Developer view · architecture first',
      highlights: [
        { label: 'Framework', title: 'ThreadLocal', detail: 'Isolated parallel execution context', palette: crimson },
        { label: 'Scale', title: '100+ Workflows', detail: 'Driven by modular Java services', palette: amber },
        { label: 'API Security', title: 'JWT + RBAC', detail: 'Task Manager Microservice API', palette: ocean },
        { label: 'Frontend', title: 'React Dashboard', detail: 'REST integration · responsive · CI/CD', palette: jade },
      ],
      introSlides: [
        {
          kicker: 'Architecture',
          title: 'Modular Java Services',
          lines: ['ThreadLocal execution-context isolation', 'Supporting 100+ production workflows', 'Approximately 40% efficiency gains'],
          chips: ['Java 17', 'Spring Boot 3', 'Microservices'],
        },
        {
          kicker: 'Project Builds',
          title: 'APIs & Interfaces',
          lines: ['JWT and RBAC-secured task manager API', 'REST-powered product dashboard with automated CI/CD'],
          chips: ['PostgreSQL', 'JUnit 5', 'GitHub Actions'],
        },
      ],
    },
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Overview & Profile', palette: violet },
  journey: { nav: 'Experience', card: 'Work Experience', meta: 'Cognizant · 2024–2026', palette: amber },
  originals: { nav: 'Systems', card: 'Featured Projects', meta: 'Dashboards & APIs', palette: crimson },
  picks: { nav: 'Highlights', card: 'Top Highlights', meta: 'Key Achievements', palette: jade },
  skills: { nav: 'Arsenal', card: 'Technical Arsenal', meta: 'Backend & AI Stack', palette: ocean },
  moments: { nav: 'Awards', card: 'Recognition & Awards', meta: 'Top Performer', palette: crimson },
  story: { nav: 'Resume', card: 'Resume & Contact', meta: 'Download PDF', palette: violet },
};
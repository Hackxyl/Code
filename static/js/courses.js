// ── COURSES DATA ──
const courses = [
  {
    tag: 'Web Development',
    title: 'Full-Stack Web Dev Bootcamp',
    desc: 'HTML, CSS, JavaScript, React & Node.js. Build 5 real projects while your instructor guides every step.',
    les: '48 lessons', hrs: '36 hours',
    price: 'KES 8,500', orig: 'KES 12,000', disc: '–KES 3,500',
    meta: '48 lessons · 36 hours · Certificate',
    emoji: '🌐', bg: 'linear-gradient(135deg,#0d9488,#0891b2)',
    level: 'Beginner → Pro', badge: 'hot', badgeText: '🔥 Hot',
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
    stars: '★★★★★ 4.9'
  },
  {
    tag: 'React & Next.js',
    title: 'React & Next.js Deep Dive',
    desc: 'Go from React basics to production-ready Next.js apps with SSR, TypeScript, and deployment.',
    les: '32 lessons', hrs: '24 hours',
    price: 'KES 6,500', orig: 'KES 9,000', disc: '–KES 2,500',
    meta: '32 lessons · 24 hours · Certificate',
    emoji: '⚛️', bg: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
    level: 'Intermediate', badge: 'new', badgeText: '✨ New',
    tags: ['React', 'Next.js', 'TypeScript'],
    stars: '★★★★★ 4.9'
  },
  {
    tag: 'Python',
    title: 'Python for Beginners',
    desc: 'The friendliest way to learn Python. Variables, loops, functions, and real projects — zero experience needed.',
    les: '28 lessons', hrs: '20 hours',
    price: 'KES 4,500', orig: 'KES 7,000', disc: '–KES 2,500',
    meta: '28 lessons · 20 hours · Certificate',
    emoji: '🐍', bg: 'linear-gradient(135deg,#f59e0b,#ef4444)',
    level: 'Beginner Friendly', badge: 'top', badgeText: '⭐ Top Rated',
    tags: ['Python', 'Scripting', 'Automation'],
    stars: '★★★★★ 5.0'
  },
  {
    tag: 'Mobile Dev',
    title: 'Mobile Apps with React Native',
    desc: 'Build iOS & Android apps from scratch and publish to both app stores. Build a real app together.',
    les: '36 lessons', hrs: '28 hours',
    price: 'KES 7,000', orig: 'KES 10,000', disc: '–KES 3,000',
    meta: '36 lessons · 28 hours · Certificate',
    emoji: '📱', bg: 'linear-gradient(135deg,#0891b2,#6366f1)',
    level: 'Intermediate', badge: '', badgeText: '',
    tags: ['React Native', 'Expo', 'Mobile'],
    stars: '★★★★½ 4.8'
  },
  {
    tag: 'AI & ML',
    title: 'AI & Machine Learning with Python',
    desc: 'Neural networks, model training, and building real AI-powered apps. Hands-on with real datasets from day one.',
    les: '40 lessons', hrs: '32 hours',
    price: 'KES 9,000', orig: 'KES 13,000', disc: '–KES 4,000',
    meta: '40 lessons · 32 hours · Certificate',
    emoji: '🤖', bg: 'linear-gradient(135deg,#166534,#0d9488)',
    level: 'Intermediate → Advanced', badge: 'new', badgeText: '✨ New',
    tags: ['Python', 'TensorFlow', 'scikit-learn'],
    stars: '★★★★★ 4.9'
  },
  {
    tag: 'Databases',
    title: 'Databases & SQL Mastery',
    desc: 'SQL from basics to advanced queries, joins, and indexes. Connect your database to real web apps.',
    les: '24 lessons', hrs: '18 hours',
    price: 'KES 4,000', orig: 'KES 6,500', disc: '–KES 2,500',
    meta: '24 lessons · 18 hours · Certificate',
    emoji: '🗄️', bg: 'linear-gradient(135deg,#9a3412,#b45309)',
    level: 'Beginner Friendly', badge: 'hot', badgeText: '🔥 Hot',
    tags: ['SQL', 'MySQL', 'PostgreSQL'],
    stars: '★★★★★ 4.9'
  }
];

// ── CURRICULUM MODULES ──
const modules = [
  {
    title: 'Module 1 — Getting Started',
    lessons: [
      { n: 'Welcome & Course Overview', t: 'video', d: '20 min', f: true },
      { n: 'Setting Up VS Code & Tools', t: 'video', d: '30 min', f: true },
      { n: 'How Live Sessions Work', t: 'video', d: '10 min', f: false }
    ]
  },
  {
    title: 'Module 2 — HTML & CSS',
    lessons: [
      { n: 'HTML Structure & Semantic Tags', t: 'video', d: '45 min', f: false },
      { n: 'CSS Properties & Selectors', t: 'video', d: '50 min', f: false },
      { n: 'Flexbox & Grid Layouts', t: 'live', d: '1h', f: false },
      { n: 'Quiz: HTML & CSS', t: 'quiz', d: '15 min', f: false },
      { n: 'Project: Personal Webpage', t: 'project', d: '1.5h', f: false }
    ]
  },
  {
    title: 'Module 3 — JavaScript',
    lessons: [
      { n: 'Variables, Types & Operators', t: 'video', d: '55 min', f: false },
      { n: 'Functions & Scope', t: 'live', d: '1h', f: false },
      { n: 'DOM Manipulation & Events', t: 'video', d: '50 min', f: false },
      { n: 'Async JS & APIs', t: 'video', d: '1h 10min', f: false },
      { n: 'Project: Interactive Quiz App', t: 'project', d: '2h', f: false }
    ]
  },
  {
    title: 'Module 4 — React',
    lessons: [
      { n: 'React Fundamentals & JSX', t: 'video', d: '1h', f: false },
      { n: 'State, Props & Hooks', t: 'live', d: '1.5h', f: false },
      { n: 'React Router & Navigation', t: 'video', d: '45 min', f: false },
      { n: 'Project: React App', t: 'project', d: '3h', f: false }
    ]
  },
  {
    title: 'Module 5 — Backend & Databases',
    lessons: [
      { n: 'Node.js & Express Basics', t: 'video', d: '1h', f: false },
      { n: 'REST APIs', t: 'live', d: '1.5h', f: false },
      { n: 'MongoDB & Mongoose', t: 'video', d: '1h', f: false },
      { n: 'Final Project: Full-Stack App', t: 'project', d: '4h', f: false }
    ]
  }
];

import type { Contact, Education, Experience, Profile, Skill } from '../types/resume'

export const profile: Profile = {
  firstName: 'Kantee',
  lastName: 'Charoensasin',
  nickname: 'OMP',
  title: 'Mobile Developer',
  location: 'Bangkok, Thailand',
  // Drop a photo at public/profile.jpg and set this to '/profile.jpg'
  photo: '/profile.jpg',
  summary:
    'Mobile app developer with strong experience across native and cross-platform environments. ' +
    'Skilled in iOS and Android development, delivering solutions that align with customer requirements ' +
    'and business goals. Capable in front-end web development using modern JavaScript frameworks ' +
    'including React and Vue, with an interest in innovation and practical problem-solving.',
}

export const contact: Contact = {
  phone: '+668 358 7941',
  email: 'kantee.ch@gmail.com',
  location: 'Bangkok, Thailand',
  line: 'kantee2540',
}

export const experience: Experience[] = [
  {
    company: 'Clicknext',
    role: 'Mobile Developer',
    period: 'Sep 2022 – Present',
    current: true,
    highlights: [
      'Create, develop and maintain mobile apps built with Flutter or React Native to meet customer requirements and drive customer business.',
      'Use native mobile tooling to build and deliver apps to customers, and develop native mobile apps for both iOS and Android.',
      'Collaborate on developing and maintaining front-end web applications built with Vue.js.',
      'Build automation with Microsoft Power Automate to report daily system health to a Microsoft Teams group chat.',
      'Design mobile and web application screens in Figma and manage the project’s component library.',
    ],
    tags: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Vue.js', 'Power Automate', 'Figma'],
  },
  {
    company: 'Techno Brave Asia',
    role: 'JavaScript Engineer',
    period: 'Feb 2022 – Aug 2022',
    highlights: [
      'Develop and maintain a metaverse using A-Frame (JavaScript) to build virtual worlds for customers.',
      'Create and develop back-end systems using JavaScript frameworks.',
    ],
    tags: ['A-Frame', 'JavaScript', 'Node.js'],
  },
  {
    company: 'WTC Computer',
    role: 'Mobile Developer',
    period: 'Oct 2020 – Feb 2022',
    highlights: [
      'Create and develop mobile apps with React Native to meet customer and company needs.',
      'Develop and maintain the existing back-end connected to the mobile app, using Java Spring Boot with PostgreSQL.',
      'Build Android applications for devices with specialized hardware, integrating the hardware vendor’s SDK.',
    ],
    tags: ['React Native', 'Android', 'Spring Boot', 'PostgreSQL'],
  },
]

export const skills: Skill[] = [
  { name: 'Flutter / Dart', icon: '📱', desc: 'Cross-platform apps with a single codebase.' },
  { name: 'React Native', icon: '⚛️', desc: 'JavaScript / TypeScript mobile apps.' },
  { name: 'Native iOS & Android', icon: '🛠️', desc: 'Swift and Kotlin for platform-native work.' },
  { name: 'Vue.js & React', icon: '🌐', desc: 'Modern front-end web development.' },
  { name: 'Figma UX/UI', icon: '🎨', desc: 'Screen design and component management.' },
  { name: 'Power Automate', icon: '⚙️', desc: 'Workflow automation with Microsoft 365.' },
]

export const education: Education[] = [
  {
    school: 'Thai-Nichi Institute of Technology',
    degree: 'Master’s Degree',
    field: 'Information Technology',
    period: '2020 – 2025',
  },
  {
    school: 'Thai-Nichi Institute of Technology',
    degree: 'Bachelor’s Degree',
    field: 'Multimedia Technology',
    period: '2016 – 2020',
  },
]

export const languages: string[] = ['English', 'Thai']

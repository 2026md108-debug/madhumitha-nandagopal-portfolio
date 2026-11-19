export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'skills', label: 'Skills & interests' },
  { id: 'activities', label: 'Activities' },
  { id: 'contact', label: 'Contact' },
]

export const education = [
  {
    id: 'medical-school',
    date: '[Start Year] — Present',
    institution: '[Medical University Name]',
    qualification: '[Medical degree / programme]',
    note: 'Current medical studies · [City, Country]',
    highlights: ['Medical education', 'In progress'],
  },
  {
    id: 'previous-education',
    date: '[Start Year] — [End Year]',
    institution: '[Previous School Name]',
    qualification: '[School qualification or programme]',
    note: 'Previous education · [City, Country]',
    highlights: ['Add qualification', 'Add achievement'],
  },
]

export type PortfolioProject = {
  id: string
  category: string
  date: string
  title: string
  description: string
  subject: string
  image?: string
  imageAlt?: string
  href?: string
}

export type PortfolioCredential = {
  id: string
  type: string
  title: string
  issuer: string
  date: string
  image?: string
  imageAlt?: string
  documentUrl?: string
}

export type PortfolioActivity = {
  id: string
  type: string
  title: string
  description: string
  status: string
}

export type PortfolioReflectionStage = {
  title: string
  content: string
}

export const competencyExperience = {
  title: 'World Anatomy Day – Plank Competition',
  date: '15 October 2026',
  institution: 'Gulf Medical University',
  domain: 'Collaborator, Innovator & Leader',
  tagline: 'Teamwork, leadership, and thoughtful improvement.',
  description:
    'As part of a team, I helped organise a plank competition for World Anatomy Day. The activity connected anatomy with movement by introducing participants to the abdominal muscles involved in a plank. My contributions included taking part in the planning process, preparing the display boards, and managing the leaderboard.',
  reflection: [
    {
      title: 'Description',
      content:
        'On 15 October 2026, I took part in the World Anatomy Day event at GMU. It was my first experience organising a stall independently with my peers. Our team organised a plank competition to demonstrate the abdominal muscles involved in the exercise. I contributed to the planning process, prepared the display boards, and volunteered to manage the leaderboard.',
    },
    {
      title: 'Feelings',
      content:
        'I felt excited to be part of an event that allowed us to share our anatomical knowledge with other students. Taking responsibility for the leaderboard gave me a sense of ownership, and I wanted to make sure the activity remained organised. Seeing students engage with the competition made the experience enjoyable and rewarding.',
    },
    {
      title: 'Evaluation',
      content:
        'The event was a valuable experience because it made learning anatomy more interactive. Explaining the muscles involved in a plank helped connect what we learn in class with a familiar physical activity. Preparing the display boards and managing the leaderboard also gave me a clear way to contribute to the team.',
    },
    {
      title: 'Analysis',
      content:
        'This experience helped me understand how teamwork, communication, and planning contribute to organising an event. Working alongside my peers meant that each person had to take responsibility for their part while remaining aware of the team’s overall goal. It also showed me that leadership can be demonstrated through initiative and reliable contributions, even without a formal title.',
    },
    {
      title: 'Conclusion',
      content:
        'Looking back, I realised that organising an event involves more than completing individual tasks. It requires cooperation, initiative, and responsibility towards a shared goal. I also learned that medical knowledge can be communicated in simple and engaging ways beyond the classroom.',
    },
    {
      title: 'Action Plan',
      content:
        'In future events, I would like to contribute more confidently to planning and coordination, communicate actively with participants, and take on new responsibilities. I would also prepare clear explanations and visual materials in advance so that medical concepts are easier for others to understand.',
    },
  ] satisfies PortfolioReflectionStage[],
}

export const projects: PortfolioProject[] = [
  {
    id: 'coursework',
    category: 'Coursework',
    date: '[Month Year]',
    title: '[Project title]',
    description: 'Add a short overview of the assignment, the question it explored, and what you learned.',
    subject: '[Subject or course]',
  },
  {
    id: 'research',
    category: 'Research & inquiry',
    date: '[Month Year]',
    title: '[Research project title]',
    description: 'Summarize your topic, contribution, and any findings or skills you would like to highlight.',
    subject: '[Research area]',
  },
  {
    id: 'presentation',
    category: 'Presentation',
    date: '[Month Year]',
    title: '[Presentation title]',
    description: 'Describe a medical presentation, seminar, or academic project and the audience it served.',
    subject: '[Subject or event]',
  },
]

export const credentials: PortfolioCredential[] = [
  { id: 'certificate', type: 'CERTIFICATION', title: '[Certificate title]', issuer: '[Issuing organization]', date: '[Year]' },
  { id: 'workshop', type: 'WORKSHOP / SEMINAR', title: '[Workshop or seminar]', issuer: '[Organizing institution]', date: '[Year]' },
  { id: 'achievement', type: 'ACADEMIC ACHIEVEMENT', title: '[Award or accomplishment]', issuer: '[Institution or organization]', date: '[Year]' },
]

export const skillGroups = [
  { name: 'Academic', note: 'KNOWLEDGE & STUDY', items: ['Evidence appraisal', 'Scientific writing', 'Literature review'] },
  { name: 'Technical', note: 'TOOLS & METHODS', items: ['Research methods', 'Data literacy', 'Presentation design'] },
  { name: 'Communication', note: 'WORKING WITH OTHERS', items: ['Active listening', 'Clear communication', 'Collaboration'] },
  { name: 'Areas of interest', note: 'SUBJECTS TO EXPLORE', items: ['Clinical medicine', 'Public health', 'Medical research'] },
]

export const activities: PortfolioActivity[] = [
  {
    id: 'volunteering',
    type: 'VOLUNTEERING',
    title: 'Volunteer experience',
    description: 'Community service, outreach, and volunteer participation.',
    status: 'COMING SOON',
  },
  {
    id: 'student-life',
    type: 'STUDENT LIFE',
    title: 'Student activity or event',
    description: 'Student societies, campus events, and peer activities.',
    status: 'COMING SOON',
  },
  {
    id: 'leadership',
    type: 'LEADERSHIP',
    title: 'Leadership experience',
    description: 'Leadership roles, shared responsibilities, and team contributions.',
    status: 'COMING SOON',
  },
]

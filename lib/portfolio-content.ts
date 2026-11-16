export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'competencies', label: 'Competencies' },
  { id: 'projects', label: 'Research' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'activities', label: 'Activities' },
  { id: 'contact', label: 'Contact' },
]

export type CompetencyEntry = {
  id: string
  title: string
  date?: string
  summary?: string
  image?: string
  imageAlt?: string
  href?: string
  documentUrl?: string
}

const competencyDomainDetails = [
  {
    id: 'medical-expert',
    code: 'ME',
    name: 'Medical Expert',
    description: 'Medical knowledge, clinical reasoning, and applying science to health questions.',
    folders: [
      { id: 'clinical-knowledge', name: 'Clinical knowledge', description: 'Core medical concepts and subject learning.' },
      { id: 'coursework', name: 'Coursework & assignments', description: 'Relevant coursework, assignments, and presentations.' },
      { id: 'case-reflections', name: 'Case reflections', description: 'Learning notes and reflections from case-based study.' },
    ],
  },
  {
    id: 'evidence-based-practitioner',
    code: 'EBP',
    name: 'Evidence-based Practitioner & Scholar',
    description: 'Research, critical appraisal, and scholarly learning.',
    folders: [
      { id: 'research-projects', name: 'Research projects', description: 'Research questions, methods, and project summaries.' },
      { id: 'critical-appraisal', name: 'Critical appraisal', description: 'Literature reviews and evidence appraisal.' },
      { id: 'scholarship', name: 'Presentations & publications', description: 'Academic presentations, abstracts, and publications.' },
    ],
  },
  {
    id: 'patient-care-provider',
    code: 'PCP',
    name: 'Patient Care Provider & Health Advocate',
    description: 'Patient-centered care, health promotion, and advocacy.',
    folders: [
      { id: 'patient-care', name: 'Patient care reflections', description: 'Reflections on respectful, person-centered care.' },
      { id: 'health-promotion', name: 'Health promotion', description: 'Health education and prevention work.' },
      { id: 'advocacy', name: 'Advocacy & outreach', description: 'Patient advocacy and community outreach.' },
    ],
  },
  {
    id: 'communicator',
    code: 'COM',
    name: 'Communicator',
    description: 'Clear, compassionate communication with patients and colleagues.',
    folders: [
      { id: 'patient-communication', name: 'Patient communication', description: 'Examples of clear, empathetic communication.' },
      { id: 'team-communication', name: 'Team communication', description: 'Communication in collaborative learning settings.' },
      { id: 'presentations', name: 'Presentations & feedback', description: 'Talks, presentations, and communication feedback.' },
    ],
  },
  {
    id: 'collaborator-innovator-leader',
    code: 'CIL',
    name: 'Collaborator, Innovator & Leader',
    description: 'Teamwork, leadership, and thoughtful improvement.',
    folders: [
      { id: 'collaborations', name: 'Team collaborations', description: 'Group projects and collaborative work.' },
      { id: 'leadership', name: 'Leadership experiences', description: 'Leadership roles and shared responsibilities.' },
      { id: 'innovation', name: 'Innovation & improvement', description: 'Ideas and projects focused on positive change.' },
    ],
  },
  {
    id: 'professional',
    code: 'PRO',
    name: 'Professional',
    description: 'Ethics, accountability, and professional conduct.',
    folders: [
      { id: 'ethics', name: 'Ethics & professionalism', description: 'Learning and reflections on professional values.' },
      { id: 'professional-reflections', name: 'Professional reflections', description: 'Notes on responsibility, conduct, and growth.' },
      { id: 'training', name: 'Certificates & training', description: 'Relevant certificates and professional development.' },
    ],
  },
  {
    id: 'health-system-proponent',
    code: 'HSP',
    name: 'Health System Proponent',
    description: 'Systems awareness, safety, and improving how care is delivered.',
    folders: [
      { id: 'health-systems', name: 'Health systems', description: 'Learning about healthcare systems and access.' },
      { id: 'quality-safety', name: 'Quality & safety', description: 'Patient safety and quality improvement learning.' },
      { id: 'policy-advocacy', name: 'Policy & advocacy', description: 'Systems-level advocacy and policy interests.' },
    ],
  },
  {
    id: 'self-profession-enhancer',
    code: 'SPE',
    name: 'Self and Profession Enhancer',
    description: 'Reflection, resilience, and continuing professional development.',
    folders: [
      { id: 'reflective-practice', name: 'Reflective practice', description: 'Learning reflections and personal development.' },
      { id: 'wellbeing', name: 'Wellbeing & resilience', description: 'Wellbeing practices and resilience goals.' },
      { id: 'development', name: 'Continuing development', description: 'Skills, goals, and ongoing professional learning.' },
    ],
  },
  {
    id: 'socially-accountable',
    code: 'SA',
    name: 'Socially Accountable',
    description: 'Community engagement, equity, and responsibility to society.',
    folders: [
      { id: 'community-engagement', name: 'Community engagement', description: 'Community activities and partnerships.' },
      { id: 'health-equity', name: 'Health equity', description: 'Learning focused on equity and access to care.' },
      { id: 'service-outreach', name: 'Service & outreach', description: 'Volunteering and community service.' },
    ],
  },
]

export const competencyDomains = competencyDomainDetails.map((domain) => ({
  ...domain,
  folders: domain.folders.map((folder) => ({
    ...folder,
    id: `${domain.id}-${folder.id}`,
    entries: [] as CompetencyEntry[],
  })),
}))

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
  description: string
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
  date: string
  certificateUrl?: string
}

export const projects: PortfolioProject[] = [
  {
    id: 'coursework',
    category: 'Coursework',
    date: 'Month Year',
    title: 'Project title',
    description: 'Coursework and assignments exploring topics from medical study.',
    subject: 'Subject or course',
  },
  {
    id: 'research',
    category: 'Research & inquiry',
    date: 'Month Year',
    title: 'Research project title',
    description: 'Research questions, methods, and evidence related to medical science.',
    subject: 'Research area',
  },
  {
    id: 'presentation',
    category: 'Presentation',
    date: 'Month Year',
    title: 'Presentation title',
    description: 'Medical topics presented to an academic or student audience.',
    subject: 'Subject or event',
  },
]

export const credentials: PortfolioCredential[] = [
  { id: 'certificate', type: 'CERTIFICATION', title: 'Certificate title', description: 'Professional training and certification records.', issuer: 'Issuing organization', date: 'Year' },
  { id: 'workshop', type: 'WORKSHOP / SEMINAR', title: 'Workshop or seminar', description: 'Seminars and workshops connected to medical learning.', issuer: 'Organizing institution', date: 'Year' },
  { id: 'achievement', type: 'ACADEMIC ACHIEVEMENT', title: 'Award or accomplishment', description: 'Recognition of academic progress and accomplishments.', issuer: 'Institution or organization', date: 'Year' },
]

export const activities: PortfolioActivity[] = [
  {
    id: 'volunteering',
    type: 'VOLUNTEERING',
    title: 'Volunteer experience',
    description: 'Community service, outreach, and volunteer participation.',
    date: 'Year or dates',
  },
  {
    id: 'student-life',
    type: 'STUDENT LIFE',
    title: 'Student activity or event',
    description: 'Student societies, campus events, and peer activities.',
    date: 'Year or dates',
  },
  {
    id: 'leadership',
    type: 'LEADERSHIP',
    title: 'Leadership experience',
    description: 'Leadership roles, shared responsibilities, and team contributions.',
    date: 'Year or dates',
  },
]

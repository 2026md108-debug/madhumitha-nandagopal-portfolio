export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'competencies', label: 'Competencies' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Research' },
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

const competencyFolders = [
  { id: 'learning', name: 'Learning & coursework', description: 'Coursework, assignments, and presentations.' },
  { id: 'evidence', name: 'Evidence & research', description: 'Research notes and supporting evidence.' },
  { id: 'reflection', name: 'Reflections & documents', description: 'Learning reflections, feedback, and files.' },
]

const competencyDomainDetails = [
  { id: 'medical-expert', code: 'ME', name: 'Medical Expert', description: 'Medical knowledge, clinical reasoning, and applying science to health questions.' },
  { id: 'evidence-based-practitioner', code: 'EBP', name: 'Evidence-based Practitioner & Scholar', description: 'Research, critical appraisal, and scholarly learning.' },
  { id: 'patient-care-provider', code: 'PCP', name: 'Patient Care Provider & Health Advocate', description: 'Patient-centered care, health promotion, and advocacy.' },
  { id: 'communicator', code: 'COM', name: 'Communicator', description: 'Clear, compassionate communication with patients and colleagues.' },
  { id: 'collaborator-innovator-leader', code: 'CIL', name: 'Collaborator, Innovator & Leader', description: 'Teamwork, leadership, and thoughtful improvement.' },
  { id: 'professional', code: 'PRO', name: 'Professional', description: 'Ethics, accountability, and professional conduct.' },
  { id: 'health-system-proponent', code: 'HSP', name: 'Health System Proponent', description: 'Systems awareness, safety, and improving how care is delivered.' },
  { id: 'self-profession-enhancer', code: 'SPE', name: 'Self and Profession Enhancer', description: 'Reflection, resilience, and continuing professional development.' },
  { id: 'socially-accountable', code: 'SA', name: 'Socially Accountable', description: 'Community engagement, equity, and responsibility to society.' },
]

export const competencyDomains = competencyDomainDetails.map((domain) => ({
  ...domain,
  folders: competencyFolders.map((folder) => ({
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
    title: '[Volunteer experience]',
    description: 'Add the organization, your role, and a detail about the community or cause.',
    date: '[Year or dates]',
  },
  {
    id: 'student-life',
    type: 'STUDENT LIFE',
    title: '[Student activity or event]',
    description: 'Include student societies, events, peer activities, or participation certificates.',
    date: '[Year or dates]',
  },
  {
    id: 'leadership',
    type: 'LEADERSHIP',
    title: '[Leadership experience]',
    description: 'Share a role, responsibility, or experience where you helped bring people together.',
    date: '[Year or dates]',
  },
]

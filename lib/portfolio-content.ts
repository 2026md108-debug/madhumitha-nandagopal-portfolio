export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'competencies', label: 'Competencies' },
  { id: 'projects', label: 'Research' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'activities', label: 'Activities' },
  { id: 'contact', label: 'Contact' },
]

export type CompetencyImage = {
  src: string
  alt: string
}

export type CompetencyEntry = {
  id: string
  title: string
  date?: string
  summary?: string
  image?: string
  imageAlt?: string
  images?: CompetencyImage[]
  imageLayout?: 'stacked' | 'side-by-side'
  href?: string
  documentUrl?: string
}

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

const competencyEvents: Record<string, CompetencyEntry[]> = {
  'collaborator-innovator-leader': [
    {
      id: 'world-anatomy-day-plank-competition',
      title: 'World Anatomy Day · Plank Competition',
      date: '15 October 2026 · Library Foyer, Gulf Medical University',
      summary: 'A peer-organised plank competition designed to engage students while demonstrating the abdominal muscles involved in the exercise. My contributions included planning, preparing the display boards, and managing the competition leaderboard.',
      imageLayout: 'editorial',
      images: [
        { src: '/images/world-anatomy-day-team.jpg', alt: 'The student team holding the World Anatomy Day banner at Gulf Medical University' },
        { src: '/images/world-anatomy-day-leaderboard.jpg', alt: 'Madhumitha writing and managing the plank competition leaderboard' },
        { src: '/images/world-anatomy-day-event.jpg', alt: 'Students taking part in the World Anatomy Day plank competition' },
        { src: '/images/world-anatomy-day-certificate.jpg', alt: 'Certificate of Appreciation awarded to Madhumitha for organising World Anatomy Day' },
      ],
    },
  ],
  'evidence-based-practitioner': [
    {
      id: 'mena-metabolism-congress',
      title: '3rd MENA Congress for Metabolism in Health and Disease',
      date: '02–03 October 2026 · Dubai, United Arab Emirates',
      imageLayout: 'stacked',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21E95D39-63AA-4131-B361-51FF476ABCEF-c016zfWWl9GsSCG44YBSuVwpiDULoF.jpg', alt: 'Madhumitha at the 3rd MENA Congress for Metabolism in Health and Disease' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0429-u6vjwRS5i7U92bmEPMMQD3dynXY6bV.jpg', alt: 'Certificate of attendance for the 3rd MENA Congress for Metabolism in Health and Disease' },
      ],
    },
    {
      id: 'hayat-program',
      title: 'Hayat Program',
      date: '30 September 2026 · Ajman, United Arab Emirates',
      imageLayout: 'stacked',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1264-WgViI4T3sPeEHwi4nTGOiUJq2YuJGQ.jpg', alt: 'Gulf Medical University certificate of participation in the Hayat Program' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1263-hAEH1fvhN4VRfsnjnDRBZzwmEowwUC.jpg', alt: 'Ministry of Health and Prevention certificate of appreciation for the Hayat Program' },
      ],
    },
  ],
  'medical-expert': [
    {
      id: 'patient-assessment-practice',
      title: 'Clinical practice session',
      imageLayout: 'side-by-side',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7F49BDE8-D87D-48AF-B276-309A70010FFD.JPG-iKfkClrxF1eYKx6OJ40RemVqbVoywi.jpeg', alt: 'Clinical skills practice with a patient and supervising clinician' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0167-EECUzArJY9UMtlxLmjw7BQnPgooOc1.jpeg', alt: 'Madhumitha practicing a clinical procedure with a peer' },
      ],
    },
    {
      id: 'clinical-procedure-practice',
      title: 'Clinical procedure practice',
      imageLayout: 'stacked',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/E52A024E-5F28-4471-B38B-DDFE84C03620.JPG-z56mPSSIviAPW4uGRkdd8K3vJhtx5x.jpeg', alt: 'Clinical procedure practice with a supervising clinician' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B7430A71-DBF6-489A-A037-2685C1BE2FC6.JPG-boVRODIq6x0wEXrlrTVhiyti1NUo4x.jpeg', alt: 'Close view of a clinical procedure practice session' },
      ],
    },
    {
      id: 'laboratory-sample-practice',
      title: 'Laboratory sample practice',
      imageLayout: 'side-by-side',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0178-txYBFfHb2bmtmemYn43gX0dmTW67f2.jpeg', alt: 'Madhumitha reviewing a laboratory sample during a practical session' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9946-FaQUTb53FuIpuClMRYwKyjpC2XYiOW.jpeg', alt: 'Close view of sample drops arranged on glass slides' },
      ],
    },
  ],
}

export const competencyDomains = competencyDomainDetails.map((domain) => ({
  ...domain,
  events: competencyEvents[domain.id] ?? [],
  reflectionReport: domain.id === 'collaborator-innovator-leader' ? `On 15 October 2026, I was part of a team that organised a World Anatomy Day event at the Library Foyer of Gulf Medical University. We organised a plank competition to engage students while demonstrating the abdominal muscles involved in the exercise. I participated in planning the event, preparing the display boards and managing the competition leaderboard. It was my first experience helping organise an event with my peers with limited professional assistance, which made the experience both exciting and challenging.

Before the event, I felt enthusiastic about being involved and seeing our ideas come together. At the same time, I felt slightly nervous about whether everything would go according to plan. As the event began and students started showing interest in our activity, I became more confident and comfortable with my responsibilities. Seeing participants enjoy the competition and learn something about anatomy made me feel proud of what our team had organised.

One of the most positive aspects was the cooperation among team members. Everyone contributed in different ways, and preparing the displays gave us an opportunity to communicate our ideas creatively. Managing the leaderboard also helped me understand the importance of staying organised and attentive during an activity. However, I realised that coordinating an event while responding to participants required more preparation and time management than I had initially expected. Some tasks could have been organised more efficiently.

Looking back, I think the event was successful because we worked together, shared responsibilities and remained involved throughout the activity. My contribution to the display boards and leaderboard helped the competition run in an organised manner. I also realised that leadership does not always mean giving instructions; it can involve taking responsibility for a task, supporting others and making sure small details are not overlooked. I could have communicated the competition rules and scoring process more clearly before participants began.

If I organise a similar event again, I will prepare a digital leaderboard in advance and test it before the event. I will also create a written checklist of materials and tasks, allocate time for setting up the displays, and confirm everyone's responsibilities beforehand. Before starting the competition, I will explain the rules and scoring criteria clearly to participants. I would also ask a few volunteers to help manage the participants and collect feedback afterwards. These are practical steps I can take to make future events more organised and engaging.

Overall, this experience helped me recognise the value of teamwork, responsibility and communication. It showed me that even a small student-led activity can create an opportunity for learning while helping me develop skills that will be important in my future medical career.` : '',
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
  {
    id: 'hayat-participation',
    type: 'CERTIFICATION',
    title: 'Hayat Program · Certificate of Participation',
    description: 'Certificate of participation in the Hayat Program.',
    issuer: 'Gulf Medical University',
    date: '2026',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1264-WgViI4T3sPeEHwi4nTGOiUJq2YuJGQ.jpg',
    imageAlt: 'Gulf Medical University Certificate of Participation for the Hayat Program awarded to Madhumitha Nandagopal',
    documentUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1264-WgViI4T3sPeEHwi4nTGOiUJq2YuJGQ.jpg',
  },
  {
    id: 'mena-metabolism-congress',
    type: 'WORKSHOP / SEMINAR',
    title: '3rd MENA Congress for Metabolism',
    description: 'Certificate of attendance at the congress in Dubai.',
    issuer: 'MENA Organization for Rare Diseases',
    date: '02–03 October 2026',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0429-u6vjwRS5i7U92bmEPMMQD3dynXY6bV.jpg',
    imageAlt: 'Certificate of Attendance for the 3rd MENA Congress for Metabolism in Health and Disease 2026',
    documentUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0429-u6vjwRS5i7U92bmEPMMQD3dynXY6bV.jpg',
  },
  {
    id: 'hayat-appreciation',
    type: 'ACADEMIC ACHIEVEMENT',
    title: 'Hayat Program · Certificate of Appreciation',
    description: 'Recognition for contribution to the Hayat Program.',
    issuer: 'Ministry of Health and Prevention',
    date: '30 September 2026',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1263-hAEH1fvhN4VRfsnjnDRBZzwmEowwUC.jpg',
    imageAlt: 'Ministry of Health and Prevention Certificate of Appreciation for contribution to the Hayat Program',
    documentUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1263-hAEH1fvhN4VRfsnjnDRBZzwmEowwUC.jpg',
  },
]

export const activities: PortfolioActivity[] = [
  {
    id: 'volunteering',
    type: 'VOLUNTEERING',
    title: 'Coming Soon',
    description: 'Details about volunteering experiences and community involvement will be added here.',
  },
  {
    id: 'student-life',
    type: 'STUDENT LIFE',
    title: 'Coming Soon',
    description: 'Details about student activities, campus events, and peer experiences will be added here.',
  },
  {
    id: 'leadership',
    type: 'LEADERSHIP',
    title: 'Coming Soon',
    description: 'Details about leadership experiences and team contributions will be added here.',
  },
]

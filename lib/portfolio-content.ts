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
      title: 'World Anatomy Day',
      date: '15 OCTOBER 2026',
      summary: 'I was part of a team that organised a World Anatomy Day event at GMU, where we conducted a plank competition to demonstrate the abdominal muscles involved. I helped with the planning, display boards and leaderboard management, ensuring everyone got their turn and scores were recorded fairly. Seeing so many students participate and enjoy our event made me feel happy and proud of our efforts. It was a fun and memorable experience that taught me the importance of teamwork, responsibility and confidence.',
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
  status: domain.id === 'collaborator-innovator-leader' ? 'completed' as const : undefined,
  events: competencyEvents[domain.id] ?? [],
  reflectionReport: domain.id === 'collaborator-innovator-leader' ? `1. Description
On 15 October 2026, I took part in the World Anatomy Day event at GMU. It was my first experience organising a stall independently with my peers. Our team organised a plank competition to demonstrate the abdominal muscles involved in that particular exercise. My contributions included participating in planning, preparing the display boards and managing the leaderboard. I volunteered to handle the leaderboard, which kept track of participants, making sure everyone got their turn and recording results fairly. I also had to coordinate with my teammates to keep all activities running smoothly.

2. Feelings
At first, I looked forward to this new experience, but I was also unsure about how well I would manage my responsibilities. At times, keeping up with everything happening was quite challenging, particularly when the area became crowded. One instance was when multiple people started asking me questions and, since my teammates were busy entertaining other people, I couldn’t answer everyone properly. However, I somehow managed to respond to all of them since they were, thankfully, patient with me. Despite this, I enjoyed being involved and felt satisfied seeing our efforts come together. The interest shown by all visitors made me feel that our hard work had paid off, even though there were things we could have handled better.

3. Evaluation
One of the best parts of the experience was seeing everyone work together towards a common goal. I particularly enjoyed taking responsibility for the leaderboard and coordinating between different activities. However, managing the increasing crowd and occasional interruptions in communication were challenging. Although the event did not go exactly as planned, I feel we managed it reasonably well for our first independently organised activity.

4. Analysis
This experience made me realise that organising an event involves much more than completing individual responsibilities. Every role is connected, and communication and teamwork are essential to run things smoothly. Managing the leaderboard helped me understand the importance of taking initiative, being responsible and ensuring fairness. I also realised that my communication skills, particularly my public speaking skills, need improvement. Due to my anxiety and stage fright, interacting confidently with larger groups is somewhat difficult for me.

5. Conclusion
Overall, it was an enjoyable and educational experience that taught me about teamwork, responsibility and organisation. Despite the challenges, I am glad we got the opportunity to manage an event ourselves. It helped me recognise my strengths and the areas I need to improve on for future experiences.

6. Action Plan
For future events, I would focus on planning in greater detail, assigning responsibilities in advance and designing a better system for managing crowds. I should also make sure not to underestimate the number of people who might attend, as that was one of our biggest flaws this time. I would also make an effort to improve my public speaking skills. I hope to take up similar responsibilities in the future and use what I learned to become more confident, organised and effective when working with others.` 
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

import Image from 'next/image'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  Mail,
  Microscope,
} from 'lucide-react'
import {
  activities,
  credentials,
  education,
  navigation,
  projects,
  skillGroups,
} from '@/lib/portfolio-content'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  number: string
}

function SectionHeading({ eyebrow, title, description, number }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__main">
        <p className="eyebrow"><span>{number}</span>{eyebrow}</p>
        <h2 id={`${number}-title`}>{title}</h2>
      </div>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__top">
        <a className="wordmark" href="#home" aria-label="Your Name — home">
          <span className="wordmark__mark" aria-hidden="true">YN</span>
          <span className="wordmark__text">[Your Name]<small>MEDICAL STUDENT</small></span>
        </a>
        <a className="header-contact" href="#contact">Let&apos;s connect <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a href={`#${item.id}`} key={item.id}>{item.label}</a>
        ))}
      </nav>
    </header>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ProjectIcon = index === 0 ? BookOpen : index === 1 ? Microscope : ClipboardList

  return (
    <article className="project-card">
      <div className={`project-art project-art--${index + 1}`}>
        {project.image ? (
          <Image src={project.image} alt={project.imageAlt ?? ''} fill sizes="(max-width: 720px) 100vw, 33vw" />
        ) : (
          <>
            <span className="project-art__index">0{index + 1}</span>
            <span className="project-art__seal" aria-hidden="true"><ProjectIcon /></span>
            <span className="project-art__rule" aria-hidden="true" />
            <span className="project-art__caption">{project.category}</span>
          </>
        )}
      </div>
      <div className="project-card__body">
        <div className="card-meta"><span>{project.category}</span><span>{project.date}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card__footer">
          <span>{project.subject}</span>
          {project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : <span className="project-card__arrow" aria-hidden="true"><ArrowRight /></span>}
        </div>
      </div>
    </article>
  )
}

function PortfolioSite() {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero page-width" id="home" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow"><span className="status-dot" />A PERSONAL ACADEMIC PORTFOLIO</p>
            <p className="hero__name">[Your Name]</p>
            <h1 id="hero-title">Learning the art and science of <em>care.</em></h1>
            <p className="hero__intro">Medical student with a growing interest in medicine, healthcare, research, and the lifelong practice of asking better questions.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">Explore my portfolio <ArrowRight aria-hidden="true" /></a>
              <a className="button button--text" href="#contact">Contact me <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="hero__footnote"><span className="hero__footnote-line" />Currently studying at <strong>[University Name]</strong></div>
          </div>
          <div className="hero__visual">
            <div className="portrait-frame">
              <Image
                src="/images/portfolio-portrait.png"
                alt="Replace with a professional portrait of [Your Name]"
                fill
                priority
                sizes="(max-width: 800px) 80vw, 42vw"
                className="portrait-frame__image"
              />
              <div className="portrait-frame__label"><span>01 / PROFILE</span><span>PHOTO PLACEHOLDER</span></div>
            </div>
            <span className="hero__side-note">SCIENCE · SERVICE · CURIOSITY</span>
            <div className="hero__seal" aria-hidden="true"><span>THE PRACTICE OF</span><span>ALWAYS</span><span>LEARNING</span><ArrowDown /></div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" /></a>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="01-title">
          <div className="page-width">
            <SectionHeading number="01" eyebrow="A LITTLE ABOUT ME" title="A human perspective. A curious mind." description="Medicine brings together the questions I love asking and the people I hope to serve. This is the beginning of that story." />
            <div className="about-grid">
              <div className="about-lead">
                <span className="decorative-quote" aria-hidden="true">“</span>
                <p>My interest in medicine grows from the meeting point of science and human experience. I&apos;m drawn to a field where careful listening, evidence, and compassion all matter.</p>
                <span className="about-lead__caption">A perspective in progress</span>
              </div>
              <div className="about-details">
                <article>
                  <span className="detail-index">01</span>
                  <div><h3>Why medicine</h3><p>I hope to understand health more deeply and contribute to care that sees the whole person—not only a diagnosis.</p></div>
                </article>
                <article>
                  <span className="detail-index">02</span>
                  <div><h3>What I&apos;m exploring</h3><p>Healthcare, medical science, research, and the many ways knowledge can make a meaningful difference.</p></div>
                </article>
                <article>
                  <span className="detail-index">03</span>
                  <div><h3>Looking ahead</h3><p>To keep learning, seek thoughtful mentorship, and grow into a capable and compassionate medical professional.</p></div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="education-section section-pad" id="education" aria-labelledby="02-title">
          <div className="page-width">
            <SectionHeading number="02" eyebrow="EDUCATION" title="The foundations so far." description="An evolving record of the places, people, and ideas that have shaped my academic journey." />
            <div className="education-layout">
              <p className="section-aside">My academic journey<br /><span>Curiosity is a good place to begin.</span></p>
              <ol className="timeline">
                {education.map((item) => (
                  <li className="timeline__item" key={item.id}>
                    <span className="timeline__marker" aria-hidden="true"><GraduationCap /></span>
                    <div className="timeline__content">
                      <p className="timeline__date">{item.date}</p>
                      <h3>{item.institution}</h3>
                      <p className="timeline__qualification">{item.qualification}</p>
                      <p className="timeline__note">{item.note}</p>
                      <div className="timeline__tags">{item.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="projects-section section-pad" id="projects" aria-labelledby="03-title">
          <div className="page-width">
            <SectionHeading number="03" eyebrow="ACADEMIC WORK & RESEARCH" title="Questions worth exploring." description="A growing collection of coursework, research, and presentations. Each project can tell a little more about how I think and learn." />
            <div className="projects-grid">
              {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
            </div>
            <p className="editor-note"><span aria-hidden="true">✳</span> Project details are placeholders—replace them with your own work and links.</p>
          </div>
        </section>

        <section className="achievements-section section-pad" id="achievements" aria-labelledby="04-title">
          <div className="page-width">
            <SectionHeading number="04" eyebrow="CERTIFICATIONS & ACHIEVEMENTS" title="Milestones, large and small." description="A place to gather certificates, awards, workshops, seminars, and moments of academic growth." />
            <div className="credentials-grid">
              {credentials.map((item, index) => (
                <article className="credential-card" key={item.id}>
                  <span className="credential-card__number">0{index + 1}</span>
                  {item.image ? (
                    <div className="credential-card__preview"><Image src={item.image} alt={item.imageAlt ?? `${item.title} image`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div>
                  ) : <span className="credential-card__icon" aria-hidden="true"><Award /></span>}
                  <p className="credential-card__type">{item.type}</p>
                  <h3>{item.title}</h3>
                  <p className="credential-card__issuer">{item.issuer} <span>·</span> {item.date}</p>
                  {item.documentUrl ? (
                    <a className="text-link" href={item.documentUrl} target="_blank" rel="noreferrer">View certificate <ArrowUpRight aria-hidden="true" /></a>
                  ) : <span className="credential-card__hint">Add a certificate, image, or document</span>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills" aria-labelledby="05-title">
          <div className="page-width">
            <SectionHeading number="05" eyebrow="SKILLS & INTERESTS" title="A toolkit in the making." description="A thoughtful mix of knowledge, practice, and the curiosity to keep growing." />
            <div className="skills-layout">
              <div className="skills-intro"><span className="skills-mark" aria-hidden="true">+</span><p>Everyone&apos;s path is different. Keep the skills and interests that reflect your own experience, and make this section yours.</p></div>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.name}>
                    <div className="skill-group__heading"><h3>{group.name}</h3><span>{group.note}</span></div>
                    <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                ))}
                <p className="skills-disclaimer">Suggested starting points—not a measure of proficiency.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="activities-section section-pad" id="activities" aria-labelledby="06-title">
          <div className="page-width">
            <SectionHeading number="06" eyebrow="BEYOND THE CLASSROOM" title="Learning happens everywhere." description="Experiences that build community, perspective, and a sense of responsibility beyond the lecture hall." />
            <div className="activities-grid">
              {activities.map((activity, index) => (
                <article className="activity-card" key={activity.id}>
                  <span className="activity-card__index">0{index + 1}</span>
                  <span className="activity-card__icon" aria-hidden="true"><HeartHandshake /></span>
                  <p className="activity-card__type">{activity.type}</p>
                  <h3>{activity.title}</h3>
                  <p className="activity-card__description">{activity.description}</p>
                  <span className="activity-card__status">{activity.status}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-width contact-inner">
            <div>
              <p className="eyebrow"><span>07</span>CONTACT</p>
              <h2 id="contact-title">Good things begin<br />with a <em>conversation.</em></h2>
              <p className="contact-intro">For academic connections, research conversations, or a simple hello, I&apos;d be glad to hear from you.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:your.email@example.com"><span className="contact-link__icon"><Mail aria-hidden="true" /></span><span><small>EMAIL</small>your.email@example.com</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer"><span className="contact-link__icon contact-link__icon--linkedin" aria-hidden="true">in</span><span><small>LINKEDIN</small>Connect professionally</span><ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="contact-bottom"><span>OPEN TO MEANINGFUL CONNECTIONS</span><span>[City, Country]</span></div>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <a className="footer-wordmark" href="#home">[Your Name]<span>Medical student · [University Name]</span></a>
        <p>Built with curiosity, and room to grow.</p>
        <a className="back-to-top" href="#home">Back to top <ArrowUpRight aria-hidden="true" /></a>
      </footer>
    </div>
  )
}

export default PortfolioSite

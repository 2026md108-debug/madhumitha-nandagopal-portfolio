import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  ClipboardList,
  HeartHandshake,
  HeartPulse,
  Mail,
  Microscope,
  Stethoscope,
} from 'lucide-react'
import {
  activities,
  competencyDomains,
  credentials,
  navigation,
  projects,
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
        <a className="wordmark" href="#home" aria-label="Madhumitha Nandagopal — home">
          <span className="wordmark__text">Madhumitha Nandagopal<small>MD PROGRAM · YEAR 1</small></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={`#${item.id}`} key={item.id}>{item.label}</a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </header>
  )
}

function CompetencyDomainCard({ domain }: { domain: (typeof competencyDomains)[number] }) {
  return (
    <Link className="competency-domain" href={`/competencies/${domain.id}`} aria-label={`Open ${domain.name} competency`}>
      <div className="competency-domain__summary">
        <div className="competency-domain__meta"><span>{domain.code}</span><span>COMPETENCY</span></div>
        <h3>{domain.name}</h3>
        <p>{domain.description}</p>
        <span className="competency-domain__action">Open domain <ArrowUpRight aria-hidden="true" /></span>
      </div>
    </Link>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ProjectIcon = index === 0 ? BookOpen : index === 1 ? Microscope : ClipboardList

  return (
    <Link className="project-card" href={`/research/${project.id}`} aria-label={`Open ${project.title}`}>
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
          <span className="project-card__arrow" aria-hidden="true"><ArrowRight /></span>
        </div>
      </div>
    </Link>
  )
}

function PortfolioSite() {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="home-section" id="home" aria-labelledby="hero-title">
          <div className="hero-cover page-width">
            <div className="hero-cover__content">
              <p className="eyebrow hero-cover__eyebrow"><span className="status-dot" />PERSONAL ACADEMIC PORTFOLIO</p>
              <h1 className="hero__name" id="hero-title">Madhumitha<br />Nandagopal</h1>
              <p className="hero-cover__role"><span>DOCTOR OF MEDICINE (MD PROGRAM)</span><span aria-hidden="true">·</span><span>YEAR 1</span><span aria-hidden="true">·</span><span>GULF MEDICAL UNIVERSITY</span></p>
              <p className="hero-cover__statement">An evolving record of learning, research, and a growing interest in thoughtful, evidence-led care.</p>
              <div className="hero-cover__actions">
                <a className="button button--primary" href="#home-profile">Enter portfolio <ArrowDown aria-hidden="true" /></a>
                <a className="button button--secondary" href="#competencies">View competencies <ArrowUpRight aria-hidden="true" /></a>
                <a className="button button--text" href="#contact">Contact me <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
            <span className="medical-mark" aria-hidden="true"><Stethoscope /><HeartPulse className="medical-mark__heart" /></span>
            <div className="hero-cover__footer">
              <span>MEDICINE · RESEARCH · LEARNING</span>
              <a href="#home-profile">CONTINUE <ArrowDown aria-hidden="true" /></a>
              <span>01 / 02</span>
            </div>
          </div>
          <div className="hero-profile page-width" id="home-profile" role="group" aria-labelledby="hero-profile-title">
            <div className="hero-profile__copy">
              <p className="eyebrow">ABOUT THE STUDENT</p>
              <h2 id="hero-profile-title">Curiosity, perspective, and care.</h2>
              <p className="hero-profile__intro">A Year 1 Doctor of Medicine (MD Program) student at Gulf Medical University, with growing interests in medicine, healthcare, research, and continuous learning.</p>
              <div className="medical-pulse" aria-hidden="true">
                <svg viewBox="0 0 94 24" fill="none"><path d="M1 12H28L35 12L41 5L47 19L54 8L60 12H93" /></svg>
              </div>
              <h3 className="hero-profile__subhead">Areas of interest</h3>
              <ul className="hero-profile__interests">
                <li>Medicine &amp; healthcare</li>
                <li>Research &amp; evidence</li>
                <li>Patient-centered care</li>
                <li>Continuous learning</li>
              </ul>
              <dl className="hero-profile__details">
                <div><dt>PROGRAMME</dt><dd>Doctor of Medicine (MD Program)</dd></div>
                <div><dt>YEAR</dt><dd>Year 1</dd></div>
                <div><dt>UNIVERSITY</dt><dd>Gulf Medical University</dd></div>
              </dl>
              <a className="hero-profile__about-link" href="#about">Continue to about <ArrowRight aria-hidden="true" /></a>
            </div>
            <div className="hero-profile__visual">
              <figure className="portrait-frame">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-17%20at%2012.19.40%20AM-HSGgvwJOmOdQByf9b1gFmM4p5mWsNY.jpeg"
                  alt="Madhumitha Nandagopal in a white coat at Gulf Medical University"
                  fill
                  priority
                  sizes="(max-width: 800px) 85vw, 42vw"
                  className="portrait-frame__image"
                />
                <figcaption className="portrait-frame__label"><span>MEDICAL STUDENT</span><span>AJMAN, UNITED ARAB EMIRATES</span></figcaption>
              </figure>
            </div>
            <div className="hero-profile__footer">
              <span>02 / 02</span>
              <a href="#about">CONTINUE TO PORTFOLIO <ArrowDown aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="01-title">
          <div className="page-width">
            <SectionHeading number="01" eyebrow="A LITTLE ABOUT ME" title="A human perspective. A curious mind." description="Medicine brings together the questions I love asking and the people I hope to serve. This is the beginning of that story." />
            <div className="about-grid">
              <div className="about-lead">
                <p>My interest in medicine grows from the meeting point of science and human experience. I&apos;m drawn to a field where careful listening, evidence, and compassion all matter.</p>
                <span className="about-lead__caption"><HeartPulse aria-hidden="true" /> A perspective in progress</span>
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

        <section className="competencies-section section-pad" id="competencies" aria-labelledby="02-title">
          <div className="page-width">
            <SectionHeading number="02" eyebrow="COMPETENCIES" title="Nine domains. One evolving portfolio." description="Open a domain to view its participation record and closing reflection." />
            <div className="competencies-grid">
              {competencyDomains.map((domain) => <CompetencyDomainCard key={domain.id} domain={domain} />)}
            </div>
          </div>
        </section>

        <section className="projects-section section-pad" id="projects" aria-labelledby="03-title">
          <div className="page-width">
            <SectionHeading number="03" eyebrow="ACADEMIC WORK & RESEARCH" title="Questions worth exploring." description="A growing collection of coursework, research, and presentations. Each project can tell a little more about how I think and learn." />
            <div className="projects-grid">
              {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
            </div>
          </div>
        </section>

        <section className="achievements-section section-pad" id="achievements" aria-labelledby="04-title">
          <div className="page-width">
            <SectionHeading number="04" eyebrow="CERTIFICATE ARCHIVE" title="Certificates and recognition" />
            <div className="credentials-grid">
              {[...credentials].sort((a, b) => {
                const order = ['hayat-appreciation', 'mena-metabolism-congress', 'hayat-participation']
                return order.indexOf(a.id) - order.indexOf(b.id)
              }).map((item) => (
                <a className="credential-card" href={item.documentUrl ?? item.image ?? '#'} target="_blank" rel="noreferrer" key={item.id} aria-label={`View ${item.title}`} style={{ padding: 0 }}>
                  {item.image ? (
                    <div className="credential-card__preview" style={{ height: 335, padding: 8, background: '#f7f6ef' }}>
                      <Image src={item.image} alt={item.imageAlt ?? `${item.title} image`} fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectFit: 'contain' }} />
                    </div>
                  ) : <span className="credential-card__icon" aria-hidden="true"><Award /></span>}
                  <div style={{ padding: '18px 20px 20px' }}>
                    <p className="credential-card__type">{item.type}</p>
                    <h3>{item.title}</h3>
                    <p className="credential-card__issuer">{item.issuer} <span>·</span> {item.date}</p>
                    <span className="text-link">View certificate <ArrowUpRight aria-hidden="true" /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="activities-section section-pad" id="activities" aria-labelledby="05-title">
          <div className="page-width">
            <SectionHeading number="05" eyebrow="BEYOND THE CLASSROOM" title="Learning happens everywhere." description="Experiences that build community, perspective, and a sense of responsibility beyond the lecture hall." />
            <div className="activities-grid">
              {activities.map((activity, index) => (
                <article className="activity-card" key={activity.id}>
                  <span className="activity-card__index">0{index + 1}</span>
                  <span className="activity-card__icon" aria-hidden="true"><HeartHandshake /></span>
                  <p className="activity-card__type">{activity.type}</p>
                  <h3>{activity.title}</h3>
                  <p className="activity-card__description">{activity.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-width contact-inner">
            <div>
              <p className="eyebrow"><span>06</span>CONTACT</p>
              <h2 id="contact-title">Good things begin<br />with a <em>conversation.</em></h2>
              <p className="contact-intro">For academic connections, research conversations, or a simple hello, I&apos;d be glad to hear from you.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:2026md108@mygmu.ac.ae"><span className="contact-link__icon"><Mail aria-hidden="true" /></span><span><small>EMAIL</small>2026md108@mygmu.ac.ae</span><ArrowUpRight aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer"><span className="contact-link__icon contact-link__icon--linkedin" aria-hidden="true">in</span><span><small>LINKEDIN</small>Connect professionally</span><ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="contact-bottom"><span>OPEN TO MEANINGFUL CONNECTIONS</span><span>Ajman, United Arab Emirates</span></div>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <a className="footer-wordmark" href="#home">Madhumitha Nandagopal<span>Doctor of Medicine (MD Program), Year 1 · Gulf Medical University</span></a>
        <p>Built with curiosity, and room to grow.</p>
        <a className="back-to-top" href="#home">Back to top <ArrowUpRight aria-hidden="true" /></a>
      </footer>
    </div>
  )
}

export default PortfolioSite

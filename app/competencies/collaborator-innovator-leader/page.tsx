import Link from 'next/link'
import { ArrowLeft, ImagePlus } from 'lucide-react'
import { competencyExperience } from '@/lib/portfolio-content'

export const metadata = {
  title: 'Collaborator, Innovator & Leader | Medical Student Portfolio',
  description: 'World Anatomy Day participation record and Gibbs reflective report.',
}

export default function CollaboratorInnovatorLeaderPage() {
  return (
    <main className="competency-page">
      <div className="page-width">
        <Link className="competency-back" href="/#activities">
          <ArrowLeft aria-hidden="true" /> Back to portfolio
        </Link>

        <header className="competency-header">
          <p className="eyebrow"><span>COMPETENCY DOMAIN</span></p>
          <h1>{competencyExperience.domain}</h1>
          <p className="competency-header__tagline">{competencyExperience.tagline}</p>
          <div className="competency-domain">
            <span>DOMAIN</span>
            <strong>{competencyExperience.domain}</strong>
          </div>
        </header>

        <section className="competency-record" aria-labelledby="experience-title">
          <div>
            <div className="competency-record__meta">
              <span>{competencyExperience.date}</span>
              <span>{competencyExperience.institution}</span>
            </div>
            <h2 id="experience-title">{competencyExperience.title}</h2>
            <p className="competency-record__description">{competencyExperience.description}</p>
          </div>
          <div
            className="competency-photo-placeholder"
            role="img"
            aria-label="Placeholder for the World Anatomy Day plank competition photograph"
          >
            <ImagePlus aria-hidden="true" />
            <strong>World Anatomy Day</strong>
            <span>Plank Competition · Event photograph to be added</span>
          </div>
        </section>

        <section className="competency-reflection" aria-labelledby="reflection-title">
          <div className="competency-reflection__heading">
            <div>
              <p className="eyebrow"><span>CLOSING REFLECTION</span></p>
              <h2 id="reflection-title">Reflection report</h2>
            </div>
            <span className="competency-reflection__method">Gibbs’ Reflective Cycle</span>
          </div>

          <div className="reflection-grid">
            {competencyExperience.reflection.map((stage, index) => (
              <article className="reflection-stage" key={stage.title}>
                <span className="reflection-stage__number">0{index + 1}</span>
                <h3>{stage.title}</h3>
                <p>{stage.content}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="competency-footer">
          <span>MEDICAL STUDENT PORTFOLIO</span>
          <span>Learning through reflection and experience</span>
        </footer>
      </div>
    </main>
  )
}

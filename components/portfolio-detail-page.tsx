import Image from 'next/image'
import Link from 'next/link'
import { Award, ArrowRight, ArrowUpRight, HeartHandshake, HeartPulse, Stethoscope } from 'lucide-react'
import CompetencyEventCarousel from '@/components/competency-event-carousel'
import type { CompetencyEntry } from '@/lib/portfolio-content'

type DetailMeta = {
  label: string
  value: string
}

export type PortfolioDetailPageProps = {
  kind: 'competency' | 'research' | 'achievement' | 'activity'
  sectionLabel: string
  sectionHref: string
  category: string
  title: string
  description: string
  metadata?: DetailMeta[]
  image?: string
  imageAlt?: string
  resource?: {
    href: string
    label: string
  }
  events?: CompetencyEntry[]
  reflectionReport?: string
  previousCompetency?: { title: string; href: string }
  nextCompetency?: { title: string; href: string }
}

const detailIcons = {
  competency: Stethoscope,
  research: HeartPulse,
  achievement: Award,
  activity: HeartHandshake,
}

export default function PortfolioDetailPage({ detail }: { detail: PortfolioDetailPageProps }) {
  const DetailIcon = detailIcons[detail.kind]
  const isCompetency = detail.kind === 'competency'

  return (
    <main className="detail-page">
      <div className="page-width detail-page__inner">
        <nav className="detail-page__nav" aria-label="Detail page navigation">
          <Link href="/" className="detail-page__brand">Madhumitha Nandagopal</Link>
          <Link href={`/#${detail.sectionHref}`} className="detail-page__back"><ArrowRight aria-hidden="true" /> Back to {detail.sectionLabel}</Link>
        </nav>

        <header className="detail-page__hero">
          <p className="eyebrow">{detail.category}</p>
          <div className="detail-page__title-row">
            <h1>{detail.title}</h1>
            <span className="detail-page__medical-icon" aria-hidden="true"><DetailIcon /></span>
          </div>
          <p className="detail-page__description">{detail.description}</p>
          {detail.metadata?.length ? (
            <dl className="detail-page__metadata">
              {detail.metadata.map((item) => (
                <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
              ))}
            </dl>
          ) : null}
        </header>

        {detail.image ? (
          <figure className="detail-page__image-wrap">
            <Image src={detail.image} alt={detail.imageAlt ?? ''} fill sizes="(max-width: 700px) 100vw, 70vw" />
          </figure>
        ) : null}

        {isCompetency ? (
          <>
            <CompetencyEventCarousel events={detail.events ?? []} />
            <section className="detail-page__section detail-page__reflection" aria-labelledby="reflection-title">
              <p className="eyebrow">CLOSING REFLECTION</p>
              <h2 id="reflection-title">Reflection report</h2>
              {detail.reflectionReport ? (
                <div className="detail-page__reflection-sections">
                  {detail.reflectionReport.split(/(?=^\d+\.\s)/m).filter(Boolean).map((section) => {
                    const [heading, ...paragraph] = section.trim().split('\n')
                    return (
                      <div className="detail-page__reflection-section" key={heading}>
                        <h3>{heading}</h3>
                        <p>{paragraph.join('\n').trim()}</p>
                      </div>
                    )
                  })}
                </div>
              ) : <p className="detail-page__empty">No reflection report recorded yet.</p>}
              <nav className="competency-step-nav" aria-label="Competency navigation">
                {detail.previousCompetency ? (
                  <Link href={detail.previousCompetency.href} className="competency-step-nav__link competency-step-nav__link--previous">
                    <ArrowRight aria-hidden="true" />
                    <span><small>PREVIOUS COMPETENCY</small>{detail.previousCompetency.title}</span>
                  </Link>
                ) : <span />}
                {detail.nextCompetency ? (
                  <Link href={detail.nextCompetency.href} className="competency-step-nav__link competency-step-nav__link--next">
                    <span><small>NEXT COMPETENCY</small>{detail.nextCompetency.title}</span>
                    <ArrowRight aria-hidden="true" />
                  </Link>
                ) : null}
              </nav>
            </section>
          </>
        ) : detail.resource ? (
          <section className="detail-page__section" aria-label="Supporting material">
            <p className="eyebrow">SUPPORTING MATERIAL</p>
            <a className="detail-page__resource" href={detail.resource.href} target="_blank" rel="noreferrer">{detail.resource.label} <ArrowUpRight aria-hidden="true" /></a>
          </section>
        ) : null}
      </div>
    </main>
  )
}

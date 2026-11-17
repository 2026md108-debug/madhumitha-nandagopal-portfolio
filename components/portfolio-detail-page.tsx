import Image from 'next/image'
import Link from 'next/link'
import { Award, ArrowRight, ArrowUpRight, HeartHandshake, HeartPulse, Stethoscope } from 'lucide-react'
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
}

const detailIcons = {
  competency: Stethoscope,
  research: HeartPulse,
  achievement: Award,
  activity: HeartHandshake,
}

function PortfolioEntryCard({ entry }: { entry: CompetencyEntry }) {
  return (
    <article className="detail-entry">
      <div className="detail-entry__heading">
        <h3>{entry.title}</h3>
        {entry.date ? <time>{entry.date}</time> : null}
      </div>
      {entry.image ? <Image src={entry.image} alt={entry.imageAlt ?? ''} width={720} height={420} className="detail-entry__image" /> : null}
      {entry.summary ? <p>{entry.summary}</p> : null}
      <div className="detail-entry__links">
        {entry.documentUrl ? <a href={entry.documentUrl} target="_blank" rel="noreferrer">Open document <ArrowUpRight aria-hidden="true" /></a> : null}
        {entry.href ? <a href={entry.href} target="_blank" rel="noreferrer">View related item <ArrowUpRight aria-hidden="true" /></a> : null}
      </div>
    </article>
  )
}

function CompetencyParticipationArea({ entries }: { entries: CompetencyEntry[] }) {
  return (
    <section className="detail-page__participation" aria-label="Competency participation records">
      <div className="detail-page__participation-label" aria-hidden="true">
        <HeartPulse />
        <span>PARTICIPATION RECORD</span>
      </div>
      {entries.length ? (
        <div className="detail-entry-list">{entries.map((entry) => <PortfolioEntryCard key={entry.id} entry={entry} />)}</div>
      ) : <p className="detail-page__empty">No participation records yet.</p>}
    </section>
  )
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
            <CompetencyParticipationArea entries={detail.events ?? []} />
            <section className="detail-page__section detail-page__reflection" aria-labelledby="reflection-title">
              <p className="eyebrow">CLOSING REFLECTION</p>
              <h2 id="reflection-title">Reflection report</h2>
              {detail.reflectionReport ? <p>{detail.reflectionReport}</p> : <p className="detail-page__empty">No reflection report recorded yet.</p>}
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

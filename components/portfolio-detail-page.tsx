import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import type { CompetencyEntry } from '@/lib/portfolio-content'

type PortfolioFolder = {
  id: string
  name: string
  description: string
  entries: CompetencyEntry[]
}

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
  folders?: PortfolioFolder[]
  events?: CompetencyEntry[]
  reflectionReport?: string
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

function EntryCollection({ title, entries, emptyMessage }: { title: string; entries: CompetencyEntry[]; emptyMessage: string }) {
  return (
    <section className="detail-page__section" aria-label={title}>
      <p className="eyebrow">PORTFOLIO RECORD</p>
      <h2>{title}</h2>
      {entries.length ? (
        <div className="detail-entry-list">{entries.map((entry) => <PortfolioEntryCard key={entry.id} entry={entry} />)}</div>
      ) : <p className="detail-page__empty">{emptyMessage}</p>}
    </section>
  )
}

export default function PortfolioDetailPage({ detail }: { detail: PortfolioDetailPageProps }) {
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
          <h1>{detail.title}</h1>
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
            <section className="detail-page__section" aria-labelledby="detail-folders-title">
              <p className="eyebrow">DOMAIN ARCHIVE</p>
              <h2 id="detail-folders-title">Folders &amp; evidence</h2>
              <div className="detail-folder-list">
                {detail.folders?.map((folder) => (
                  <details className="detail-folder" key={folder.id}>
                    <summary>
                      <span className="folder-mark" aria-hidden="true" />
                      <span className="detail-folder__title"><strong>{folder.name}</strong><small>{folder.description}</small></span>
                      <span className="detail-folder__count">{folder.entries.length.toString().padStart(2, '0')}</span>
                      <ArrowDown aria-hidden="true" />
                    </summary>
                    <div className="detail-folder__body">
                      {folder.entries.length ? (
                        <div className="detail-entry-list">{folder.entries.map((entry) => <PortfolioEntryCard key={entry.id} entry={entry} />)}</div>
                      ) : <p className="detail-page__empty">No entries yet.</p>}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <EntryCollection title="Events & participation" entries={detail.events ?? []} emptyMessage="No events recorded yet." />

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

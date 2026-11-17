import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PortfolioDetailPage, { type PortfolioDetailPageProps } from '@/components/portfolio-detail-page'
import { activities, competencyDomains, credentials, projects } from '@/lib/portfolio-content'

type RouteParams = {
  section: string
  slug: string
}

type PageProps = {
  params: Promise<RouteParams>
}

function getPortfolioDetail(section: string, slug: string): PortfolioDetailPageProps | null {
  if (section === 'competencies') {
    const domain = competencyDomains.find((item) => item.id === slug)
    if (!domain) return null

    return {
      kind: 'competency',
      sectionLabel: 'Competencies',
      sectionHref: 'competencies',
      category: domain.code,
      title: domain.name,
      description: domain.description,
      metadata: [{ label: 'Domain', value: domain.name }],
      folders: domain.folders,
      events: domain.events,
      reflectionReport: domain.reflectionReport,
    }
  }

  if (section === 'research') {
    const project = projects.find((item) => item.id === slug)
    if (!project) return null

    return {
      kind: 'research',
      sectionLabel: 'Research',
      sectionHref: 'projects',
      category: project.category,
      title: project.title,
      description: project.description,
      metadata: [
        { label: 'Subject', value: project.subject },
        { label: 'Date', value: project.date },
      ],
      image: project.image,
      imageAlt: project.imageAlt,
      resource: project.href ? { href: project.href, label: 'Open related research' } : undefined,
    }
  }

  if (section === 'achievements') {
    const credential = credentials.find((item) => item.id === slug)
    if (!credential) return null

    return {
      kind: 'achievement',
      sectionLabel: 'Achievements',
      sectionHref: 'achievements',
      category: credential.type,
      title: credential.title,
      description: credential.description,
      metadata: [
        { label: 'Organization', value: credential.issuer },
        { label: 'Date', value: credential.date },
      ],
      image: credential.image,
      imageAlt: credential.imageAlt,
      resource: credential.documentUrl ? { href: credential.documentUrl, label: 'View certificate' } : undefined,
    }
  }

  if (section === 'activities') {
    const activity = activities.find((item) => item.id === slug)
    if (!activity) return null

    return {
      kind: 'activity',
      sectionLabel: 'Activities',
      sectionHref: 'activities',
      category: activity.type,
      title: activity.title,
      description: activity.description,
      metadata: [{ label: 'Date', value: activity.date }],
      resource: activity.certificateUrl ? { href: activity.certificateUrl, label: 'View participation certificate' } : undefined,
    }
  }

  return null
}

export function generateStaticParams() {
  return [
    ...competencyDomains.map((domain) => ({ section: 'competencies', slug: domain.id })),
    ...projects.map((project) => ({ section: 'research', slug: project.id })),
    ...credentials.map((credential) => ({ section: 'achievements', slug: credential.id })),
    ...activities.map((activity) => ({ section: 'activities', slug: activity.id })),
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { section, slug } = await params
  const detail = getPortfolioDetail(section, slug)

  if (!detail) return { title: 'Portfolio page not found' }

  return {
    title: `${detail.title} — Madhumitha Nandagopal`,
    description: detail.description,
  }
}

export default async function Page({ params }: PageProps) {
  const { section, slug } = await params
  const detail = getPortfolioDetail(section, slug)

  if (!detail) notFound()

  return <PortfolioDetailPage detail={detail} />
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, HeartPulse } from 'lucide-react'
import type { CompetencyEntry } from '@/lib/portfolio-content'

export default function CompetencyEventCarousel({ events }: { events: CompetencyEntry[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (events.length === 0) {
    return (
      <section className="detail-page__participation" aria-label="Competency participation records">
        <div className="detail-page__participation-label" aria-hidden="true">
          <HeartPulse />
          <span>PARTICIPATION RECORD</span>
        </div>
        <p className="detail-page__empty">No participation records yet.</p>
      </section>
    )
  }

  const activeEvent = events[activeIndex]
  const images = activeEvent.images ?? []
  const imageLayout = activeEvent.imageLayout ?? 'side-by-side'

  return (
    <section className="detail-page__participation" aria-label="Competency participation records">
      <div className="detail-page__participation-label" aria-hidden="true">
        <HeartPulse />
        <span>PARTICIPATION RECORD</span>
      </div>
      <div className="competency-event" key={activeEvent.id} aria-live="polite">
        <div className="competency-event__copy">
          <p className="eyebrow">RECORD {String(activeIndex + 1).padStart(2, '0')}</p>
          <h2>{activeEvent.title}</h2>
          {activeEvent.date ? <p className="competency-event__date">{activeEvent.date}</p> : null}
          {activeEvent.summary ? (
            <p className="competency-event__summary">{activeEvent.summary}</p>
          ) : (
            <div className="competency-event__description-space" role="group" aria-label="Description area" />
          )}
          {events.length > 1 ? (
            <div className="competency-event__controls" role="group" aria-label="Competency record navigation">
              <button type="button" onClick={() => setActiveIndex((index) => index - 1)} disabled={activeIndex === 0} aria-label="Previous competency record">
                <ArrowLeft aria-hidden="true" />
                <span>Previous</span>
              </button>
              <span className="competency-event__count" aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} / {String(events.length).padStart(2, '0')}</span>
              <button type="button" onClick={() => setActiveIndex((index) => index + 1)} disabled={activeIndex === events.length - 1} aria-label="Next competency record">
                <span>Next</span>
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </div>
        <div className={`competency-event__gallery competency-event__gallery--${imageLayout}`} role="group" aria-label={`${activeEvent.title} images`}>
          {images.map((image, index) => (
            <figure className="competency-event__image-frame" data-gallery-index={index} key={image.src}>
              <div className="competency-event__image-inner">
                <Image src={image.src} alt={image.alt} fill quality={95} sizes="(max-width: 700px) 90vw, (max-width: 1200px) 42vw, 620px" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

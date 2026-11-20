import Image from 'next/image'
import { HeartPulse } from 'lucide-react'
import type { CompetencyEntry } from '@/lib/portfolio-content'

export default function CompetencyEventCarousel({ events }: { events: CompetencyEntry[] }) {
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

  return (
    <section className="detail-page__participation" aria-label="Competency participation records">
      <div className="detail-page__participation-label" aria-hidden="true">
        <HeartPulse />
        <span>PARTICIPATION RECORDS</span>
      </div>
      <div className="competency-event-list">
        {events.map((event, index) => {
          const images = event.images ?? []
          const imageLayout = event.imageLayout ?? 'side-by-side'

          return (
            <article className="competency-event" key={event.id}>
              <div className="competency-event__copy">
                <p className="eyebrow">RECORD {String(index + 1).padStart(2, '0')}</p>
                <h2>{event.title}</h2>
                {event.date ? <p className="competency-event__date">{event.date}</p> : null}
                {event.summary ? <p className="competency-event__summary">{event.summary}</p> : null}
              </div>
              {images.length ? (
                <div className={`competency-event__gallery competency-event__gallery--${imageLayout}`} role="group" aria-label={`${event.title} images`}>
                  {images.map((image) => (
                    <figure className="competency-event__image-frame" key={image.src}>
                      <div className="competency-event__image-inner">
                        <Image src={image.src} alt={image.alt} fill quality={90} sizes="(max-width: 700px) 90vw, (max-width: 1200px) 42vw, 620px" />
                      </div>
                    </figure>
                  ))}
                </div>
              ) : null}
            </article>
          )
        })}
      </div>
    </section>
  )
}

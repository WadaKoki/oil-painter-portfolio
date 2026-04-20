interface Affiliation {
  label: string
  value: string
}

interface Award {
  year: number
  title: string
  work: string
  badge: string
  featured: boolean
}

interface Artist {
  bio: string[]
  affiliations: Affiliation[]
  awards: Award[]
}

export default function ArtistIntro({ artist }: { artist: Artist }) {
  return (
    <section className="about" id="about">
      <div className="section-head">
        <div className="section-num">— 零壱 / 01</div>
        <h2 className="section-title">作家について<span className="en">About the Artist</span></h2>
        <div className="section-kicker">Biography</div>
      </div>

      <div className="about-grid">
        <div className="about-body">
          {artist.bio.map((para, i) => (
            <p key={i}>
              {i === 0 && <span className="first-char">{para[0]}</span>}
              {i === 0 ? para.slice(1) : para}
            </p>
          ))}
          <dl className="about-affil">
            {artist.affiliations.map(aff => (
              <div className="about-affil-row" key={aff.label}>
                <dt>{aff.label}</dt>
                <dd>{aff.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="awards">
        <div className="awards-title">— 主 な 受 賞 歴 —</div>
        {artist.awards.map(award => (
          <div key={`${award.year}-${award.title}`} className={`award${award.featured ? ' featured' : ''}`}>
            <div className="award-year">{award.year}</div>
            <div className="award-title-text">
              {award.title}
              {award.work && <span className="work">{award.work}</span>}
            </div>
            <div className="award-badge">{award.badge}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

interface Exhibition {
  year: number
  title: string
  venue: string
  type: string
}

export default function ExhibitionList({ exhibitions }: { exhibitions: Exhibition[] }) {
  const group = exhibitions.filter(e => e.type === 'group')
  const solo = exhibitions.filter(e => e.type === 'solo')
  const classes = exhibitions.filter(e => e.type === 'class')

  return (
    <section className="exhibitions" id="exhibitions">
      <div className="section-head">
        <div className="section-num">— 零参 / 03</div>
        <h2 className="section-title">個展・展覧会<span className="en">Exhibitions</span></h2>
        <div className="section-kicker">2018 — 2026</div>
      </div>
      <div className="exh-grid">
        <div className="exh-col">
          <h4>団 体 展　Group Exhibitions</h4>
          {group.map((e, i) => (
            <div className="exh-item" key={i}>
              <div className="exh-year">{e.year}</div>
              <div className="exh-body">
                <span className="title">{e.title}</span>
                <span className="venue">{e.venue}</span>
              </div>
            </div>
          ))}
          <div className="exh-more">… 2007年より出品</div>
          <div className="exh-classes">
            <h4>教 室 活 動　Art Classes</h4>
            {classes.map((e, i) => (
              <div className="exh-item" key={i}>
                <div className="exh-year">{e.year}</div>
                <div className="exh-body">
                  <span className="title">{e.title}</span>
                  <span className="venue">{e.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="exh-col">
          <h4>個 展　Solo Exhibitions</h4>
          {solo.map((e, i) => (
            <div className="exh-item" key={i}>
              <div className="exh-year">{e.year}</div>
              <div className="exh-body">
                <span className="title">{e.title}</span>
                <span className="venue">{e.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

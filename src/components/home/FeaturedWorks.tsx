const STEPS = [
  {
    num: '— i. 邂逅',
    title: '取材',
    en: 'Encountering the Site',
    body: '季節ごとに渓谷を訪れ、水音や光の角度を素描と写真に収める。題材は必ず自ら足を運んだ場所のみを選ぶ。',
  },
  {
    num: '— ii. 構想',
    title: '下絵',
    en: 'Composition',
    body: '木炭で構図を練り、色面の強弱と視線の流れを検討する。一枚の大作に向け十数枚の習作を重ねる。',
  },
  {
    num: '— iii. 下塗',
    title: '地塗り',
    en: 'Underpainting',
    body: '温色の地で画面全体の光量を決める。乾燥を待ちながら、岩肌と水面の量感を徐々に起こしていく。',
  },
  {
    num: '— iv. 仕上',
    title: '重色',
    en: 'Glazing & Finish',
    body: '幾層もの透明色を重ね、水の透明感と紅葉の深みを醸成する。最後に白と群青で光を置き、筆を収める。',
  },
]

export default function FeaturedWorks() {
  return (
    <section className="process" id="process">
      <div className="section-head">
        <div className="section-num">— 零肆 / 04</div>
        <h2 className="section-title">制作の過程<span className="en">Process &amp; Studio</span></h2>
        <div className="section-kicker">In the Atelier</div>
      </div>
      <p className="process-intro">
        一枚の絵は、一度の邂逅から始まる。渓を訪れ、光を見、水の匂いを記憶に刻む。
        アトリエに戻り、幾層もの油と顔料を積み重ねるうちに、その日の空気が画布に立ち上がってくる。
      </p>
      <div className="process-steps">
        {STEPS.map(s => (
          <div className="step" key={s.title}>
            <div className="step-num">{s.num}</div>
            <div className="step-title">{s.title}</div>
            <div className="step-title-en">{s.en}</div>
            <div className="step-body">{s.body}</div>
          </div>
        ))}
      </div>
      <div className="studio-gallery">
        <div data-cap="[ atelier · west light ]" />
        <div data-cap="[ palette ]" />
        <div data-cap="[ sketchbook ]" />
        <div data-cap="[ field study · autumn ]" />
        <div data-cap="[ brushes &amp; linseed ]" />
      </div>
    </section>
  )
}

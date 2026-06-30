interface MatrixRow {
  letter: string
  name: string
  heading: string
  body: string
}

const MATRIX: MatrixRow[] = [
  {
    letter: 'A',
    name: 'Alignment',
    heading: 'Buyer Alignment score',
    body: 'An alignment score derived from the personality assessment with added layers of compatibility, and complementary elements that assists you to win new business. The Alignment score and how to sell playbook is provided to enable you to win more.',
  },
  {
    letter: 'P',
    name: 'Personality',
    heading: 'Who are you, who are they.',
    body: 'Behavioural profiling of each seller and buyer. Understand communication style, decision-making approach, pace, risk tolerance, and interpersonal tendencies. Know your customer know yourself.',
  },
  {
    letter: 'P',
    name: 'Playbook',
    heading: 'How do we win',
    body: 'Understand the sales opportunity and how to win it. Alignify provides a playbook that identifies communication style, pricing sensitivity, drivers, trust architecture addressing the buyers gaps and needs, so you can win more often.',
  },
]

export default function PCCA() {
  return (
    <section className="section pcca-section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The How</span>
          <h2 className="section-h">
            The Alignify <span className="it">model.</span>
          </h2>
          <p className="section-deck">
            A model that turns a sales opportunity into a win.
          </p>
        </div>

        <div className="pcca-matrix">
          {MATRIX.map((m, i) => (
            <article key={i} className="pcca-row">
              <div className="pcca-letter">
                <span className="pcca-letter-big">{m.letter}</span>
                <span className="pcca-letter-name">{m.name}</span>
              </div>
              <div className="pcca-row-body">
                <h3>{m.heading}</h3>
                <p>{m.body}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

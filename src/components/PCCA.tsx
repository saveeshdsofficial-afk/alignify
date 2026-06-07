interface MatrixRow {
  letter: string
  name: string
  heading: string
  body: string
}

const MATRIX: MatrixRow[] = [
  {
    letter: 'P',
    name: 'Personality',
    heading: 'Who are you, who are they.',
    body: 'Behavioural profiling of each buyer. Understand communication style, decision-making approach, pace, risk tolerance, and interpersonal tendencies. The foundation of every Alignify assessment.',
  },
  {
    letter: 'C',
    name: 'Compatibility',
    heading: 'Do we fit.',
    body: 'Understand the sales opportunity with compatibility in mind. Business goals, values, and working styles must align between both sides for the deal to land.',
  },
  {
    letter: 'C',
    name: 'Complementary',
    heading: 'Do we add value.',
    body: "Alignify shows you if the strengths, capabilities, and offering of your business address the buyer's gaps and needs — turning fit into value neither side could create alone.",
  },
  {
    letter: 'A',
    name: 'Alignment',
    heading: 'The overall score.',
    body: 'A weighted tri-framework score derived from Personality, Compatibility, and Complementary. The Alignment score is the output Alignify surfaces to the end user.',
  },
]

export default function PCCA() {
  return (
    <section className="section pcca-section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The How</span>
          <h2 className="section-h">
            The PCCA <span className="it">model.</span>
          </h2>
          <p className="section-deck">
            A matrix that turns a sales opportunity into a win.
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

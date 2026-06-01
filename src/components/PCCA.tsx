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
    body: 'DISC-based behavioural profiling of each individual in the relationship. Understand communication style, decision-making approach, pace, risk tolerance, and interpersonal tendencies. The foundation of every Alignify assessment.',
  },
  {
    letter: 'C',
    name: 'Compatibility',
    heading: 'How we fit.',
    body: 'Understand the alignment between goals, values, context, and working styles of both parties. Compatibility is relational — it asks whether the environment, objectives, and approaches of both sides can coexist and function together sustainably.',
  },
  {
    letter: 'C',
    name: 'Complementary',
    heading: 'What we bring.',
    body: 'Understand whether the strengths, capabilities, and offerings of one party address the gaps, needs, or requirements of the other. Complementary is directional — it asks whether the relationship produces something neither party could achieve as effectively alone.',
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
          <span className="label">The Framework</span>
          <h2 className="section-h">
            The PCCA <span className="it">matrix.</span>
          </h2>
          <p className="section-deck">
            Four lenses that turn a relationship into a score. Personality, Compatibility, Complementary — combined into a single Alignment signal.
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

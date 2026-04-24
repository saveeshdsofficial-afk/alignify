interface Problem {
  number: string
  title: string
  body: string
  metric: { num: string; unit: string; label: React.ReactNode }
}

const PROBLEMS: Problem[] = [
  {
    number: '01',
    title: 'Misalignment',
    body:
      'Pitching the wrong message to the wrong buyer. Reps lean on instinct instead of structured signal, and prospects disengage before the value even lands.',
    metric: { num: '68', unit: '%', label: (<>Calls lost to<br />poor buyer fit</>) },
  },
  {
    number: '02',
    title: 'Inefficiency',
    body:
      'Hours burned on unqualified prospects, mis-sequenced outreach, and handoffs with no context. The pipeline fills with noise instead of signal.',
    metric: { num: '31', unit: '%', label: (<>Rep time spent<br />on dead leads</>) },
  },
  {
    number: '03',
    title: 'Cost Implications',
    body:
      'Every unqualified conversation carries a real cost — rep salary, tooling, leadership attention. Over a quarter, the drag on revenue is substantial.',
    metric: { num: '$42', unit: 'k', label: (<>Avg. quarterly<br />drag per rep</>) },
  },
]

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-graphite py-28 text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 90% 10%, rgba(33,168,159,0.12) 0%, transparent 35%),radial-gradient(circle at 5% 90%, rgba(62,204,196,0.08) 0%, transparent 35%)',
        }}
      />
      <div className="relative z-[2] mx-auto max-w-wrap px-7">
        <div className="mb-14 max-w-[680px]">
          <span className="mono-eyebrow text-teal-bright">The Problem</span>
          <h2 className="mt-3.5 font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.05] tracking-[-0.025em] text-white">
            The cost of <span className="text-teal-bright">cold-calling.</span>
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-white/70">
            A lack of real understanding of your prospect doesn&apos;t just waste time and
            resources — it erodes revenue. Alignify ensures every validated prospect leads to an
            aligned, high-probability sales call.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <article
              key={p.number}
              className="group relative rounded-[14px] border border-white/10 bg-graphite-2 p-8 transition-all hover:-translate-y-1 hover:border-teal hover:bg-[#2f3950]"
            >
              <div className="mb-5 font-display text-5xl font-bold leading-none tracking-[-0.03em] text-stroke-teal">
                {p.number}
              </div>
              <h3 className="mb-2.5 font-display text-[22px] font-bold tracking-[-0.015em] text-white">
                {p.title}
              </h3>
              <p className="mb-5 text-[14.5px] leading-[1.6] text-white/65">{p.body}</p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="font-display text-[28px] font-bold leading-none tracking-[-0.02em] text-teal-bright">
                  {p.metric.num}
                  <span className="text-[18px]">{p.metric.unit}</span>
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-soft">
                  {p.metric.label}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

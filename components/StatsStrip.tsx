interface Stat {
  num: string
  unit?: string
  label: React.ReactNode
}

const STATS: Stat[] = [
  { num: '70', unit: '%', label: (<>Lift in conversion<br />rate</>) },
  { num: '3×', label: (<>Faster prospect<br />validation</>) },
  { num: '14', unit: ' days', label: (<>From trial to<br />aligned calls</>) },
  { num: '200', unit: '+', label: (<>Sales teams on<br />the waitlist</>) },
]

export default function StatsStrip() {
  return (
    <section className="border-b border-line bg-paper py-8">
      <div className="mx-auto max-w-wrap px-7">
        <div className="grid grid-cols-2 items-center gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {STATS.map((s, i) => (
            <div key={s.num + i} className="contents">
              <div className="flex items-center gap-3.5">
                <div className="font-display text-[32px] font-bold leading-none tracking-[-0.03em] text-graphite">
                  {s.num}
                  {s.unit && <span className="text-[22px] text-teal">{s.unit}</span>}
                </div>
                <div className="text-xs leading-[1.4] text-slate">{s.label}</div>
              </div>
              {i < STATS.length - 1 && (
                <div className="hidden h-8 w-px bg-line md:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

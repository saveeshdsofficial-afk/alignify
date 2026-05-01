export default function ProspectCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)]">
      <div className="flex items-center gap-1.5 border-b border-line bg-canvas px-5 py-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ef5f5a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f5c04d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4ecb71]" />
        <span className="ml-4 flex-1 rounded-md border border-line bg-white px-3.5 py-1 font-mono text-xs text-slate">
          alignify.io/prospect/s-chen
        </span>
      </div>

      <div className="px-7 py-6">
        <div className="mb-5 flex items-center gap-4">
          <div
            className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-full font-display text-[22px] font-bold text-white shadow-[0_4px_12px_rgba(200,138,90,0.25)]"
            style={{ background: 'linear-gradient(135deg,#d4a574,#c88a5a)' }}
          >
            SC
          </div>
          <div>
            <div className="font-display text-lg font-bold tracking-[-0.015em]">Sarah Chen</div>
            <div className="mt-0.5 text-[13px] text-slate">VP of Engineering · TechCorp</div>
          </div>
        </div>

        <div className="mb-4 mt-5 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal">
          Alignment Signal
          <span className="h-px flex-1 bg-gradient-to-r from-teal-pale to-transparent" />
        </div>

        <div className="mb-3.5 grid grid-cols-[auto_1fr] items-center gap-4 rounded-[10px] border border-teal-pale bg-teal-tint px-4 py-4">
          <div className="font-display text-[38px] font-bold leading-none tracking-[-0.03em] text-graphite">
            94<span className="text-[22px] text-teal">/100</span>
          </div>
          <div>
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate">
              Fit score
            </div>
            <div className="text-[13px] font-medium text-graphite">
              Strong alignment. Proceed to outreach.
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          <Trait hot>Analytical</Trait>
          <Trait>Data-driven</Trait>
          <Trait>Direct</Trait>
          <Trait>Values proof</Trait>
        </div>

        <div className="flex gap-2.5 rounded-[10px] bg-graphite p-4 text-[13px] leading-[1.5] text-white">
          <div className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-teal text-[13px] font-bold text-white">
            !
          </div>
          <div>
            Lead with <strong className="font-semibold text-teal">metrics and ROI</strong>.
            Skip small talk, reference concrete outcomes in the first 60 seconds.
          </div>
        </div>
      </div>
    </div>
  )
}

function Trait({ children, hot = false }: { children: React.ReactNode; hot?: boolean }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
        hot
          ? 'border border-teal bg-teal text-white'
          : 'border border-line bg-canvas text-graphite'
      }`}
    >
      {children}
    </span>
  )
}

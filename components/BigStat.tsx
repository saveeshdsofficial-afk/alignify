export default function BigStat() {
  return (
    <section className="relative overflow-hidden bg-graphite py-28 text-center text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(33,168,159,0.15) 0%, transparent 40%),radial-gradient(circle at 80% 70%, rgba(62,204,196,0.1) 0%, transparent 40%)',
        }}
      />
      <div className="relative z-[2] mx-auto max-w-wrap px-7">
        <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal-bright">
          Measured outcomes
        </div>
        <div className="mb-5 font-display text-[clamp(100px,16vw,200px)] font-bold leading-[0.9] tracking-[-0.05em] text-white">
          70<span className="text-teal-bright">%</span>
        </div>
        <p className="mx-auto max-w-[600px] font-display text-[clamp(20px,2.5vw,26px)] font-medium leading-[1.35] tracking-[-0.01em] text-white/85">
          Average lift in conversion rate for sales teams using Alignify&apos;s alignment scoring.
        </p>
      </div>
    </section>
  )
}

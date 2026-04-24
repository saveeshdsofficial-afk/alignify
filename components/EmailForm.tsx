'use client'

import { useState, FormEvent } from 'react'

export default function EmailForm() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [teamSize, setTeamSize] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      setTeamSize('')
    }, 4500)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[14px] bg-white p-8 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)]"
    >
      <div className="font-display text-[22px] font-bold tracking-[-0.015em] text-graphite">
        Get early access
      </div>
      <div className="mb-6 text-[13px] text-slate">
        We&apos;ll email you when your seat is ready.
      </div>

      <label
        htmlFor="email"
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate"
      >
        Work email
      </label>
      <input
        id="email"
        type="email"
        required
        disabled={submitted}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="mb-4 w-full rounded-md border-[1.5px] border-line bg-canvas px-3.5 py-3 text-[14.5px] text-graphite outline-none transition-all focus:border-teal focus:bg-white disabled:opacity-60"
      />

      <label
        htmlFor="team-size"
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate"
      >
        Team size
      </label>
      <select
        id="team-size"
        required
        disabled={submitted}
        value={teamSize}
        onChange={(e) => setTeamSize(e.target.value)}
        className="mb-4 w-full rounded-md border-[1.5px] border-line bg-canvas px-3.5 py-3 text-[14.5px] text-graphite outline-none transition-all focus:border-teal focus:bg-white disabled:opacity-60"
      >
        <option value="">Select team size</option>
        <option>1–10 sales reps</option>
        <option>11–50 sales reps</option>
        <option>51–200 sales reps</option>
        <option>200+ sales reps</option>
      </select>

      <button
        type="submit"
        className={`group flex w-full items-center justify-center gap-2.5 rounded-lg px-4 py-4 font-display text-[15px] font-bold text-white transition-all ${
          submitted ? 'bg-teal' : 'bg-graphite hover:bg-teal'
        }`}
      >
        {submitted ? (
          <>✓ Seat claimed — check your inbox</>
        ) : (
          <>
            Claim my seat
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </>
        )}
      </button>

      <div className="mt-3.5 flex justify-center text-xs text-slate">
        Founding user pricing locked for life
      </div>
    </form>
  )
}

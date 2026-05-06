'use client'

import { useState, type FormEvent } from 'react'

export default function FinalCTA() {
  const [done, setDone] = useState(false)
  const [email, setEmail] = useState('')
  const [size, setSize] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDone(true)
    setTimeout(() => {
      setDone(false)
      setEmail('')
      setSize('')
    }, 4500)
  }

  return (
    <section className="cta-section" id="final-cta" style={{ paddingTop: 100 }}>
      <div className="frame">
        <div className="cta-card">
          <div className="cta-inner">
            <div>
              <span className="label" style={{ marginBottom: 18, display: 'inline-block' }}>
                Early Access
              </span>
              <h2>Ready to align your <span className="it">sales for success!</span></h2>
              <p className="cta-deck">
                Drop your details and get early access to Alignify Sales. Start validating prospects and closing more of the calls that matter.
              </p>
              <div className="cta-pills">
                <span className="cta-pill"><strong>Beta</strong>&nbsp;rolling out this quarter</span>
                <span className="cta-pill"><strong>Free</strong>&nbsp;during beta</span>
                <span className="cta-pill"><strong>Founding</strong>&nbsp;pricing locked</span>
              </div>
            </div>

            <form className="cta-form" onSubmit={handleSubmit}>
              <h3 className="form-h">Get <span className="it">early access</span></h3>
              <p className="form-sub">We&apos;ll email when your seat is ready.</p>
              <div className="form-field">
                <label htmlFor="email-input">Work email</label>
                <input
                  type="email"
                  id="email-input"
                  placeholder="you@company.com"
                  required
                  disabled={done}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="size-input">Team size</label>
                <select
                  id="size-input"
                  required
                  disabled={done}
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="">Select</option>
                  <option>1–10 reps</option>
                  <option>11–50 reps</option>
                  <option>51–200 reps</option>
                  <option>200+ reps</option>
                </select>
              </div>
              <button type="submit" className="form-btn" disabled={done}>
                {done ? '✓ Seat claimed — check your inbox' : <>Claim my seat <span aria-hidden>→</span></>}
              </button>
              <div className="form-foot">No credit card · Founding pricing</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

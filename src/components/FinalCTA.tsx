'use client'

import { useState, type FormEvent } from 'react'

export default function FinalCTA() {
  const [done, setDone] = useState(false)
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [size, setSize] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDone(true)
    setTimeout(() => {
      setDone(false)
      setEmail('')
      setCompany('')
      setSize('')
    }, 5000)
  }

  return (
    <section className="section" id="cta">
      <div className="frame">
        <div className="cta-card">
          <div className="cta-inner">
            <div>
              <div className="cta-eyebrow">
                <span className="label">Contact us</span>
              </div>
              <h2 className="cta-h">
                Align your sales effort <br />
                <span className="it">and win.</span>
              </h2>
              <p className="cta-deck">
                Complete the form and let&apos;s get on a call.
              </p>
              <div className="cta-proof">
                <div className="cta-proof-avs">
                  <div className="av">SJ</div>
                  <div className="av">MT</div>
                  <div className="av">RN</div>
                </div>
                <div className="cta-proof-text">
                  <strong>Revenue leaders</strong> are already benefiting from the platform
                </div>
              </div>
            </div>

            <form className="cta-form" onSubmit={handleSubmit}>
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
              <h3 className="form-h">
                Get in <span className="it">touch</span>
              </h3>
              <p className="form-sub">We&apos;ll be in touch within one business day.</p>

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
                <label htmlFor="company-input">Company</label>
                <input
                  type="text"
                  id="company-input"
                  placeholder="Company Name"
                  disabled={done}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
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
                  <option value="">Select team size</option>
                  <option>1–10 sales reps</option>
                  <option>11–50 sales reps</option>
                  <option>51–200 sales reps</option>
                  <option>200+ sales reps</option>
                </select>
              </div>
              <button type="submit" className="form-btn" disabled={done}>
                {done ? '✓ Consultation requested — we’ll be in touch' : 'Request a consultation'}
              </button>
              <div className="form-foot">
                No implementation fee · 3-month free subscription.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

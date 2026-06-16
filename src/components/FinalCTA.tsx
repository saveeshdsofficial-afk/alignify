'use client'

import { useState, type FormEvent } from 'react'

// Brevo form endpoint (from the embed code). The form keeps its custom styling
// and submits here in the background, so the page never redirects.
const BREVO_ACTION =
  'https://ac7154eb.sibforms.com/v2/serve/MUIFAH5K3YcaJRrpiOusEbTyFqdpk5RD1pj4by6Rt-JnFvg1eiYK-sS6SfYl0J6ng3WmXOXVZE3YvbCEQ9Yrd2lzK0vuF3LTt7u9NLZq1hDd_3IRv1DiSeQ4t-8dU0-xxYIaKHyX083myKGhHNuK-DEWNRu55SRzFZO7MbpTADZFdNCkUpcF3IbaPOvSJmjUs4dOSIVrbhjRJNPJEQ=='

export default function FinalCTA() {
  const [done, setDone] = useState(false)
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [linkedin, setLinkedin] = useState('')

  // Submit to Brevo the same way their own script does: a multipart FormData POST.
  // `no-cors` lets the cross-origin request through (we can't read the opaque
  // response, so we show success optimistically — fine for a contact form).
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    void fetch(BREVO_ACTION, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    }).catch(() => {
      /* opaque response / network — nothing actionable client-side */
    })

    setDone(true)
    setTimeout(() => {
      setDone(false)
      setEmail('')
      setCompany('')
      setLinkedin('')
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
                  name="EMAIL"
                  placeholder="you@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="company-input">Company</label>
                <input
                  type="text"
                  id="company-input"
                  name="COMPANY:name"
                  placeholder="Company Name"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="linkedin-input">Personal LinkedIn</label>
                <input
                  type="url"
                  id="linkedin-input"
                  name="LINKEDIN"
                  placeholder="linkedin.com/in/..."
                  required
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </div>

              {/* Brevo anti-bot honeypot — must be present and empty */}
              <input
                type="text"
                name="email_address_check"
                defaultValue=""
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
              />
              <input type="hidden" name="locale" value="en" />

              <button type="submit" className="form-btn" disabled={done}>
                {done ? '✓ Meeting requested – we’ll be in touch' : 'Request a meeting'}
              </button>
              <div className="form-foot">
                Special offer · 3 months free subscription · includes 15 personality profiles.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useId, useState, type FormEvent } from 'react'

// Brevo form endpoint (from the embed code). The form keeps its custom styling
// and submits here in the background, so the page never redirects.
const BREVO_ACTION =
  'https://ac7154eb.sibforms.com/v2/serve/MUIFAH5K3YcaJRrpiOusEbTyFqdpk5RD1pj4by6Rt-JnFvg1eiYK-sS6SfYl0J6ng3WmXOXVZE3YvbCEQ9Yrd2lzK0vuF3LTt7u9NLZq1hDd_3IRv1DiSeQ4t-8dU0-xxYIaKHyX083myKGhHNuK-DEWNRu55SRzFZO7MbpTADZFdNCkUpcF3IbaPOvSJmjUs4dOSIVrbhjRJNPJEQ=='

export default function FinalCTA({ id = 'cta' }: { id?: string }) {
  const [done, setDone] = useState(false)
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [linkedin, setLinkedin] = useState('')

  // Unique per instance so the form can be rendered more than once on a page
  // without duplicate element ids (which would break label focus).
  const uid = useId()
  const emailId = `${uid}-email`
  const companyId = `${uid}-company`
  const linkedinId = `${uid}-linkedin`

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
    <section className="section" id={id}>
      <div className="frame">
        <div className="cta-card">
          <div className="cta-inner">
            <div>
              <div className="cta-eyebrow">
                <span className="label">Free Trial</span>
              </div>
              <h2 className="cta-h">
                Sign up <span className="it">now.</span>
              </h2>
              <p className="cta-deck">
                Start your one month free trial — limited to the first 100 companies.
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
                Get one month&apos;s free <span className="it">trial</span>
              </h3>
              <p className="form-sub">Fill this out and start your one month free trial.</p>

              <div className="form-field">
                <label htmlFor={emailId}>Work email</label>
                <input
                  type="email"
                  id={emailId}
                  name="EMAIL"
                  placeholder="you@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor={companyId}>Company</label>
                <input
                  type="text"
                  id={companyId}
                  name="COMPANY:name"
                  placeholder="Company Name"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor={linkedinId}>Personal LinkedIn</label>
                <input
                  type="url"
                  id={linkedinId}
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
                {done ? '✓ Trial requested – check your inbox' : 'Get one month\'s free trial'}
              </button>
              <div className="form-foot">
                Special offer · 1 month free subscription · limited to the first 100 companies.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

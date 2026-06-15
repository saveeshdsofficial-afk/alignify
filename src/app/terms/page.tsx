import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms — Alignify',
  description: 'Copyright and disclaimer for the Alignify web site.',
}

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Copyright & disclaimer" title="Terms">
      <h2>Copyright</h2>
      <p>This site is Copyright © Alignify.</p>
      <p>
        All information on this site is solely for the purposes of reference by interested visitors.
        Information may be cited only with prior written permission and proper attribution.
      </p>
      <p>
        Please direct enquiries about using information on this site via our{' '}
        <a href="/#cta">contact form</a>.
      </p>

      <h2>Disclaimer</h2>
      <p>
        The information provided on the Alignify web site is copyright to Alignify, unless otherwise
        stated. The views expressed in articles or commentaries are not necessarily those of Alignify and
        Alignify makes no claim to their accuracy. Alignify accepts no responsibility for any loss
        occasioned to any person acting or refraining from action as a result of material in this service.
      </p>
    </LegalPage>
  )
}

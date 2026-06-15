import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy — Alignify',
  description: 'How Alignify collects, uses, and protects your information.',
}

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Our privacy policy" title="Privacy">
      <h2>Use of information</h2>
      <p>
        We will collect and maintain in our database certain personally identifiable information from
        you only when you provide it to us on a voluntary basis, for example, when you make an inquiry,
        contact us, subscribe to our newsletter or forums, or establish an email account.
      </p>
      <p>
        Your email address will only be used for the purpose for which you have provided it, and it will
        not be added to a mailing list or used for any other purpose without your consent.
      </p>
      <p>
        We will not share any information about you with third parties, except as provided by civil
        privacy legislation.
      </p>

      <h2>Information collected</h2>
      <p>
        When you look at our web site please be aware that we do gather usage information about your
        visit through our Internet Service Provider and Google Analytics. This is the usual practice for
        web sites. This information may include but is not limited to:
      </p>
      <ul>
        <li>Your server address</li>
        <li>Your top level domain name (for example .com, .gov, .au, .uk etc)</li>
        <li>The date and time of your visit to the site</li>
        <li>The pages you accessed and documents downloaded</li>
        <li>The site or link that referred you to the Alignify web site</li>
        <li>The type of browser you are using.</li>
      </ul>

      <h2>Your consent</h2>
      <p>
        By using our site, you are consenting to our Privacy Policy. We will review this Privacy Policy
        periodically, and if we ever change our Privacy Policy, we shall post any changes on this page so
        that you are always kept informed of the information we collect, how we use it and the
        circumstances under which we disclose it, if at all.
      </p>
      <p>
        If you have any questions about our Privacy Policy, please <a href="/#cta">contact us</a>.
      </p>
    </LegalPage>
  )
}

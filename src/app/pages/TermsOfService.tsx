import { Link } from 'react-router';
import { LegalPageLayout } from '../components/LegalPageLayout';

export default function TermsOfService() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      breadcrumb="Terms of Service"
      path="/terms-of-service"
      lastUpdated="August 31, 2026"
      description="Terms and conditions governing your access to and use of Success with Suman's website, content, products, programs, and services."
    >
      <p>
        Welcome to{' '}
        <a href="http://www.sumanmanjrekar.com" target="_blank" rel="noopener noreferrer">
          www.sumanmanjrekar.com
        </a>
        .
      </p>

      <p>
        These Terms of Service govern your access to and use of the website, content, products,
        programs and services provided by Success with Suman.
      </p>

      <p>
        By accessing this website or purchasing or using any of our services, you agree to these
        Terms of Service.
      </p>

      <h2>1. Use of Our Website and Services</h2>
      <p>You agree to use our website and services only for lawful purposes.</p>
      <p>You must not use the website in a manner that may:</p>
      <ul>
        <li>Violate applicable laws or regulations</li>
        <li>Interfere with the operation or security of the website</li>
        <li>Attempt unauthorised access to systems or information</li>
        <li>Copy, reproduce or distribute protected content without permission</li>
        <li>Misrepresent your identity or provide false information</li>
      </ul>

      <h2>2. Educational and Informational Content</h2>
      <p>
        Content provided through this website, programs, consultations, masterclasses, books and
        digital products is intended for educational and informational purposes.
      </p>
      <p>
        You remain responsible for evaluating information and making decisions appropriate to your
        individual circumstances.
      </p>

      <h2>3. No Guarantee of Results</h2>
      <p>
        We do not guarantee specific financial, professional, personal, business or investment
        outcomes.
      </p>
      <p>
        Your results depend on numerous factors, including your individual circumstances and
        decisions.
      </p>

      <h2>4. Payments</h2>
      <p>
        Where payment is required for a product or service, you agree to provide accurate payment
        information.
      </p>
      <p>Payments must be made according to the terms communicated at the time of purchase.</p>
      <p>
        Applicable cancellation and refund terms are governed by our{' '}
        <Link to="/cancellation-refund-policy">Cancellation & Refund Policy</Link>.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content available through Success with Suman, including text, videos, graphics, course
        material, frameworks, books, eBooks, branding and other materials, is protected by applicable
        intellectual property laws.
      </p>
      <p>
        You may not reproduce, distribute, sell, modify, republish or commercially exploit our
        content without prior written permission.
      </p>
      <p>
        Access to a purchased digital product or program grants you a limited personal licence to use
        that content for your own purposes, subject to the terms communicated at the time of
        purchase.
      </p>

      <h2>6. Third-Party Services</h2>
      <p>
        Our website or services may contain links to or integrations with third-party websites,
        platforms or providers.
      </p>
      <p>
        We are not responsible for third-party services, content, availability, policies or
        transactions.
      </p>
      <p>Your use of third-party services is subject to their respective terms and policies.</p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Success with Suman and its
        representatives shall not be liable for indirect, incidental, consequential or special losses
        arising from the use of our website, content, programs, products or services.
      </p>
      <p>
        You acknowledge that financial and personal decisions are ultimately your responsibility.
      </p>

      <h2>8. Availability of Services</h2>
      <p>
        We make reasonable efforts to ensure that our website and services remain available and
        functional.
      </p>
      <p>However, we do not guarantee uninterrupted or error-free access at all times.</p>
      <p>
        We may modify, suspend or discontinue parts of the website or services where reasonably
        necessary.
      </p>

      <h2>9. Suspension or Termination</h2>
      <p>
        We reserve the right to restrict or terminate access to our website, programs or services
        where there is misuse, unauthorised sharing of content, fraudulent activity, violation of
        these Terms or other behaviour that may harm our business, clients or systems.
      </p>

      <h2>10. Changes to These Terms</h2>
      <p>We may update these Terms of Service from time to time.</p>
      <p>
        Your continued use of our website or services after updated Terms are published constitutes
        acceptance of those changes.
      </p>

      <h2>11. Governing Law and Jurisdiction</h2>
      <p>
        These Terms shall be governed by and interpreted in accordance with the applicable laws of
        India.
      </p>
      <p>
        Any disputes shall be subject to the jurisdiction of the appropriate courts, subject to
        applicable law.
      </p>

      <h2>12. Contact</h2>
      <p>
        For questions regarding these Terms of Service, please contact us through the contact details
        provided on{' '}
        <a href="http://www.sumanmanjrekar.com" target="_blank" rel="noopener noreferrer">
          www.sumanmanjrekar.com
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}

import Layout from "@/components/layout/Layout";

export default function TermsAndConditions() {
  return (
    <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Terms & Conditions">
      <section className="pt-100 pb-100 container">
        <h1 className="mb-30">Terms & Conditions</h1>
        <p>Last updated: November 2025</p>

        <p>
          Welcome to <strong>Brave Moor</strong>. By accessing our website
          (<a href="https://www.bravemoor.com">www.bravemoor.com</a>), you agree to comply with
          and be bound by these Terms & Conditions.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By using our website, you accept these terms in full. If you disagree with any part, please
          refrain from using our site or services.
        </p>

        <h3>2. Use of Website</h3>
        <p>
          You agree not to use this website for any unlawful or harmful purpose that may damage,
          disable, or impair the site.
        </p>

        <h3>3. Intellectual Property</h3>
        <p>
          All content, design, and graphics on this site are owned by Brave Moor and are protected by
          copyright and trademark laws. You may not reproduce, distribute, or use them without permission.
        </p>

        <h3>4. Service Terms</h3>
        <p>
          Our marketing and development services are subject to separate agreements and pricing.
          Brave Moor reserves the right to modify or discontinue services without notice.
        </p>

        <h3>5. Limitation of Liability</h3>
        <p>
          Brave Moor shall not be liable for any indirect, incidental, or consequential damages
          arising out of the use or inability to use our website or services.
        </p>

        <h3>6. Updates to Terms</h3>
        <p>
          We may revise these Terms & Conditions from time to time. The updated version will be posted
          on this page with the effective date.
        </p>
      </section>
    </Layout>
  );
}

import Layout from "@/components/layout/Layout";

export default function CookiePolicy() {
  return (
    <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Cookie Policy">
      <section className="pt-100 pb-100 container">
        <h1 className="mb-30">Cookie Policy</h1>
        <p>Last updated: November 2025</p>

        <p>
          This Cookie Policy explains how <strong>Brave Moor</strong> uses cookies and similar
          technologies to recognize you when you visit our website
          (<a href="https://www.bravemoor.com">www.bravemoor.com</a>).
        </p>

        <h3>1. What Are Cookies?</h3>
        <p>
          Cookies are small text files stored on your device that help us improve user experience,
          analyze site traffic, and personalize content.
        </p>

        <h3>2. Types of Cookies We Use</h3>
        <ul>
          <li><strong>Essential Cookies</strong> – Necessary for website functionality.</li>
          <li><strong>Analytics Cookies</strong> – Help us understand how visitors use our site.</li>
          <li><strong>Marketing Cookies</strong> – Used to display personalized ads (if applicable).</li>
        </ul>

        <h3>3. Managing Cookies</h3>
        <p>
          You can control or delete cookies from your browser settings. However, disabling cookies may
          affect your experience on our site.
        </p>

        <h3>4. Changes to This Policy</h3>
        <p>
          Brave Moor may update this Cookie Policy periodically to reflect new technologies or regulations.
          Please revisit this page regularly.
        </p>
      </section>
    </Layout>
  );
}

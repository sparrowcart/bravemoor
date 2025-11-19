import Layout from "@/components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Privacy Policy">
      <section className="pt-100 pb-100 container">
        <h1 className="mb-30">Privacy Policy</h1>
        <p>Last updated: November 2025</p>

        <p>
          At <strong>Brave Moor</strong>, your privacy is important to us. This Privacy Policy
          describes how we collect, use, and protect your personal information when you visit our website
          <a href="https://www.bravemoor.com"> www.bravemoor.com</a> or use our services.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We may collect personal data such as your name, email, phone number, and organization when
          you contact us, subscribe to our newsletter, or fill out forms on our website.
        </p>

        <h3>2. How We Use Your Information</h3>
        <p>
          Your data helps us deliver and improve our services, respond to your inquiries, and send
          marketing updates related to Brave Moor. We do not sell or rent personal data to third parties.
        </p>

        <h3>3. Cookies & Tracking</h3>
        <p>
          We use cookies and analytics tools (like Google Analytics) to enhance your browsing
          experience and understand how visitors interact with our site.
        </p>

        <h3>4. Data Protection</h3>
        <p>
          We implement security measures to protect your personal data against unauthorized access,
          alteration, disclosure, or destruction.
        </p>

        <h3>5. Your Rights</h3>
        <p>
          You can request access, correction, or deletion of your data by contacting us at
          <a href="mailto:bravemoor@gmail.com"> bravemoor@gmail.com</a>.
        </p>

        <h3>6. Contact Us</h3>
        <p>
          For any questions about this policy, please contact:
          <br />
          <strong>Brave Moor</strong> <br />
          Email: bravemoor@gmail.com <br />
          Location: India
        </p>
      </section>
    </Layout>
  );
}

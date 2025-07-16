import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Privacy Policy</h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg mb-6">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to the I5 Real Estate Delivery Model ("we," "our," or "us"). We are committed to protecting your
                privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 my-4">
                <li>Register for an account</li>
                <li>Sign up for our newsletter</li>
                <li>Request information or support</li>
                <li>Participate in surveys or promotions</li>
                <li>Contact us directly</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, company name, job title, and any
                other information you choose to provide.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 my-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, such as updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. Cookies are files with a small amount of data that may include an anonymous unique
                identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal
                information. However, please be aware that no method of transmission over the Internet or method of
                electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by
                us. We have no control over and assume no responsibility for the content, privacy policies, or practices
                of any third-party websites or services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on computers located outside of your state,
                province, country, or other governmental jurisdiction where the data protection laws may differ from
                those in your jurisdiction.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not intended for use by children under the age of 16. We do not knowingly collect
                personally identifiable information from children under 16.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">
                <a href="mailto:info@i5model.com" className="text-blue-600 hover:underline">
                  info@i5model.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

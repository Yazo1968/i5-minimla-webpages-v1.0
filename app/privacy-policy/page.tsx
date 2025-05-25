"use client"

import { useRef, useEffect, useState } from "react"

export default function PrivacyPolicyPage() {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    // Ensure page starts at top after any animations
    const timer = setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [isInView])

  return (
    <div className="min-h-screen bg-white">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="prose prose-sm max-w-none font-mono">
          <h1 className="text-2xl font-bold mb-8 border-b-4 border-black pb-4">Privacy Policy</h1>

          <div className="space-y-6 text-xs leading-relaxed">
            <div>
              <p>
                <strong>Effective Date:</strong> January 2025
              </p>
              <p>
                <strong>Last Updated:</strong> January 2025
              </p>
            </div>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">1. Introduction</h2>
              <p>
                This Privacy Policy explains how we collect, use, process, and protect your personal information when
                you visit our website, use the I5 Model framework resources, interact with our chatbot services, or
                otherwise engage with our Services. This policy applies to all users of our Services, regardless of
                location.
              </p>
              <p>
                We are committed to protecting your privacy and handling your personal information transparently and
                securely in compliance with applicable data protection laws, including UAE Federal Decree-Law No. 45 of
                2021 on Personal Data Protection, the EU General Data Protection Regulation (GDPR), and other applicable
                privacy regulations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                2. Information We Collect
              </h2>

              <h3 className="text-base font-semibold mb-3">2.1 Information You Provide Directly</h3>
              <p>We collect information you voluntarily provide when you:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Use our contact forms or request information</li>
                <li>Subscribe to newsletters or updates</li>
                <li>Participate in surveys or feedback requests</li>
                <li>Create accounts or profiles (if applicable)</li>
                <li>Submit queries through our chatbot services</li>
                <li>Download resources or documentation</li>
                <li>Request consultations or assessments</li>
              </ul>

              <p>This may include:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Name and contact information (email, phone, address)</li>
                <li>Company or organization details</li>
                <li>Professional title and industry information</li>
                <li>Project details and business requirements</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">
                2.2 Information Collected Through Chatbot Interactions
              </h3>
              <p>When you interact with our chatbot services, we collect:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Your questions, queries, and inputs</li>
                <li>Chat conversation history and context</li>
                <li>Preferred language and communication style</li>
                <li>Time and frequency of interactions</li>
                <li>Feedback on chatbot responses</li>
                <li>Technical information about your session</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">2.3 Automatically Collected Information</h3>
              <p>We automatically collect certain information when you visit our website:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>IP address and general location information</li>
                <li>Browser type, version, and language settings</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website and exit pages</li>
                <li>Date and time of visits</li>
                <li>Search terms used to find our website</li>
                <li>Cookies and similar tracking technologies data</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">2.4 Analytics and Usage Data</h3>
              <p>We collect aggregated and anonymized data about:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Website traffic patterns and user behavior</li>
                <li>Content preferences and engagement metrics</li>
                <li>Service performance and error logs</li>
                <li>User journey and conversion funnels</li>
                <li>Geographic distribution of users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                3. How We Use Your Information
              </h2>

              <h3 className="text-base font-semibold mb-3">3.1 Primary Purposes</h3>
              <p>We use your personal information to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Provide and improve our Services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Deliver chatbot responses and interactive features</li>
                <li>Send requested information about the I5 Model framework</li>
                <li>Process consultation requests and assessments</li>
                <li>Provide customer support and technical assistance</li>
                <li>Maintain and secure our website and Services</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">3.2 Communication and Marketing</h3>
              <p>With your consent, we may use your information to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Send newsletters and educational content</li>
                <li>Provide updates about the I5 Model methodology</li>
                <li>Share relevant industry insights and best practices</li>
                <li>Invite you to webinars, events, or training sessions</li>
                <li>Conduct surveys for service improvement</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">3.3 Analytics and Improvement</h3>
              <p>We use information to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Analyze website usage and user behavior</li>
                <li>Improve our Services and user experience</li>
                <li>Develop new features and capabilities</li>
                <li>Optimize content and navigation</li>
                <li>Measure the effectiveness of our communications</li>
                <li>Conduct research and analytics for business insights</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">3.4 Legal and Compliance</h3>
              <p>We may process your information to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Comply with legal obligations and regulations</li>
                <li>Respond to legal requests and court orders</li>
                <li>Protect our rights, property, and safety</li>
                <li>Prevent fraud and security threats</li>
                <li>Enforce our Terms of Use and other agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                4. Legal Basis for Processing (GDPR)
              </h2>
              <p>For users in the European Union, our legal basis for processing personal information includes:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>Consent:</strong> When you explicitly agree to processing for specific purposes
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> For business operations, security, and service improvement
                </li>
                <li>
                  <strong>Contract Performance:</strong> To fulfill our obligations under agreements with you
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To meet regulatory and legal requirements
                </li>
                <li>
                  <strong>Vital Interests:</strong> To protect health, safety, or fundamental rights
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                5. Information Sharing and Disclosure
              </h2>

              <h3 className="text-base font-semibold mb-3">5.1 We Do Not Sell Personal Information</h3>
              <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

              <h3 className="text-base font-semibold mb-3 mt-6">5.2 Service Providers and Partners</h3>
              <p>We may share information with trusted third parties who assist us in:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Website hosting and cloud services</li>
                <li>Email communications and marketing platforms</li>
                <li>Analytics and performance monitoring</li>
                <li>Customer support and chatbot functionality</li>
                <li>Payment processing (if applicable)</li>
                <li>Security and fraud prevention</li>
              </ul>
              <p>
                All service providers are contractually required to protect your information and use it only for
                specified purposes.
              </p>

              <h3 className="text-base font-semibold mb-3 mt-6">5.3 Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of
                the business transaction, subject to equivalent privacy protections.
              </p>

              <h3 className="text-base font-semibold mb-3 mt-6">5.4 Legal Requirements</h3>
              <p>We may disclose information when required by law, regulation, legal process, or to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Respond to government requests or court orders</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent illegal activities or security threats</li>
                <li>Comply with regulatory investigations</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">5.5 International Transfers</h3>
              <p>
                As we operate internationally, your information may be transferred to and processed in countries outside
                your location. We ensure appropriate safeguards are in place for international transfers, including:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Adequacy decisions by relevant authorities</li>
                <li>Standard contractual clauses</li>
                <li>Binding corporate rules</li>
                <li>Certification schemes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">6. Data Retention</h2>

              <h3 className="text-base font-semibold mb-3">6.1 Retention Periods</h3>
              <p>We retain personal information for as long as necessary to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Provide our Services and fulfill business purposes</li>
                <li>Comply with legal obligations and regulations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records and analytics</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">6.2 Specific Retention Guidelines</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>Contact Information:</strong> Retained while you remain engaged with our Services
                </li>
                <li>
                  <strong>Chatbot Interactions:</strong> Retained for up to 2 years for service improvement
                </li>
                <li>
                  <strong>Website Analytics:</strong> Anonymized data retained for up to 3 years
                </li>
                <li>
                  <strong>Marketing Communications:</strong> Until you unsubscribe or withdraw consent
                </li>
                <li>
                  <strong>Legal Records:</strong> Retained as required by applicable law
                </li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">6.3 Data Deletion</h3>
              <p>
                When retention periods expire, we securely delete or anonymize personal information unless longer
                retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                7. Your Rights and Choices
              </h2>

              <h3 className="text-base font-semibold mb-3">7.1 Access and Portability</h3>
              <p>You have the right to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Receive a copy of your information in a structured format</li>
                <li>Request portability of your data to another service</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">7.2 Correction and Updates</h3>
              <p>You may:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Update or correct inaccurate personal information</li>
                <li>Complete incomplete information</li>
                <li>Request amendments to your records</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">7.3 Deletion and Erasure</h3>
              <p>You may request deletion of your personal information when:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>It's no longer necessary for the original purpose</li>
                <li>You withdraw consent (where consent was the legal basis)</li>
                <li>You object to processing based on legitimate interests</li>
                <li>Information was unlawfully processed</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">7.4 Restriction and Objection</h3>
              <p>You may:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Restrict processing in certain circumstances</li>
                <li>Object to processing based on legitimate interests</li>
                <li>Object to direct marketing at any time</li>
                <li>Withdraw consent for specific processing activities</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">7.5 Marketing Communications</h3>
              <p>You can:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Unsubscribe from marketing emails using the opt-out link</li>
                <li>Update your communication preferences</li>
                <li>Contact us to remove you from all marketing lists</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">7.6 Exercising Your Rights</h3>
              <p>
                To exercise any of these rights, contact us using the information provided in Section 12. We will
                respond to your request within the timeframes required by applicable law (typically 30 days).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                8. Cookies and Tracking Technologies
              </h2>

              <h3 className="text-base font-semibold mb-3">8.1 Types of Cookies We Use</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>Essential Cookies:</strong> Required for basic website functionality
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how visitors use our website
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences and settings
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver relevant content and advertisements
                </li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">8.2 Cookie Management</h3>
              <p>
                You can control cookies through your browser settings. Note that disabling certain cookies may affect
                website functionality.
              </p>

              <h3 className="text-base font-semibold mb-3 mt-6">8.3 Third-Party Tracking</h3>
              <p>
                We may use third-party analytics services (such as Google Analytics) that collect information about your
                use of our website. These services have their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                9. Security Measures
              </h2>

              <h3 className="text-base font-semibold mb-3">9.1 Technical Safeguards</h3>
              <p>We implement appropriate technical measures to protect your information:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure hosting and cloud infrastructure</li>
                <li>Access controls and authentication systems</li>
                <li>Regular security assessments and updates</li>
                <li>Network security and monitoring</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">9.2 Organizational Safeguards</h3>
              <p>We maintain organizational measures including:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Staff training on privacy and security</li>
                <li>Access controls based on job responsibilities</li>
                <li>Confidentiality agreements with employees and contractors</li>
                <li>Incident response and breach notification procedures</li>
                <li>Regular review and update of security policies</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">9.3 Data Breach Response</h3>
              <p>In the event of a data breach that poses risks to your rights and freedoms, we will:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Contain and assess the breach promptly</li>
                <li>Notify relevant authorities within required timeframes</li>
                <li>Inform affected individuals when legally required</li>
                <li>Take appropriate remedial actions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                10. Children's Privacy
              </h2>
              <p>
                Our Services are not directed to children under 16 years of age. We do not knowingly collect personal
                information from children under 16. If we become aware that we have collected information from a child
                under 16, we will take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                11. Changes to This Privacy Policy
              </h2>

              <h3 className="text-base font-semibold mb-3">11.1 Updates and Modifications</h3>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal
                requirements, or other factors. When we make material changes, we will:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Update the "Last Updated" date</li>
                <li>Provide prominent notice on our website</li>
                <li>Send email notifications to registered users (where applicable)</li>
                <li>Obtain consent for material changes where required by law</li>
              </ul>

              <h3 className="text-base font-semibold mb-3 mt-6">11.2 Review and Acceptance</h3>
              <p>
                We encourage you to review this Privacy Policy regularly. Your continued use of our Services after
                changes are posted constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                12. Contact Information and Data Protection Officer
              </h2>

              <h3 className="text-base font-semibold mb-3">12.1 General Privacy Inquiries</h3>
              <p>For questions about this Privacy Policy or our privacy practices, contact us at:</p>
              <p>
                <strong>Email: info@i5model.com</strong>
              </p>

              <h3 className="text-base font-semibold mb-3 mt-6">12.2 Data Protection Rights</h3>
              <p>To exercise your data protection rights or file a complaint, contact:</p>
              <p>
                <strong>Data Protection Officer:</strong> [DPO Contact Information]
              </p>
              <p>
                <strong>Email: info@i5model.com</strong>
              </p>

              <h3 className="text-base font-semibold mb-3 mt-6">12.3 Regulatory Authorities</h3>
              <p>You also have the right to lodge a complaint with relevant data protection authorities:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>UAE:</strong> UAE Data Office - [contact information]
                </li>
                <li>
                  <strong>EU:</strong> Your local data protection authority
                </li>
                <li>
                  <strong>Other jurisdictions:</strong> Applicable privacy regulators
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                13. International Users
              </h2>

              <h3 className="text-base font-semibold mb-3">13.1 Multi-Jurisdictional Compliance</h3>
              <p>
                This Privacy Policy is designed to comply with privacy laws in multiple jurisdictions. Where local laws
                provide additional protections or rights, those provisions will apply to users in those locations.
              </p>

              <h3 className="text-base font-semibold mb-3 mt-6">13.2 Representative Contacts</h3>
              <p>
                For users in specific regions, we may designate local representatives as required by law. Contact
                information for regional representatives will be provided separately where applicable.
              </p>

              <h3 className="text-base font-semibold mb-3 mt-6">13.3 Language</h3>
              <p>
                This Privacy Policy is available in English. Where required by local law, translated versions may be
                provided, but the English version will govern in case of conflicts.
              </p>
            </section>

            <div className="border-t-2 border-gray-300 pt-6 mt-12 text-center">
              <p>
                <strong>© 2025 I5 Model. All Rights Reserved.</strong>
              </p>
              <p className="italic text-gray-600 mt-2">
                This Privacy Policy is effective as of the date stated above and governs our collection, use, and
                protection of your personal information in connection with our Services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Navigation from "@/components/navigation"

export default function TermsOfUsePage() {
  const [isVisible, setIsVisible] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    // Ensure page starts at top after any animations
    const timer = setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [isVisible])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24 pb-12">
        <div
          ref={contentRef}
          className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="font-mono text-black">
            <h1 className="text-2xl font-bold mb-8 border-b-4 border-black pb-4">Terms of Use and Legal Notice</h1>

            <div className="space-y-6 text-xs leading-relaxed">
              <div className="mb-8">
                <p className="font-semibold">Effective Date: [Current Date]</p>
                <p className="font-semibold">Last Updated: [Current Date]</p>
              </div>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-4">
                  By accessing, viewing, or using this website, the I5 Model framework, associated documentation,
                  handbooks, technology guides, interactive features, or any related content (collectively, the
                  "Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms of
                  Use and all applicable laws and regulations.
                </p>
                <p className="mb-4">
                  <strong>Method of Acceptance</strong>: Your use of the Services constitutes your acceptance of these
                  Terms. If you do not agree to these Terms, you must immediately cease using the Services.
                </p>
                <p className="mb-4">
                  <strong>Accessibility</strong>: These Terms are prominently accessible through links on our website
                  and are available for download and printing.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  2. Intellectual Property Rights
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">2.1 Ownership and Copyright</h3>
                <p className="mb-4">
                  All content, materials, methodologies, frameworks, documentation, handbooks, guides, text, graphics,
                  logos, images, audio, video, software, data compilations, and other materials available through the
                  Services (the "Content") are protected by copyright, trademark, trade secret, and other intellectual
                  property laws under UAE Federal Decree-Law No. 38 of 2021 on Copyrights and Neighbouring Rights,
                  international copyright conventions including the Berne Convention, and applicable international
                  treaties.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">2.2 Proprietary Rights</h3>
                <p className="mb-4">
                  The I5 Model framework, including but not limited to its methodology, processes, implementation
                  strategies, phase structures, documentation, handbooks, technology guides, and all derivative works
                  thereof, constitute proprietary and confidential information and trade secrets. All rights, title, and
                  interest in and to the Content remain exclusively with the owner.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">2.3 Database Rights</h3>
                <p className="mb-4">
                  The compilation, organization, and arrangement of all Content, including databases containing I5 Model
                  information accessible through interactive features or chatbot services, are protected as collective
                  works under UAE Federal Decree-Law No. 38 of 2021 and applicable database protection laws. Smart
                  applications and computer programs are specifically protected under the updated copyright framework.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  3. Limited License and Permitted Uses
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">3.1 Personal Use License</h3>
                <p className="mb-4">
                  Subject to these Terms, you are granted a limited, non-exclusive, non-transferable, revocable license
                  to:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>View and read the Content for personal, non-commercial informational purposes only</li>
                  <li>Access interactive features for evaluation of the I5 Model framework</li>
                  <li>Download single copies of publicly available materials for personal reference</li>
                </ul>

                <h3 className="text-base font-semibold mb-3 mt-6">3.2 Restrictions</h3>
                <p className="mb-4">You may NOT:</p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Reproduce, distribute, modify, adapt, translate, or create derivative works from any Content</li>
                  <li>Use the Content for commercial purposes without express written authorization</li>
                  <li>Reverse engineer, decompile, or attempt to extract the underlying methodology or processes</li>
                  <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices</li>
                  <li>Access or use the Services to develop competing products, services, or methodologies</li>
                  <li>Share login credentials or provide unauthorized access to restricted Content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  4. Privacy and Data Protection
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">4.1 Privacy Policy Integration</h3>
                <p className="mb-4">
                  Your privacy is important to us. Our collection, use, and protection of your personal information is
                  governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the
                  Services, you also agree to the terms of our Privacy Policy.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">4.2 Data Collection Through Interactive Services</h3>
                <p className="mb-4">
                  When you use our interactive features, including chatbot services, we may collect and process:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Your queries and inputs</li>
                  <li>Usage patterns and preferences</li>
                  <li>Technical information about your device and connection</li>
                  <li>Any information you voluntarily provide</li>
                </ul>

                <h3 className="text-base font-semibold mb-3 mt-6">4.3 Data Processing and Storage</h3>
                <p className="mb-4">
                  Information accessed through our Services may be processed and stored to improve service quality and
                  provide personalized responses. We maintain appropriate security measures to protect your information
                  in accordance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  5. Third-Party Content and AI-Generated Materials
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">5.1 Third-Party Materials</h3>
                <p className="mb-4">
                  Certain images, graphics, or other materials may be sourced from third parties under appropriate
                  licenses. Such materials remain subject to their original license terms and are not covered by the
                  license granted herein.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">5.2 AI-Assisted Content</h3>
                <p className="mb-4">
                  Some Content may have been created with the assistance of artificial intelligence tools. All such
                  Content has been reviewed, edited, and is owned by the content creator. The use of AI tools does not
                  diminish the copyright protection afforded to the resulting work.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">5.3 User Responsibility</h3>
                <p className="mb-4">
                  You acknowledge that you are responsible for ensuring your use of any third-party materials complies
                  with applicable license terms and that fair use or other exceptions do not extend to commercial
                  exploitation of the I5 Model framework.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  6. User-Generated Content and Interactive Services
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">6.1 User Inputs and Queries</h3>
                <p className="mb-4">
                  When you submit questions, comments, or other content through our interactive Services (including
                  chatbot functionality), you retain ownership of your input. However, you grant us a non-exclusive,
                  worldwide, royalty-free license to use, process, store, and analyze your inputs for the purposes of:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Providing responses and Services to you</li>
                  <li>Improving our Services and user experience</li>
                  <li>Developing and enhancing our technology</li>
                </ul>

                <h3 className="text-base font-semibold mb-3 mt-6">6.2 Chatbot Services and Database Access</h3>
                <p className="mb-4">
                  Our chatbot Services provide access to I5 Model information for evaluation and educational purposes.
                  You acknowledge that:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Chatbot responses are generated automatically and may contain inaccuracies</li>
                  <li>We do not guarantee the accuracy, completeness, or reliability of chatbot responses</li>
                  <li>Chatbot interactions are not a substitute for professional consulting services</li>
                  <li>
                    All information accessed remains subject to the intellectual property restrictions set forth herein
                  </li>
                </ul>

                <h3 className="text-base font-semibold mb-3 mt-6">6.3 User Conduct and Prohibited Uses</h3>
                <p className="mb-4">When using interactive Services, you agree not to:</p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Submit false, misleading, or inappropriate content</li>
                  <li>Attempt to circumvent security measures or access unauthorized information</li>
                  <li>Use automated tools to interact with our Services excessively</li>
                  <li>Submit content that violates third-party rights or applicable laws</li>
                  <li>Use the Services to develop competing products or reverse-engineer our methodology</li>
                  <li>
                    Attempt to gain unauthorized access to any portion of the Services or any systems or networks
                    connected to the Services
                  </li>
                </ul>

                <h3 className="text-base font-semibold mb-3 mt-6">6.4 Content Moderation</h3>
                <p className="mb-4">
                  We reserve the right to monitor, review, and remove user inputs that violate these Terms or are
                  otherwise inappropriate, though we are not obligated to do so.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  7. Professional Advice and Information Disclaimers
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">7.1 No Professional Advice</h3>
                <p className="mb-4">
                  The I5 Model framework, documentation, and all Content provided through the Services are for
                  informational and educational purposes only. Nothing in the Services constitutes professional business
                  consulting, legal, financial, or other professional advice. You should consult with qualified
                  professionals before implementing any business methodology or making significant business decisions.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">7.2 No Guarantee of Results</h3>
                <p className="mb-4">
                  While the I5 Model has demonstrated successful outcomes in various implementations, we make no
                  guarantees or warranties regarding:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Specific business results or performance improvements</li>
                  <li>Suitability for your particular business circumstances</li>
                  <li>Achievement of projected cost savings or schedule improvements</li>
                  <li>Compliance with specific industry requirements or regulations</li>
                </ul>

                <h3 className="text-base font-semibold mb-3 mt-6">7.3 Information Accuracy</h3>
                <p className="mb-4">
                  We strive to provide accurate and up-to-date information, but we do not warrant the accuracy,
                  completeness, or currency of any Content. Information may become outdated, and methodologies may
                  evolve over time.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  8. Website Availability and Technical Services
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">8.1 Service Availability</h3>
                <p className="mb-4">
                  We endeavor to maintain the availability of our Services but do not guarantee uninterrupted access.
                  Services may be temporarily unavailable due to:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Scheduled maintenance</li>
                  <li>Technical difficulties</li>
                  <li>Circumstances beyond our reasonable control</li>
                  <li>Updates or improvements to the platform</li>
                </ul>

                <h3 className="text-base font-semibold mb-3 mt-6">8.2 Technical Support</h3>
                <p className="mb-4">
                  Technical support for the Services is provided on a best-effort basis. We do not guarantee response
                  times or resolution of technical issues, though we will make reasonable efforts to address problems
                  promptly.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">8.3 System Requirements</h3>
                <p className="mb-4">
                  You are responsible for ensuring your equipment and internet connection meet the minimum requirements
                  for accessing the Services.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  9. Interactive Services and Data Collection
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">9.1 Chatbot and Database Services</h3>
                <p className="mb-4">
                  Interactive features, including but not limited to chatbot services providing access to I5 Model
                  information, are provided for evaluation and educational purposes only. Information accessed through
                  these services remains subject to all restrictions set forth herein.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">9.2 User Data</h3>
                <p className="mb-4">
                  Any information you provide through interactive features may be stored and used to improve Services
                  quality. You retain ownership of your input data, while the owner retains all rights to the underlying
                  Content and methodologies.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  10. Prohibited Activities
                </h2>
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>
                    Attempt to gain unauthorized access to any portion of the Services or any systems or networks
                    connected to the Services
                  </li>
                  <li>Use automated tools to extract, scrape, or harvest Content beyond normal browsing</li>
                  <li>
                    Distribute, share, or make available the I5 Model methodology to competitors or unauthorized third
                    parties
                  </li>
                  <li>
                    Use the Content to train artificial intelligence models or machine learning systems without
                    authorization
                  </li>
                  <li>Violate any applicable laws or regulations in connection with your use of the Services</li>
                  <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                  <li>Impersonate any person or entity or falsely state or misrepresent your affiliation</li>
                  <li>
                    Upload, post, or transmit any content that is harmful, threatening, abusive, or otherwise
                    objectionable
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  11. Updates and Modifications to Terms
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">11.1 Right to Modify</h3>
                <p className="mb-4">
                  We reserve the right to modify these Terms at any time. When we make changes, we will:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Update the "Last Updated" date at the top of these Terms</li>
                  <li>Provide notice through prominent placement on our website</li>
                  <li>
                    For material changes, provide additional notice via email (if you have provided contact information)
                  </li>
                </ul>

                <h3 className="text-base font-semibold mb-3 mt-6">11.2 Effective Date of Changes</h3>
                <p className="mb-4">
                  Changes to these Terms will become effective immediately upon posting, except for material changes
                  which will become effective thirty (30) days after notice.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">11.3 Continued Use</h3>
                <p className="mb-4">
                  Your continued use of the Services after changes become effective constitutes your acceptance of the
                  modified Terms. If you do not agree to the changes, you must discontinue use of the Services.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  12. Force Majeure
                </h2>
                <p className="mb-4">
                  We shall not be liable for any failure or delay in performance of our obligations under these Terms
                  due to circumstances beyond our reasonable control, including but not limited to:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Natural disasters, pandemics, or other acts of nature</li>
                  <li>War, terrorism, civil unrest, or government actions</li>
                  <li>Internet or telecommunications failures</li>
                  <li>Cyber attacks or security breaches affecting third-party infrastructure</li>
                  <li>Labor disputes or supplier failures</li>
                </ul>
                <p className="mb-4">
                  During such events, our obligations will be suspended for the duration of the circumstance, and we
                  will make reasonable efforts to resume normal operations as soon as practicable.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  13. Trade Secrets and Confidentiality
                </h2>
                <p className="mb-4">
                  The I5 Model framework contains trade secrets and confidential information of substantial value
                  protected under various UAE federal laws including the Civil Code (Federal Law No. 5 of 1985), Penal
                  Code (Federal Law No. 3 of 1987), and Patent Law (Federal Law No. 11 of 2021). By accessing this
                  information, you acknowledge that:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>The methodology and processes constitute trade secrets and confidential information</li>
                  <li>You will maintain the confidentiality of all proprietary information</li>
                  <li>
                    Unauthorized disclosure may result in irreparable harm for which monetary damages would be
                    inadequate
                  </li>
                  <li>
                    Such information derives economic value from not being generally known to persons who could obtain
                    value from its disclosure
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  14. Enforcement and Remedies
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">14.1 Infringement Claims</h3>
                <p className="mb-4">
                  Any unauthorized use of the Content constitutes copyright infringement under UAE Federal Decree-Law
                  No. 38 of 2021 and may result in:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  <li>Immediate termination of access</li>
                  <li>Legal action for damages and injunctive relief under UAE civil and criminal law</li>
                  <li>Fines ranging from AED 50,000 to AED 500,000 for trade secret violations</li>
                  <li>Imprisonment terms as provided under applicable UAE penal provisions</li>
                  <li>Recovery of attorney's fees and costs</li>
                  <li>Criminal prosecution where applicable</li>
                </ul>

                <h3 className="text-base font-semibold mb-3 mt-6">14.2 Takedown Procedures</h3>
                <p className="mb-4">
                  If you believe any Content infringes your intellectual property rights, please provide written notice
                  including specific identification of the claimed infringement and your contact information.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  15. Disclaimers and Limitation of Liability
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">15.1 No Warranties</h3>
                <p className="mb-4">
                  The Services are provided "as is" and "as available" without warranties of any kind, either express or
                  implied, including but not limited to warranties of merchantability, fitness for a particular purpose,
                  non-infringement, accuracy, or uninterrupted service.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">15.2 Limitation of Liability</h3>
                <p className="mb-4">
                  To the maximum extent permitted by law, in no event shall the owner be liable for any indirect,
                  incidental, special, consequential, or punitive damages, including but not limited to loss of profits,
                  data, business opportunities, or business interruption, regardless of the theory of liability.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">15.3 Liability Cap</h3>
                <p className="mb-4">
                  Our total liability to you for all claims arising from or related to the Services shall not exceed the
                  amount paid by you (if any) for accessing the Services in the twelve (12) months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">16. Termination</h2>

                <h3 className="text-base font-semibold mb-3 mt-6">16.1 Termination Rights</h3>
                <p className="mb-4">
                  These Terms remain in effect until terminated. We may terminate your access immediately without notice
                  for any violation of these Terms. You may terminate your use of the Services at any time by ceasing to
                  access them.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">16.2 Effect of Termination</h3>
                <p className="mb-4">
                  Upon termination, you must cease all use of the Services and destroy any downloaded materials.
                  Sections relating to intellectual property, confidentiality, disclaimers, limitation of liability, and
                  governing law shall survive termination.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  17. Severability and Survival
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">17.1 Severability</h3>
                <p className="mb-4">
                  If any provision of these Terms is deemed invalid, illegal, or unenforceable by a court of competent
                  jurisdiction, the remaining provisions shall remain in full force and effect, and the invalid
                  provision shall be modified to the minimum extent necessary to make it enforceable.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">17.2 Survival</h3>
                <p className="mb-4">
                  The following provisions shall survive termination of these Terms: intellectual property rights,
                  confidentiality obligations, disclaimers, limitation of liability, governing law, and dispute
                  resolution.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  18. Governing Law and Jurisdiction
                </h2>

                <h3 className="text-base font-semibold mb-3 mt-6">18.1 Applicable Law</h3>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the United Arab
                  Emirates, without regard to conflict of law principles.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">18.2 Dispute Resolution</h3>
                <p className="mb-4">
                  Any disputes arising out of or relating to these Terms or the Services shall be resolved through
                  binding arbitration under the Dubai International Arbitration Centre (DIAC) Arbitration Rules 2022.
                  The arbitration shall be conducted in English, seated in the Dubai International Financial Centre
                  (DIFC), and governed by UAE law. Prior to arbitration, parties agree to attempt resolution through
                  mediation under DIAC procedures.
                </p>

                <h3 className="text-base font-semibold mb-3 mt-6">18.3 International Protection</h3>
                <p className="mb-4">
                  The owner reserves all rights under international intellectual property treaties and conventions,
                  including but not limited to the Berne Convention, WIPO Copyright Treaty, and applicable bilateral
                  agreements.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">19. Termination</h2>
                <p className="mb-4">
                  These Terms remain in effect until terminated. The owner may terminate your access immediately without
                  notice for any violation of these Terms. Upon termination, you must cease all use of the Services and
                  destroy any downloaded materials.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  20. Severability and Modifications
                </h2>
                <p className="mb-4">
                  If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall
                  remain in full force and effect. The owner reserves the right to modify these Terms at any time, with
                  changes becoming effective upon posting.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-3 border-l-4 border-black">
                  21. Contact Information
                </h2>
                <p className="mb-4">
                  For questions regarding these Terms, intellectual property matters, or licensing inquiries, please
                  contact:
                </p>
                <p className="mb-4">
                  <strong>Inquiries: info@i5model.com</strong>
                </p>
              </section>

              <div className="border-t-2 border-gray-300 pt-6 mt-12 text-center">
                <p className="font-bold text-sm mb-2">© 2025 I5 Model. All Rights Reserved.</p>
                <p className="text-xs italic">
                  This document constitutes a legally binding agreement. By using the Services, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms of Use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

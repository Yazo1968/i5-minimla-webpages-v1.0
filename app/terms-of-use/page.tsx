"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsOfUsePage() {
  const effectiveDate = "February 12, 2025"
  const lastUpdated = "May 25, 2025"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to I5 Model</span>
            </Link>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <Calendar className="h-4 w-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Terms Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="prose prose-slate max-w-none">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Terms of Use</h1>

                <p className="text-slate-600 mb-6">
                  <strong>Effective Date: {effectiveDate}</strong>
                </p>

                <p className="text-slate-700 leading-relaxed mb-6">
                  Welcome to i5model.com. These Terms of Use constitute a binding agreement between you and I5 Model
                  ("we," "us," or "our") governing your access to and use of this website and the I5 Real Estate
                  Delivery Model framework.
                </p>

                <p className="text-slate-700 leading-relaxed mb-8">
                  By accessing or using our website, you acknowledge that you have read, understood, and agree to be
                  bound by these terms. If you do not agree, please refrain from using our website.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Intellectual Property Rights</h2>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">1.1 Ownership</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The I5 Real Estate Delivery Model, including all methodologies, frameworks, processes, digital
                  platform architectures, and related content on this website, is proprietary intellectual property
                  protected under applicable copyright and intellectual property laws. All rights not expressly granted
                  are reserved.
                </p>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">1.2 Permitted Use</h3>
                <p className="text-slate-700 leading-relaxed mb-2">You may access and use our materials for:</p>
                <ul className="list-disc list-inside text-slate-700 leading-relaxed mb-4 ml-4">
                  <li>Personal educational purposes</li>
                  <li>Internal business evaluation</li>
                  <li>Professional development</li>
                  <li>Academic research with proper attribution</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">1.3 Restrictions</h3>
                <p className="text-slate-700 leading-relaxed mb-2">Without our prior written consent, you may not:</p>
                <ul className="list-disc list-inside text-slate-700 leading-relaxed mb-4 ml-4">
                  <li>Reproduce, distribute, or create derivative works for commercial purposes</li>
                  <li>Remove or alter any proprietary notices</li>
                  <li>Use our intellectual property to develop competing frameworks or methodologies</li>
                  <li>Misrepresent the source or ownership of our content</li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Use of Website</h2>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">2.1 Acceptable Use</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You agree to use this website in accordance with all applicable laws and regulations, and in a manner
                  that respects the rights of others and the integrity of our platform.
                </p>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">2.2 User Conduct</h3>
                <p className="text-slate-700 leading-relaxed mb-2">When using our website, you agree not to:</p>
                <ul className="list-disc list-inside text-slate-700 leading-relaxed mb-4 ml-4">
                  <li>Interfere with website functionality or security</li>
                  <li>Attempt unauthorized access to any systems or data</li>
                  <li>Upload malicious code or harmful content</li>
                  <li>Misrepresent your identity or affiliation</li>
                  <li>Collect information about other users without consent</li>
                  <li>Post content that violates applicable laws or standards</li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Content and Information</h2>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">3.1 Educational Nature</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Information provided on this website is for educational and informational purposes. While we strive
                  for accuracy, real estate and construction practices vary by jurisdiction and specific project
                  requirements.
                </p>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">3.2 No Professional Advice</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Content on this website does not constitute professional advice. You should consult qualified
                  professionals for specific project implementation.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Privacy and Data Protection</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Your use of this website is also governed by our Privacy Policy, which describes how we collect, use,
                  and protect your information in accordance with applicable data protection laws.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Third-Party Links</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our website may contain links to third-party resources. We provide these for convenience but do not
                  endorse or assume responsibility for external content.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Electronic Communications</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  By using this website, you consent to receiving electronic communications from us regarding your use
                  of the website and related matters.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Disclaimers</h2>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">7.1 Warranty Disclaimer</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  This website and its content are provided "as is" without warranties of any kind, either express or
                  implied, to the fullest extent permitted by law.
                </p>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">7.2 Limitation of Liability</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We shall not be liable for any indirect, incidental, special, or consequential damages arising from
                  your use of this website or the I5 Model framework, subject to applicable law.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Indemnification</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You agree to indemnify and hold harmless I5 Model and its affiliates from any claims arising from your
                  breach of these terms or violation of applicable laws.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. Dispute Resolution</h2>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">9.1 Amicable Resolution</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  In the spirit of cooperation, parties agree to first attempt to resolve any disputes through good
                  faith negotiations.
                </p>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">9.2 Governing Law</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  These terms are governed by the laws of the United Arab Emirates and the applicable laws of the
                  Emirate of Abu Dhabi.
                </p>

                <h3 className="text-xl font-medium text-slate-800 mt-6 mb-3">9.3 Jurisdiction</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Any disputes that cannot be resolved amicably shall be subject to the exclusive jurisdiction of the
                  courts of Abu Dhabi, UAE.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">10. Modifications</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We reserve the right to modify these terms at any time. Notice of material changes will be posted on
                  the website. Continued use after changes constitutes acceptance of the revised terms.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">11. Language</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  These Terms of Use are drafted in English. In case of any discrepancy between the English version and
                  any translation, the English version shall prevail.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">12. Contact Information</h2>
                <p className="text-slate-700 leading-relaxed mb-2">
                  For questions about these Terms of Use or to request permissions, please contact us at:
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 ml-4">
                  <strong>Email:</strong> info@i5model.com
                  <br />
                  <strong>Location:</strong> Abu Dhabi, United Arab Emirates
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">13. Severability</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If any provision of these terms is found to be unenforceable under applicable law, the remaining
                  provisions shall continue in full force and effect.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">14. Entire Agreement</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  These Terms of Use constitute the entire agreement between you and I5 Model regarding the use of this
                  website, superseding any prior agreements.
                </p>

                <hr className="my-8 border-slate-300" />

                <p className="text-center text-slate-800 font-medium mb-2">
                  By using this website, you acknowledge that you have read and understood these terms and agree to be
                  bound by them under the laws of the United Arab Emirates.
                </p>

                <p className="text-center text-slate-600 text-sm mt-6">
                  <strong>Last Updated:</strong> {lastUpdated}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 text-sm">© 2025 I5 Real Estate Delivery Model. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-slate-500 hover:text-blue-600 transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="text-slate-500 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

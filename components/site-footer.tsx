import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="text-white bg-gray-950 border-t border-slate-600 design-editable py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 design-editable">
        <div className="grid gap-8 md:grid-cols-4 design-editable">
          <div className="design-editable">
            <div className="flex items-center mb-4">
              <Image
                src="/images/i5-logo-white.png"
                alt="I5 Model Logo"
                width={120}
                height={40}
                className="h-10 w-auto mr-4"
              />
              <h4 className="font-semibold design-editable leading-7 text-base">REAL ESTATE PRODUCTIZATION</h4>
            </div>
            <p className="text-gray-300 design-editable">
              A structured pathway for digital transformation in real estate and construction sectors through
              comprehensive digital transformation.
            </p>
          </div>
          <div className="design-editable">
            <ul className="space-y-2 text-gray-300 design-editable">
              <li className="design-editable">
                <a href="/insights/sector-challenges" className="hover:text-white transition-colors duration-200">
                  Sector Challenges
                </a>
              </li>
              <li className="design-editable">
                <a href="/insights/i5-model-overview" className="hover:text-white transition-colors duration-200">
                  I5 Model Overview
                </a>
              </li>
              <li className="design-editable">
                <a href="/insights/core-principles" className="hover:text-white transition-colors duration-200">
                  Core Principles
                </a>
              </li>
              <li className="design-editable">
                <a href="/insights/delivery-framework" className="hover:text-white transition-colors duration-200">
                  Delivery Framework
                </a>
              </li>
              <li className="design-editable">
                <a href="/insights/operational-ecosystem" className="hover:text-white transition-colors duration-200">
                  Operational Ecosystem
                </a>
              </li>
            </ul>
          </div>
          <div className="design-editable">
            <ul className="space-y-2 text-gray-300 design-editable">
              <li className="design-editable">
                <a
                  href="/insights/organizational-framework"
                  className="hover:text-white transition-colors duration-200"
                >
                  Organizational Framework
                </a>
              </li>
              <li className="design-editable">
                <a href="/insights/financial-framework" className="hover:text-white transition-colors duration-200">
                  Financial Framework
                </a>
              </li>
              <li className="design-editable">
                <a
                  href="/insights/procurement-contracts-framework"
                  className="hover:text-white transition-colors duration-200"
                >
                  Procurement & Contracts
                </a>
              </li>
              <li className="design-editable">
                <a href="/insights/kpi-risk-framework" className="hover:text-white transition-colors duration-200">
                  KPI & Risk Management
                </a>
              </li>
              <li className="design-editable">
                <a href="/insights/case-studies-references" className="hover:text-white transition-colors duration-200">
                  Case Studies & References
                </a>
              </li>
            </ul>
          </div>
          <div className="design-editable">
            <h4 className="text-lg font-semibold mb-4 design-editable">CONTACT</h4>
            <ul className="space-y-2 text-gray-300 design-editable">
              <li className="design-editable">
                <a
                  href="mailto:info@i5model.com"
                  className="hover:text-white transition-colors duration-200 design-editable"
                >
                  info@i5model.com
                </a>
              </li>
              <li className="design-editable">
                <a href="/terms-of-use" className="hover:text-white transition-colors duration-200 design-editable">
                  Terms of Use
                </a>
              </li>
              <li className="design-editable">
                <a href="/privacy-policy" className="hover:text-white transition-colors duration-200 design-editable">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 design-editable">
          <p className="design-editable">
            © {new Date().getFullYear()} I5 Real Estate Delivery Model. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

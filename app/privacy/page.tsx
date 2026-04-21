'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="py-16 bg-card border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
          <h1 className="text-h2 text-foreground mb-4">Privacy Policy</h1>
          <p className="text-base text-foreground/70">Last updated: April 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-h3 text-foreground mb-4">1. Introduction</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                Poker Vault (&quot;we&quot; or &quot;us&quot; or &quot;our&quot;) operates the pokervault.com website (the &quot;Service&quot;). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">2. Information Collection and Use</h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Personal Data:</h3>
                  <p className="text-foreground/80">
                    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). This may include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-foreground/80">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Cookies and Usage Data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Usage Data:</h3>
                  <p className="text-foreground/80">
                    We may also collect information about how the Service is accessed and used (&quot;Usage Data&quot;). This may include information such as your computer&apos;s Internet Protocol address, browser type, browser version, the pages you visit, the time and date of your visit, and other diagnostic data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">3. Use of Data</h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                Poker Vault uses the collected data for various purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">4. Security of Data</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">5. Changes to This Privacy Policy</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">6. Contact Us</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-foreground/80">
                <li>By email: support@pokervault.com</li>
                <li>By visiting our contact page on our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">7. Your Rights</h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                You have certain rights regarding your personal data. These may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict the use of your data</li>
                <li>The right to data portability</li>
                <li>The right to opt-out of certain data uses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">8. Third-Party Links</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                Our Service may contain links to other websites that are not operated by us. This Privacy Policy does not apply to such external sites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites before providing your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                Our Service is not intended for children under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If a parent or guardian becomes aware that their child has provided us with Personal Data, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">10. Cookies</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our Service and to hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

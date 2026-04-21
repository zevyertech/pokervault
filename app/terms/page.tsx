'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="py-16 bg-card border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
          <h1 className="text-h2 text-foreground mb-4">Terms of Service</h1>
          <p className="text-base text-foreground/70">Last updated: April 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6 prose prose-invert max-w-none">
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-h3 text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                By accessing and using Poker Vault (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">2. Use License</h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) from Poker Vault for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on Poker Vault</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                <li>Attempt to gain unauthorized access to any portion or feature of Poker Vault</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">3. User Accounts</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                When you create an account with Poker Vault, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your password and you are fully responsible for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">4. Intellectual Property Rights</h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                The materials on Poker Vault, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, are the property of Poker Vault or its content suppliers and are protected by international copyright laws.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                You may view and print the materials for personal use only. Any other use of the materials is strictly prohibited without the prior written consent of Poker Vault.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">5. Disclaimer</h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                The materials on Poker Vault are provided on an &apos;as is&apos; basis. Poker Vault makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">6. Limitations</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                In no event shall Poker Vault or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Poker Vault, even if Poker Vault or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">7. Accuracy of Materials</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                The materials appearing on Poker Vault could include technical, typographical, or photographic errors. Poker Vault does not warrant that any of the materials on its website are accurate, complete, or current. Poker Vault may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">8. Links</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                Poker Vault has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Poker Vault of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">9. Modifications</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                Poker Vault may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">10. Governing Law</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Poker Vault operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-h3 text-foreground mb-4">11. Contact Information</h2>
              <p className="text-base text-foreground/80 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at support@pokervault.com.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

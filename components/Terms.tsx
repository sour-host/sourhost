// app/terms/page.tsx
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <main className="relative text-white z-3 min-h-screen">
        <div className="max-w-7xl mx-auto py-26 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl mb-4">Legal Documents</h1>
            <Link href="/terms" className="text-lg py-2 px-4 pr-29 bg-gradient-to-r from-[#00b72f] to-transparent">Terms of Service</Link><br/><br/>
            <Link href="/legal/privacy" className="text-lg py-2 px-4 pr-35">Privacy Policy</Link><br/><br/>
            <Link href="/legal/sla" className="text-lg py-2 px-4 pr-13">Service Level Agreement</Link><br/><br/>
          </div>
          <div className="shadow col-span-2 rounded-lg p-6 sm:p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold sm:text-4xl">
              <span className="font-bold bg-gradient-to-r from-gray-400 to-[#00b72f] bg-clip-text text-transparent">Terms of Service</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
            <div className="prose prose-blue max-w-none">
              <section id="intro">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">1. Introduction</h2>
                <p className="mb-4">
                  The following terms and conditions of service regulates and define the relationship between Aeplo Host (owned and operated by Spheres Hosting, LLC) hereby referred to as the ("Hosting")/("Company") and/or ("We") and Clients, customers and or users such as guests. By using our services, you automatically agree to all conditions mentioned within the following agreement, ensure you read and understand this carefully.
                </p>
              </section>

              <section id="updates" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">2. Updates</h2>
                <p className="mb-4">
                  We may update these Terms of Use from time to time with no prior notice. Any such changes will not apply to any dispute between you and us arising prior to the date on which we posted the revised Terms of Service incorporating such changes. You agree that it is your responsibility to regularly check Aeplo.com for any updated Terms of Service. In addition, by continuing to use or access any of the Aeplo Host Sites or otherwise engaging with Aeplo Host after we post any changes, you accept the updated Terms of Use. The “Last Updated” legend above indicates when these Terms of Use were last changed.
                </p>
              </section>

              <section id="user-representation" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">3. User Representation</h2>
                <p className="mb-2">Aeplo Host will not allow the following users and viewers to use the platform in the following events:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are under the age of 13 (without Parent or Guardian Consent).</li>
                  <li>a person barred from receiving and rendering services under the laws of the United Stated of America or another applicable jurisdiction By using our services you agree that all registration information you submit will be true, accurate, current, and complete and that we may, at our absolute discretion, refuse to register any person/entity as a "Client".</li>
                </ul>
              </section>

              <section id="abuse" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">4. Abuse</h2>
                <p className="mb-2">Services found to be abusing may be suspended or terminated without prior warning. Services may be suspended or terminated due to the following reasons (but not limited to):</p>
                <h2 className="text-lg font-bold text-gray-400 my-4">Game Hosting Services</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Attempting to gain unauthorized access</li>
                  <li>Using leaked/nulled assets within your server</li>
                  <li>Engaging in any unlawful act</li>
                  <li>Excessive use of our resources that negatively impacts our network, reliability, availability, or another customer's performance.</li>
                  <li>Any form of harassment, abuse, or harm to other users, our employees, or third parties.</li>
                </ul>
                <h2 className="text-lg font-bold text-gray-400 my-4">Dedicated Servers</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hosting, promoting, or distributing child pornography.</li>
                  <li>DDoSing, DoXing, or any other harmful online attack.</li>
                  <li>Engaging in any other unlawful act.</li>
                  <li>Excessive use of our resources that negatively impacts our network, reliability, availability, or another customer's performance. We reserve the right to turn off or suspend your service if we believe that it's affecting our network.</li>
                  <li>Hosting or distributing any content on our servers that infringes upon the intellectual property rights of others, including copyrighted material, trademarks, patents, etc.</li>
                  <li>Any form of harassment, abuse, or harm to other users, our employees, or third parties.</li>
                </ul>
              </section>

              <section id="user-registration" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">5. User Registration & Security</h2>
                <p className="mb-4">
                  You might be required to register an account prior to service purchase. By registering an account at you agree to the following:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You will not share your account credentials.</li>
                  <li>You will take responsibility for the actions of the account.</li>
                  <li>You will be responsible for the security of the account.</li>
                  <li>You will not exploit any flaws in hardware or software for any reason.</li>
                  <li>You will not engage in any illegal activities.</li>
                  <li>You will report security vulnerabilities to us upon discovering them.</li>
                </ul>
              </section>

              <section id="termination" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">6. Term & Termination</h2>
                <p className="mb-4 text-white">
                  These Terms of Use shall remain in full force and effect while you use Aeplo Host. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION. If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                </p>
              </section>

              <section id="liability" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">7. Limitation of Liability</h2>
                <p className="mb-4">
                  Aeplo Host under no circumstances whatsoever is responsible for data loss, disruption of information (including that of unauthorized access to our services), or any other loss of data. Aeplo Host shall not be held liable for disruption, delay, or disconnection of services for any period of time.
                </p>
              </section>

              <section id="fraud" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">8. Fraud</h2>
                <p className="mb-4">
                  Attempt of any type of fraud at Aeplo Host will lead to your services and or your account being subject to termination.
                </p>
              </section>

              <section id="cancellation" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">9. Cancellation</h2>
                <p className="mb-4 text-white">
                  You may cancel your services at any moment in time through our billing area. Cancellations can be executed immediately(~1 day) or at the end of your billing period. We shall not be held responsible for any unintended payments made from using an automatic payment subscription service.
                </p>
              </section>

              <section id="modifications" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">10. Modifications to the TOS</h2>
                <p className="mb-4 text-white">
                  We reserve the right to modify these terms at any time. Any changes will be communicated to you at least 30 days in advance via email or through a notice on our websites. Continued use of our services after the effective date of any changes constitutes your acceptance of the modified TOS.
                </p>
              </section>

              <section className="pt-22" id="contact">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">11. Contact Us</h2>
                <p>
                  If you have any questions about these terms, please contact us at{' '}
                  <Link href="mailto:sour@aeplo.com" className="text-[#00b72f] hover:underline">
                    sour@aeplo.com (SOON)
                  </Link>.
                </p>
              </section>
            </div>
          </div>
          </div>
        </div>
      </main>
    </>
  );
}

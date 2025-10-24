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
            <Link href="/legal" className="text-lg py-2 px-4 pr-29">Terms of Service</Link><br/><br/>
            <Link href="/legal/privacy" className="text-lg py-2 px-4 pr-35">Privacy Policy</Link><br/><br/>
            <Link href="/legal/sla" className="text-lg py-2 px-4 pr-13 bg-gradient-to-r from-[#00b72f] to-transparent">Service Level Agreement</Link><br/><br/>
          </div>
          <div className="shadow col-span-2 rounded-lg p-6 sm:p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold sm:text-4xl">
              <span className="font-bold bg-gradient-to-r from-gray-400 to-[#00b72f] bg-clip-text text-transparent">Service Level Agreement</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
            <div className="prose prose-blue max-w-none">
              <section id="intro">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">1. Introduction</h2>
                <p className="mb-4">
                  We try our best to provide a quality service for our users. We aim to do this in the following ways, however the service is provided "as is" and we cannot guarantee to provide our services in accordance with the following. 
                </p>
              </section>

              <section id="updates" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">2. Support</h2>
                <p className="mb-4">
                  During office hours, we aim to provide a response of less than 20 minutes, however for tickets, Discord or Website, submitted outside of office hours, won't be guaranteed a response for 1-2 hours. Our support team is here to help with issues directly related to us, so we cannot guarantee support for third-party software, plugins or modifications.
                </p>
              </section>

              <section id="user-representation" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">Backups</h2>
                <p className="mb-2">We backup all servers every 24 hours, however we cannot guarantee the availability of these backups in the case of an emergency. The customer is responsible for backing up their own data on a regular basis. You can easily do so in the Control Panel.</p>
              </section>

              <section id="abuse" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">4. Uptime</h2>
                <p className="mb-2">We aim to provide 99.90% uptime across all our services. However certain situations may cause servers to go offline such as scheduled maintenance. These downtimes occur from time to time, and the customer should take into account that these events are unavoidable. The status of our servers can be found here: https://status.sour.host</p>
              </section>

              <section id="user-registration" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">5. DDoS Protection</h2>
                <p className="mb-4">This service includes up to 4Tbps of mitigation capacity and protection against most common attacks. Sour Host, LLC will not be liable for any attacks we are unable to prevent to the extent that we have taken reasonable steps to prevent.</p>
              </section>

              <section className="pt-22" id="contact">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about these terms, please contact us at{' '}
                  <Link href="mailto:legal@sour.host" className="text-[#00b72f] hover:underline">
                    legal@sour.host
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

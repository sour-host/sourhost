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
            <Link href="/legal/privacy" className="text-lg py-2 px-4 pr-35 bg-gradient-to-r from-[#00b72f] to-transparent">Privacy Policy</Link><br/><br/>
            <Link href="/legal/sla" className="text-lg py-2 px-4 pr-13">Service Level Agreement</Link><br/><br/>
          </div>
          <div className="shadow col-span-2 rounded-lg p-6 sm:p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold sm:text-4xl">
              <span className="font-bold bg-gradient-to-r from-gray-400 to-[#00b72f] bg-clip-text text-transparent">Privacy Policy</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
            <div className="prose prose-blue max-w-none">
              <section id="intro">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">1. Introduction</h2>
                <p className="mb-4">
                 Sour Host, LLC operates the https://sour.host website, which provides the "Service". This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service or the Sour Host.com website. If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at https://Sour Host.com, unless otherwise defined in this Privacy Policy.
                </p>
              </section>

              <section id="updates" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">2. Information Collection & Use</h2>
                <p className="mb-4">
                  For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
                </p>
              </section>

              <section id="user-representation" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">Log Data</h2>
                <p className="mb-2">We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
              </section>

              <section id="abuse" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">4. Cookies</h2>
                <p className="mb-2">Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.<br/><br/>

Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>
              </section>

              <section id="user-registration" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">5. Security</h2>
                <p className="mb-4">We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
              </section>

              <section id="termination" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">6. Links to Other Sites</h2>
                <p className="mb-4 text-white">
                  Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </section>

              <section id="termination" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">7. Children's Privacy</h2>
                <p className="mb-4 text-white">Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
              </section>

              <section id="liability" className="pt-22">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">8. Changes to this Policy</h2>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
                </p>
              </section>

              <section className="pt-22" id="contact">
                <h2 className="text-2xl font-bold text-gray-400 mb-4">11. Contact Us</h2>
                <p>
                  If you have any questions about these terms, please contact us at{' '}
                  <Link href="mailto:legal@sour.host" className="text-[#FFC000] hover:underline">
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

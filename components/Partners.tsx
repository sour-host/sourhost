import Link from 'next/link';

export default function DarkFooter() {
  return (
    <section className="relative z-10 pt-38 pb-18">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            <span className="font-bold text-white">Join Our Partner Program</span>
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-white">
            Join our partner program and get free servers, perks, discounts, and more.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 px-10 text-center transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl font-bold text-[#2c4fd6]">10% Discount</div>
                    <div className="text-sm text-gray-400">Get a 10% Discount on every server you purchase</div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 px-10 text-center transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl font-bold text-[#2c4fd6]">1 Free 4GB Server</div>
                    <div className="text-sm text-gray-400">Get a free 4GB Minecraft Server when you partner</div>
                </div>
                {/* <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 px-10 text-center transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl font-bold text-[#2c4fd6]">Custom Discord Role</div>
                    <div className="text-sm text-gray-400">Get your own custom Discord Role in our 100+ member Discord Server</div>
                </div> */}
            </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link target="_blank" rel="noopener noreferrer" href="https://forms.google.com/" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Join The Partner Program
          </Link>
        </div>
        </div>
    </section>
)};

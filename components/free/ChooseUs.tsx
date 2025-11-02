// components/WhyChooseUs.tsx
import { 
  WrenchScrewdriverIcon,
  ArchiveBoxArrowDownIcon,
  GlobeAltIcon,
  ClockIcon,
  CpuChipIcon,
  ArrowsPointingOutIcon,
  CurrencyDollarIcon,
  ServerStackIcon,
  LifebuoyIcon 
} from '@heroicons/react/24/outline';
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ServerStackIcon className="w-50 text-blue-500" />,
      title: "FREE Resources",
      description: "You get FREE (fair-usage) RAM and CPU specifications, ensuring a lag-free experience unlike the rest!"
    },
    {
      icon: <WrenchScrewdriverIcon className="w-50 text-green-500" />,
      title: "Amazing Features",
      description: "Our easy-to-use dashboard makes us able to offer both game servers and VPS, for free."
    },
    {
      icon: <ClockIcon className="w-50 text-purple-500" />,
      title: "Instant Setup",
      description: "Your server is instantly deployed upon purchase. It takes less than 5 minutes for the server to install."
    },
    {
      icon: <GlobeAltIcon className="w-50 text-orange-500" />,
      title: "99.90% Uptime",
      description: "We work hard to offer a 99.90% or higher uptime status. Say goodbye to downtime, and say hello uptime!"
    },
    {
      icon: <CurrencyDollarIcon className="w-50 text-yellow-500" />,
      title: "Transparent Pricing",
      description: "Pay only for what you see, nothing more. No more hidden fees. No more BS. Just hosting at new heights."
    },
    {
      icon: <LifebuoyIcon className="w-50 text-red-500" />,
      title: "24/7 Expert Support",
      description: "Our support team is available 24/7 via live chat, Discord, and our ticket system. Satisfaction is our #1 priority."
    }
  ];

  return (
    <section id="features" className="relative z-10 pb-16 sm:pb-24 lg:pb-24 pt-22 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Why Sour Host?</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            What features make us easier and just better than the competition.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative overflow-hidden z-10 hover:-translate-y-2 transform transition-all duration-300 bg-white/10 text-black rounded-xl shadow-md"
            >
              <div className="p-4">
                <div className="overflow-hidden absolute w-50 top-[-40px] opacity-10 rotate-340 right-[-65px]">
                    {feature.icon}
                </div>
                <h3 className="mt-0 text-lg relative z-11 font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-white relative z-11">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

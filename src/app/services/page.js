import Header from '../components/Header';
import Footer from '../components/Footer';
import allMetadata from '../metadata';

export const metadata = allMetadata.services;

const services = [
  {
    title: "Custom Web Development",
    description: "Build responsive and dynamic websites tailored to your needs.",
    image: "/images/web-development.png",
  },
  {
    title: "Mobile App Development",
    description: "Create seamless mobile experiences for iOS and Android platforms.",
    image: "/images/mobile-development.png",
  },
  {
    title: "Graphic Design Services",
    description: "Design stunning visuals for your business and projects.",
    image: "/images/graphic-design.png",
  },
  {
    title: "AI-Powered Solutions",
    description: "Leverage AI to automate tasks and unlock new possibilities.",
    image: "/images/ai-solutions.png",
  },
  {
    title: "Technical Support",
    description: "Reliable technical support to ensure your systems run smoothly.",
    image: "/images/technical-support.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#1e0131] to-[#00040d] text-[#d1d5db]">
      {/* Header */}
      <div className="w-full">
        <Header showHomeLink={true} />
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 w-full max-w-3xl mx-auto mt-12 px-4 sm:px-0">
        <h1 className="text-3xl font-bold text-[#ff007f] mb-6 text-center">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1e0131] border border-[#2a2e43] rounded-lg overflow-hidden shadow-lg text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#ff007f] mb-2">
                  {service.title}
                </h2>
                <p className="text-[#d1d5db]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}

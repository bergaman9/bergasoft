import Header from '../components/Header';
import Footer from '../components/Footer';
import allMetadata from '../metadata';
import Link from 'next/link';

export const metadata = allMetadata.projects;

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#1e0131] to-[#00040d] text-[#d1d5db]">
      {/* Header */}
      <div className="w-full">
        <Header showHomeLink={true} />
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 w-full max-w-3xl mx-auto mt-12 px-4 sm:px-0">
        <h1 className="text-3xl font-bold text-[#ff007f] text-center">Our Projects</h1>
        <p className="text-center">
          Here are some of our featured projects:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
          {/* Project 1 */}
          <div className="border border-[#2a2e43] p-4 rounded-lg text-center bg-[#1e0131] text-[#00c8ff]">
            <Link href="/projects/contro-bot">
              <img
                src="/images/contro.png"
                alt="Contro Bot"
                className="w-full h-32 object-cover rounded-lg mb-2 cursor-pointer"
              />
            </Link>
            <h3 className="font-bold">
              <Link href="https://github.com/bergaman9/contro-bot" className="hover:text-[#ff007f] transition-colors">
                Contro Bot
              </Link>
            </h3>
            <p>A Discord bot with advanced features developed for automation and interaction.</p>
          </div>
          
          {/* Project 2 */}
          <div className="border border-[#2a2e43] p-4 rounded-lg text-center bg-[#1e0131] text-[#00c8ff]">
            <Link href="/projects/air-quality-monitoring">
              <img
                src="/images/iaq.jpg"
                alt="Indoor Air Quality"
                className="w-full h-32 object-cover rounded-lg mb-2 cursor-pointer"
              />
            </Link>
            <h3 className="font-bold">
              <Link href="https://github.com/bergaman9/indoor-air-quality-monitoring" className="hover:text-[#ff007f] transition-colors">
                Air Quality Monitoring
              </Link>
            </h3>
            <p>A real-time IoT application for monitoring and improving indoor air quality.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}

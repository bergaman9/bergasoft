import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import allMetadata from './metadata';

export const metadata = allMetadata.home;

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-black via-[#1e0131] to-[#00040d] text-[#d1d5db]">
      
      {/* Header */}
      <div className="w-full">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 w-full max-w-3xl">
        <Image
          className="rounded-full border-4 border-[#ff007f] mt-10"
          src="/images/bergaman-circle.png"
          alt="Bergasoft Logo"
          width={150}
          height={150}
        />
        <p className="text-center text-md max-w-2xl font-semibold leading-relaxed text-[#00c8ff]">
          Welcome to Bergasoft! We deliver state-of-the-art software solutions, including custom web development, mobile applications, graphic design, AI-powered tools, and reliable technical support to help businesses succeed and grow in the digital era.
        </p>

        <div className="flex flex-col gap-8 w-full">
          <section className="border border-[#2a2e43] p-6 rounded-lg bg-[#1e0131]">
            <h2 className="text-xl font-semibold text-[#ff007f] border-b border-[#2a2e43] pb-3">Our Services</h2>
            <ul className="list-disc list-inside mt-6 text-md text-[#00c8ff]">
              <li>Custom Web Development</li>
              <li>Mobile App Development</li>
              <li>Graphic Design Services</li>
              <li>AI-Powered Solutions</li>
              <li>Technical Support</li>
            </ul>
          </section>

          <section className="border border-[#2a2e43] p-6 rounded-lg bg-[#1e0131]">
            <h2 className="text-xl font-semibold text-[#ff007f] border-b border-[#2a2e43] pb-3">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="border border-[#2a2e43] p-4 rounded-lg text-center bg-black text-[#00c8ff]">
                <img src="/images/contro.png" alt="Contro Bot" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h3 className="font-bold">Contro Bot</h3>
                <p>A Discord bot with advanced features developed for automation and interaction.</p>
              </div>
              <div className="border border-[#2a2e43] p-4 rounded-lg text-center bg-black text-[#00c8ff]">
                <img src="/images/iaq.jpg" alt="Indoor Air Quality" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h3 className="font-bold">Air Quality Monitoring</h3>
                <p>A real-time IoT application for monitoring and improving indoor air quality.</p>
              </div>
            </div>
          </section>

          <section className="border border-[#2a2e43] p-6 rounded-lg bg-[#1e0131]">
  <h2 className="text-xl font-semibold text-[#ff007f] border-b border-[#2a2e43] pb-3 mb-4">
    Contact Us
  </h2>
  <p className="text-[#00c8ff]">
    For inquiries, reach out via email or connect with us on social media.
  </p>
</section>

        </div>
      </main>

      {/* Footer */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}

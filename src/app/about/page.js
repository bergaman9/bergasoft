import Header from '../components/Header';
import Footer from '../components/Footer';
import allMetadata from '../metadata';

export const metadata = allMetadata.about;


export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#1e0131] to-[#00040d] text-[#d1d5db]">
      {/* Header */}
      <div className="w-full">
      <Header showHomeLink ={true} />
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 w-full max-w-3xl mx-auto mt-12 px-4 sm:px-0">
        <h1 className="text-3xl font-bold text-[#ff007f] text-center">About Us</h1>
        <p className='px-4'>
        Bergasoft is a premier software development company specializing in custom web development, mobile applications, graphic design, AI-powered solutions, and reliable technical support. Our mission is to help businesses thrive in the digital era by delivering innovative, tailored, and high-quality technology solutions.
        </p>
      </main>

      {/* Footer */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Header({ showHomeLink  = false }) {
  return (
    <header className="w-full max-w-3xl mx-auto flex justify-between items-center pb-6 border-b border-[#2a2e43] px-4 mt-12">
      <Link href="/" className="text-3xl font-extrabold text-[#ff007f] hover:text-[#e6006f] transition-colors">
      Bergasoft
      </Link>
      <nav className="flex gap-8 text-lg">
        {showHomeLink && (
          <Link href="/" className="hover:text-[#00c8ff] transition-colors">
            Home
          </Link>
        )}
        <Link href="/services" className="hover:text-[#00c8ff] transition-colors">
          Services
        </Link>
        <Link href="/projects" className="hover:text-[#00c8ff] transition-colors">
          Projects
        </Link>
        <Link href="/about" className="hover:text-[#00c8ff] transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#00c8ff] transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  );
}

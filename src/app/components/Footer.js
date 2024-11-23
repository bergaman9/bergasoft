import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto flex flex-col items-center gap-6 pt-10 pb-10 text-center text-[#c4c4a8] px-4">
      <SocialIcons />
      <div className="mt-4 text-xs text-[#c4c4a8]">
      "Shaping the digital future with cutting-edge solutions."
        </div>
    </footer>
  );
}

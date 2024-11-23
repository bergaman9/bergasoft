'use client'; // Bu bileşenin istemci tarafında çalışacağını belirtir

import { FaWhatsapp , FaShoppingCart, FaEnvelope } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex gap-8">
      {/* WhatsApp */}
      <a
        href="https://wa.me/905511869052" // Telefon numaranızı uluslararası formatta yazın
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#ff007f] text-2xl"
      >
        <FaWhatsapp />
      </a>
      
      {/* E-Ticaret Sitesi */}
      <a
        href="https://bionluk.com/bergaman" // E-ticaret sitenizin URL'sini buraya ekleyin
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#ff007f] text-2xl"
      >
        <FaShoppingCart />
      </a>

      {/* E-posta yerine İletişim Sayfasına Yönlendirme */}
      <a
        href="/contact" // Sitenizin iletişim sayfasına yönlendirme
        className="hover:text-[#ff007f] text-2xl"
      >
        <FaEnvelope/>
      </a>
    </div>
  );
}

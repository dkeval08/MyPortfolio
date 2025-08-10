import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-orange-500 text-2xl font-bold">LOGO</div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About me
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact me
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="http://instagram.com/karanharsora12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon icon="mdi:instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/karan-harsora-6ab24024a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon icon="mdi:linkedin" className="w-6 h-6" />
            </a>
            <a
              href="https://dribbble.com/karanharsora12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon icon="mdi:dribbble" className="w-6 h-6" />
            </a>
            <a
              href="https://www.behance.net/karanharsora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon icon="mdi:behance" className="w-6 h-6" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Icon icon="mdi:email-outline" className="w-5 h-5" />
              <a href="mailto:karanharsora2@gmail.com">
                karanharsora2@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:phone-outline" className="w-5 h-5" />
              <span>+91 70416 52801</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

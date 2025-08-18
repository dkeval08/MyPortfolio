"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { handleScroll } from "./Header";

const Footer = () => {
  const socialLinks = [
    { icon: "mdi:github", href: "https://github.com/dkeval08" },
    { icon: "mdi:twitter", href: "https://x.com/GamerboyA65016" },
    {
      icon: "mdi:instagram",
      href: "https://www.instagram.com/keval_prajapati475/",
    },
    {
      icon: "mdi:linkedin",
      href: "https://www.linkedin.com/in/keval-dhandhukiya-6aaa1329a/",
    },
  ];

  const menuItems = [
    { title: "Home", href: "#home", id: "home" },
    { title: "Skills", href: "#Skills", id: "Skills" },
    { title: "Projects", href: "#Projects", id: "Projects" },
    { title: "About", href: "#about", id: "about" },
    { title: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <footer className="w-full bg-[#111111] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl flex items-center gap-1 font-bold text-purple-500"
          >
            My Portfolio
          </motion.div>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {item.title}
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Social Media Icons */}

          <div className="flex gap-4 lg:items-start items-center lg:justify-start justify-center mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <Icon icon={link.icon} className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Icon icon="mdi:email-outline" className="w-5 h-5" />
              <a href="mailto:keval.dhandhukiya242@gmail.com">
                keval.dhandhukiya242@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:phone-outline" className="w-5 h-5" />
              <a href="tel:+917990471362">+91 7990471362</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

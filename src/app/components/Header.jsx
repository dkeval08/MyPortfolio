"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", () => {
  //     setIsScrolled(window.scrollY > 20);
  //   });
  // }

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { title: "Home", href: "#home", id: "home" },
    { title: "Services", href: "#services", id: "services" },
    { title: "About", href: "#about", id: "about" },
    { title: "Portfolio", href: "#portfolio", id: "portfolio" },
    { title: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50  bg-black/60 backdrop-blur-lg shadow-lg  transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-purple-500"
          >
            My Portfolio
          </motion.div>

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
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

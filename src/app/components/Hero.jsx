"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { handleScroll } from "./Header";

const CodeBlock = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="absolute -right-20 top-1/4 bg-[#1a1a1a] backdrop-blur-sm rounded-xl p-4 border border-gray-800 hidden lg:block shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-10"
  >
    <pre className="text-sm font-mono">
      <code className="text-gray-400">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-purple-400">developer</span> = {"{"}
        <br />
        {"  "}name: <span className="text-purple-400">&quot;Keval&quot;</span>,
        <br />
        {"  "}role:{" "}
        <span className="text-purple-400">&quot;Full Stack Dev&quot;</span>,
        <br />
        {"  "}skills: [
        <span className="text-purple-400">&quot;React&quot;</span>,{" "}
        <span className="text-purple-400">&quot;Node.js&quot;</span>],
        <br />
        {"  "}loves:{" "}
        <span className="text-purple-400">
          &quot;Building Amazing Apps&quot;
        </span>
        <br />
        {"}"};
      </code>
    </pre>
  </motion.div>
);

const FloatingIcon = ({ icon, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`absolute ${className} `}
  >
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="bg-[#1a1a1a] backdrop-blur-sm rounded-lg p-3 border border-gray-800"
    >
      <Icon icon={icon} className="w-6 h-6 text-gray-300" />
    </motion.div>
  </motion.div>
);

const Hero = () => {
  const router = useRouter();
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center mx-auto max-w-7xl bg-black py-30 md:py-32 "
    >
      {/* Animated Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute -top-0 -right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-white relative z-10 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 mb-2"
            >
              Hi, I am
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Keval Dhandhukiya
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-400 to-purple-500 bg-clip-text text-transparent mb-6"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-lg mb-8 max-w-lg"
            >
              Passionate about creating beautiful, functional, and user-friendly
              Websites. Transforming ideas into reality through code.
            </motion.p>

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

            <div className="flex flex-wrap lg:items-start items-center lg:justify-start justify-center gap-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
                onClick={(e) => {
                  handleScroll(e, "Projects");
                }}
              >
                View Projects
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="px-6 py-3 border border-gray-700 text-white rounded-full hover:border-white transition-colors"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf"; // Make sure to add your resume PDF in the public folder
                  link.download = "Keval_Dhandhukiya_Resume.pdf";
                  link.click();
                }}
              >
                Download CV
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">15+</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Projects Done
                </p>
              </div>{" "}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">1+</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Years Coding
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">3500+</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Git Contributes
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image & Illustrations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:flex-1 relative"
          >
            <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] aspect-square mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-full z-[1]" />
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover rounded-full relative z-[2]"
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 500px"
                priority
              />
              <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full z-[3]" />

              {/* Floating Tech Icons */}
              <FloatingIcon
                icon="logos:react"
                className="right-0 lg:right-10 top-10 z-[4]"
                delay={0.9}
              />
              <FloatingIcon
                icon="logos:nodejs-icon"
                className="left-0 lg:left-10 bottom-10 z-[4]"
                delay={1.0}
              />
              <FloatingIcon
                icon="logos:javascript"
                className="right-10 bottom-0 z-[4]"
                delay={1.1}
              />
              <FloatingIcon
                icon="logos:nextjs-icon"
                className="left-10 top-0 z-[4]"
                delay={1.2}
              />

              {/* Code Block */}
              <CodeBlock />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

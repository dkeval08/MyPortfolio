"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

export const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black py-12 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] max-w-[400px] mx-auto">
              {/* Background Gradient Orb */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ duration: 1 }}
                className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-purple-500/30 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-purple-500/30 rounded-full blur-3xl"
              />

              {/* Image Container with Effects */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                {/* Border Gradient */}
                <div className="absolute inset-0 p-1 bg-gradient-to-br from-purple-500/50 via-purple-500/50 to-purple-500/50 rounded-2xl">
                  <div className="absolute inset-0 bg-[#1a1a1a] rounded-2xl" />
                </div>

                {/* Main Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="About Me"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 400px, (max-width: 1200px) 500px, 600px"
                    priority
                  />

                  {/* Overlay Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

                  {/* Decorative Elements */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4 text-white/90">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">
                        <Icon icon="ph:code-bold" className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">
                          Full Stack Developer
                        </h4>
                        <p className="text-sm text-white/60">
                          1+ Years Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-purple-500/50 rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-8"
            >
              A software engineer and user experience architect of digital
              futures, specializing in creating intuitive and engaging web
              applications. With a passion for innovative technology and a high
              level of attention to detail, I transform the intricate details,
              into coherent manifestations of tech. I am a firm believer in
              delivering user-centric design that not only looks great but also
              functions flawlessly. My years of experience and application-first
              mentality is a testament to my dedication to creating meaningful
              solutions.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors mb-12"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf"; // Make sure to add your resume PDF in the public folder
                link.download = "Keval_Dhandhukiya_Resume.pdf";
                link.click();
              }}
            >
              Download CV
            </motion.button>

            {/* Skills Grid */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="about"
      className="relative bg-transparent py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block mb-4"
            >
              <span className="text-white text-sm font-medium tracking-wider uppercase">
                Get to know me
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent mb-4"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              {" "}
              About Me
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  I'm a{" "}
                  <span className="text-white font-semibold">
                    Full-Stack Developer
                  </span>{" "}
                  with a passion for creating
                  <span className="text-blue-400">
                    {" "}
                    exceptional digital experiences
                  </span>
                  . My expertise spans modern technologies including
                  <span className="text-cyan-400"> React</span>,
                  <span className="text-gray-100"> Next.js</span>,
                  <span className="text-green-400"> Node.js</span>, and
                  <span className="text-orange-400"> Express</span>.
                </motion.p>

                <motion.p
                  className="text-gray-400 text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  I believe in{" "}
                  <span className="text-white font-medium">clean code</span>,
                  <span className="text-purple-400"> innovative solutions</span>
                  , and user-centered design. Every project is an opportunity to
                  push boundaries and deliver something meaningful.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6"
              >
                <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    1+
                  </div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-400">Projects Built</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf";
                    link.download = "Keval_Dhandhukiya_Resume.pdf";
                    link.click();
                  }}
                >
                  <span className="flex items-center gap-2">
                    Download Resume
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Icon
                        icon="ph:download-simple-bold"
                        className="w-4 h-4"
                      />
                    </motion.div>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                animate={floatingAnimation}
                className="relative mx-auto max-w-sm"
              >
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl scale-105" />

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="/profile.png"
                      alt="Keval Dhandhukiya - Full Stack Developer"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Bottom Info Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <Icon
                            icon="ph:code-bold"
                            className="w-5 h-5 text-white"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm">
                            Full Stack Developer
                          </h4>
                          <p className="text-gray-300 text-xs">
                            Passionate about clean code
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 border-2 border-blue-400/50 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-purple-400/50 rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

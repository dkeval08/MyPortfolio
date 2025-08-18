"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Zap,
  Wand2,
  Crop,
  Filter,
  Download,
  Share2,
  Heart,
  Palette,
  Code,
  Globe,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "My Portfolio",
    category: "Frontend Development",
    shortDescription: "Personal portfolio showcasing my skills and projects",
    description:
      "A modern, responsive portfolio website built with Next.js and React, featuring smooth animations, dark theme design, and showcasing my development skills and projects. The site includes interactive elements, project galleries, and contact functionality.",
    image: "/portfolio-1.png",
    images: [
      "/portfolio-1.png",
      "/portfolio-2.png",
      "/portfolio-3.png",
      "/portfolio-4.png",
      "/portfolio-5.png",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    features: [
      {
        icon: <Palette className="w-6 h-6" />,
        title: "Modern Design",
        description:
          "Clean, modern interface with dark theme and smooth animations",
      },
      {
        icon: <Code className="w-6 h-6" />,
        title: "Interactive Elements",
        description: "Engaging hover effects and micro-interactions throughout",
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Responsive Layout",
        description: "Optimized for all devices from mobile to desktop",
      },
    ],
    liveUrl: "https://your-portfolio.vercel.app",
    githubUrl: "https://github.com/dkeval08/MyPortfolio",
  },
  {
    id: 2,
    title: "AI KGenesis",
    category: "AI & Machine Learning",
    shortDescription: "AI Image Generator - Create stunning images with AI",
    description:
      "Create, save, and share stunning AI-generated images instantly. No login required – simple, fast, and creative. Built with cutting-edge AI models for high-quality image generation.",
    image: "/ai-k-genesis-1.png",
    images: [
      "/ai-k-genesis-1.png",
      "/ai-k-genesis-2.png",
      "/ai-k-genesis-3.png",
      "/ai-k-genesis-4.png",
      "/ai-k-genesis-5.png",
    ],
    technologies: [
      "Next.js",
      "Hugging Face API",
      "Stability AI",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    features: [
      {
        icon: <Download className="w-6 h-6" />,
        title: "HD Downloads",
        description:
          "Download your creations in high resolution for professional use",
      },
      {
        icon: <Share2 className="w-6 h-6" />,
        title: "One-Click Share",
        description: "Easily share images via link or social apps",
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Favorites",
        description: "Save images you love for later access",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Lightning Fast",
        description:
          "Generate high-quality images in seconds with optimized AI models",
      },
    ],
    liveUrl: "https://ai-k-genesis.vercel.app/",
    githubUrl: "https://github.com/dkeval08/AI-KGenesis",
  },
  {
    id: 3,
    title: "ImageKFormat",
    category: "Web Application",
    shortDescription: "Free Online Image Format Converter",
    description:
      "Convert images between formats instantly. Support for JPEG, PNG, WebP, AVIF, and more. Fast, secure, and completely free image conversion tool with advanced AI-powered features.",
    image: "/image-k-format-1.png",
    images: [
      "/image-k-format-1.png",
      "/image-k-format-2.png",
      "/image-k-format-3.png",
      "/image-k-format-4.png",
      "/image-k-format-5.png",
      "/image-k-format-6.png",
      "/image-k-format-7.png",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "Cloudinary",
      "Render",
      "Framer Motion",
      "Tailwind CSS",
    ],
    features: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: "AI-Powered Optimization",
        description:
          "Automatically optimize images for web, mobile, and print with advanced AI algorithms",
      },
      {
        icon: <Wand2 className="w-6 h-6" />,
        title: "Background Removal",
        description:
          "Remove backgrounds instantly with precision using state-of-the-art machine learning",
      },
      {
        icon: <Crop className="w-6 h-6" />,
        title: "Smart Resizing",
        description:
          "Resize and crop images intelligently while maintaining quality and aspect ratios",
      },
      {
        icon: <Filter className="w-6 h-6" />,
        title: "Format Conversion",
        description:
          "Convert between multiple formats including WebP, AVIF, PNG, JPG, and more",
      },
    ],
    liveUrl: "https://image-k-format.vercel.app/",
    githubUrl: "https://github.com/dkeval08/image-k-format",
  },
];

const ProjectCard = ({ project, index, onProjectClick }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateY: 15 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateY: 0 }
          : { opacity: 0, y: 60, rotateY: 15 }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -10,
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      onClick={() => onProjectClick(project)}
      className="group relative  aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden cursor-pointer transform-gpu perspective-1000"
      style={{
        transformStyle: "preserve-3d",
        boxShadow:
          "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Glowing Border Effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, rgba(147, 51, 234, 0.3) 50%, transparent 100%)",
          padding: "2px",
        }}
      >
        <div className="w-full h-full rounded-2xl bg-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        {/* Category Badge */}
        <motion.div
          className="self-start"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.3 }}
        >
          <span className="hidden px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-900/50 backdrop-blur-sm rounded-full border border-purple-500/30">
            {project.category}
          </span>
        </motion.div>

        {/* Project Info */}
        <div className="space-y-3">
          <motion.h3
            className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {project.shortDescription}
          </motion.p>

          {/* Tech Stack Preview */}
          <motion.div
            className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.6 }}
          >
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs text-purple-200 bg-purple-800/30 rounded-md border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs text-gray-300 bg-gray-700/50 rounded-md">
                +{project.technologies.length - 3} more
              </span>
            )}
          </motion.div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-gradient-to-b from-purple-500/20 to-transparent rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateY: -45,
              z: -1000,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
              z: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              rotateY: 45,
              z: -1000,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.6,
            }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-purple-500/20"
            style={{ transformStyle: "preserve-3d" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-700/50">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-900/50 rounded-full border border-purple-500/30">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-gray-300">{project.description}</p>
              </div>

              <div className="flex gap-4 mt-4">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </motion.a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[calc(70vh-200px)] pb-16 overflow-y-auto custom-scrollbar">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Project Images */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Project Gallery
                  </h3>
                  <motion.div
                    className="relative aspect-video rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={project.images?.[0]}
                      alt={`${project.title} main`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="grid grid-cols-2 gap-2">
                    {project.images
                      ?.filter((image, index) => index != 0)
                      .map((img, i) => (
                        <motion.div
                          key={i}
                          className="relative aspect-video rounded-lg overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img
                            src={img}
                            alt={`${project.title} preview ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-2 text-sm text-purple-200 bg-purple-800/30 rounded-lg border border-purple-500/30"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(147, 51, 234, 0.5)",
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Key Features
                    </h3>
                    <div className="space-y-4">
                      {project.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="flex-shrink-0 p-2 bg-purple-600/20 rounded-lg h-fit text-purple-400">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-gray-300">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = [
    "All",
    "Frontend Development",
    "AI & Machine Learning",
    "Web Application",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      ref={sectionRef}
      id="Projects"
      className="relative bg-black py-20 mx-auto max-w-7xl overflow-hidden min-h-screen"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            My Projects
          </motion.h2>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block mb-4"
          >
            <span className="text-white text-sm font-medium tracking-wider uppercase">
              Explore my latest work showcasing innovative solutions and
              creative designs
            </span>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${
                selectedCategory === category
                  ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onProjectClick={handleProjectClick}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #6b21a8;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7c3aed;
        }
      `}</style>
    </section>
  );
};

export default Projects;

"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";

const projects = [
  {
    title: "Mobile Project",
    category: "Mobile Design",
    image: "/project1.jpg",
    images: ["/mobile1.jpg", "/mobile2.jpg", "/mobile3.jpg", "/mobile4.jpg"],
  },
  {
    title: "Dark Theme",
    category: "App Design",
    image: "/project2.jpg",
    images: ["/app1.jpg", "/app2.jpg", "/app3.jpg", "/app4.jpg"],
  },
];

// Placeholder component for when image fails to load
const PlaceholderIllustration = ({ title }) => (
  <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
    {/* Abstract Background Pattern */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-purple-500/10 to-purple-500/10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
    </div>

    {/* Decorative Elements */}
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-500 rounded-xl flex items-center justify-center">
        <Icon icon="ph:image-square-bold" className="w-8 h-8 text-white" />
      </div>
      <div className="text-center">
        <h4 className="text-white/80 text-sm font-medium">{title}</h4>
        <p className="text-white/40 text-xs mt-1">Placeholder Design</p>
      </div>

      {/* Decorative Circles */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
    </div>
  </div>
);

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-square bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer"
    >
      {/* Main Project Image or Placeholder */}
      <div className="relative w-full h-full">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <PlaceholderIllustration title={project.title} />
        )}

        {/* Overlay with project info */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-lg font-medium mb-1">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.category}</p>
          </div>
        </div>

        {/* Small Project Images Grid */}
        {!imageError && (
          <div className="absolute top-4 right-4 grid grid-cols-2 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.images.slice(0, 4).map((img, i) => (
              <div
                key={i}
                className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#1a1a1a]"
              >
                <Image
                  src={img}
                  alt={`${project.title} preview ${i + 1}`}
                  className="object-cover"
                  fill
                  sizes="48px"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-purple-500/20">
                        <svg class="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    `;
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative bg-black py-12 md:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,30,30,1),rgba(0,0,0,1))]" /> */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

      {/* Animated Gradient Orbs */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            My Portfolio
          </motion.h2>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <button className="text-purple-500 px-4 py-2 rounded-full border border-purple-500">
              All
            </button>
            <button className="text-gray-400 px-4 py-2 rounded-full border border-gray-700 hover:border-gray-500 hover:text-gray-300 transition-colors">
              App Mobile Design
            </button>
            <button className="text-gray-400 px-4 py-2 rounded-full border border-gray-700 hover:border-gray-500 hover:text-gray-300 transition-colors">
              Web Strategy
            </button>
            <button className="text-gray-400 px-4 py-2 rounded-full border border-gray-700 hover:border-gray-500 hover:text-gray-300 transition-colors">
              Branding
            </button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

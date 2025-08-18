"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { handleScroll } from "./Header";

const skillsData = {
  frontend: [
    { name: "HTML", icon: "logos:html-5" },
    { name: "CSS", icon: "logos:css-3" },
    { name: "Javascript", icon: "logos:javascript" },
    { name: "React JS", icon: "logos:react" },
    { name: "Next JS", icon: "logos:nextjs-icon" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  ],
  backend: [
    { name: "Node JS", icon: "logos:nodejs-icon" },
    { name: "Express JS", icon: "simple-icons:express", iconColor: "white" },
  ],
  databases: [
    { name: "MySQL", icon: "logos:mysql-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
  ],
  other: [
    { name: "Git & Github", icon: "logos:github-icon" },
    { name: "Vercel", icon: "logos:vercel-icon" },
  ],
};

const categories = [
  { id: "all", name: "All Skills", icon: "material-symbols:code" },
  { id: "frontend", name: "Frontend", icon: "material-symbols:web" },
  { id: "backend", name: "Backend", icon: "material-symbols:server" },
  { id: "databases", name: "Databases", icon: "material-symbols:database" },
  {
    id: "other",
    name: "Other",
    icon: "material-symbols:miscellaneous-services",
  },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, y: -20 }}
    transition={{
      duration: 0.2,
      delay: index * 0.03,
      layout: { duration: 0.15 },
    }}
    whileHover={{
      scale: 1.05,
      y: -5,
      transition: { duration: 0.1 },
    }}
    className="group relative overflow-hidden"
  >
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border border-gray-700/50 transition-all duration-150 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20" />

    {/* Glow Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-sm" />
    </div>

    {/* Content */}
    <div className="relative p-6 flex flex-col items-center text-center">
      {/* Icon Container */}
      <motion.div
        className="relative mb-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center border border-gray-600/30 group-hover:border-blue-400/50 transition-colors duration-150">
          <Icon
            icon={skill.icon}
            className={`w-8 h-8 ${
              skill.iconColor ? `text-${skill.iconColor}` : ""
            } group-hover:scale-110 transition-transform duration-150`}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-150" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-150 delay-75" />
      </motion.div>

      {/* Skill Name */}
      <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors duration-150">
        {skill.name}
      </h3>
    </div>
  </motion.div>
);

const CategoryButton = ({ category, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
      isActive
        ? "bg-gradient-to-r from-purple-300 to-purple-600 text-white shadow-lg shadow-blue-500/25"
        : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-600/30 hover:border-gray-500/50"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Background Animation */}
    {isActive && (
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl"
        layoutId="activeCategory"
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    )}

    {/* Content */}
    <div className="relative flex items-center gap-2">
      <Icon icon={category.icon} className="w-5 h-5" />
      <span>{category.name}</span>
    </div>
  </motion.button>
);

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return Object.entries(skillsData).flatMap(([category, skills]) =>
        skills.map((skill) => ({ ...skill, category }))
      );
    }
    return (
      skillsData[activeCategory]?.map((skill) => ({
        ...skill,
        category: activeCategory,
      })) || []
    );
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section
      id="Skills"
      className="relative bg-black min-h-screen py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Fog Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/20 blur-3xl" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute bottom-1/3 left-2/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-3000" />

        {/* Additional Fog Layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/10 via-transparent to-gray-800/10 blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-gray-900/5 to-transparent blur-xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-0">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            My Playground
          </motion.h2>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block mb-4"
          >
            <span className="text-white text-sm font-medium tracking-wider uppercase">
              A comprehensive showcase of my technical abilities
            </span>
          </motion.div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${activeCategory}`}
                skill={skill}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const services = [
  {
    icon: "fluent:app-store-24-regular",
    title: "App Design",
    description:
      "Creating intuitive and engaging mobile applications with modern UI/UX principles",
  },
  {
    icon: "carbon:application-web",
    title: "Web Development",
    description:
      "Building responsive and dynamic web applications using cutting-edge technologies",
  },
  {
    icon: "carbon:application-mobile",
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile apps that deliver exceptional user experience",
  },
  {
    icon: "carbon:cloud-service-management",
    title: "Backend Development",
    description:
      "Creating robust and scalable server-side solutions for your applications",
  },
  {
    icon: "carbon:api",
    title: "API Development",
    description:
      "Designing and implementing RESTful APIs for seamless integration",
  },
  {
    icon: "carbon:cloud-monitoring",
    title: "DevOps Services",
    description:
      "Implementing CI/CD pipelines and managing cloud infrastructure",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-[#1a1a1a] rounded-2xl p-6 hover:bg-[#242424] transition-all duration-300"
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-purple-500/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors"
      >
        <Icon icon={service.icon} className="w-8 h-8 text-purple-500" />
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-500 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Hover Arrow */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-6 right-6"
      >
        <Icon icon="ph:arrow-right-bold" className="w-5 h-5 text-purple-500" />
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-black py-12 md:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,30,30,1),rgba(0,0,0,1))]" /> */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

      {/* Animated Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
            felis ligula aliquam
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

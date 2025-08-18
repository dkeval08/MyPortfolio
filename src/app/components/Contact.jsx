"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleClick = () => {
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative bg-black py-12 md:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,30,30,1),rgba(0,0,0,1))]" /> */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

      <div className="container mx-auto px-4 relative">
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
            Contact me
          </motion.h2>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block mb-4"
          >
            <span className="text-white text-sm font-medium tracking-wider uppercase">
              Cultivating Connections: Bring Out Any And Connect With Me
            </span>
          </motion.div>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact me
          </h2>
          <p className="text-gray-400">
            Cultivating Connections: Bring Out Any And Connect With Me
          </p>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <textarea
                name="message"
                placeholder="Project Details"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <motion.button
                type="button"
                onClick={handleClick}
                whileTap={{ scale: 0.95 }}
                animate={
                  status === "sending"
                    ? {
                        scale: [1, 1.08, 1],
                        rotate: [0, 2, -2, 0],
                        boxShadow: [
                          "0 0 0px rgba(59,130,246,0.5)",
                          "0 0 15px rgba(59,130,246,0.8)",
                          "0 0 25px rgba(59,130,246,1)",
                          "0 0 15px rgba(59,130,246,0.8)",
                          "0 0 0px rgba(59,130,246,0.5)",
                        ],
                        transition: {
                          repeat: Infinity,
                          duration: 1.2,
                          ease: "easeInOut",
                        },
                      }
                    : status === "success"
                    ? {
                        scale: [1, 1.15, 1],
                        boxShadow: [
                          "0 0 0px rgba(34,197,94,0.5)",
                          "0 0 20px rgba(34,197,94,0.8)",
                          "0 0 35px rgba(34,197,94,1)",
                          "0 0 20px rgba(34,197,94,0.8)",
                          "0 0 0px rgba(34,197,94,0.5)",
                        ],
                        transition: { duration: 1, ease: "easeOut" },
                      }
                    : { scale: 1 }
                }
                className={`relative overflow-hidden px-8 w-[200px] py-3 rounded-lg text-white font-medium transition-colors duration-500
                ${
                  status === "idle"
                    ? "bg-purple-500 hover:bg-purple-600"
                    : status === "sending"
                    ? "bg-gradient-to-r from-blue-500 to-blue-700"
                    : "bg-gradient-to-r from-green-500 to-green-700"
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={status}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {status === "idle"
                      ? "Send"
                      : status === "sending"
                      ? "Sending..."
                      : "Send Successful"}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

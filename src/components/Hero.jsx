import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden max-w-7xl mx-auto px-6 pt-20 pb-16"
    >
     
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-lg">
            Admissions Open 2026-27
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-7xl font-extrabold text-white mt-6 leading-tight"
          >
            New Global <br />
            <span className="text-yellow-400">
              English School
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 mt-6 text-lg"
          >
            Building Bright Futures For Your Child Through Quality Education,
            Safe Environment and Modern Learning Methods.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#admission"
              className="bg-blue-400 text-black px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition duration-300"
            >
              Apply Now 🚀
            </a>

            <a
              href="#contact"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition duration-300"
            >
              Contact Us 📞
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div>

          <motion.img
  src={heroImage}
  alt="School"
  className="rounded-3xl shadow-2xl"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -8, 0],
  }}
  transition={{
    duration: 1,
    y: {
      repeat: Infinity,
      duration: 4,
    },
  }}
/>

         
        </div>

      </div>
    </section>
  );
}

export default Hero;
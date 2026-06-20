import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";


function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 pt-20 pb-16">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
            Admissions Open 2026-27
          </span>

          <motion.h1
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-6xl font-bold text-white mt-6"
>
  New Global English School
</motion.h1>

          <p className="text-gray-300 mt-6 text-lg">
            Building Bright Futures For Your Child Through Quality Education,
            Safe Environment and Modern Learning Methods.
          </p>

         <div className="mt-8 flex gap-4">

  <a
    href="#admission"
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
  >
    Apply Now
  </a>

  <a
    href="#contact"
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
  >
    Contact Us
  </a>

</div>

        </div>

        {/* Right Side */}
        <div>

          <img
            src={heroImage}
            alt="School"
            className="rounded-2xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
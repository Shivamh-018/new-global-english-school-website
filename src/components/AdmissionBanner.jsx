import { motion } from "framer-motion";

function AdmissionBanner() {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400">

      {/* Floating Balloons */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute left-10 top-10 text-6xl"
      >
        🎈
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute right-10 top-16 text-6xl"
      >
        🎈
      </motion.div>

      {/* Stars */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute left-1/4 top-8 text-4xl"
      >
        ⭐
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute right-1/4 top-8 text-4xl"
      >
        ⭐
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Cartoon Kids */}
        <div className="text-7xl mb-4">
          👦 👧 🎒
        </div>

        <motion.h2
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-4xl md:text-6xl font-extrabold text-blue-900"
        >
          🎉 ADMISSIONS OPEN 2026-27 🎉
        </motion.h2>
        

        <p className="mt-4 text-xl md:text-2xl font-bold text-gray-800">
          Nursery • LKG • UKG
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">

          <div className="bg-white px-5 py-3 rounded-full shadow-lg">
            ✨ Limited Seats Available
          </div>

          <div className="bg-white px-5 py-3 rounded-full shadow-lg">
            📚 Smart Learning
          </div>

          <div className="bg-white px-5 py-3 rounded-full shadow-lg">
            👩‍🏫 Experienced Teachers
          </div>

        </div>

        <a
          href="#admission"
          className="inline-block mt-10 bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
        >
          Apply Now 🚀
        </a>
        
      </div>

    </section>
  );
}

export default AdmissionBanner;
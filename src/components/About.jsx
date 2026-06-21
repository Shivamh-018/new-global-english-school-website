import { motion } from "framer-motion";
import { FaGraduationCap, FaShieldAlt, FaChalkboardTeacher } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-900"
        >
          About Our School
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-gray-600 mt-4 max-w-3xl mx-auto"
        >
          New Global English School, Kurula is committed to providing
          quality education, experienced teachers and a safe learning
          environment where every child can learn, grow and succeed.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-8 rounded-2xl shadow-md text-center"
          >
            <FaGraduationCap className="text-5xl text-blue-700 mx-auto mb-4" />

            <h3 className="text-xl font-bold text-blue-900">
              Quality Education
            </h3>

            <p className="text-gray-600 mt-3">
              Modern teaching methods and strong academic foundation.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 p-8 rounded-2xl shadow-md text-center"
          >
            <FaChalkboardTeacher className="text-5xl text-yellow-600 mx-auto mb-4" />

            <h3 className="text-xl font-bold text-blue-900">
              Experienced Teachers
            </h3>

            <p className="text-gray-600 mt-3">
              Dedicated teachers focused on every child's development.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 p-8 rounded-2xl shadow-md text-center"
          >
            <FaShieldAlt className="text-5xl text-green-600 mx-auto mb-4" />

            <h3 className="text-xl font-bold text-blue-900">
              Safe Environment
            </h3>

            <p className="text-gray-600 mt-3">
              Secure campus with a positive and friendly atmosphere.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;
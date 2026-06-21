import { motion } from "framer-motion";

import {
  FaBus,
  FaChalkboardTeacher,
  FaWater,
  FaSchool,
  FaFutbol,
} from "react-icons/fa";

import { MdSecurity } from "react-icons/md";

const facilities = [
  {
    title: "Experienced Teachers",
    description: "Qualified and dedicated teachers focused on every child's growth.",
    icon: <FaChalkboardTeacher />,
    color: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    title: "Bus Facility",
    description: "Safe and comfortable transportation for students.",
    icon: <FaBus />,
    color: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "CCTV Surveillance",
    description: "24×7 monitoring for student safety and security.",
    icon: <MdSecurity />,
    color: "bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Pure Drinking Water",
    description: "Clean and hygienic drinking water available on campus.",
    icon: <FaWater />,
    color: "bg-cyan-50",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    title: "Playground",
    description: "Spacious playground for sports and physical activities.",
    icon: <FaFutbol />,
    color: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Clean Classrooms",
    description: "Well-maintained classrooms for a better learning environment.",
    icon: <FaSchool />,
    color: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

function Facilities() {
  return (
    <section
      id="facilities"
      className="bg-slate-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-900"
        >
          Our Facilities
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-gray-600 mt-4"
        >
          We provide a safe, modern and child-friendly learning environment.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className={`${facility.color} p-8 rounded-2xl shadow-md hover:shadow-2xl border border-white`}>

              <div
  className={`w-20 h-20 rounded-full ${facility.iconBg} flex items-center justify-center text-4xl ${facility.iconColor} mb-6`}
>
                {facility.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-900">
                {facility.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {facility.description}
              </p>

            </motion.div>

            
          ))}

        </div>

      </div>
    </section>
  );
}

export default Facilities;
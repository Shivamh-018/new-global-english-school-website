import {
  FaBus,
  FaChalkboardTeacher,
  FaWater,
  FaSchool,
} from "react-icons/fa";

import { MdSecurity } from "react-icons/md";
import { FaFutbol } from "react-icons/fa";
const facilities = [
  {
    title: "Experienced Teachers",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Bus Facility",
    icon: <FaBus />,
  },
  {
    title: "CCTV Surveillance",
    icon: <MdSecurity />,
  },
  {
    title: "Pure Drinking Water",
    icon: <FaWater />,
  },
  {
  title: "Playground",
  icon: <FaFutbol />,
},
  {
    title: "Clean Classrooms",
    icon: <FaSchool />,
  },
];

function Facilities() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Our Facilities
        </h2>

        <p className="text-center text-gray-600 mt-4">
          We provide a safe and modern learning environment.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

         {facilities.map((facility, index) => (
  <div
    key={index}
    className="bg-white p-6 rounded-xl shadow-lg
    hover:-translate-y-2 hover:shadow-2xl
    transition duration-300"
  >
    <div className="text-5xl text-blue-600 mb-4">
      {facility.icon}
    </div>

    <h3 className="text-xl font-semibold">
      {facility.title}
    </h3>
  </div>
))}

        </div>

      </div>
    </section>
  );
}

export default Facilities;
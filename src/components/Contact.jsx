import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSchool,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center"
        >
          Contact Us
        </motion.h2>

        <p className="text-center text-gray-300 mt-4">
          We are always happy to help you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {/* Address Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-blue-900 p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaMapMarkerAlt className="text-4xl text-yellow-400" />

              <h3 className="text-2xl font-bold">
                School Address
              </h3>
            </div>

            <p className="mt-4 text-gray-200">
              <FaSchool className="inline mr-2 text-yellow-400" />
              New Global English School
            </p>

            <p className="mt-2">
              📍 Kurula, Tal. Kandhar
            </p>

            <p>
              📍 Dist. Nanded, Maharashtra
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-green-900 p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-4xl text-yellow-400" />

              <h3 className="text-2xl font-bold">
                Contact Numbers
              </h3>
            </div>

            <div className="mt-4">

              <p className="font-semibold">
                Manoj Honrao Sir
              </p>

              <a
                href="tel:8805425262"
                className="text-yellow-300 text-lg hover:text-white"
              >
                📞 8805425262
              </a>

            </div>

            <div className="mt-6">

              <p className="font-semibold">
                Yogesh Honrao Sir
              </p>

              <a
                href="tel:9370671599"
                className="text-yellow-300 text-lg hover:text-white"
              >
                📞 9370671599
              </a>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Google Map */}
      <div className="max-w-7xl mx-auto px-6 mt-14">

        <h3 className="text-3xl font-bold text-center mb-6">
          📍 Find Us On Map
        </h3>

        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">

          <iframe
            title="School Location"
            src="https://www.google.com/maps?q=Kurula,Nanded,Maharashtra&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Contact;
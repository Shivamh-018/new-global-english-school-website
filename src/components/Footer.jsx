import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* School Info */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400">
              New Global English School
            </h3>

            <p className="text-gray-400 mt-4">
              Building Bright Futures through quality education,
              experienced teachers and a safe learning environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-400">

              <li>
                <a href="#home" className="hover:text-yellow-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About
                </a>
              </li>

              <li>
                <a href="#facilities" className="hover:text-yellow-400">
                  Facilities
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-yellow-400">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#admission" className="hover:text-yellow-400">
                  Admission
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Contact Us
            </h4>

            <div className="space-y-3 text-gray-400">

              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-yellow-400" />
                8805425262
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-yellow-400" />
                9370671599
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-400" />
                Kurula, Kandhar, Nanded
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-400" />
                school@email.com
              </p>

            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4 text-2xl">

              <a
                href="#"
                className="bg-blue-600 p-3 rounded-full hover:scale-110 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="bg-pink-600 p-3 rounded-full hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919370671599"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 p-3 rounded-full hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">

          © {new Date().getFullYear()} New Global English School.
          All Rights Reserved.

          <p className="mt-2">
            Designed & Developed by Shivam Honrao 💻
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
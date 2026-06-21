import { motion } from "framer-motion";

const galleryImages = [
  {
    title: "Nursery Learning",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
  },
  {
    title: "Creative Activities",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
  },
  {
    title: "Kids Classroom",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    title: "Reading Time",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    title: "Playground Fun",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
  },
  {
    title: "Learning Together",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-900"
        >
          School Gallery
        </motion.h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our learning environment, classroom activities,
          playground fun and memorable school moments.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-300"></div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">

                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;
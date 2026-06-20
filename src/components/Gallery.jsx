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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900">
          School Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
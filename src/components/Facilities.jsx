const facilities = [
  "Experienced Teachers",
  "Bus Facility",
  "CCTV Surveillance",
  "Pure Drinking Water",
  "Playground",
  "Clean Classrooms",
];

function Facilities() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Our Facilities
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Facilities;
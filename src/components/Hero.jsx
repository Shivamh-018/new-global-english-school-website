import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
            Admissions Open 2026-27
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-6">
           New Global English School
          </h1>

          <p className="text-gray-300 mt-6 text-lg">
            Building Bright Futures For Your Child Through Quality Education,
            Safe Environment and Modern Learning Methods.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Apply Now
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
              Contact Us
            </button>

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
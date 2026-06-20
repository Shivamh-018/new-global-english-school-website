function Contact() {
  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold">
              School Address
            </h3>

            <p className="mt-4">
              New Global English School
            </p>

            <p>
              Kurula, Tal. Kandhar
            </p>

            <p>
              Dist. Nanded, Maharashtra
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold">
              Contact Numbers
            </h3>

            <p className="mt-4">
              Manoj Honrao Sir
            </p>

            <p className="text-yellow-400">
              8805425262
            </p>

            <p className="mt-4">
              Yogesh Honrao Sir
            </p>

            <p className="text-yellow-400">
              9370671599
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
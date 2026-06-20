function AdmissionForm() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Admission Form
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Admissions Open for Nursery, LKG and UKG
        </p>

        <form className="bg-white p-8 rounded-xl shadow-lg mt-10">

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Student Name
            </label>

            <input
              type="text"
              placeholder="Enter Student Name"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Parent Name
            </label>

            <input
              type="text"
              placeholder="Enter Parent Name"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Select Class
            </label>

            <select className="w-full border p-3 rounded-lg">
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Address
            </label>

            <textarea
              rows="4"
              placeholder="Enter Address"
              className="w-full border p-3 rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
          >
            Apply For Admission
          </button>

        </form>

      </div>
    </section>
  );
}

export default AdmissionForm;
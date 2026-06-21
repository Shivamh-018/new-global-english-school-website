import { useState } from "react";
import emailjs from "@emailjs/browser";

function AdmissionForm() {
  const [formData, setFormData] = useState({
    student_name: "",
    parent_name: "",
    mobile: "",
    student_class: "Nursery",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_elk2u8e",
        "template_vg699pr",
        formData,
        "Dd0cCh2Em-PiYcAsX"
      )
      .then(() => {
        alert(
          "🎉 Admission Form Submitted Successfully! We will contact you soon."
        );

        setFormData({
          student_name: "",
          parent_name: "",
          mobile: "",
          student_class: "Nursery",
          address: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("❌ Failed to send form. Please try again.");
      });
  };

  return (
    <section
      id="admission"
      className="py-20 bg-gradient-to-br from-blue-100 via-yellow-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">

          <span className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold shadow-md">
            🎉 Admissions Open 2026-27
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-6">
            Student Admission Form
          </h2>

          <p className="text-gray-600 mt-4">
            Nursery • LKG • UKG Admissions Now Open
          </p>

        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">

          <div className="bg-blue-50 p-4 rounded-xl text-center shadow-md">
            📚 Quality Education
          </div>

          <div className="bg-green-50 p-4 rounded-xl text-center shadow-md">
            🛡 Safe Campus
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl text-center shadow-md">
            👩‍🏫 Expert Teachers
          </div>

        </div>

        {/* Form */}
        <form
          onSubmit={sendEmail}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl mt-10 border border-blue-100"
        >

          {/* Student Name */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-blue-900">
              Student Name
            </label>

            <input
              type="text"
              name="student_name"
              value={formData.student_name}
              onChange={handleChange}
              placeholder="Enter Student Name"
              className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Parent Name */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-blue-900">
              Parent Name
            </label>

            <input
              type="text"
              name="parent_name"
              value={formData.parent_name}
              onChange={handleChange}
              placeholder="Enter Parent Name"
              className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-blue-900">
              Mobile Number
            </label>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Class */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-blue-900">
              Select Class
            </label>

            <select
              name="student_class"
              value={formData.student_class}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-blue-500 focus:outline-none transition"
            >
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
            </select>
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-blue-900">
              Address
            </label>

            <textarea
              rows="4"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition duration-300"
          >
            Apply For Admission 🚀
          </button>

        </form>

      </div>
    </section>
  );
}

export default AdmissionForm;
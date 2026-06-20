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
        alert("Admission Form Submitted Successfully!");

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
        alert("Failed to send form.");
      });
  };

  return (
    <section   id="admission" className="bg-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Admission Form
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Admissions Open for Nursery, LKG and UKG
        </p>

        <form
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-xl shadow-lg mt-10"
        >

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Student Name
            </label>

            <input
              type="text"
              name="student_name"
              value={formData.student_name}
              onChange={handleChange}
              placeholder="Enter Student Name"
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Parent Name
            </label>

            <input
              type="text"
              name="parent_name"
              value={formData.parent_name}
              onChange={handleChange}
              placeholder="Enter Parent Name"
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Mobile Number
            </label>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Select Class
            </label>

            <select
              name="student_class"
              value={formData.student_class}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
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
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="w-full border p-3 rounded-lg"
              required
            />
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
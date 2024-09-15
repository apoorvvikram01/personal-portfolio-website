import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending an email or storing the message
    console.log('Form Data:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto">
        {/* Contact Form Section */}
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-cyan-500 focus:outline-none h-32"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-cyan-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-cyan-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

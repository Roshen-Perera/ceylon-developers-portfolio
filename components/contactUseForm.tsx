import React from 'react'

const ContactUseForm = () => {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-3xl border-1 border-[#17CDCA]">
      <h2 className="text-[30px]">Get a quote</h2>
      <p className="text-[22px]">
        Fill up the form and our Team will get back to you within
        <br />
        24 hours.
      </p>
      <div className="space-y-6">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
            placeholder="Your Name"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
            placeholder="Subject"
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="button"
          className="w-full py-3 px-4 rounded-lg font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default ContactUseForm
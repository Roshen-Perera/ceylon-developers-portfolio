import React from "react";

const ContactPortfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mt-20">Contact Me</h1>
      <p className="text-[22px] mt-10">
        Cultivating Connections: Reach Out and Connect with Me
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="number"
              id="number"
              name="number"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              type="timeline"
              id="timeline"
              name="timeline"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
              placeholder="Timeline"
            />
          </div>
        </div>
        <div>
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
            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical">
              <option>Service of Interest</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
            </select>
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
              placeholder="Project Details"
            ></textarea>
          </div>
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
};

export default ContactPortfolio;

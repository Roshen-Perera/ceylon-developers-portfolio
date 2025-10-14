import React from 'react'

const DetailsForm = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg w-4xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]">
      <form className="space-y-6 ml-10">
        {/* Name and Email Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[22px] text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="David Johnson"
              className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none text-[22px]"
            />
          </div>
          <div>
            <label className="block text-[22px] text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none text-[22px]"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-[22px] text-gray-700 mb-2">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Ex: StaticMania"
            className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none text-[22px]"
          />
        </div>

        {/* Select Service and Project Budget Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[22px] text-gray-700 mb-2">
              Select Service <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none text-[22px] text-gray-500 appearance-none cursor-pointer">
              <option>Select Your Service</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
            </select>
          </div>
          <div>
            <label className="block text-[22px] text-gray-700 mb-2">
              Project Budget <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none text-[22px] text-gray-500 appearance-none cursor-pointer">
              <option>Select Your Range</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000+</option>
            </select>
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label className="block text-[22px] text-gray-700 mb-2">
            Project Details
          </label>
          <textarea
            placeholder="Tell us more about your project"
            rows={3}
            className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:border-cyan-400 focus:outline-none text-[22px] resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-cyan-400 text-white px-6 py-2 rounded-md hover:bg-cyan-500 transition-colors font-medium text-[22px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DetailsForm
"use client";

import React from "react";
import { H4 } from "./typography";

const ContactUsForm = () => {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-3xl border-1 border-[#17CDCA]">
      <H4>Get a quote</H4>
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
            className="w-full px-4 py-3 bg-[var(--text-field-background)]"
            placeholder="Your Name"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-[var(--text-field-background)]"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 bg-[var(--text-field-background)]"
            placeholder="Subject"
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 bg-[var(--text-field-background)] rounded-lg"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="button"
          className="w-full py-3 px-4 rounded-lg font-medium bg-[#17CDCA]"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactUsForm;

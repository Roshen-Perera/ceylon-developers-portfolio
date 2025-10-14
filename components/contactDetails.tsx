import { Mail } from 'lucide-react';
import React from 'react'

const ContactDetails = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-12">
      <div className="flex flex-col items-start">
        <div>
            <Mail size={48} color="#00FFFF" />
        </div>
        <h3 className="text-2xl font-semibold">Contact Information</h3>
        <p className="text-lg">Email: example@gmail.com</p>
        <p className="text-lg">Phone: (123) 456-7890</p>
      </div>
    </div>
  );
}

export default ContactDetails

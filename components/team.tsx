import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Michael Raven",
      position: "CEO & Co-Founder",
      image: "/assets/images/team.png",
    },
    {
      id: 2,
      name: "Michael Raven",
      position: "CEO & Co-Founder",
      image: "/assets/images/team.png",
    },
    {
      id: 3,
      name: "Michael Raven",
      position: "CEO & Co-Founder",
      image: "/assets/images/team.png",
    },
    {
      id: 4,
      name: "Michael Raven",
      position: "CEO & Co-Founder",
      image: "/assets/images/team.png",
    },
    {
      id: 5,
      name: "Michael Raven",
      position: "CEO & Co-Founder",
      image: "/assets/images/team.png",
    },
    {
      id: 6,
      name: "Michael Raven",
      position: "CEO & Co-Founder",
      image: "/assets/images/team.png",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-7xl font-medium text-center mb-10">
        Discover our <span className="font-kaushan">Talented</span> and
        <br />
        <span className="font-kaushan">Dedicated</span> team
      </h1>
      <div className="grid grid-cols-3 items-center justify-center gap-10">
        {teamMembers.map((member) => (
          <div key={member.id} className="rounded-2xl overflow-hidden max-w-xs">
            {/* Image */}
            <div className="w-full h-64 overflow-hidden bg-[var(--team-card-bg)] p-3">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={256}
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="bg-[var(--team-card-bg)] p-3">
              <div className="flex items-center justify-between p-5 gap-3 bg-[var(--team-nested-card-bg)] rounded-2xl">
                <div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm">{member.position}</p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-2">
                  <button className="bg-[var(--team-social-icon-bg)] w-7 h-7 flex items-center justify-center border border-cyan-400 rounded hover:bg-cyan-50 transition-colors">
                    <svg
                      className="w-3 h-3 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </button>
                  <button className="bg-[var(--team-social-icon-bg)] w-7 h-7 flex items-center justify-center border border-cyan-400 rounded hover:bg-cyan-50 transition-colors">
                    <svg
                      className="w-3 h-3 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="bg-[var(--team-social-icon-bg)] w-7 h-7 flex items-center justify-center border border-cyan-400 rounded hover:bg-cyan-50 transition-colors">
                    <svg
                      className="w-3 h-3 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#17CDCA] mt-15 font-medium rounded-md hover:bg-cyan-500 transition-colors px-6 py-2 h-fit flex justify-center items-center gap-3">
        Learn More <ArrowUpRight />
      </button>
    </div>
  );
};

export default Team;

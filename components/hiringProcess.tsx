import { Award, ClipboardList, FileText, Users } from 'lucide-react';
import React from 'react'

const HiringProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "Apply with Your CV",
      description:
        "We begin by understanding your business.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      position: "right",
    },
    {
      icon: ClipboardList,
      title: "Initial Screening",
      description:
        "We begin by understanding your business.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      position: "left",
    },
    {
      icon: Award,
      title: "Skills Assessment",
      description:
        "We begin by understanding your business.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      position: "right",
    },
    {
      icon: Users,
      title: "Final Interview",
      description:
        "We begin by understanding your business.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      position: "left",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-7xl font-medium">
          Our<span className="font-kaushan"> streamlined </span> hiring process
        </h1>
      </div>
    </>
  );
}

export default HiringProcess

import { Settings2 } from "lucide-react";
import React from "react";

const ProjectInfo = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="flex flex-row gap-2">
          <div>
            <Settings2 width={25} height={25} className="border-2 mt-2.5 rounded-sm border-black"/>
          </div>
          <div>
            <h5 className="text-[30px]">Platform</h5>
            <p className="text-[22px]">Web</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <Settings2 width={25} height={25} className="border-2 mt-2.5 rounded-sm border-black"/>
          </div>
          <div>
            <h5 className="text-[30px]">Platform</h5>
            <p className="text-[22px]">Web</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <Settings2 width={25} height={25} className="border-2 mt-2.5 rounded-sm border-black"/>
          </div>
          <div>
            <h5 className="text-[30px]">Platform</h5>
            <p className="text-[22px]">Web</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;

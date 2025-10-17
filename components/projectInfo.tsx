import { Settings2 } from "lucide-react";
import React from "react";

const ProjectInfo = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="flex flex-row">
          <div>
            <Settings2 width={10} height={10} />
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

"use client";

import {
  ReactFlow,
  Position,
  Handle,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// Custom Card Node Component
function CardNode({ data }: { data: { title: string; description: string } }) {
  return (
    <div className="bg-white rounded-lg border-2 border-cyan-200 p-6 shadow-sm hover:shadow-md transition-shadow w-64">
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-cyan-400 border-2 border-white" />
      <h3 className="text-lg font-semibold mb-3 text-gray-900">
        {data.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {data.description}
      </p>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-cyan-400 border-2 border-white" />
    </div>
  );
}

const initialNodes = [
  {
    id: "n1",
    position: { x: 100, y: 100 },
    data: {
      title: "UX Driven Engineering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
    },
    sourcePosition: Position.Bottom,
  },
  {
    id: "n2",
    position: { x: 200, y: 200 },
    data: {
      title: "Developing Shared Understanding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Top,
  },
  {
    id: "n3",
    position: { x: 300, y: 100 },
    data: {
      title: "Proven Experience and Expertise",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom,
  },
  {
    id: "n4",
    position: { x: 400, y: 200 },
    data: {
      title: "Quality Assurance & Testing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom,
  },
  {
    id: "n5",
    position: { x: 300, y: 300 },
    data: {
      title: "Code Reviews",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
    },
    targetPosition: Position.Right,
    sourcePosition: Position.Left,
  },
  {
    id: "n6",
    position: { x: 100, y: 300 },
    data: {
      title: "Security & Intellectual Property",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
    },
    targetPosition: Position.Right,
  },
];

const initialEdges = [
  { id: "n1-n2", source: "n1", target: "n2", type: "step" },
  { id: "n2-n3", source: "n2", target: "n3", type: "step" },
  { id: "n3-n4", source: "n3", target: "n4", type: "step" },
  { id: "n4-n5", source: "n4", target: "n5", type: "step" },
  { id: "n5-n6", source: "n5", target: "n6", type: "step" },
];

export default function ApproachDiagram() {

  return (
    <div style={{ width: "100%", height: "500px", overflow: "auto" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnDrag={false}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
}

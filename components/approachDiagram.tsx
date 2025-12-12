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
    <div className="bg-white rounded-lg border-2 h-40 flex flex-col justify-center border-cyan-200 p-6 shadow-sm hover:shadow-md transition-shadow w-64">
      <div className="font-bold">{data.title}</div>
      <div className="text-gray-500 text-sm">{data.description}</div>
    </div>
  );
}

const nodeTypes = {
  cardNode: CardNode,
};

const initialNodes = [
  {
    id: "n1",
    type: "cardNode",
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
    position: { x: 300, y: 300 },
    type: "cardNode",
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
    position: { x: 600, y: 100 },
    type: "cardNode",
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
    position: { x: 800, y: 300 },
    type: "cardNode",
    data: {
      title: "Quality Assurance & Testing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom,
  },
  // {
  //   id: "n5",
  //   position: { x: 300, y: 300 },
  //   data: {
  //     title: "Code Reviews",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
  //   },
  //   targetPosition: Position.Right,
  //   sourcePosition: Position.Left,
  // },
  // {
  //   id: "n6",
  //   position: { x: 100, y: 300 },
  //   data: {
  //     title: "Security & Intellectual Property",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
  //   },
  //   targetPosition: Position.Right,
  // },
];

const initialEdges = [
  { id: "n1-n2", source: "n1", style: { stroke: "#22d3ee", strokeWidth: 2 }, target: "n2", type: "step" },
  { id: "n2-n3", source: "n2", style: { stroke: "#22d3ee", strokeWidth: 2 }, target: "n3", type: "step" },
  { id: "n3-n4", source: "n3", style: { stroke: "#22d3ee", strokeWidth: 2 }, target: "n4", type: "step" },
  { id: "n4-n5", source: "n4", style: { stroke: "#22d3ee", strokeWidth: 2 }, target: "n5", type: "step" },
  { id: "n5-n6", source: "n5", style: { stroke: "#22d3ee", strokeWidth: 2 }, target: "n6", type: "step" },
];

export default function ApproachDiagram() {

  return (
    <div style={{ width: "100%", height: "500px", overflow: "auto" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
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

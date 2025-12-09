import { useCallback } from "react";
import ReactFlow, { Background, Controls, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";

// Custom Card Node Component
function CardNode({ data }) {
  return (
    <div className="bg-white rounded-lg border-2 border-cyan-200 p-6 shadow-sm w-64">
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-cyan-400"
      />
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{data.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {data.description}
      </p>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-cyan-400"
      />
    </div>
  );
}

const nodeTypes = {
  cardNode: CardNode,
};

export default function CardLayout() {
  const nodes = [
    {
      id: "1",
      type: "cardNode",
      position: { x: 50, y: 0 },
      data: {
        title: "UX Driven Engineering",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
      },
    },
    {
      id: "2",
      type: "cardNode",
      position: { x: 450, y: 0 },
      data: {
        title: "Proven Experience and Expertise",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
      },
    },
    {
      id: "3",
      type: "cardNode",
      position: { x: 150, y: 250 },
      data: {
        title: "Developing Shared Understanding",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
      },
    },
    {
      id: "4",
      type: "cardNode",
      position: { x: 500, y: 250 },
      data: {
        title: "Quality Assurance & Testing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
      },
    },
    {
      id: "5",
      type: "cardNode",
      position: { x: 50, y: 500 },
      data: {
        title: "Security & Intellectual Property",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
      },
    },
    {
      id: "6",
      type: "cardNode",
      position: { x: 450, y: 500 },
      data: {
        title: "Code Reviews",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
      },
    },
  ];

  const edges = [
    {
      id: "e1-3",
      source: "1",
      target: "3",
      animated: false,
      style: { stroke: "#22d3ee", strokeWidth: 2 },
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      animated: false,
      style: { stroke: "#22d3ee", strokeWidth: 2 },
    },
    {
      id: "e2-4",
      source: "2",
      target: "4",
      animated: false,
      style: { stroke: "#22d3ee", strokeWidth: 2 },
    },
    {
      id: "e3-5",
      source: "3",
      target: "5",
      animated: false,
      style: { stroke: "#22d3ee", strokeWidth: 2 },
    },
    {
      id: "e4-6",
      source: "4",
      target: "6",
      animated: false,
      style: { stroke: "#22d3ee", strokeWidth: 2 },
    },
  ];

  return (
    <div className="w-full h-screen bg-gray-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnDrag={false}
        minZoom={1}
        maxZoom={1}
      >
        <Background color="#e5e7eb" gap={16} />
      </ReactFlow>
    </div>
  );
}

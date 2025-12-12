"use client";

import { ReactFlow, Position, Handle } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { H5, P } from "./typography";

// Custom Card Node Component
function CardNode({
  data,
  sourcePosition,
  targetPosition,
}: {
  data: { title: string; description: string };
  sourcePosition?: Position;
  targetPosition?: Position;
}) {
  return (
    <div className="bg-white rounded-lg border-2 h-60 border-cyan-200 p-3 shadow-sm hover:shadow-md transition-shadow w-100">
      <div className="w-full h-full flex flex-col gradient-border justify-center p-3">
        {targetPosition && (
          <Handle
            type="target"
            position={targetPosition}
            style={{ background: "#22d3ee" }}
          />
        )}

        <H5>{data.title}</H5>
        <P className="text-gray-500">{data.description}</P>

        {sourcePosition && (
          <Handle
            type="source"
            position={sourcePosition}
            style={{ background: "#22d3ee" }}
          />
        )}
      </div>
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
    position: { x: 400, y: 400 },
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
    position: { x: 700, y: 100 },
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
    position: { x: 1000, y: 400 },
    type: "cardNode",
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
    position: { x: 700, y: 700 },
    type: "cardNode",
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
    position: { x: 100, y: 700 },
    type: "cardNode",
    data: {
      title: "Security & Intellectual Property",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
    },
    targetPosition: Position.Right,
  },
];

const initialEdges = [
  {
    id: "n1-n2",
    source: "n1",
    style: { stroke: "#22d3ee", strokeWidth: 2 },
    target: "n2",
    type: "step",
  },
  {
    id: "n2-n3",
    source: "n2",
    style: { stroke: "#22d3ee", strokeWidth: 2 },
    target: "n3",
    type: "step",
  },
  {
    id: "n3-n4",
    source: "n3",
    style: { stroke: "#22d3ee", strokeWidth: 2 },
    target: "n4",
    type: "step",
  },
  {
    id: "n4-n5",
    source: "n4",
    style: { stroke: "#22d3ee", strokeWidth: 2 },
    target: "n5",
    type: "step",
  },
  {
    id: "n5-n6",
    source: "n5",
    style: { stroke: "#22d3ee", strokeWidth: 2 },
    target: "n6",
    type: "step",
  },
];

export default function ApproachDiagram() {
  return (
    <div style={{ width: "100%", height: "130vh", overflow: "auto" }}>
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

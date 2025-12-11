"use client";

import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  EdgeChange,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodeDefaults = {
  targetPosition: Position.Left,
};

const initialNodes = [
  {
    id: "n1",
    position: { x: 100, y: 100 },
    data: { label: "UX Driven Engineering" },
  },
  {
    id: "n2",
    position: { x: 200, y: 200 },
    data: { label: "Developing Shared Understanding" },
    ...nodeDefaults,
  },
  {
    id: "n3",
    position: { x: 300, y: 100 },
    data: { label: "Quality Assurance & Testing" },
  },
  {
    id: "n4",
    position: { x: 400, y: 200 },
    data: { label: "Proven Experience and Expertise" },
  },
  {
    id: "n5",
    position: { x: 100, y: 300 },
    data: { label: "Security & Intellectual Property" },
  },
  {
    id: "n6",
    position: { x: 300, y: 300 },
    data: { label: "Code Reviews" },
  },
];

const initialEdges = [
  { id: "n1-n2", source: "n1", target: "n2", type: "step" },
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

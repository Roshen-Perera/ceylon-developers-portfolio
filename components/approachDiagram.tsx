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
import { Target } from "lucide-react";
import { s, source } from "motion/react-client";


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
    targetPosition: Position.Left,
    sourcePosition: Position.Top,
  },
  {
    id: "n3",
    position: { x: 300, y: 100 },
    data: { label: "Proven Experience and Expertise" },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom,
  },
  {
    id: "n4",
    position: { x: 400, y: 200 },
    data: { label: "Quality Assurance & Testing" },
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom,
  },
  {
    id: "n5",
    position: { x: 100, y: 300 },
    data: { label: "Security & Intellectual Property" },
    targetPosition: Position.Right,
    sourcePosition: Position.Left,
  },
  {
    id: "n6",
    position: { x: 300, y: 300 },
    data: { label: "Code Reviews" },
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

"use client";

import React, { useState, useEffect } from "react";
import { ReactFlow, Position, Handle, Node, Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { H5, P } from "./typography";

// Custom Card Node Component
function CardNode({
  data,
  sourcePosition,
  targetPosition,
}: {
  data: any;
  sourcePosition?: Position;
  targetPosition?: Position;
}) {
  return (
    <div
      className="rounded-lg border-2 border-cyan-200 p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)]"
      style={{ width: data.width, height: data.height }}
    >
      <div className="w-full h-full flex flex-col gradient-border justify-center p-5">
        {targetPosition && (
          <Handle
            type="target"
            position={targetPosition}
            style={{ background: "#17CDCA4D" }}
          />
        )}

        <H5 className="font-semibold mb-2 text-lg">{data.title}</H5>
        <P className="text-gray-500 text-sm">{data.description}</P>

        {sourcePosition && (
          <Handle
            type="source"
            position={sourcePosition}
            style={{ background: "#17CDCA4D" }}
          />
        )}
      </div>
    </div>
  );
}

let containerHeight = "130vh";

const nodeTypes = {
  cardNode: CardNode,
};

function getLayoutConfig(width: number, containerWidth: number) {
  // 1440px and above
  if (width >= 1440) {
    containerHeight = "130vh";
    const nodeWidth = 400;
    const totalWidth = 980 + nodeWidth; // rightmost x + node width
    const offset = (containerWidth - totalWidth) / 2;
    return {
      width: nodeWidth,
      height: 249,
      nodes: [
        { id: "n1", pos: { x: offset + 80, y: 100 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offset + 380, y: 400 },
          target: Position.Left,
          source: Position.Top,
        },
        {
          id: "n3",
          pos: { x: offset + 680, y: 100 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offset + 980, y: 400 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offset + 680, y: 700 },
          target: Position.Right,
          source: Position.Left,
        },
        { id: "n6", pos: { x: offset + 80, y: 700 }, target: Position.Right },
      ],
    };
  }
  // 1280px
  else if (width >= 1280) {
    containerHeight = "140vh";
    const nodeWidth = 390;
    const totalWidth = 860 + nodeWidth;
    const offset = (containerWidth - totalWidth) / 2;
    return {
      width: nodeWidth,
      height: 237,
      nodes: [
        { id: "n1", pos: { x: offset + 40, y: 80 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offset + 300, y: 350 },
          target: Position.Left,
          source: Position.Top,
        },
        {
          id: "n3",
          pos: { x: offset + 560, y: 80 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offset + 820, y: 350 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offset + 560, y: 620 },
          target: Position.Right,
          source: Position.Left,
        },
        { id: "n6", pos: { x: offset + 40, y: 620 }, target: Position.Right },
      ],
    };
  }
  // 1024px
  else if (width >= 1024) {
    containerHeight = "160vh";
    const nodeWidth = 336;
    const totalWidth = 680 + nodeWidth;
    const offset = (containerWidth - totalWidth) / 2;
    return {
      width: nodeWidth,
      height: 221,
      nodes: [
        { id: "n1", pos: { x: offset + 10, y: 60 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offset + 230, y: 350 },
          target: Position.Left,
          source: Position.Top,
        },
        {
          id: "n3",
          pos: { x: offset + 450, y: 60 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offset + 670, y: 350 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offset + 450, y: 630 },
          target: Position.Right,
          source: Position.Left,
        },
        { id: "n6", pos: { x: offset + 10, y: 630 }, target: Position.Right },
      ],
    };
  }
  // 768px
  else if (width >= 768) {
    containerHeight = "250vh";
    const nodeWidth = 461;
    const totalWidth = 290 + nodeWidth;
    const offset = (containerWidth - totalWidth) / 2;
    return {
      width: nodeWidth,
      height: 159,
      nodes: [
        { id: "n1", pos: { x: offset + 20, y: 60 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offset + 290, y: 280 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n3",
          pos: { x: offset + 20, y: 500 },
          target: Position.Right,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offset + 290, y: 720 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offset + 20, y: 940 },
          target: Position.Right,
          source: Position.Bottom,
        },
        { id: "n6", pos: { x: offset + 290, y: 1160 }, target: Position.Left },
      ],
    };
  }
  // 640px
  else if (width >= 640) {
    containerHeight = "250vh";
    const nodeWidth = 300;
    const totalWidth = nodeWidth;
    const offset = (containerWidth - totalWidth) / 2;
    return {
      width: nodeWidth,
      height: 180,
      nodes: [
        { id: "n1", pos: { x: offset, y: 40 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offset, y: 260 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n3",
          pos: { x: offset, y: 480 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offset, y: 700 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offset, y: 920 },
          target: Position.Top,
          source: Position.Bottom,
        },
        { id: "n6", pos: { x: offset, y: 1140 }, target: Position.Top },
      ],
    };
  }
  // 375px and below
  else {
    containerHeight = "230vh";
    const nodeWidth = 320;
    const totalWidth = nodeWidth;
    const offset = (containerWidth - totalWidth) / 2;
    return {
      width: nodeWidth,
      height: 180,
      nodes: [
        { id: "n1", pos: { x: offset, y: 30 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offset, y: 240 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n3",
          pos: { x: offset, y: 450 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offset, y: 660 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offset, y: 870 },
          target: Position.Top,
          source: Position.Bottom,
        },
        { id: "n6", pos: { x: offset, y: 1080 }, target: Position.Top },
      ],
    };
  }
}

const nodeData = [
  {
    id: "n1",
    title: "UX Driven Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
  },
  {
    id: "n2",
    title: "Developing Shared Understanding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
  },
  {
    id: "n3",
    title: "Proven Experience and Expertise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
  },
  {
    id: "n4",
    title: "Quality Assurance & Testing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
  },
  {
    id: "n5",
    title: "Code Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
  },
  {
    id: "n6",
    title: "Security & Intellectual Property",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.",
  },
];

export default function ApproachDiagram() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const layout = getLayoutConfig(windowWidth, windowWidth);

    const newNodes = layout.nodes.map((nodeLayout, index) => ({
      id: nodeLayout.id,
      type: "cardNode",
      position: nodeLayout.pos,
      data: {
        ...nodeData[index],
        width: layout.width,
        height: layout.height,
      },
      sourcePosition: nodeLayout.source,
      targetPosition: nodeLayout.target,
    }));

    const newEdges = [
      { id: "n1-n2", source: "n1", target: "n2" },
      { id: "n2-n3", source: "n2", target: "n3" },
      { id: "n3-n4", source: "n3", target: "n4" },
      { id: "n4-n5", source: "n4", target: "n5" },
      { id: "n5-n6", source: "n5", target: "n6" },
    ].map((edge) => ({
      ...edge,
      style: { stroke: "#17CDCA4D", strokeWidth: 2 },
      type: "step",
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNodes(newNodes);
    setEdges(newEdges);
  }, [windowWidth]);

  return (
    <div style={{ width: "100%", height: containerHeight, overflow: "auto" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        preventScrolling={false}
        panOnDrag={false}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
}

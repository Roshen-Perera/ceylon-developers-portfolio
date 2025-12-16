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
      className="rounded-lg border-2 border-cyan-200 p-3 shadow-sm hover:shadow-md transition-shadow"
      style={{ width: data.width, height: data.height }}
    >
      <div className="w-full h-full flex flex-col gradient-border justify-center p-3">
        {targetPosition && (
          <Handle
            type="target"
            position={targetPosition}
            style={{ background: "#17CDCA4D" }}
          />
        )}

        <H5 className="font-semibold mb-2">{data.title}</H5>
        <P className="text-gray-500">{data.description}</P>

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

function getLayoutConfig(width: number) {
  // 1440px and above
  if (width >= 1440) {
    containerHeight = "130vh";
    return {
      width: 360,
      height: 240,
      nodes: [
        { id: "n1", pos: { x: 100, y: 100 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: 400, y: 400 },
          target: Position.Left,
          source: Position.Top,
        },
        {
          id: "n3",
          pos: { x: 700, y: 100 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: 1000, y: 400 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: 700, y: 700 },
          target: Position.Right,
          source: Position.Left,
        },
        { id: "n6", pos: { x: 100, y: 700 }, target: Position.Right },
      ],
    };
  }
  // 1280px
  else if (width >= 1280) {
    containerHeight = "130vh";
    return {
      width: 350,
      height: 220,
      nodes: [
        { id: "n1", pos: { x: 80, y: 80 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: 340, y: 350 },
          target: Position.Left,
          source: Position.Top,
        },
        {
          id: "n3",
          pos: { x: 600, y: 80 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: 860, y: 350 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: 600, y: 620 },
          target: Position.Right,
          source: Position.Left,
        },
        { id: "n6", pos: { x: 80, y: 620 }, target: Position.Right },
      ],
    };
  }
  // 1024px
  else if (width >= 1024) {
    containerHeight = "140vh";
    return {
      width: 320,
      height: 200,
      nodes: [
        { id: "n1", pos: { x: 20, y: 60 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: 240, y: 300 },
          target: Position.Left,
          source: Position.Top,
        },
        {
          id: "n3",
          pos: { x: 460, y: 60 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: 680, y: 300 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: 460, y: 540 },
          target: Position.Right,
          source: Position.Left,
        },
        { id: "n6", pos: { x: 20, y: 540 }, target: Position.Right },
      ],
    };
  }
  // 768px
  else if (width >= 768) {
    return {
      width: 461,
      height: 159,
      nodes: [
        { id: "n1", pos: { x: 20, y: 60 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: 240, y: 300 },
          target: Position.Left,
          source: Position.Top,
        },
        // {
        //   id: "n3",
        //   pos: { x: 460, y: 60 },
        //   target: Position.Left,
        //   source: Position.Bottom,
        // },
        // {
        //   id: "n4",
        //   pos: { x: 680, y: 300 },
        //   target: Position.Left,
        //   source: Position.Bottom,
        // },
        // {
        //   id: "n5",
        //   pos: { x: 460, y: 540 },
        //   target: Position.Right,
        //   source: Position.Left,
        // },
        // { id: "n6", pos: { x: 20, y: 540 }, target: Position.Right },
      ],
    };
  }
  // 640px
  else if (width >= 640) {
    containerHeight = "250vh";
    return {
      width: 300,
      height: 180,
      nodes: [
        { id: "n1", pos: { x: 170, y: 40 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: 170, y: 260 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n3",
          pos: { x: 170, y: 480 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: 170, y: 700 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: 170, y: 920 },
          target: Position.Top,
          source: Position.Bottom,
        },
        { id: "n6", pos: { x: 170, y: 1140 }, target: Position.Top },
      ],
    };
  }
  // 375px and below
  else {
    containerHeight = "230vh";
    return {
      width: 320,
      height: 180,
      nodes: [
        { id: "n1", pos: { x: 27.5, y: 30 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: 27.5, y: 240 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n3",
          pos: { x: 27.5, y: 450 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: 27.5, y: 660 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: 27.5, y: 870 },
          target: Position.Top,
          source: Position.Bottom,
        },
        { id: "n6", pos: { x: 27.5, y: 1080 }, target: Position.Top },
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
    const layout = getLayoutConfig(windowWidth);

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
        panOnDrag={false}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
}

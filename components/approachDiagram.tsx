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

const nodeTypes = {
  cardNode: CardNode,
};

function getLayoutConfig(width: number, containerWidth: number) {
  // 1440px and above
  if (width >= 1440) {
    const totalWidth = 1380;
    const offsetX = (containerWidth - totalWidth) / 2;
    return {
      width: 400,
      height: 249,
      containerHeight: "130vh",
      nodes: [
        { id: "n1", pos: { x: offsetX, y: 100 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offsetX + 300, y: 400 },
          target: Position.Left,
          source: Position.Top,
        },
        {
          id: "n3",
          pos: { x: offsetX + 600, y: 100 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offsetX + 900, y: 400 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offsetX + 600, y: 700 },
          target: Position.Right,
          source: Position.Left,
        },
        { id: "n6", pos: { x: offsetX, y: 700 }, target: Position.Right },
      ],
    };
  }
  // 1280px
  else if (width >= 1280) {
    const totalWidth = 1250;
    const offsetX = (containerWidth - totalWidth) / 2;
    return {
      width: 390,
      height: 237,
      containerHeight: "120vh",
      nodes: [
        { id: "n1", pos: { x: offsetX, y: 80 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offsetX + 260, y: 350 },
          target: Position.Left,
          source: Position.Top,
        },
        {
          id: "n3",
          pos: { x: offsetX + 520, y: 80 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offsetX + 780, y: 350 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offsetX + 520, y: 620 },
          target: Position.Right,
          source: Position.Left,
        },
        { id: "n6", pos: { x: offsetX, y: 620 }, target: Position.Right },
      ],
    };
  }
  // 1024px
  else if (width >= 1024) {
    const totalWidth = 1016;
    const offsetX = (containerWidth - totalWidth) / 2;
    return {
      width: 336,
      height: 221,
      containerHeight: "120vh",
      nodes: [
        { id: "n1", pos: { x: offsetX, y: 60 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offsetX + 220, y: 350 },
          target: Position.Left,
          source: Position.Top,
        },
        {
          id: "n3",
          pos: { x: offsetX + 440, y: 60 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offsetX + 660, y: 350 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offsetX + 440, y: 630 },
          target: Position.Right,
          source: Position.Left,
        },
        { id: "n6", pos: { x: offsetX, y: 630 }, target: Position.Right },
      ],
    };
  }
  // 768px
  else if (width >= 768) {
    const totalWidth = 751;
    const offsetX = (containerWidth - totalWidth) / 2;
    return {
      width: 461,
      height: 159,
      containerHeight: "180vh",
      nodes: [
        { id: "n1", pos: { x: offsetX, y: 60 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offsetX + 270, y: 280 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n3",
          pos: { x: offsetX, y: 500 },
          target: Position.Right,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offsetX + 270, y: 720 },
          target: Position.Left,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offsetX, y: 940 },
          target: Position.Right,
          source: Position.Bottom,
        },
        { id: "n6", pos: { x: offsetX + 270, y: 1160 }, target: Position.Left },
      ],
    };
  }
  // 640px
  else if (width >= 640) {
    const totalWidth = 300;
    const offsetX = (containerWidth - totalWidth) / 2;
    return {
      width: 300,
      height: 180,
      containerHeight: "180vh",
      nodes: [
        { id: "n1", pos: { x: offsetX, y: 40 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offsetX, y: 260 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n3",
          pos: { x: offsetX, y: 480 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offsetX, y: 700 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offsetX, y: 920 },
          target: Position.Top,
          source: Position.Bottom,
        },
        { id: "n6", pos: { x: offsetX, y: 1140 }, target: Position.Top },
      ],
    };
  }
  // 375px and below
  else {
    const totalWidth = 320;
    const offsetX = (containerWidth - totalWidth) / 2;
    return {
      width: 320,
      height: 180,
      containerHeight: "230vh",
      nodes: [
        { id: "n1", pos: { x: offsetX, y: 30 }, source: Position.Bottom },
        {
          id: "n2",
          pos: { x: offsetX, y: 240 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n3",
          pos: { x: offsetX, y: 450 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n4",
          pos: { x: offsetX, y: 660 },
          target: Position.Top,
          source: Position.Bottom,
        },
        {
          id: "n5",
          pos: { x: offsetX, y: 870 },
          target: Position.Top,
          source: Position.Bottom,
        },
        { id: "n6", pos: { x: offsetX, y: 1080 }, target: Position.Top },
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
  const [containerWidth, setContainerWidth] = useState(1440);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setContainerWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const layout = React.useMemo(
    () => getLayoutConfig(windowWidth, containerWidth),
    [windowWidth, containerWidth]
  );

  const nodes = React.useMemo(
    () =>
      layout.nodes.map((nodeLayout, index) => ({
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
      })),
    [layout]
  );

  const edges = React.useMemo(
    () =>
      [
        { id: "n1-n2", source: "n1", target: "n2" },
        { id: "n2-n3", source: "n2", target: "n3" },
        { id: "n3-n4", source: "n3", target: "n4" },
        { id: "n4-n5", source: "n4", target: "n5" },
        { id: "n5-n6", source: "n5", target: "n6" },
      ].map((edge) => ({
        ...edge,
        style: { stroke: "#17CDCA4D", strokeWidth: 2 },
        type: "step",
      })),
    []
  );

  const containerHeight = layout.containerHeight;

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

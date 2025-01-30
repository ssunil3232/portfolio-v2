// import { useRef, useEffect } from "react";
// import * as d3 from 'd3'

// interface DataItem extends d3.SimulationNodeDatum {
//   size: number;
//   imageUrl: string;
// }

// interface CircularPackGraphProps {
//   data: DataItem[];
//   width: number;
//   height: number;
// }

// export default function CircularPackGraph({data, width, height}: CircularPackGraphProps) {
//   const canvasRef = useRef<SVGSVGElement | null>(null)
//   let rendered = false

//   const addCirclePacking = () => {
//     const canvas = d3.select(canvasRef.current)
//     const scale = d3.scaleLinear().domain([0, 1000]).range([5, 50])
    
//     let nodes = canvas.append('g')
//       .selectAll("circle")
//       .data(data)
//       .enter()
//       .append("circle")
//       .attr("r", (d) => scale(d.size))
//       .attr("cx", width / 2)
//       .attr("cy", height / 2)
//       .style("fill", "#fbe1e3")
//       .attr("stroke", "#000")
//       .style("stroke-width", 0)

//     // let nodes = canvas.append('g')
//     //   .selectAll('circle')
//     //   .data(data)
//     //   .enter()
//     //   .append('circle')
//     //   .attr("r", (d) => scale(d.size))
//     //   .attr("cx", width / 2)
//     //   .attr("cy", height / 2)
//     //   .style('fill', function (d){
//     //     return `url(${d.imageUrl})`;
//       // })
    
//     let images = canvas.append('g')
//       .selectAll("image")
//       .data(data)
//       .enter()
//       .append("image")
//       .attr("xlink:href", d => d.imageUrl)
//       .attr("width", d => scale(d.size) * 2)
//       .attr("height", d => scale(d.size) * 2)
//       .attr("x", width / 2)
//       .attr("y", height / 2)
//       .attr("clip-path", (d, i) => `url(#clip-${i})`)
//       .attr("transform", d => `translate(${-scale(d.size)}, ${-scale(d.size)})`)

//     canvas.append('defs')
//       .selectAll('clipPath')
//       .data(data)
//       .enter()
//       .append('clipPath')
//       .attr('id', (d, i) => `clip-${i}`)
//       .append('circle')
//       .attr('r', d => scale(d.size))
//       .attr('cx', width / 2)
//       .attr('cy', height / 2)

//     rendered = true

//     let simulation = d3.forceSimulation()
//       .force("center", d3.forceCenter((width / 2),(height / 2)))
//       .force("charge", d3.forceManyBody().strength(0.1))
//       .force("collide", d3.forceCollide().strength(0.05).radius((d: any) => scale(d.size)).iterations(1))
    
//     simulation.nodes(data)
//       .on("tick", function() {
//         nodes
//           .attr("cx", (d: any) => d.x ?? 0)
//           .attr("cy", (d: any) => d.y ?? 0)
//         images
//           .attr("x", (d: any) => (d.x ?? 0) - scale(d.size))
//           .attr("y", (d: any) => (d.y ?? 0) - scale(d.size))
//       });
//   }

//   useEffect(() => {
//     if (!rendered) {
//       addCirclePacking()
//     }
//   }, [])

//   return (
//     <svg ref={canvasRef} width={width} height={height} />
//   )
// }
//////////////////////////
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface CircleData extends d3.SimulationNodeDatum {
  name: string;
  image: string;
  value: number;
}

const sampleData: CircleData[] = [
  { name: "angular", image: "/assets/skills/angular.png", value: 30 },
  { name: "Pslove", image: "/assets/skills/azure.png", value: 30 },
  { name: "DBS", image: "/assets/skills/c++.png", value: 30 },
  { name: "Cornell", image: "/assets/skills/css.png", value: 30 },
  { name: "Aimpower", image: "/assets/skills/figma.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/firebase.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/flutter.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/github.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/html.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/java.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/javascript.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/mongo.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/nextjs.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/python.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/react.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/sql.png", value: 30 },
  { name: "AI ECD", image: "/assets/skills/vue.png", value: 30 },
];

const CirclePacking = () => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const width = 400;
    const height = 400;

    // Create SVG
    const svg = d3
      .select(ref.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("height", height)
      .style("background", "#fff");

    svg.selectAll("*").remove(); // Clear previous render

    // Create simulation
    const simulation = d3
      .forceSimulation<CircleData>(sampleData)
      .force("x", d3.forceX(width / 2).strength(0.5)) // Attract to center X
      .force("y", d3.forceY(height / 2).strength(0.5)) // Attract to center Y
      
      // .force("charge", d3.forceManyBody().strength(-100)) // Repelling force
      // .force("center", d3.forceCenter(width / 2, height / 2)) // Center nodes
      .force(
        "collision",
        d3.forceCollide<CircleData>().radius((d) => d.value + 5) // Avoid overlaps
      );

    // Add nodes
    const nodes = svg
      .selectAll("g")
      .data(sampleData)
      .enter()
      .append("g")
      .call(
        d3
          .drag<SVGGElement, CircleData>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    // Add circles
    nodes
      .append("circle")
      .attr("r", (d) => d.value)
      .attr("stroke", "rgb(253 87 87)")
      .attr("stroke-width", 2)
      .attr("fill", "#fbe1e3");

    nodes
      .append("clipPath")
      .attr("id", (d) => `clip-${d.name}`)
      .append("circle")
      .attr("r", 1000); // Fixed radius

    // Add images
    nodes
      .append("image")
      .attr("xlink:href", (d) => d.image)
      .attr("clip-path", (d) => `url(#clip-${d.name})`)
      .attr("x", (d) => -d.value)
      .attr("y", (d) => -d.value)
      .attr("width", (d) => d.value * 2)
      .attr("height", (d) => d.value * 2);

    // Update positions during simulation
    simulation.nodes(sampleData).on("tick", () => {
      nodes.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });
  }, []);

  return <svg ref={ref}></svg>;
};

export default CirclePacking;

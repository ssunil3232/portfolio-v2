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

type CircleNode = CircleData & { x: number; y: number };

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

interface SkillsBubblesProps {
  burstKey?: number;
}

const SkillsBubbles = ({ burstKey = 0 }: SkillsBubblesProps) => {
  const ref = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<CircleNode[]>([]);
  const simulationRef = useRef<d3.Simulation<CircleNode, undefined> | null>(
    null
  );
  const nodesSelRef = useRef<
    d3.Selection<SVGGElement, CircleNode, SVGGElement, unknown> | null
  >(
    null
  );
  const sizeRef = useRef<{ width: number; height: number }>({
    width: 1,
    height: 1,
  });
  const explodedRef = useRef(false);
  const burstTimerRef = useRef<d3.Timer | null>(null);

  useEffect(() => {
    if (!ref.current || !wrapRef.current) return;

    const svg = d3.select(ref.current).style("background", "transparent");
    let simulation: d3.Simulation<CircleNode, undefined> | null = null;
    let ticker: d3.Timer | null = null;

    const render = () => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      const pad = 10;
      sizeRef.current = { width, height };

      svg.attr("viewBox", `0 0 ${width} ${height}`).attr("height", height);
      svg.selectAll("*").remove();

      explodedRef.current = false;
      const nodesData: CircleNode[] = sampleData.map((node) => ({
        ...node,
        x: node.x ?? width / 2,
        y: node.y ?? height / 2,
      }));
      nodesRef.current = nodesData;

      const wanderForce = (): d3.Force<CircleNode, undefined> => {
        let nodes: CircleNode[] = [];
        const strength = 0.35;
        const force = (alpha: number) => {
          for (const d of nodes) {
            d.vx = (d.vx ?? 0) + (Math.random() - 0.5) * strength * alpha;
            d.vy = (d.vy ?? 0) + (Math.random() - 0.5) * strength * alpha;
          }
        };
        force.initialize = (ns: CircleNode[]) => {
          nodes = ns;
        };
        return force;
      };

      const avoidCenterForce = (): d3.Force<CircleNode, undefined> => {
        let nodes: CircleNode[] = [];
        const deadZone = Math.min(width, height) * 0.3;
        const strength = 0.7;
        const force = (alpha: number) => {
          const cx = width / 2;
          const cy = height / 2;
          for (const d of nodes) {
            if (d.x === undefined || d.y === undefined) continue;
            const dx = d.x - cx;
            const dy = d.y - cy;
            const dist = Math.hypot(dx, dy) || 1;
            const minDist = deadZone + d.value;
            if (dist < minDist) {
              const push = (minDist - dist) / minDist;
              d.vx = (d.vx ?? 0) + (dx / dist) * strength * push * alpha * 24;
              d.vy = (d.vy ?? 0) + (dy / dist) * strength * push * alpha * 24;
            }
          }
        };
        force.initialize = (ns: CircleNode[]) => {
          nodes = ns;
        };
        return force;
      };

      const flowForce = (): d3.Force<CircleNode, undefined> => {
        let nodes: CircleNode[] = [];
        let t = Math.random() * 1000;
        const force = (alpha: number) => {
          t += 0.01;
          for (const d of nodes) {
            const x = d.x ?? width / 2;
            const y = d.y ?? height / 2;
            const vx = Math.sin(y * 0.012 + t) * 0.6;
            const vy = Math.cos(x * 0.012 + t * 0.9) * 0.6;
            d.vx = (d.vx ?? 0) + vx * alpha;
            d.vy = (d.vy ?? 0) + vy * alpha;
          }
        };
        force.initialize = (ns: CircleNode[]) => {
          nodes = ns;
        };
        return force;
      };

      simulation?.stop();
      ticker?.stop();
      simulation = d3
        .forceSimulation<CircleNode>(nodesData)
        .alpha(1)
        .alphaDecay(0.003)
        .velocityDecay(0.26)
        .force("charge", d3.forceManyBody().strength(-0.9))
        .force("wander", wanderForce())
        .force("flow", flowForce())
        .force("avoid-center", avoidCenterForce())
        .force(
          "collision",
          d3.forceCollide<CircleNode>().radius((d) => d.value + 2).iterations(3)
        );

      simulationRef.current = simulation;
      simulation.alphaTarget(0.12).restart();

      const nodes = svg
        .selectAll("g")
        .data(nodesData)
        .enter()
        .append("g")
        .call(
          d3
            .drag<SVGGElement, CircleNode>()
            .on("start", (event, d) => {
              if (!event.active) simulation?.alphaTarget(0.3).restart();
              d.fx = event.x;
              d.fy = event.y;
            })
            .on("drag", (event, d) => {
              d.fx = event.x;
              d.fy = event.y;
            })
            .on("end", (event, d) => {
              if (!event.active) simulation?.alphaTarget(0);
              d.fx = null;
              d.fy = null;
            })
        );

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
        .attr("r", 1000);

      nodes
        .append("image")
        .attr("xlink:href", (d) => d.image)
        .attr("clip-path", (d) => `url(#clip-${d.name})`)
        .attr("x", (d) => -d.value)
        .attr("y", (d) => -d.value)
        .attr("width", (d) => d.value * 2)
        .attr("height", (d) => d.value * 2);

      nodes.attr("opacity", 0);
      nodesSelRef.current = nodes;

      simulation.on("tick", () => {
        const cx = width / 2;
        const cy = height / 2;
        const deadZone = Math.min(width, height) * 0.3;
        if (!explodedRef.current) {
          for (const d of nodesData) {
            d.x = cx;
            d.y = cy;
            d.vx = 0;
            d.vy = 0;
          }
          nodes.attr("transform", `translate(${cx},${cy})`);
          return;
        }
        for (const d of nodesData) {
          const r = d.value + 2;
          if (d.x === undefined || d.y === undefined) continue;
          if (d.x < r + pad) d.x = r + pad;
          if (d.x > width - r - pad) d.x = width - r - pad;
          if (d.y < r + pad) d.y = r + pad;
          if (d.y > height - r - pad) d.y = height - r - pad;
          const dx = d.x - cx;
          const dy = d.y - cy;
          const dist = Math.hypot(dx, dy) || 1;
          const minDist = deadZone + r;
          if (dist < minDist) {
            d.x = cx + (dx / dist) * minDist;
            d.y = cy + (dy / dist) * minDist;
          }
        }
        nodes.attr("transform", (d) => `translate(${d.x},${d.y})`);
      });

      // Keep the simulation alive so motion continues after alpha decay.
      ticker = d3.timer(() => {
        if (simulation) simulation.alphaTarget(0.12);
        if (!explodedRef.current) return;
        for (const d of nodesData) {
          if (Math.random() < 0.03) {
            d.vx = (d.vx ?? 0) + (Math.random() - 0.5) * 2;
            d.vy = (d.vy ?? 0) + (Math.random() - 0.5) * 2;
          }
        }
      });
    };

    const observer = new ResizeObserver(() => render());
    observer.observe(wrapRef.current);
    render();

    return () => {
      observer.disconnect();
      simulation?.stop();
      ticker?.stop();
      burstTimerRef.current?.stop();
      simulationRef.current = null;
      nodesRef.current = [];
    };
  }, []);

  useEffect(() => {
    const simulation = simulationRef.current;
    const nodes = nodesRef.current;
    if (!simulation || nodes.length === 0) return;
    const { width, height } = sizeRef.current;
    const cx = width / 2;
    const cy = height / 2;

    explodedRef.current = true;
    nodesSelRef.current
      ?.transition()
      .duration(650)
      .ease(d3.easeCubicOut)
      .attr("opacity", 1);

    burstTimerRef.current?.stop();
    const burstDuration = 950;
    const maxImpulse = 4;
    const start = performance.now();
    burstTimerRef.current = d3.timer(() => {
      const t = Math.min(1, (performance.now() - start) / burstDuration);
      const eased = d3.easeCubicInOut(t);
      const impulse = maxImpulse * (1 - eased);
      for (const d of nodes) {
        if (d.x === undefined || d.y === undefined) continue;
        const dx = d.x - cx;
        const dy = d.y - cy;
        const dist = Math.hypot(dx, dy) || 1;
        d.vx = (d.vx ?? 0) + (dx / dist) * impulse;
        d.vy = (d.vy ?? 0) + (dy / dist) * impulse;
      }
      if (t >= 1) burstTimerRef.current?.stop();
    });

    simulation.alpha(0.8).alphaTarget(0.2).restart();
  }, [burstKey]);

  return (
    <div ref={wrapRef} className="skills-bubbles-wrap">
      <svg ref={ref} className="skills-bubbles-svg"></svg>
    </div>
  );
};

export default SkillsBubbles;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface DataCenter {
  name: string;
  flagUrl: string;
  latitude: number;
  longitude: number;
}

const DataCenter = () => {
  const [hoveredDataCenter, setHoveredDataCenter] = useState<DataCenter | null>(
    null,
  );
  const tooltipRef = useRef<HTMLDivElement>(null);

  const dataCenters = [
    {
      name: "Roubaix, FR",
      flagUrl: "/assets/images/worldmap/fr.png",
      latitude: 25.8,
      longitude: -4,
    }
  ];

  useEffect(() => {
    if (hoveredDataCenter && tooltipRef.current) {
      const tooltip = tooltipRef.current;
      tooltip.style.top = `${50 + hoveredDataCenter.latitude * -0.5}%`;
      tooltip.style.left = `${50 + hoveredDataCenter.longitude * 0.5}%`;
      tooltip.style.transform = "translate(-50%, -120%)";
    }
  }, [hoveredDataCenter]);

  return (
    <>
      <section className="overflow-hidden bg-primary p-5 lg:p-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center sm:mb-8 md:mb-10">
            <div className="mb-2 text-xl font-bold sm:mb-4 lg:text-3xl">
              Un DataCenter en France pour une connexion rapide
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/worldmap/world-map.webp"
              alt="Carte du monde"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
            {dataCenters.map((dataCenter, index) => (
              <div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  top: `${50 + dataCenter.latitude * -0.5}%`,
                  left: `${50 + dataCenter.longitude * 0.5}%`,
                  transform: "translate(-50%, -50%)",
                  willChange: "transform",
                }}
                onMouseEnter={() => setHoveredDataCenter(dataCenter)}
                onMouseLeave={() => setHoveredDataCenter(null)}
              >
                <div className="relative">
                  <div
                    id="animate"
                    className="absolute h-1 w-1 animate-wave rounded-full bg-astralcloud lg:h-4 lg:w-4"
                    style={{ pointerEvents: "none" }}
                  ></div>
                  <div
                    id="stand"
                    className="relative h-1 w-1 rounded-full bg-astralcloud lg:h-4 lg:w-4"
                  ></div>
                </div>
              </div>
            ))}

            {hoveredDataCenter && (
              <div
                ref={tooltipRef}
                className="absolute flex items-center rounded-xl bg-secondary p-2 shadow-lg"
                style={{
                  whiteSpace: "nowrap",
                  willChange: "transform",
                  transition: "top 0.1s ease, left 0.1s ease",
                }}
              >
                <Image
                  src={hoveredDataCenter.flagUrl}
                  alt={`Drapeau de ${hoveredDataCenter.name}`}
                  width={25}
                  height={0}
                  className="mr-2 rounded-full"
                />
                <span>{hoveredDataCenter.name}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DataCenter;

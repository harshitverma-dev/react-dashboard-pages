import React from "react";
import WorldMapLight from "../assets/svgs/worldMapLight.svg";
import WorldMapDark from "../assets/svgs/worldMapDark.svg";
import { selectTheme } from "../features/theme/themeSlice";
import { useSelector } from "react-redux";
import CustomHeading from "./CustomHeading";

const cities = [
  { name: "New York", coordinates: [-74.006, 40.7128], revenue: 72 },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: 39 },
  { name: "Sydney", coordinates: [151.2093, -33.8688], revenue: 25 },
  { name: "Singapore", coordinates: [103.8198, 1.3521], revenue: 61 },
];

export default function RevenueWorldMap() {
  const theme = useSelector(selectTheme)
  return (
    <div className="bg-card p-[24px] rounded-[16px]">
      <CustomHeading title="Revenue by Location" mb="mb-3" />
      <div>
        <img src={theme === "light" ? WorldMapLight : WorldMapDark} className="w-full" alt="image map" />
      </div>
      <div className="mt-4">
        {cities.map(({ name, revenue }, index) => (
          <div key={name} className={`${cities.length - 1 !== index && 'mb-[17px]'}`}>
            <div className="flex justify-between text-[12px] leading-[18px] mb-[1px] font-[400] text-foreground">
              <span>{name}</span>
              <span>{revenue}K</span>
            </div>
            <div className="w-full bg-[#e7e7e7] h-[3px] rounded">
              <div
                className="bg-[#A8C5DA] h-[3px] rounded"
                style={{ width: `${revenue}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client" // Mark as client component

import { useSelector } from "react-redux"
import { selectDashboardData } from "../features/dashboard/dashboardSlice"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import CustomHeading from "./CustomHeading"

const TotalSalesDonutChart = () => {
  const { totalSales } = useSelector(selectDashboardData)
  const totalPercentage = totalSales.reduce((sum, item) => sum + item.value, 0)

  const renderTooltipContent = ({ active, payload }) => {
    if (active && payload?.length) {
      const { name, value } = payload[0];
      const percentage = ((value / totalPercentage) * 100).toFixed(1);

      return (
        <div className="bg-card text-[12px] leading-[18px] font-[400] shadow-md rounded px-2 py-1 ">
          <p className="font-medium">{name}</p>
          <p>{percentage}%</p>
        </div>
      );
    }
    return null;
  };


  return (
    <div className="p-[20px] lg:p-[24px] border-none rounded-[16px] h-full bg-card text-card-foreground">
      <CustomHeading title="Total Sales" />
      <div className="flex flex-col items-center justify-center h-[280px] md:h-[290px] lg:h-[300px] xl:h-[300px] pb-0 pt-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={totalSales}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={68}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              stroke="none"
              cornerRadius={10}

            >
              {totalSales.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} style={{ cursor: "pointer" }} />
              ))}
            </Pie>
            <Tooltip content={renderTooltipContent} />
          </PieChart>
        </ResponsiveContainer>
        <div className="w-full text-sm text-foreground mt-4">
          {totalSales.map((item, index) => (
            <div key={index} className={`flex justify-between items-center px-2 hover:bg-hover transition ease-in-out rounded-[10px] ${index !== totalSales.length - 1 && 'mb-[14px]'}`}>
              <span className="flex items-center text-[12px] leading-[18px] font-[400] text-foreground">
                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                {item.name}
              </span>
              <span className="font-[400] text-[12px] leading-[18px] text-foreground">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TotalSalesDonutChart

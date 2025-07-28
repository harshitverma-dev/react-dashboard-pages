import { useSelector } from "react-redux"
import { selectDashboardData } from "../features/dashboard/dashboardSlice"
import { selectTheme } from "../features/theme/themeSlice"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,CartesianGrid } from "recharts"
import { Card } from "primereact/card"
import CustomHeading from "./CustomHeading"

const RevenueLineChart = () => {
  const { revenueChart } = useSelector(selectDashboardData)
  const theme = useSelector(selectTheme)

  const axisColor = theme === "light" ? "#6B7280" : "#A0AEC0"
  const tooltipBg = theme === "light" ? "#FFFFFF" : "#1F2937"
  const tooltipBorder = theme === "light" ? "#E5E7EB" : "#4B5563"
  const tooltipText = theme === "light" ? "#374151" : "#F9FAFB"

  return (
    <div className="shadow-sm border-none p-[24px] rounded-[16px] h-full bg-card text-card-foreground">
      <div className="pb-4 flex items-center justify-start">
        <CustomHeading title="Revenue" />
        <div className="flex flex-col items-start xs:items-center xs:flex-row lg:flex-row lg:flex md:flex-col md:items-start lg:items-center text-sm text-muted-foreground mt-1 ml-3 pl-3 border-l border-muted-foreground">
          <span className="flex items-center text-[12px] leading-[18px] mb-[1px] font-[400] text-foreground mr-4">
            <span className="w-2 h-2 rounded-full bg-foreground mr-2"></span>
            Current Week <span className="font-semibold text-foreground ml-1">$58,211</span>
          </span>
          <span className="flex items-center text-[12px] leading-[18px] mb-[1px] font-[400] text-foreground">
            <span className="w-2 h-2 bg-[hsl(var(--chart-line-previous))] rounded-full mr-2"></span>
            Previous Week <span className="font-semibold text-foreground ml-1">$68,788</span>
          </span>
        </div>
      </div>
      <div className="h-[250px] md:h-[300px] lg:h-[250px] xl:h-[255px] pb-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueChart} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid
              strokeDasharray="0" 
              vertical={false}    
              stroke="#E5E7EB"      
            />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: axisColor, fontSize: 12 }}  padding={{ left: 25, right: 25 }}/>
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}M`}
              tick={{ fill: axisColor, fontSize: 12 }}
              ticks={[0, 10, 20, 30]}
              padding={{ left: 0, right: 0 }}
              domain={[0, 30]}
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div
                      className="p-2 rounded-md shadow-md text-xs"
                      style={{ backgroundColor: tooltipBg, border: `1px solid ${tooltipBorder}` }}
                    >
                      <p className={tooltipText}>{`${payload[0].payload.month}`}</p>
                      <p className={tooltipText}>{`Current: $${payload[0].value}M`}</p>
                      <p className={tooltipText}>{`Previous: $${payload[1].value}M`}</p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="hsl(var(--chart-line-current))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="hsl(var(--chart-line-previous))"
              strokeDasharray="3 3"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RevenueLineChart

import { useSelector } from "react-redux"
import { selectDashboardData } from "../features/dashboard/dashboardSlice"
import { selectTheme } from "../features/theme/themeSlice" // Import theme selector
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"
import { Card } from "primereact/card"
import CustomHeading from "./CustomHeading"

const CustomBarChart = () => {
    const { projectionsVsActuals } = useSelector(selectDashboardData)
    const theme = useSelector(selectTheme)

    const axisColor = theme === "light" ? "#6B7280" : "#A0AEC0"
    const tooltipBg = theme === "light" ? "#FFFFFF" : "#1F2937"
    const tooltipBorder = theme === "light" ? "#E5E7EB" : "#4B5563" 
    const tooltipText = theme === "light" ? "#374151" : "#F9FAFB"

    return (
        <Card title={<CustomHeading title="Projections vs Actuals" mb="mb-3"/>} className="shadow-sm border-none p-custom bg-[#F7F9FB] rounded-[16px] h-full bg-card text-card-foreground">
            <div className="h-[200px] md:h-[250px] lg:h-[200px] xl:h-[180px] pb-0">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={projectionsVsActuals} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid
                            strokeDasharray="0"
                            vertical={false}   
                            stroke="#E5E7EB"   
                        />
                        <XAxis
                            dataKey="month"
                            axisLine={{ stroke: '#9CA3AF', strokeWidth: 1 }} 
                            tickLine={{ stroke: '#9CA3AF', strokeWidth: 1 }} 
                            tick={{ fill: axisColor, fontSize: 12 }}      
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => `${value}M`}
                            ticks={[0, 10, 20, 30]}
                            tick={{ fill: axisColor, fontSize: 12 }}
                            domain={[0, 30]}
                        />
                        <Tooltip
                            cursor={{ fill: "transparent" }}
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div
                                            className="p-2 rounded-md shadow-md text-xs"
                                            style={{ backgroundColor: tooltipBg, border: `1px solid ${tooltipBorder}` }}
                                        >
                                            <p className={tooltipText}>{`${payload[0].payload.month}`}</p>
                                            <p className={tooltipText}>{`Actual: ${payload[0].value}M`}</p>
                                            <p className={tooltipText}>{`Projection: ${payload[1].value}M`}</p>
                                        </div>
                                    )
                                }
                                return null
                            }}
                        />
                        <Bar stackId="a" dataKey="actual" fill="#A8C5DA" barSize={20} />
                        <Bar stackId="a" dataKey="projection" fill="#CBDAE6" barSize={20} radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}

export default CustomBarChart

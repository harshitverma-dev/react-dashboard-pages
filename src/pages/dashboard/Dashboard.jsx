import { useSelector } from "react-redux"
import { selectDashboardData } from "../../features/dashboard/dashboardSlice"
import MetricCard from "../../components/MatricCard"
import CustomBarChart from "../../components/CustomBarChart"
import RevenueLineChart from "../../components/RevenueLineChart"
import RevenueWorldMap from "../../components/RevenueWorldMap"
import TopSellingProducts from "../../components/TopSellingProducts"
import TotalSalesDonutChart from "../../components/TotalSalesDountChart"
import CustomHeading from "../../components/CustomHeading"

const Dashboard = () => {
  const { metrics } = useSelector(selectDashboardData)

  const getMatricValue = (matricValue, metricName) => {
    if (metricName === "Revenue") {
      return `$${matricValue.toLocaleString()}`
    } else if (metricName === "Growth") {
      return `${matricValue}%`
    } else {
      return matricValue.toLocaleString()
    }
  }

  return (
    <div className="grid gap-6">
    <CustomHeading title="eCommerce"/>
      <div className="flex flex-col md:flex-row justify-between items-center gap-7">
        {" "}
        <div className="w-[100%] md:w-[50%] grid grid-cols-1 xs:grid-cols-2 gap-5 md:gap-7">
          {
            metrics.map((metric, index) => {
              return (
                <MetricCard
                  keyIndex={index + 1}
                  key={index}
                  title={metric.name.charAt(0).toUpperCase() + metric.name.slice(1)}
                  value={getMatricValue(metric.value, metric.name)}
                  change={metric.change + '%'}
                  isPositive={metric.isPositive}
                />
              )
            })
          }
        </div>
        <div className="w-[100%] md:w-[50%]">
          {" "}
          <CustomBarChart />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="w-[100%] md:w-[60%] lg:w-[70%] xl:w-[70%] 2xl:w-[75%]">
          <RevenueLineChart />
        </div>
        <div className="w-[100%] md:w-[40%] lg:w-[30%] xl:w-[30%] 2xl:w-[25%]">
          <RevenueWorldMap />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6">
        <div className="w-[100%] md:w-[60%] lg:w-[70%] xl:w-[70%] 2xl:w-[75%]">
          <TopSellingProducts />
        </div>
        <div className="w-[100%] md:w-[40%] lg:w-[30%] xl:w-[30%] 2xl:w-[25%]">
          <TotalSalesDonutChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

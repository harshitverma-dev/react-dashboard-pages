import { useSelector } from "react-redux"
import { selectDashboardData } from "../features/dashboard/dashboardSlice"
import DataTable from "./DataTable"
import {Card} from "primereact/card"
import CustomHeading from "./CustomHeading"

const TopSellingProducts = () => {
  const { topSellingProducts } = useSelector(selectDashboardData)

  const columns = [
    { title: "Name" },
    { title: "Price" },
    { title: "Quantity" },
    { title: "Amount" },
  ]

  const renderRow = (product, idx) => (
    <tr key={idx} className="bg-card">
      <td className="pr-[2px] xs:pr-4 py-3 text-[12px] leading-[18px] font-[400] text-foreground whitespace-nowrap">{product.name}</td>
      <td className="pr-[2px] xs:pr-4 py-3 text-[12px] leading-[18px] font-[400] text-foreground">{product.price}</td>
      <td className="pr-[2px] xs:pr-4 py-3 text-[12px] leading-[18px] font-[400] text-foreground">{product.quantity}</td>
      <td className="pr-[2px] xs:pr-4 py-3 text-[12px] leading-[18px] font-[400] text-foreground">{product.amount}</td>
    </tr>
  )

 
  return (
    <Card title={<CustomHeading title="Top Selling Products"/>} className="p-custom shadow-sm border-none rounded-[16px] h-full bg-card text-card-foreground">
        <DataTable columns={columns} data={topSellingProducts} renderRow={renderRow} />
    </Card>
  )
}

export default TopSellingProducts

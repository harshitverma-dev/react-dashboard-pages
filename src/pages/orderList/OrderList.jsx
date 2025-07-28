import { useState, useMemo } from "react"
import { useSelector } from "react-redux"
import { selectDashboardData } from "../../features/dashboard/dashboardSlice"
import OrderTableControls from "../../components/OrderTableControls"
import OrderTable from "../../components/OrderTable"
import OrderTablePagination from "../../components/OrderTablePagination"
import { Card } from "primereact/card"
import CustomHeading from "../../components/CustomHeading"

export default function OrderList() {
  const { orders } = useSelector(selectDashboardData)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [sortDirection, setSortDirection] = useState("desc") 
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10;

  const filteredAndSortedOrders = useMemo(() => {
    let currentOrders = [...orders]

    if (searchTerm) {
      currentOrders = currentOrders.filter(
        (order) =>
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.status.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }


    const relativeDateToTimestamp = (str) => {
      const now = new Date();

      switch (str) {
        case "Just now":
          return now.getTime();
        case "A minute ago":
          return now.getTime() - 60 * 1000;
        case "1 hour ago":
          return now.getTime() - 60 * 60 * 1000;
        case "2 hour ago":
          return now.getTime() - 2 * 60 * 60 * 1000;
        case "Yesterday":
          return now.getTime() - 24 * 60 * 60 * 1000;
        default: {
          const parsed = new Date(str);
          return !isNaN(parsed.getTime()) ? parsed.getTime() : 0;
        }
      }
    };

    currentOrders.sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (sortBy === "date") {
        valA = relativeDateToTimestamp(a.date);
        valB = relativeDateToTimestamp(b.date);
      }

      if (valA < valB) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (valA > valB) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });

    return currentOrders;

  }, [orders, searchTerm, sortBy, sortDirection])

  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage)
  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredAndSortedOrders.slice(startIndex, endIndex)
  }, [filteredAndSortedOrders, currentPage, itemsPerPage])

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortDirection("asc")
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="">
      <CustomHeading title="Order List" />
      <Card className="p-0 p-customNone shadow-sm border-none rounded-xl bg-background">
        <OrderTableControls
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSort={handleSort}
          sortBy={sortBy}
          sortDirection={sortDirection}
        />
        <OrderTable orders={paginatedOrders} />
        <OrderTablePagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </Card>
    </div>
  )
}

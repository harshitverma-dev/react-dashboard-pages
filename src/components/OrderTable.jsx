import React, { useState, useEffect } from "react"
import { MoreHorizontal } from "lucide-react"
import { PiCalendarBlank } from "react-icons/pi"

const columns = [
  { key: "select", title: "", align: "left" },
  { key: "id", title: "Order ID" },
  { key: "user", title: "User" },
  { key: "project", title: "Project" },
  { key: "address", title: "Address" },
  { key: "date", title: "Date" },
  { key: "status", title: "Status" },
  { key: "actions", title: "", isAction: true },
]

const OrderTable = ({ orders }) => {
  const [orderList, setOrderList] = useState([])
  const [selectAll, setSelectAll] = useState(false)

  useEffect(() => {
    const ordersWithChecked = orders.map(order => ({
      ...order,
      checked: false
    }))
    setOrderList(ordersWithChecked)
    setSelectAll(false)
  }, [orders])

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked
    setSelectAll(isChecked)
    const updatedList = orderList.map(order => ({
      ...order,
      checked: isChecked
    }))
    setOrderList(updatedList)
  }

  const handleCheckboxChange = (id) => {
    const updatedList = orderList.map(order =>
      order.id === id ? { ...order, checked: !order.checked } : order
    )
    setOrderList(updatedList)
    const allChecked = updatedList.every(order => order.checked)
    setSelectAll(allChecked)
  }

  const renderCell = (order, column) => {
    switch (column.key) {
      case "select":
        return (
          <label className="checkbox-wrapper"
           onClick={(e) => e.stopPropagation()}>
            <input type="checkbox" className="custom-checkbox" checked={order.checked}  onChange={() => handleCheckboxChange(order.id)}/>
            <svg
              className="check-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </label>
        )
      case "user":
        return (
          <div className="flex items-center">
            <div className="flex-shrink-0 h-8 w-8 rounded-full overflow-hidden">
              <img
                src={order.user.avatar}
                alt={order.user.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div className="ml-4 text-[12px] leading-[18px] front-[400] text-foreground">
              {order.user.name}
            </div>
          </div>
        )
      case "date":
        return (
          <div className="flex items-center text-[12px] leading-[18px] front-[400] text-foreground">
            <PiCalendarBlank className="h-[16px] w-[14px] mr-2 text-foreground" />
            {order.date}
          </div>
        )
      case "status":
        return (
          <span style={{ color: `${order.statusColor}` }} className="inline-flex items-center text-[12px] leading-[18px] front-[400]">
            <span style={{ backgroundColor: `${order.statusColor}` }} className="w-2 h-2 rounded-full mr-2" />
            {order.status}
          </span>
        )
      case "actions":
        return (
          <button aria-label="order action" className="text-muted-foreground hover:text-foreground hover:scale-[1.2] hover:transition hover:duration-300 hover:ease-in-out">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        )
      default:
        return (
          <span className="text-[12px] leading-[18px] front-[400] text-foreground">
            {order[column.key]}
          </span>
        )
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-border">
        <thead className="bg-muted">
          <tr className="table-head-border border-solid border-b-[1px]">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`p-[8px_12px] text-left text-[12px] leading-[18px] font-[400] text-muted-foreground capitailze tracking-wider`}
              >
                {col.key === "select" ? (

                  <label className="checkbox-wrapper" id="select-all"
                   >
                    <input type="checkbox" className="custom-checkbox"  checked={selectAll}
                    onChange={handleSelectAll}/>
                    <svg
                      className="check-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </label>

                ) : (
                  col.title
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-card-order">
          {orderList.length > 0 ? (
            orderList.map((order) => (
              <tr
                key={order.id}
                onClick={() => handleCheckboxChange(order.id)}
                className="border-solid border-b-[1px] order-table-border hover:bg-card cursor-pointer transition ease-in-out duration-300"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`p-[8px_12px] whitespace-nowrap ${col.isAction ? "text-right" : ""}`}
                  >
                    {renderCell(order, col)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-muted p-6 text-sm sm:text-base"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2h6v2m-3-4a4 4 0 100-8 4 4 0 000 8zM12 14v6" />
                  </svg>
                  <span>No orders found.</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  )
}

export default OrderTable

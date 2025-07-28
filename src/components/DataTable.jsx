import React from "react"

const DataTable = ({ columns = [], data = [], renderRow }) => {
  return (
    <div className=" w-full">
      <table className="min-w-full text-left text-muted-foreground">
        <thead className="capitalize bg-muted text-foreground">
          <tr className="border-b border-solid boder-[1px] table-head-border">
            {columns.map((col, idx) => (
              <th key={idx} scope="col" className={`${col.className || "pr-4 py-3 text-muted-foreground text-[12px] font-[400] leading-[18px]"} ${col.align === "right" ? "text-right" : ""}`}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-card">
        {
            data.map((item, idx) => renderRow(item, idx))
         }
        </tbody>
      </table>
    </div>
  )
}

export default DataTable

import { ChevronLeft, ChevronRight } from "lucide-react"

const OrderTablePagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="flex justify-end items-center gap-2 mt-6 mr-[0px]">
      <button
        aria-label="pagination arrow left"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`h-9 w-9 rounded-[8px] flex items-center justify-center hover:transition hover:duration-300 hover:ease-in-out leading-[20px] hover:scale-[1.2] text-[14px] font-[400]
          ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-muted"} 
          bg-background text-foreground`}
      >
        <ChevronLeft className="h-[20px] w-[20px]" />
      </button>
      {pageNumbers.map((number) => (
        <button
          aria-label="pagination number"
          key={number}
          onClick={() => onPageChange(number)}
          className={`h-[28px] w-[28px] rounded-[8px] hover:transition hover:duration-300 hover:ease-in-out hover:bg-[hsl(var(--order-table-border))] hover:scale-[1.2] text-foreground leading-[20px] text-[14px] font-[400] flex items-center justify-center
            ${currentPage === number
              ? "bg-[hsl(var(--order-table-border))] text-primary-foreground"
              : "bg-background text-foreground border-border hover:bg-muted"}`}
        >
          {number}
        </button>
      ))}
      <button
        aria-label="pagination arrow right"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`h-9 w-9 rounded-[8px] flex items-center justify-center hover:transition hover:duration-300 hover:ease-in-out hover:scale-[1.2] leading-[20px] text-[14px] font-[400]
          ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-muted"} 
          bg-background text-foreground`}
      >
        <ChevronRight className="h-[20px] w-[20px]" />
      </button>
    </div>
  )
}

export default OrderTablePagination

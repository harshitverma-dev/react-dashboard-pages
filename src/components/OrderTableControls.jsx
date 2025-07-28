import { Search } from "lucide-react"
import { Button } from 'primereact/button';
import { PiFunnelSimple, PiArrowsDownUp, PiPlus } from "react-icons/pi";

const OrderTableControls = ({ searchTerm, onSearchChange, onSort, sortBy, sortDirection }) => {
  return (
    <div className="flex items-center justify-between mb-5 rounded-[8px] p-[10px] bg-card">
      <div className="flex items-center">
        <Button
          aria-label="add order"
          link
          className="hidden xs:flex shadow-none items-center pl-[3px] py-1 text-foreground border-0"
        >
          <PiPlus className="h-[20px] w-[20px] hover:scale-[1.2] hover:transition-all hover:duration-300 hover:ease-in-out" />
        </Button>
        <Button
          aria-label="filter orders"
          link
          className="hidden xs:flex shadow-none items-center px-[0px] py-1 text-foreground border-0"
        >
          <PiFunnelSimple className="h-[20px] w-[20px] hover:scale-[1.2] hover:transition hover:duration-300 hover:ease-in-out" />
        </Button>
        <Button
          aria-label="sort orders"
          link
          className="flex shadow-none items-center pr-[2px] py-1 text-foreground border-0"
          onClick={() => onSort("date")}
        >
          <PiArrowsDownUp className="h-[20px] w-[20px] hover:scale-[1.2] hover:transition hover:duration-300 hover:ease-in-out" />
        </Button>
      </div>
      <div className="relative bg-card ">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          id="order-search"
          name="order-search"
          placeholder="Search"
          className="pl-9 pr-3 focus-visible:outline-none bg-card border-[1px] border-solid activity-line py-2 h-[33px] rounded-[8px] shadow-none text-[14px] leading-[20px] font-[400] w-64 text-foreground"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default OrderTableControls

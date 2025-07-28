import React from "react"
import { Search, Bell, LayoutGrid, Sun, Moon, History, Menu,StarIcon } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme, selectTheme } from "../features/theme/themeSlice"
import CustomBreadcrumb from "../components/CustomBreadcrumb"
import TextSuffixIcon from '../assets/svgs/textSuffixIcon.svg'
import { toggleSidebar } from "../features/Sidebar/sidebarSlice"

const Header = () => {
  const dispatch = useDispatch()
  const currentTheme = useSelector(selectTheme)

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }


  return (
    <header className="flex lg:sticky lg:top-0 lg:z-[999] items-center justify-between h-[68px] px-[15px] py-[15px] md:px-[28px] md:py-[20px] bg-background border-b border-border shadow-sm">
      <div className="flex items-center">
         <button
         aria-label="menu icon"
        className="lg:hidden"
        onClick={() => dispatch(toggleSidebar())}
      >
        <Menu className="h-[20px] w-[20px] text-muted-foreground cursor-pointer hover:text-foreground hover:scale-[1.2] hover:transition-all hover:duration-300 hover:ease-in-out" />
      </button>
         <div className="ml-3">
         <StarIcon className="h-[20px] w-[20px] text-muted-foreground cursor-pointer hover:text-foreground hover:scale-[1.2] hover:transition-all hover:duration-300 hover:ease-in-out" />
        </div>
        <CustomBreadcrumb />
      </div>
      <div className="flex items-center xs:space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            name="search"
            id="search"
            type="text"
            placeholder="Search"
            className="border-[1px] focus-visible:outline-none border-solid leading-[18px] font-[400] pl-9 pr-9 py-2 activity-line rounded-[8px] text-[14px] w-full bg-card text-foreground shadow-none"
          />
          <img
            src={TextSuffixIcon}
            alt="search associate icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none"
          />
        </div>

        <button aria-label="theme icon" onClick={handleThemeToggle} className="p-1 rounded-md hover:bg-muted hover:scale-[1.2] hover:transition-all hover:duration-300 hover:ease-in-out">
          {currentTheme === "light" ? (
            <Moon className="h-[20px] w-[20px] text-muted-foreground cursor-pointer hover:text-foreground" />
          ) : (
            <Sun className="h-[20px] w-[20px] text-muted-foreground cursor-pointer hover:text-foreground" />
          )}
        </button>
        <History className="hidden sm:block h-[20px] w-[20px] text-muted-foreground cursor-pointer hover:text-foreground hover:scale-[1.2] hover:transition-all hover:duration-300 hover:ease-in-out" />
        <Bell className="hidden sm:block h-[20px] w-[20px] text-muted-foreground cursor-pointer hover:text-foreground hover:scale-[1.2] hover:transition-all hover:duration-300 hover:ease-in-out" />
        <LayoutGrid className="hidden sm:block h-[20px] w-[20px] text-muted-foreground cursor-pointer hover:text-foreground hover:scale-[1.2] hover:transition-all hover:duration-300 hover:ease-in-out" />
      </div>
    </header>
  )
}

export default Header

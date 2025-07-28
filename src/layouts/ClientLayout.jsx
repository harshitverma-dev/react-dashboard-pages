import { useSelector } from "react-redux"
import Sidebar from "../layouts/Sidebar"
import Header from "../layouts/Header"
import RightSidebar from "../layouts/RightSidebar"
import { useLocation } from "react-router-dom"

export default function ClientLayout({ children }) {
  const location = useLocation()
  // const isOpen = useSelector((state) => state.sidebar.isOpen)
  const showRightSidebar = location.pathname === "/default"

  return (
    <div
      className="flex h-screen bg-background text-foreground"
    >
      <div className="transition-all duration-300 ease-in-out w-[0%] lg:w-[22%] xl:w-[15%]">
        <Sidebar />
      </div>

      <div className={`flex w-[100%] lg:w-[78%] xl:w-[85%]`}>
        <div className={`${showRightSidebar ? "w-[100%] xl:w-[75%]" : "w-full"}`}>
          <Header />
          <div className=" bg-background">
            <main className="p-4 md:p-6 lg:p-8">{children}</main>
          </div>
        </div>
        {location.pathname === "/default" && (
          <div className={`hidden xl:block ${showRightSidebar ? "w-[25%%]" : "w-full"}`}>
            <RightSidebar />
          </div>
        )}
      </div>
    </div>
  )
}

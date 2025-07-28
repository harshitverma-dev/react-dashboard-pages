import {
  ChevronRight, ChevronDown
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toggleSidebar } from "../features/Sidebar/sidebarSlice"
import { useState } from "react"
import { PiChartPieSlice, PiListBullets, PiFolderPlus, PiBookOpenUserDuotone, PiIdentificationBadge, PiIdentificationCard, PiUsersThree, PiNotebookDuotone, PiChatsTeardrop, PiShoppingBagOpen } from "react-icons/pi";
import profileIcon from "../assets/svgs/profileIcon.svg";
import { IoCloseOutline } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive';
import { BsDot } from "react-icons/bs";


const Sidebar = () => {
  const location = useLocation()
  const isOpen = useSelector((state) => state.sidebar.isOpen)
  const dispatch = useDispatch()
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(true)
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const navItems = [
    {
      category: "Dashboards",
      items: [
        { name: "Default", icon: PiChartPieSlice, path: "/default" },
        { name: "Order List", icon: PiListBullets, path: "/order-list" },
        { name: "eCommerce", icon: PiShoppingBagOpen, path: "#" },
        { name: "Projects", icon: PiFolderPlus, path: "#" },
        { name: "Courses", icon: PiBookOpenUserDuotone, path: "#" },
      ],
    },
    {
      category: "Pages",
      items: [
        {
          name: "User Profile",
          icon: PiIdentificationBadge,
          children: [
            { name: "Overview", path: "#" },
            { name: "Projects", path: "#" },
            { name: "Campaigns", path: "#" },
          ],
        },
        { name: "Account", icon: PiIdentificationCard, path: "#" },
        { name: "Corporate", icon: PiUsersThree, path: "#" },
        { name: "Blog", icon: PiNotebookDuotone, path: "#" },
        { name: "Social", icon: PiChatsTeardrop, path: "#" },
      ],
    }
  ]

  return (
    <>
      <div
        onClick={() => dispatch(toggleSidebar())}
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      ></div>
      <aside
        className={`fixed top-0 left-0 h-full bg-background border-r border-border p-4 z-40 flex flex-col shadow-lg transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:fixed lg:shadow-none lg:z-0 w-[55%] xs:w-[47%] sm:w-[35%] lg:w-[22%] xl:w-[15%]`
        }>
        <div className="items-center justidy-start mb-6 mt-[10px] px-2 flex">
          <div>
            <img
              src={profileIcon}
              alt="profile icon"
              className="h-[24px] w-[24px]"
            />
          </div>
          <h1 className={`text-[14px] font-[400] leading-[20px] text-foreground transition-opacity duration-200 ml-2`}>ByeWind</h1>
        </div>
        <IoCloseOutline onClick={() => dispatch(toggleSidebar())} size={30} className="cursor-pointer lg:hidden absolute right-[7px] top-[7px] border-1 border-solid border-border rounded-[10px] bg-card" />
        <div className="mb-7 mt-1 hidden xl:block">
          <div className="tabs flex items-center">
            <span className="text-[14px] font-[400] leading-[20px] capitalize mb-2 px-4 text-muted-foreground">Favorites</span>
            <span className="text-[14px] font-[400] leading-[20px] capitalize mb-2 px-4 text-muted-foreground bg-icon">Recently</span>
          </div>
          <ul className="ml-4">
            <li className="items-center flex mt-2">
              <BsDot size={22} className="bg-icon" />
              <span className="text-[14px] font-[400]  leading-[20px]">Overview</span>
            </li>
            <li className="text-[14px] font-[400] items-center flex leading-[20px] mt-2">
              <BsDot size={22} className="bg-icon" />
              <span className="text-[14px] font-[400]  leading-[20px]">Projects</span>
            </li>
          </ul>
        </div>
        <nav className="flex-1">
          {navItems.map((section) => (
            <div key={section.category} className="mb-7">
              {isOpen && (
                <h2 className="text-[14px] font-[400] leading-[20px] capitalize mb-3 px-4 text-muted-foreground">
                  {section.category}
                </h2>
              )}
              <ul>
                {section.items.map((item) => {
                  const isActive = location.pathname === item.path
                  if (item.children) {
                    return (
                      <li key={item.name} className="mb-0">
                        <button
                        aria-label="menu arrow"
                          onClick={() => setIsUserProfileOpen(!isUserProfileOpen)}
                          className={`flex items-center w-full py-[4px] rounded-lg ml-3 justify-start text-foreground hover:bg-muted`}
                        >
                          {
                            (isUserProfileOpen ? (
                              <ChevronDown className="h-[16px] w-[16px] bg-icon" />
                            ) : (
                              <ChevronRight className="h-[16px] w-[16px] bg-icon" />
                            ))}
                          <div className="flex items-center">
                            {item.icon && <item.icon className="h-[20px] w-[20px] mr-2 ml-2" />}
                            {<span className="text-[14px] font-[400] leading-[20px]">{item.name}</span>}
                          </div>

                        </button>
                        {isUserProfileOpen && (
                          <ul className="ml-[56px] mt-1">
                            {item.children.map((child) => (
                              <li key={child.name} className="mb-1" onClick={() => { if (isMobile) dispatch(toggleSidebar()) }}>
                                <Link
                                  to={child.path}
                                  className={`flex w-full hover:bg-hover  items-center py-[4px] px-[8px] text-[14px] font-[400] leading-[20px] rounded-lg ${location.pathname === child.path} text-foreground`}
                                >
                                  {child.icon && <child.icon className="h-[20px] w-[20px] mr-2" />}
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  }

                  return (
                    <li key={item.name} onClick={() => { if (isMobile) dispatch(toggleSidebar()) }} className={`px-3 mb-[2px] flex items-center ${isActive ? "rounded-[8px] text-primary-foreground active-item-bg" : "text-foreground hover:bg-muted"
                      }`}>
                      <ChevronRight className="h-[16px] w-[16px] bg-icon" />
                      <Link
                        to={item.path}
                        className={`hover:bg-hover flex w-full items-center py-[4px] px-[8px] rounded-lg`}
                      >
                        {item.icon && <item.icon className="h-[20px] w-[20px] mr-2" />}
                        {(
                          <span className={`flex-1 text-[14px] font-[400] leading-[20px]`}>{item.name}</span>
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

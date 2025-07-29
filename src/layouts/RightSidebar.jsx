import CustomHeading from "../components/CustomHeading"
import { NotificationIcon1, NotificationIcon2, NotificationIcon3, NotificationIcon4 } from '../components/commonIcons/CollectionIons.jsx'
import ActivitiesIcon1 from '../assets/svgs/activitiesIcon1.svg'
import ActivitiesIcon2 from '../assets/svgs/activitiesIcon2.svg'


const RightSidebar = () => {
  const notifications = [
    { text: "You have a bug that needs...", icon: NotificationIcon1, time: "Just now" },
    { text: "New user registered!", icon: NotificationIcon2, time: "59 minutes ago" },
    { text: "You have a bug that needs...", icon: NotificationIcon3, time: "12 hours ago" },
    { text: "Andi Lane subscribed to you", icon: NotificationIcon4, time: "Today, 11:39 AM" },
  ]

  const activities = [
    { text: "Released a new version", time: "59 minutes ago", avatar: ActivitiesIcon1 },
    { text: "Submitted a bug", time: "12 hours ago", avatar: ActivitiesIcon2 },
    { text: "Modified A dulo in Page X", time: "Today, 11:39 AM", avatar: ActivitiesIcon1 },
    { text: "Deleted a page in Project X", time: "Feb 2, 2023", avatar: ActivitiesIcon2 },
  ]

  const contacts = [
    { name: "Natali Craig", avatar: ActivitiesIcon2 },
    { name: "Drew Caso", avatar: ActivitiesIcon1 },
    { name: "Orlando Diegn", avatar: ActivitiesIcon2 },
  ]

  return (
    <div className="w-full h-full bg-background border-l border-border p-4 flex flex-col shadow-sm fixed overflow-y-auto">
      <div className="mb-6">
        <CustomHeading title="Notifications" mt="mt-3" mb="mb-5"/>
        <ul className="space-y-3">
          {notifications.map((item, index) => (
            <li key={index} className="flex items-start text-sm">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mr-3 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-foreground font-[400] text-[14px] leading-[20px]">{item.text}</p>
                <p className="text-muted-foreground font-[400] text-[12px] leading-[18px]">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>


      <div className="mb-6">
        <CustomHeading title="Activities" mt="mt-3" mb="mb-5"/>
        <ul className="space-y-3 relative">
           <div className="absolute z-[-1] left-[10px] top-0 h-[80%] border-[1px] border-r border-solid activity-line"></div>
          {activities.map((item, index) => (
            <li key={index} className="flex items-start text-sm">
              <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img
                  src={item.avatar}
                  alt="Avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-foreground font-[400] text-[14px] leading-[20px]">{item.text}</p>
                <p className="text-muted-foreground font-[400] text-[12px] leading-[18px]">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <CustomHeading title="Contacts" mt="mt-3" mb="mb-5"/>
        <ul className="space-y-3">
          {contacts.map((item, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-6 h-6 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img
                  src={item.avatar}
                  alt="Avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <p className="text-foreground font-medium">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RightSidebar

import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt, FaTasks } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import AppSideBar from "./layout/app/app-sidebar";
import Lists from "./layout/items/sidebar-components/sidebar-lists";

export default function Sidebar() {
    const navigate = useNavigate();

      const items = [
        { id: 1, icon: <FaTasks />, title: "Task", path: "/task" },
        { id: 2, icon: <FaRegCalendarAlt />, title: "Calendar", path: "/calendar" },
        { id: 3, icon: <FaNoteSticky />, title: "Sticky Wall", path: "/sticky-wall" },
      ];

      const handleTabChange = (item: any) => {
        navigate(item.path);
      };

    return (
        <>
            <AppSideBar title="menu" lists={<Lists title="Task" items={items} onItemClick={handleTabChange}/>} footer="" />
        </>
    )
}
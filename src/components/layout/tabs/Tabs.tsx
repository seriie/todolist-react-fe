import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import TabRoute from "./tab-route";
import TaskToday from "./tab-list/task-today";

export default function Tabs() {
    const [tabs, setTabs] = useState(1);
    const navigate = useNavigate();

    const items = [
        { id: 1, name: "All", path: "/task" },
        { id: 2, name: "Today", path: "/task/today" },
        { id: 3, name: "Next Week", path: "/task/next-week" },
        { id: 4, name: "Next Month", path: "/task/next-month" },
    ];

    const handleItemClick = (item: { id: number; name: string; path: string }) => {
        console.log("Tab clicked:", item);
        setTabs(item.id);

        navigate(item.path);
    };

    return (
        <>
            <div className="ml-60 mt-10">
                <TabRoute title="Task Tabs" items={items} onItemClick={handleItemClick} />
                {tabs === 1 && <TaskToday />}
                {tabs === 2 && "2"}
                {tabs === 3 && "3"}
                {tabs === 4 && "4"}
            </div>
        </>
    );
}
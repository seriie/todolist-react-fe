import { useState } from "react";
import TabRoute from "./tab-route";
import TaskToday from "./tab-list/tab-list";

export default function Tabs() {
    const [tabs, setTabs] = useState(1);

  const items = [
    { id: 1, name: "Today" },
    { id: 2, name: "Next Week" },
    { id: 3, name: "Next Month" },
  ];

  const handleItemClick = (item: { id: number; name: string }) => {
    console.log("Tab clicked:", item);
    setTabs(item.id);
  };

  return (
    <>
        <TabRoute title="Task Tabs" items={items} onItemClick={handleItemClick} />
        {tabs === 1 && <TaskToday />}
        {tabs === 2 && "2"}
        {tabs === 3 && "3"}
    </>
  );
}
import { useState } from "react";
import SideBar from "../components/layout/app/app-sidebar";
import Lists from "../components/layout/items/sidebar-lists";
import Footer from "../components/layout/items/sidebar-footer";
import Tabs from "../components/layout/tabs/Tabs";

const items = [
    {id: 1, icon: "1", title: "1"},
    {id: 2, icon: "2", title: "2"},
    {id: 3, icon: "3", title: "3"},
];


export default function MainPage() {
    const [activeTab, setActiveTab] = useState<number>(1);
    
    const handleTabChange = (item: any) => {
        setActiveTab(item.id);
    };

    return (
        <>
            <SideBar title="Menu" lists={<Lists title="Task" items={items} onItemClick={handleTabChange} />} footer={<Footer initials="" fullName="" />}>
            </SideBar>
            <div className="mt-6 ml-60">
              {activeTab === 1 && <Tabs />}
              {activeTab === 2 && <div>✅ Ini konten Tasks</div>}
              {activeTab === 3 && <div>⚙️ Ini konten Settings</div>}
            </div>
        </>
    )
}
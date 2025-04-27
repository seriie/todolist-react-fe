
interface SidebarProps {
    title: string;
    lists: React.ReactNode;
    footer: React.ReactNode;
}

import { GiHamburgerMenu } from "react-icons/gi";

export default function AppSideBar({ title, lists, footer }: SidebarProps) {
    return (
        <>
            <div className="sidebar fixed top-4 left-4 bottom-4 flex flex-col bg-slate-100 w-52 p-2 rounded-lg shadow">
                <div className="top flex justify-between items-center">
                    <h1 className="text-slate-800 text-xl font-medium">{title}</h1>
                    <GiHamburgerMenu className="text-slate-800 text-xl font-medium cursor-pointer" />
                </div>
                <div>
                    {lists}
                </div>
                <div className="justify-end flex flex-col h-full">
                    {footer}
                </div>
            </div>
        </>
    )
}
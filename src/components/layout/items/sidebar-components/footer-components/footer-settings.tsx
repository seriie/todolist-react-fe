interface SettingsProps {
    icon: React.ReactNode;
    title: string;
}

export default function Settings({ icon, title }: SettingsProps) {
    return (
        <>
            <div className="flex items-center gap-6 cursor-pointer hover:bg-slate-300 transition-all duration-100 bg-slate-200 rounded-full px-4 py-2">
                {icon}
                <p className="font-normal text-lg">{title}</p>
            </div>
        </>
    )
}
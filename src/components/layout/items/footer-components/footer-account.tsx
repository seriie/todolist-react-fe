import { FaChevronDown } from "react-icons/fa";
import { useInitials } from "../../../hooks/use-initials";

interface AccountProps {
  name: string;
  color: string;
}

export default function UserPanel({ name, color }: AccountProps) {
  const arrName = name.trim().split(" "); 
  const displayedName = arrName.length > 2 ? `${arrName[0]} ${arrName[1]}` : name;
  const getInitials = useInitials();

  return (
    <div className="flex items-center gap-3 bg-slate-200 hover:bg-slate-300 transition px-4 py-2 rounded-full cursor-pointer">
      <div
        className={`w-8 h-8 aspect-square bg-${color}-500 rounded-full flex items-center justify-center text-white text-sm font-semibold leading-none text-center`}
      >
        {getInitials(name)}
      </div>
      <span className="text-slate-800 font-medium text-sm truncate max-w-[100px]">{displayedName}</span>
      <FaChevronDown className="text-slate-600 text-xs" />
    </div>
  );
}

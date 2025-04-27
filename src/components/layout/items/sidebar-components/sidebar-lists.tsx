import { useState } from "react";

interface Item {
  id: number;
  icon: React.ReactNode;
  title: string;
}

interface ListsProps {
  title: string;
  items: Item[];
  onItemClick: (item: Item) => void;
}

export default function Lists({ title, items, onItemClick }: ListsProps) {
  const [activeId, setActiveId] = useState<number>(1);

  const handleClick = (item: Item) => {
    setActiveId(item.id);
    onItemClick(item);
  };
  return (
    <div className="p-1 max-w-md mx-auto mt-5">
      <h1 className="text-xl font-bold mb-4 text-slate-800">{title}</h1>
      <div className="grid">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className={`cursor-pointer flex transition-all duration-100 items-center p-1 rounded-md ${
              activeId === item.id
                ? "bg-slate-300"
                : "hover:bg-slate-200"
            }`}
          >
            <span className="mr-2 text-slate-800">{item.icon}</span>
            <p className="text-slate-800">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

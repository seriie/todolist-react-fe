import { useState } from "react";

interface Item {
  id: number;
  name: string;
}

interface TabsProps {
  title: string;
  items: Item[];
  onItemClick: (item: Item) => void;
}

export default function TabRoute({ title, items, onItemClick }: TabsProps) {
  const [activeTabs, setActiveTabs] = useState<number>(1);

  const handleClick = (item: Item) => {
    setActiveTabs(item.id);
    onItemClick(item);
  };

  return (
    <div>
      <h1 className="text-lg font-bold mb-2">{title}</h1>
      <div className="flex gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className={`transition-all duration-200 cursor-pointer py-1 px-4 rounded-md border ${
              activeTabs === item.id
                ? "bg-slate-800 text-slate-100 shadow-md"
                : "bg-white hover:bg-slate-100"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}